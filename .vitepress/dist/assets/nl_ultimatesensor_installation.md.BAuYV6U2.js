import{_ as e,a,b as t,c as n}from"./chunks/connect-ha.7nXHkBlg.js";import{_ as i,c as r,o,a2 as s}from"./chunks/framework.CEgrwLex.js";const _=JSON.parse('{"title":"Installatiegids","description":"","frontmatter":{},"headers":[],"relativePath":"nl/ultimatesensor/installation.md","filePath":"nl/ultimatesensor/installation.md","lastUpdated":1723628857000}'),d={name:"nl/ultimatesensor/installation.md"},l=s('<h1 id="installatiegids" tabindex="-1">Installatiegids <a class="header-anchor" href="#installatiegids" aria-label="Permalink to &quot;Installatiegids&quot;">​</a></h1><h2 id="uitpakken" tabindex="-1">Uitpakken <a class="header-anchor" href="#uitpakken" aria-label="Permalink to &quot;Uitpakken&quot;">​</a></h2><p>Pak het pakket van de UltimateSensor uit en identificeer alle onderdelen. Je zou de volgende items moeten hebben:</p><ul><li>UltimateSensor</li><li>USB-A naar USB-C kabel (3 meter)</li><li>Voedingsadapter (Europees)</li></ul><p>Optioneel (indien geselecteerd op de afrekenpagina):</p><ul><li>Wandmontage voor apparaatschroeven</li><li>Wandmontage (voor apparaat)</li><li>Wandmontage (voor muur)</li></ul><p><img src="'+e+'" alt="Uitpakken"></p><h2 id="stap-1-voeding-via-kabel-of-poe" tabindex="-1">Stap 1: Voeding via Kabel -OF- PoE <a class="header-anchor" href="#stap-1-voeding-via-kabel-of-poe" aria-label="Permalink to &quot;Stap 1: Voeding via Kabel -OF- PoE&quot;">​</a></h2><p>Sluit de UltimateSensor aan op een stroombron met de meegeleverde USB-C kabel en voedingsadapter. Let op: het apparaat wordt geleverd met een Europese USB-voedingsadapter. Als je buiten Europa woont, ontvang je nog steeds de adapter in de doos, maar je kunt ook elke andere voedingsadapter gebruiken die je thuis hebt, zolang deze ten minste 1A levert.</p><p><strong>Let op: het apparaat van stroom voorzien via PoE of het gebruiken van een Ethernetverbinding in plaats van WiFi werkt alleen als het apparaat is voorzien van de Ethernetfirmware. Alle versies van de UltimateSensor ondersteunen PoE als de Ethernetfirmware is geïnstalleerd. Om tussen de firmwareversies te wisselen, bezoek je de <a href="./firmware">Firmware-pagina</a>.</strong></p><p><img src="'+a+'" alt="Voeding via Kabel"></p><h2 id="stap-2-verbind-met-wifi" tabindex="-1">Stap 2: Verbind met WiFi <a class="header-anchor" href="#stap-2-verbind-met-wifi" aria-label="Permalink to &quot;Stap 2: Verbind met WiFi&quot;">​</a></h2><p>Bij het opstarten zendt de UltimateSensor een WiFi-hotspot uit genaamd &#39;ultimatesensor&#39; met het wachtwoord &#39;ultimatesensor&#39;. Verbind met deze hotspot en er verschijnt een pop-upvenster waarmee je je eigen WiFi-netwerk kunt selecteren en verbinden. Zorg ervoor dat je WiFi-netwerk een 2,4 GHz netwerk is. Als de fallback-hotspot niet verschijnt, probeer dan een ander apparaat te gebruiken. Het kan tot één minuut duren voordat de WiFi zichtbaar wordt nadat het apparaat is ingeschakeld.</p><p><img src="'+t+'" alt="Verbind met WiFi"></p><p>Let op: Wanneer je verbinding maakt met het fallback-netwerk, zou de webinterface automatisch moeten openen. Als dat niet werkt, kun je ook handmatig navigeren naar <a href="http://192.168.4.1/" target="_blank" rel="noreferrer">http://192.168.4.1/</a> in je browser.</p><h2 id="stap-3-verbind-met-home-assistant" tabindex="-1">Stap 3: Verbind met Home Assistant <a class="header-anchor" href="#stap-3-verbind-met-home-assistant" aria-label="Permalink to &quot;Stap 3: Verbind met Home Assistant&quot;">​</a></h2><p>Zodra je verbonden bent met je thuis-WiFi-netwerk, zal Home Assistant de UltimateSensor automatisch detecteren onder de sectie &#39;Devices &amp; Services&#39;. Als dit niet gebeurt, moet je het apparaat handmatig toevoegen. Zoek het IP-adres van de UltimateSensor op in je router, ga dan naar Home Assistant-instellingen -&gt; Apparaten &amp; Diensten. Klik op Integratie Toevoegen, selecteer ESPHome en voer het IP-adres van het apparaat in. Het zal dan worden toegevoegd.</p><p><img src="'+n+'" alt="Verbind met Home Assistant"></p><p>Nadat je verbinding hebt gemaakt met Home Assistant, zal je apparaat zichtbaar zijn onder Home Assistant -&gt; Instellingen -&gt; Apparaten &amp; Diensten -&gt; zoek naar de ESPHome-integratie. Klik erop om je UltimateSensor te zien met al zijn entiteiten.</p><h2 id="stap-4-configureer-apparaatsensoren" tabindex="-1">Stap 4: Configureer Apparaatsensoren <a class="header-anchor" href="#stap-4-configureer-apparaatsensoren" aria-label="Permalink to &quot;Stap 4: Configureer Apparaatsensoren&quot;">​</a></h2><p>Let op: alle sensoren hebben minimaal 10 minuten nodig om op te starten, en de CO2-sensor kan tot 24 uur of enkele dagen duren. De sensoren hebben mogelijk ook kalibratie nodig; raadpleeg de <a href="./calibration">kalibratiegids</a> voor instructies.</p><p>Plaats de UltimateSensor niet in direct zonlicht om onnauwkeurige metingen te voorkomen en het risico op beschadiging van de sensor te verkleinen. We raden aan om de sensor op een kast te plaatsen of aan een muur te monteren op een hoogte van tussen de 1 en 2 meter. Lees meer in onze <a href="./usage">gebruiksgids</a></p><p>SmartHomeShop is een hobbygebaseerde webshop gewijd aan innovatieve slimme huisproducten. Let op, wij zijn niet verantwoordelijk voor de nauwkeurigheid van sensor metingen of toekomstige softwarewijzigingen door derden.</p>',23),p=[l];function m(h,g,u,b,k,c){return o(),r("div",null,p)}const w=i(d,[["render",m]]);export{_ as __pageData,w as default};
