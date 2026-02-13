import { siteData } from '~/data'

export default defineEventHandler((event) => {
  const baseUrl = 'https://okna-brn.ru'
  const currentDate = new Date().toISOString().split('T')[0]
  
  // Генерируем офферы (услуги) для Яндекса
  const offersXml = siteData.services.map((service, index) => {
    const id = index + 1
    const priceNumber = service.fromPrice === 'Бесплатно' 
      ? '0' 
      : service.fromPrice.replace(/[^\d]/g, '')
    
    // Определяем categoryId на основе названия
    const title = service.title.toLowerCase()
    let categoryId = 9
    if (title.includes('консультац')) categoryId = 1
    else if (title.includes('установка') || title.includes('монтаж')) categoryId = 7
    else if (title.includes('гермет') || title.includes('утепл') || title.includes('запенив')) categoryId = 8
    else if (title.includes('регулиров')) categoryId = 4
    else if (title.includes('фурнитур') || title.includes('петель')) categoryId = 6
    else if (title.includes('замена')) categoryId = 5
    else if (title.includes('двер')) categoryId = 3
    else if (title.includes('окон')) categoryId = 2
    
    const descriptions: Record<string, string> = {
      'Консультация и выезд': 'Бесплатный выезд мастера Дмитрия для осмотра окон и балконных дверей. Консультация по всем вопросам ремонта, оценка стоимости работ на месте.',
      'Ремонт окон любой сложности': 'Комплексный ремонт пластиковых, деревянных и алюминиевых окон. Устранение продуваний, замена поврежденных элементов, восстановление всех функций. Гарантия на работы.',
      'Ремонт балконных дверей': 'Профессиональный ремонт балконных пластиковых дверей. Регулировка, замена фурнитуры и уплотнителей, устранение провисаний и заеданий механизмов.',
      'Регулировка механизмов': 'Точная регулировка всех оконных механизмов и фурнитуры. Настройка силы прижима створок, устранение люфтов, обеспечение плавности хода.',
      'Замена уплотнителя': 'Замена изношенных резиновых уплотнителей на качественные новые. Полное устранение продуваний, значительное улучшение тепло- и звукоизоляции окон.',
      'Ремонт/замена фурнитуры': 'Ремонт и замена всех видов оконной фурнитуры: ручек, замков, механизмов открывания поворотно-откидных створок. Работа с любыми брендами.',
      'Ремонт/замена петель': 'Профессиональный ремонт и замена оконных петель. Устранение провисания тяжелых створок, замена изношенных петель на усиленные.',
      'Замена стеклопакета': 'Замена разбитых, запотевших или треснувших стеклопакетов. Точный замер, подбор и профессиональная установка новых стеклопакетов.',
      'Регулировка створок': 'Профессиональная регулировка оконных створок по всем трем осям. Устранение провисаний, перекосов, улучшение плотности прижима по периметру.',
      'Установка ограничителей': 'Монтаж надежных ограничителей открывания окон. Безопасность для детей, контроль угла проветривания, защита от повреждений.',
      'Установка детских замков': 'Установка сертифицированных детских замков безопасности. Надежная защита от несанкционированного открывания окон детьми.',
      'Утепление и запенивание': 'Профессиональное утепление оконных конструкций качественной монтажной пеной. Устранение промерзаний, значительное улучшение теплоизоляции.',
      'Герметизация уличных швов': 'Герметизация наружных монтажных швов профессиональными атмосферостойкими герметиками. Защита от влаги, ветра и промерзания.',
      'Установка/замена подоконников': 'Установка и замена пластиковых подоконников любой ширины. Точная подгонка по размеру, качественная герметизация стыков.',
      'Установка/замена отливов': 'Монтаж и замена наружных отливов. Надежная защита фасада от атмосферных осадков, правильный отвод дождевой воды.',
      'Ремонт офисных дверей': 'Ремонт пластиковых и алюминиевых офисных дверей и входных групп. Замена доводчиков, ремонт замков, регулировка полотна.',
      'Иные работы с окнами': 'Другие виды работ с оконными конструкциями любого типа. Индивидуальный подход к нестандартным задачам, консультация по телефону.'
    }
    
    const description = descriptions[service.title] || service.title
    
    return `      <offer id="${id}" available="true">
        <name>${escapeXml(service.title)}</name>
        <price>${priceNumber}</price>
        <price_from>true</price_from>
        <currencyId>RUR</currencyId>
        <categoryId>${categoryId}</categoryId>
        <description>${escapeXml(description)}</description>
        <vendor>Ремонт Окон Барнаул</vendor>
        <url>${baseUrl}/#services</url>
        <param name="Город">Барнаул</param>
        <param name="Выезд мастера">Бесплатно</param>
        <param name="Гарантия">Да</param>
        <param name="Время выезда">30 минут</param>
        <param name="Опыт работы">Более 10 лет</param>
      </offer>`
  }).join('\n')
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE yml_catalog SYSTEM "shops.dtd">
<yml_catalog date="${currentDate}">
  <shop>
    <name>Ремонт Окон Барнаул - Мастер Дмитрий</name>
    <company>ИП Мастер Дмитрий</company>
    <url>${baseUrl}</url>
    <platform>Nuxt.js</platform>
    <version>1.0</version>
    
    <currencies>
      <currency id="RUR" rate="1"/>
    </currencies>
    
    <categories>
      <category id="1">Консультация и диагностика</category>
      <category id="2">Ремонт окон</category>
      <category id="3">Ремонт дверей</category>
      <category id="4">Регулировка</category>
      <category id="5">Замена комплектующих</category>
      <category id="6">Ремонт фурнитуры</category>
      <category id="7">Установка</category>
      <category id="8">Утепление</category>
      <category id="9">Прочие услуги</category>
    </categories>
    
    <delivery-options>
      <option cost="0" days="0"/>
    </delivery-options>
    
    <offers>
${offersXml}
    </offers>
  </shop>
</yml_catalog>`
  
  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=3600')
  
  return xml
})

function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

