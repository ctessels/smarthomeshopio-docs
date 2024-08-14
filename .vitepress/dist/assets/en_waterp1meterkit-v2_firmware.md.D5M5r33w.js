import{_ as e,c as t,o as r,a2 as i}from"./chunks/framework.CEgrwLex.js";const u=JSON.parse('{"title":"Firmware Guide for WaterP1MeterKit V2","description":"","frontmatter":{},"headers":[],"relativePath":"en/waterp1meterkit-v2/firmware.md","filePath":"en/waterp1meterkit-v2/firmware.md","lastUpdated":null}'),o={name:"en/waterp1meterkit-v2/firmware.md"},a=i('<h1 id="firmware-guide-for-waterp1meterkit-v2" tabindex="-1">Firmware Guide for WaterP1MeterKit V2 <a class="header-anchor" href="#firmware-guide-for-waterp1meterkit-v2" aria-label="Permalink to &quot;Firmware Guide for WaterP1MeterKit V2&quot;">​</a></h1><p>Welcome to the Firmware Guide for the WaterP1MeterKit. This document provides detailed instructions on how to update or change the firmware of your device to enhance its functionality with additional features such as Power over Ethernet (PoE) and direct Ethernet connectivity. The latest firmware .bin and .yaml files can be found on the <a href="https://github.com/smarthomeshop/waterp1meterkit" target="_blank" rel="noreferrer">corresponding GitHub page</a>.</p><h2 id="firmware-options" tabindex="-1">Firmware Options <a class="header-anchor" href="#firmware-options" aria-label="Permalink to &quot;Firmware Options&quot;">​</a></h2><p>The WaterP1MeterKit is shipped with standard WiFi firmware or Ethernet firmware. This depends on the selected option during checkout. On the product page, you can choose between the &quot;With USB-C Adapter Set&quot; and &quot;Without USB-C Adapter Set&quot; options. This choice determines which firmware is installed: With USB-C Adapter Set: The kit is configured for WiFi connectivity by default, and the Ethernet port is disabled. Without USB-C Adapter Set: The kit is configured for Ethernet (PoE) connectivity by default. If you want to switch between Wifi or Ethernet connectivity, a different firmware version needs to be flashed onto your device.</p><h3 id="switching-to-ethernet-poe-or-wifi-firmware" tabindex="-1">Switching to Ethernet (PoE) or WiFi Firmware <a class="header-anchor" href="#switching-to-ethernet-poe-or-wifi-firmware" aria-label="Permalink to &quot;Switching to Ethernet (PoE) or WiFi Firmware&quot;">​</a></h3><p>To utilize WiFi or Ethernet capabilities or PoE, you must flash the appropriate firmware onto the WaterP1MeterKit. There are two primary methods to accomplish this:</p><ol><li><p><strong>Adopting the Device in ESPHome:</strong></p><ul><li>Navigate to ESPHome in your Home Assistant setup.</li><li>Use the &quot;Adopt&quot; feature to integrate the WaterP1MeterKit.</li><li>From the ESPHome dashboard, select the WaterP1MeterKit and update the corresponding YAML configuration.</li><li>On our <a href="https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/" target="_blank" rel="noreferrer">GitHub repository here</a>, find the YAML configuration for WiFi or Ethernet. Select the file <code>waterp1meterkit-ethernet/wifi.yaml</code>. Copy the YAML code and paste this into the device configuration on your ESPHome page.</li><li>Click Deploy to flash the software OTA on the device. Note that after completion if you switch from WiFi to Ethernet, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.</li></ul></li><li><p><strong>Flashing via USB-C:</strong></p><ul><li>Connect the WaterP1MeterKit to your computer using a USB-C cable.</li><li>Download the <code>.bin</code> file from our <a href="https://github.com/smarthomeshop/waterp1meterkit/tree/main/waterp1meterkit-v2/bin-files" target="_blank" rel="noreferrer">GitHub repository here</a>.Select the appropriate version (<code>waterp1meterkit-v2-ethernet/wifiv*.bin</code>). Click the top-right Download icon to download the file (Download RAW file).</li><li>Use a flashing tool such as <a href="https://web.esphome.io/?dashboard_install" target="_blank" rel="noreferrer">ESPHome-Flasher</a> to upload the new firmware to the WaterP1MeterKit.</li><li>Follow the on-screen instructions to ensure the firmware is correctly installed.</li><li>Note that after completion if you switch from WiFi to Ethernet, the device will no longer be connected to WiFi. Please connect it with an Ethernet cable to bring it back online.</li></ul></li></ol><p><strong>Note:</strong> Flashing new firmware can potentially disrupt your device settings, or you may need to readopt the device inside Home Assistant.</p><h2 id="firmware-changelog" tabindex="-1">Firmware Changelog <a class="header-anchor" href="#firmware-changelog" aria-label="Permalink to &quot;Firmware Changelog&quot;">​</a></h2><p>Keeping your WaterP1MeterKit updated with the latest firmware is crucial for optimal performance and security. Below is the changelog detailing updates, improvements, and bug fixes for each firmware version.</p><h3 id="changelog" tabindex="-1">Changelog: <a class="header-anchor" href="#changelog" aria-label="Permalink to &quot;Changelog:&quot;">​</a></h3><ul><li><strong>Version 1.1</strong><ul><li>Date: Jul 14, 2024</li><li>Enhancements: Added platform: esphome to comply with the latest ESPHome version requirements.</li></ul></li></ul><p>For additional help, please join our <a href="https://smarthomeshop.io/discord" target="_blank" rel="noreferrer">support chat server</a> for personal support.</p>',13),n=[a];function h(l,s,c,d,p,m){return r(),t("div",null,n)}const w=e(o,[["render",h]]);export{u as __pageData,w as default};
