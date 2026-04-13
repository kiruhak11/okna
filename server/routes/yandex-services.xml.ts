import { siteData } from "~/data";

export default defineEventHandler((event) => {
  const baseUrl = "https://okna-brn.ru";
  const currentDate = new Date().toISOString().split("T")[0];

  const offersXml = siteData.services
    .map((service, index) => {
      const id = index + 1;
      const priceNumber =
        service.fromPrice === "Бесплатно"
          ? "0"
          : service.fromPrice.replace(/[^\d]/g, "") || "0";

      const title = service.title.toLowerCase();
      let categoryId = 9;
      if (title.includes("осмотр") || title.includes("консультац")) {
        categoryId = 1;
      } else if (title.includes("космет")) {
        categoryId = 2;
      } else if (title.includes("капит")) {
        categoryId = 3;
      } else if (title.includes("фасад") || title.includes("утепл")) {
        categoryId = 4;
      } else if (title.includes("кров")) {
        categoryId = 5;
      } else if (title.includes("электро")) {
        categoryId = 6;
      } else if (title.includes("сантех")) {
        categoryId = 7;
      } else if (title.includes("отдел")) {
        categoryId = 8;
      }

      return `      <offer id="${id}" available="true">
        <name>${escapeXml(service.title)}</name>
        <price>${priceNumber}</price>
        <price_from>true</price_from>
        <currencyId>RUR</currencyId>
        <categoryId>${categoryId}</categoryId>
        <description>${escapeXml(service.description)}</description>
        <vendor>Ремонт домов Барнаул</vendor>
        <url>${baseUrl}/#services</url>
        <param name="Город">Барнаул</param>
        <param name="Выезд инженера">Бесплатно</param>
        <param name="Гарантия">Да</param>
        <param name="Работа по смете">Да</param>
      </offer>`;
    })
    .join("\n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="${currentDate}">
  <shop>
    <name>Ремонт домов и коттеджей Барнаул</name>
    <company>РемДом Барнаул</company>
    <url>${baseUrl}</url>
    <platform>Nuxt.js</platform>
    <version>1.0</version>
    
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    
    <categories>
      <category id="1">Осмотр и консультация</category>
      <category id="2">Косметический ремонт</category>
      <category id="3">Капитальный ремонт</category>
      <category id="4">Фасад и утепление</category>
      <category id="5">Кровельные работы</category>
      <category id="6">Электромонтажные работы</category>
      <category id="7">Сантехнические работы</category>
      <category id="8">Отделочные работы</category>
      <category id="9">Общестроительные работы</category>
    </categories>
    
    <delivery-options>
      <option cost="0" days="0"/>
    </delivery-options>
    
    <offers>
${offersXml}
    </offers>
  </shop>
</yml_catalog>`;

  setResponseHeader(event, "Content-Type", "application/xml; charset=utf-8");
  setResponseHeader(event, "Cache-Control", "public, max-age=3600");

  return xml;
});

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}
