import { siteData } from '~/data'

export default defineEventHandler((event) => {
  const baseUrl = 'https://okna-barnaul.ru'
  const currentDate = new Date().toISOString()
  
  // Генерируем XML для каждой услуги
  const servicesXml = siteData.services.map((service, index) => {
    const id = index + 1
    const priceNumber = service.fromPrice === 'Бесплатно' 
      ? '0' 
      : service.fromPrice.replace(/[^\d]/g, '')
    
    // Определяем категорию на основе названия услуги
    let category = 'Прочие услуги'
    if (service.title.includes('Консультация')) category = 'Консультация'
    else if (service.title.includes('окон')) category = 'Ремонт окон'
    else if (service.title.includes('дверей') || service.title.includes('дверь')) category = 'Ремонт дверей'
    else if (service.title.includes('Регулировка')) category = 'Регулировка'
    else if (service.title.includes('Замена')) category = 'Замена комплектующих'
    else if (service.title.includes('фурнитур') || service.title.includes('петель')) category = 'Ремонт фурнитуры'
    else if (service.title.includes('Установка')) category = 'Установка'
    else if (service.title.includes('Утепление') || service.title.includes('Герметизация')) category = 'Утепление'
    
    // Генерируем описание на основе названия
    const descriptions: Record<string, string> = {
      'Консультация и выезд': 'Бесплатный выезд мастера для осмотра и консультации. Оценка работ на месте, рекомендации по ремонту.',
      'Ремонт окон любой сложности': 'Комплексный ремонт пластиковых и деревянных окон любой сложности. Устранение продуваний, замена поврежденных элементов.',
      'Ремонт балконных дверей': 'Ремонт балконных пластиковых дверей. Регулировка, замена фурнитуры, устранение провисаний.',
      'Регулировка механизмов': 'Профессиональная регулировка оконных механизмов и фурнитуры. Настройка прижима, устранение люфтов.',
      'Замена уплотнителя': 'Замена резиновых уплотнителей на окнах. Устранение продуваний, улучшение тепло- и звукоизоляции.',
      'Ремонт/замена фурнитуры': 'Ремонт и замена оконной фурнитуры: ручки, замки, механизмы открывания.',
      'Ремонт/замена петель': 'Ремонт и замена оконных петель. Устранение провисания створок.',
      'Замена стеклопакета': 'Замена разбитых или запотевших стеклопакетов с гарантией качества.',
      'Регулировка створок': 'Точная регулировка оконных створок по всем осям. Устранение провисаний и перекосов.',
      'Установка ограничителей': 'Установка ограничителей открывания окон. Безопасность для детей.',
      'Установка детских замков': 'Установка детских замков безопасности на окна.',
      'Утепление и запенивание': 'Профессиональное утепление окон монтажной пеной.',
      'Герметизация уличных швов': 'Герметизация наружных швов качественными герметиками.',
      'Установка/замена подоконников': 'Установка и замена пластиковых подоконников с профессиональным монтажом.',
      'Установка/замена отливов': 'Установка и замена наружных отливов. Защита фасада от осадков.',
      'Ремонт офисных дверей': 'Ремонт пластиковых и алюминиевых офисных дверей.',
      'Иные работы с окнами': 'Другие виды работ с пластиковыми и деревянными окнами.'
    }
    
    const description = descriptions[service.title] || service.title
    const featured = service.highlight ? 'true' : 'false'
    
    return `    <service id="${id}">
      <name>${escapeXml(service.title)}</name>
      <category>${escapeXml(category)}</category>
      <price>${priceNumber}</price>
      <price_display>${escapeXml(service.fromPrice)}</price_display>
      <currency>RUB</currency>
      <description>${escapeXml(description)}</description>
      <url>${baseUrl}/#services</url>
      <availability>available</availability>
      ${service.highlight ? '<featured>true</featured>' : ''}
    </service>`
  }).join('\n    \n')
  
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<services>
  <company>
    <name>Ремонт Окон Барнаул</name>
    <description>Профессиональный ремонт и обслуживание пластиковых и деревянных окон в Барнауле. Выезд мастера в день обращения.</description>
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
    <category id="repair">Ремонт окон</category>
    <category id="doors">Ремонт дверей</category>
    <category id="adjustment">Регулировка</category>
    <category id="replacement">Замена комплектующих</category>
    <category id="hardware">Ремонт фурнитуры</category>
    <category id="installation">Установка</category>
    <category id="insulation">Утепление</category>
    <category id="other">Прочие услуги</category>
  </categories>
  
  <generated_at>${currentDate}</generated_at>
</services>`
  
  // Устанавливаем правильные заголовки для XML
  setResponseHeader(event, 'Content-Type', 'application/xml; charset=utf-8')
  setResponseHeader(event, 'Cache-Control', 'public, max-age=3600') // Кешируем на 1 час
  
  return xml
})

// Функция для экранирования специальных символов XML
function escapeXml(unsafe: string): string {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

