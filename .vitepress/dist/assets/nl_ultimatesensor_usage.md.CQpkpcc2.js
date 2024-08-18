import{_ as e,c as n,o as i,a2 as t}from"./chunks/framework.CEgrwLex.js";const k=JSON.parse('{"title":"Gebruiksgids","description":"","frontmatter":{},"headers":[],"relativePath":"nl/ultimatesensor/usage.md","filePath":"nl/ultimatesensor/usage.md","lastUpdated":1723628857000}'),a={name:"nl/ultimatesensor/usage.md"},r=t('<h1 id="gebruiksgids" tabindex="-1">Gebruiksgids <a class="header-anchor" href="#gebruiksgids" aria-label="Permalink to &quot;Gebruiksgids&quot;">​</a></h1><p>De UltimateSensor stelt u in staat om verschillende omgevingsfactoren in real-time te monitoren via Home Assistant.</p><h2 id="real-time-monitoring" tabindex="-1">Real-Time Monitoring <a class="header-anchor" href="#real-time-monitoring" aria-label="Permalink to &quot;Real-Time Monitoring&quot;">​</a></h2><ol><li><strong>Open Home Assistant</strong> en navigeer naar <strong>Instellingen</strong>.</li><li>Ga naar <strong>Apparaten &amp; Diensten</strong> en zoek naar de <strong>ESPHome</strong> integratie. Open de <strong>ESPHome</strong> integratie.</li><li>Selecteer het <strong>UltimateSensor</strong> apparaat.</li><li>Hier vindt u alle entiteiten die geassocieerd zijn met de UltimateSensor, zoals CO2-niveaus, temperatuur, vochtigheid, lichtintensiteit, VOC&#39;s en ruimtebezetting.</li><li>Als u bepaalde sensoren of functies niet gebruikt, kunt u de ongebruikte entiteiten uitschakelen.</li></ol><h2 id="historische-gegevens" tabindex="-1">Historische Gegevens <a class="header-anchor" href="#historische-gegevens" aria-label="Permalink to &quot;Historische Gegevens&quot;">​</a></h2><p>Om historische milieu-gegevens te bekijken:</p><ol><li>Navigeer naar de <strong>Geschiedenis</strong> sectie in Home Assistant.</li><li>Selecteer de gewenste tijdsperiode (uur, dag, maand of jaar) en selecteer de UltimateSensor entiteit om uw gegevens over die periode te zien.</li></ol><h2 id="kalibratie" tabindex="-1">Kalibratie <a class="header-anchor" href="#kalibratie" aria-label="Permalink to &quot;Kalibratie&quot;">​</a></h2><p>Let op: alle sensoren hebben minstens 10 minuten nodig om op te starten, en de CO2-sensor kan tot 24 uur duren. De sensoren kunnen ook kalibratie nodig hebben. Volg de instructies op de <a href="./calibration">kalibratiepagina</a> om nauwkeurige metingen te garanderen.</p><h2 id="plaatsing-van-de-ultimate-sensor" tabindex="-1">Plaatsing van de Ultimate Sensor <a class="header-anchor" href="#plaatsing-van-de-ultimate-sensor" aria-label="Permalink to &quot;Plaatsing van de Ultimate Sensor&quot;">​</a></h2><p>Om nauwkeurige metingen te garanderen en schade te voorkomen:</p><ul><li>Plaats de UltimateSensor niet in direct zonlicht. Langdurige blootstelling kan ervoor zorgen dat de behuizing van de sensor geel wordt, een voorwaarde die niet onder de garantie valt.</li><li>We raden aan om de UltimateSensor op een kast te plaatsen of aan een muur te monteren op een hoogte tussen 1 en 2 meter.</li></ul><h2 id="onnauwkeurige-meting-van-sensoren" tabindex="-1">Onnauwkeurige meting van sensoren <a class="header-anchor" href="#onnauwkeurige-meting-van-sensoren" aria-label="Permalink to &quot;Onnauwkeurige meting van sensoren&quot;">​</a></h2><p>Als sensoren onnauwkeurige metingen weergeven, kunnen ze herkalibratie of aanpassingen aan hun offsets vereisen. Gedetailleerde instructies zijn te vinden op de <a href="./calibration">kalibratiepagina</a>. Let op: Wij zijn niet verantwoordelijk voor onnauwkeurigheden in metingen van sensoren van derden of voor veranderingen in het gedrag van de sensor door software-updates van derden.</p><h2 id="schakelen-tussen-wifi-en-ethernet-poe-verbinding" tabindex="-1">Schakelen tussen WiFi en Ethernet (PoE) Verbinding <a class="header-anchor" href="#schakelen-tussen-wifi-en-ethernet-poe-verbinding" aria-label="Permalink to &quot;Schakelen tussen WiFi en Ethernet (PoE) Verbinding&quot;">​</a></h2><p>De UltimateSensor ondersteunt zowel WiFi- als Ethernet (PoE)-verbindingen, wat flexibele integratie in uw slimme huis setup mogelijk maakt. Afhankelijk van uw netwerkvereisten en setup, kunt u ervoor kiezen om tussen deze verbindingssoorten te schakelen.</p><p>Om het verbindings type van uw UltimateSensor te wijzigen, moet u de firmware van het apparaat bijwerken of wijzigen:</p><ul><li>WiFi Verbinding: Zorg ervoor dat uw apparaat binnen het bereik van uw WiFi-router is. Als de UltimateSensor geen verbinding kan maken of als u de WiFi-netwerkinstellingen moet wijzigen, moet u mogelijk de WiFi-configuratie resetten of opnieuw verbinden via de fallback-hotspotmodus.</li><li>Ethernet (PoE) Verbinding: Deze optie vereist een compatibele PoE-switch of -injector. Verbind de UltimateSensor eenvoudigweg met een Ethernetkabel met uw PoE-ondersteunde netwerkapparatuur. Deze opstelling biedt niet alleen een stabiele netwerkverbinding, maar voedt ook het apparaat via dezelfde kabel. U kunt ook een normale Ethernetkabel (zonder PoE) gebruiken en het apparaat voeden met de USB-C.</li></ul><p>Voor stapsgewijze instructies over het schakelen van firmware om deze verbindingssoorten mogelijk te maken, bezoek de <a href="./firmware">firmwarepagina</a>. Deze pagina biedt gedetailleerde richtlijnen voor het configureren en updaten van de UltimateSensor om aan uw voorkeursverbindingsmethode te voldoen.</p>',19),o=[r];function s(l,d,g,u,m,h){return i(),n("div",null,o)}const c=e(a,[["render",s]]);export{k as __pageData,c as default};
