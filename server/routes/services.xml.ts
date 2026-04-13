import { siteData } from "~/data";

export default defineEventHandler((event) => {
  const baseUrl = "https://okna-brn.ru";
  const currentDate = new Date().toISOString();

  const servicesXml = siteData.services
    .map((service, index) => {
      const id = index + 1;
      const priceNumber =
        service.fromPrice === "Бесплатно"
          ? "0"
          : service.fromPrice.replace(/[^\d]/g, "") || "0";

      const title = service.title.toLowerCase();
      let category = "Общестроительные работы";

      if (title.includes("осмотр") || title.includes("консультац")) {
        category = "Консультация";
      } else if (title.includes("космет")) {
        category = "Косметический ремонт";
      } else if (title.includes("капит")) {
        category = "Капитальный ремонт";
      } else if (title.includes("кров")) {
        category = "Кровельные работы";
      } else if (title.includes("фасад") || title.includes("утепл")) {
        category = "Фасад и утепление";
      } else if (title.includes("сантех")) {
        category = "Сантехнические работы";
      } else if (title.includes("электро")) {
        category = "Электромонтаж";
      } else if (title.includes("отдел")) {
        category = "Отделочные работы";
      }

      return `    <service id="${id}">
      <name>${escapeXml(service.title)}</name>
      <category>${escapeXml(category)}</category>
      <price>${priceNumber}</price>
      <price_display>${escapeXml(service.fromPrice)}</price_display>
      <currency>RUB</currency>
      <description>${escapeXml(service.description)}</description>
      <url>${baseUrl}/#services</url>
      <availability>available</availability>
      ${service.highlight ? "<featured>true</featured>" : ""}
    </service>`;
    })
    .join("\n    \n");

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<services>
  <company>
    <name>Ремонт домов и коттеджей Барнаул</name>
    <description>Профессиональный ремонт домов и коттеджей в Барнауле и пригороде. Косметический, капитальный и фасадный ремонт под ключ.</description>
    <city>${escapeXml(siteData.city)}</city>
    <phone>${escapeXml(siteData.phone)}</phone>
    <phone2>${escapeXml(siteData.phone2)}</phone2>
    <website>${baseUrl}</website>
    <work_hours>${escapeXml(siteData.workHours)}</work_hours>
    <response_time>${escapeXml(siteData.response)}</response_time>
    <service_area>${escapeXml(siteData.address)}</service_area>
    <master>${escapeXml(siteData.masterName)}</master>
  </company>
  
  <service_list>
${servicesXml}
  </service_list>
  
  <categories>
    <category id="consultation">Консультация</category>
    <category id="cosmetic">Косметический ремонт</category>
    <category id="capital">Капитальный ремонт</category>
    <category id="roof">Кровельные работы</category>
    <category id="facade">Фасад и утепление</category>
    <category id="finish">Отделочные работы</category>
    <category id="plumbing">Сантехнические работы</category>
    <category id="electric">Электромонтаж</category>
    <category id="general">Общестроительные работы</category>
  </categories>
  
  <generated_at>${currentDate}</generated_at>
</services>`;

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
