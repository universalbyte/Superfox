// Version:1.Y2021M07D08

// This is a PRIVACY FOCUSED prefs.js file that should work with many MOZILLA based browsers !

// Please DON'T file a bug report to MOZILLA if anything doesn't work ! Instead search in this file for a solution or contact the maintainer/developer of this prefs.js file. Thank you.

// Copy this file in your BACKUP LOCATION and ONLY edit it when it is placed in /FirefoxPortable/profile/ !

// Download a portable version of Firefox from the sources below, so that your default Firefox doesn't brake !

// WindowsOS: https://portableapps.com
// GNU/LinuxOS: https://www.mozilla.org

// You can customize ALL "//user_pref" lines to your needs and enable them by removing the 2 / in front of user_pref !

// If you have a "/FirefoxPortable/profile/invalidprefs.js" file, then something went wrong during your editing !

// GNU/LinuxOS Users: Create a "profile" folder in /FirefoxPortable/ and copy this "prefs.js" file in this folder. The PortableApps-Firefox should already have a PROFILE folder.

//*****************************************************************************************************************************************************
// START:GNU/LinuxOS Desktop Link---------- IMPORTANT ! Remove this line and the 2 slashes+spaces from all entries of your Desktop Link to make it work ! Name it "FirefoxPortable.desktop" on GNU/LinuxOS, right-click on it - Preferences - access rights - execute - check.
// [Desktop Entry]
// Terminal=false
// Icon=/path/to/FirefoxPortable/browser/chrome/icons/default/default128.png < IMPORTANT ! Edit this path !
// Name=FirefoxPortable
// Exec=/path/to/FirefoxPortable/firefox -profile /path/to/FirefoxPortable/profile/ < IMPORTANT ! Edit these paths !
// Type=Application
// END:GNU/LinuxOS Desktop Link---------- IMPORTANT ! Remove this line and the 2 slashes+spaces from all entries of your Desktop Link to make it work !
//*****************************************************************************************************************************************************

// START: Features DISABLED----------
// Connections to MOZILLA , GOOGLE , and other Servers
// Firefox Updates
// Firefox Account
// Sync
// Safe Browsing
// Geo Location
// Autoplay Audio/Video
// WebRTC
// WebGL
// Telemetry
// Pocket
// END: Features DISABLED----------

// START: Features ENABLED---------- 
// Private Browsing Mode
// DOH (DNS over HTTPS) Many Privacy Servers
// DNT (Do not track)
// END: Features ENABLED----------

// If you want more privacy...

// delete the following files:

// /FirefoxPortable/crashreporter
// /FirefoxPortable/crashreporter.ini
// /FirefoxPortable/updater
// /FirefoxPortable/updater.ini
// /FirefoxPortable/update-settings.ini
// /FirefoxPortable/browser/crashreporter-override.ini
// /FirefoxPortable/browser/features/*.xpi Choose wisely !

// remove the URL's from:

// /FirefoxPortable/application.ini
// /FirefoxPortable/platform.ini

// START: prefs.js file !
user_pref("accessibility.support.url", "");
user_pref("accessibility.typeaheadfind", false);
user_pref("app.faqURL", "");
user_pref("app.feedback.baseURL", "");
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.privacyURL", "");
user_pref("app.productInfo.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.releaseNotesURL.aboutDialog", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.support.baseURL", "");
user_pref("app.support.e10sAccessibilityUrl", "");
user_pref("app.support.inputURL", "");
user_pref("app.update.auto", false);
user_pref("app.update.autocheck", false);
user_pref("app.update.check.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.doorhanger", false);
user_pref("app.update.download.promptMaxAttempts", 0);
user_pref("app.update.elevation.promptMaxAttempts", 0);
user_pref("app.update.enabled", false);
user_pref("app.update.langpack.enabled", false);
user_pref("app.update.log", false);
user_pref("app.update.log.file", false);
user_pref("app.update.service.enabled", false);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.startup.check", false);
user_pref("app.update.url", "");
user_pref("app.update.url.details", "");
user_pref("app.update.url.manual", "");
user_pref("app.vendorURL", "");
user_pref("apz.record_checkerboarding", false);
user_pref("apz.relative-update.enabled", false);
user_pref("beacon.enabled", false);
user_pref("breakpad.reportURL", "");
//user_pref("browser.aboutConfig.showWarning", false); // If you don't want a warning on about:config, remove the 2 / in front of "user_pref"
user_pref("browser.aboutHomeSnippets.updateUrl", "");
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.bookmarks.addedImportButton", false);
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.bookmarksBar.position", "top");
user_pref("browser.cache.check_doc_frequency", 1);
user_pref("browser.cache.disk.capacity", 1024000); // 1024000=1Gigabyte
//user_pref("browser.cache.disk.enable", true); // Remove the 2 / in front of "user_pref" ONLY when you are using a "RAM-Disk" with "browser.cache.disk.parent_directory" and remove the line "user_pref("browser.privatebrowsing.autostart", true);" !
//user_pref("browser.cache.disk.parent_directory", "WindowsOS: RAM-Disk-Letter:\FirefoxPortableCache\ , GNU/LinuxOS: /dev/shm/FirefoxPortableCache/"); "browser.cache.disk.enable" MUST be set to TRUE to use this preference ! INFO: https://en.wikipedia.org/wiki/List_of_RAM_drive_software
user_pref("browser.cache.disk.smart_size.enabled", false);
user_pref("browser.cache.disk.smart_size.first_run", false);
user_pref("browser.cache.disk.smart_size.use_old_max", false);
user_pref("browser.cache.disk_cache_ssl", false);
user_pref("browser.cache.memory.capacity", -1);
user_pref("browser.cache.memory.enable", true);
user_pref("browser.cache.memory.max_entry_size", -1);
user_pref("browser.cache.offline.capacity", 0);
user_pref("browser.cache.offline.enable", false);
user_pref("browser.cache.offline.insecure.enable", false);
user_pref("browser.chrome.errorReporter.enabled", false);
user_pref("browser.chrome.errorReporter.infoURL", "");
user_pref("browser.chrome.errorReporter.submitUrl", "");
user_pref("browser.contentblocking.database.enabled", false);
user_pref("browser.contentblocking.report.cookie.url", "");
user_pref("browser.contentblocking.report.cryptominer.url", "");
user_pref("browser.contentblocking.report.endpoint_url", "");
user_pref("browser.contentblocking.report.fingerprinter.url", "");
user_pref("browser.contentblocking.report.lockwise.enabled", false);
user_pref("browser.contentblocking.report.lockwise.how_it_works.url", "");
user_pref("browser.contentblocking.report.lockwise.mobile-android.url", "");
user_pref("browser.contentblocking.report.lockwise.mobile-ios.url", "");
user_pref("browser.contentblocking.report.lockwise.url", "");
user_pref("browser.contentblocking.report.manage_devices.url", "");
user_pref("browser.contentblocking.report.mobile-android.url", "");
user_pref("browser.contentblocking.report.mobile-ios.url", "");
user_pref("browser.contentblocking.report.monitor.enabled", false);
user_pref("browser.contentblocking.report.monitor.home_page_url", "");
user_pref("browser.contentblocking.report.monitor.how_it_works.url", "");
user_pref("browser.contentblocking.report.monitor.preferences_url", "");
user_pref("browser.contentblocking.report.monitor.sign_in_url", "");
user_pref("browser.contentblocking.report.monitor.url", "");
user_pref("browser.contentblocking.report.proxy_extension.url", "");
user_pref("browser.contentblocking.report.social.url", "");
user_pref("browser.contentblocking.report.tracker.url", "");
user_pref("browser.contentblocking.report.vpn-android.url", "");
user_pref("browser.contentblocking.report.vpn-ios.url", "");
user_pref("browser.contentblocking.report.vpn-promo.url", "");
user_pref("browser.contentblocking.report.vpn.enabled", false);
user_pref("browser.contentblocking.report.vpn.url", "");
user_pref("browser.contentblocking.report.vpn_platforms", "");
user_pref("browser.contentblocking.report.vpn_regions", "");
user_pref("browser.contentblocking.reportBreakage.url", "");
user_pref("browser.contentHandlers.types.0.uri", "");
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit", false);
user_pref("browser.crashReports.unsubmittedCheck.autoSubmit2", false);
user_pref("browser.crashReports.unsubmittedCheck.enabled", false);
user_pref("browser.ctrlTab.recentlyUsedOrder", false);
user_pref("browser.customizemode.tip0.learnMoreUrl", "");
user_pref("browser.dictionaries.download.url", "");
user_pref("browser.discovery.containers.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.discovery.sites", "");
//user_pref("browser.display.background_color", "#000000"); // Shows a BLACK page in "new tabs" BUT also on some Internet Sites. Black doesn't hurt your eyes and saves energy if you are on a mobile computer using a rechargeable battery !
//user_pref("browser.display.focus_background_color", "#000000"); // Shows a BLACK page in "new tabs" BUT also on some Internet Sites. Black doesn't hurt your eyes and saves energy if you are on a mobile computer using a rechargeable battery !
user_pref("browser.display.use_document_fonts", 0);
user_pref("browser.download.autohideButton", true);
user_pref("browser.download.forbid_open_with", true);
user_pref("browser.formfill.enable", false);
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.getdevtools.url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.newtab.preload", false);
user_pref("browser.newtab.search.enabled", false);
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.cfr-fxa", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.message-groups", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.messaging-experiments", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.onboarding", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.snippets", "");
user_pref("browser.newtabpage.activity-stream.asrouter.providers.whats-new-panel", "");
user_pref("browser.newtabpage.activity-stream.asrouter.useRemoteL10n", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.newtabpage.activity-stream.default.sites", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.flight.blocks", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.personalization.modelKeys", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.rec.impressions", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.recs.personalized", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.region-basic-layout", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.region-layout-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-spocs-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-block", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.region-stories-config", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.spoc.impressions", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs-endpoint", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.spocs.personalized", false);
//user_pref("browser.newtabpage.activity-stream.feeds.asrouterfeed", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.discoverystreamfeed", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.favicon", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.newtabinit", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.places", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.prefs", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.recommendationproviderswitcher", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // "Settings - Home - Firefox Home Content - Highlights" PRIMARY
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // "Settings - Home - Firefox Home Content - Topstories" PRIMARY
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", "");
//user_pref("browser.newtabpage.activity-stream.feeds.sections", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // "Settings - Home - Firefox Home Content - Snippets" PRIMARY
//user_pref("browser.newtabpage.activity-stream.feeds.system.topsites", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.system.topstories", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.systemtick", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
//user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false); // Disables the GUI in "Settings - Home - Firefox Home Content"
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // "Settings - Home - Firefox Home Content - Top Sites" PRIMARY
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
user_pref("browser.newtabpage.activity-stream.pocketCta", "");
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // "Settings - Home - Firefox Home Content - Highlights" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // "Settings - Home - Firefox Home Content - Highlights" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // "Settings - Home - Firefox Home Content - Highlights" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // "Settings - Home - Firefox Home Content - Highlights" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0);
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSearch", false); // "Settings - Home - Firefox Home Content - Web Search" PRIMARY
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // "Settings - Home - Firefox Home Content - Top Sites" SECONDARY
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0);
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.pinned", "");
user_pref("browser.onboarding.enabled", false);
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("browser.privatebrowsing.autostart", true); // You can remove this preference when you are using "browser.cache.disk.enable" and "browser.cache.disk.parent_directory" with a RAM-Disk ! This preference (Private Browsing Mode) will delete ALL USER DATA like "Passwords, Cookies, History, Sessions" before Firefox shuts down ! // If you want the cache to be saved in your /FirefoxPortable/profile/ folder, remove this preference.
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("browser.region.network.url", "");
user_pref("browser.region.update.enabled", false);
user_pref("browser.restart.purgecache", false);
user_pref("browser.restart_menu.purgecache", false); // Settings - General - Restart Menu Item
user_pref("browser.restart_menu.requireconfirm", false); // Settings - General - Restart Menu Item
user_pref("browser.restart_menu.showpanelmenubtn", false); // Settings - General - Restart Menu Item
user_pref("browser.safebrowsing.allowOverride", false);
user_pref("browser.safebrowsing.blockedURIs.enabled", false);
user_pref("browser.safebrowsing.debug", false);
user_pref("browser.safebrowsing.downloads.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous", false);
user_pref("browser.safebrowsing.downloads.remote.block_dangerous_host", false);
user_pref("browser.safebrowsing.downloads.remote.block_potentially_unwanted", false);
user_pref("browser.safebrowsing.downloads.remote.block_uncommon", false);
user_pref("browser.safebrowsing.downloads.remote.enabled", false);
user_pref("browser.safebrowsing.downloads.remote.url", "");
user_pref("browser.safebrowsing.enabled", false); // If you want to use Safe Browsing, remove ALL "browser.safebrowsing.*" preferences to make it work !
user_pref("browser.safebrowsing.malware.enabled", false);
user_pref("browser.safebrowsing.passwords.enabled", false);
user_pref("browser.safebrowsing.phishing.enabled", false);
user_pref("browser.safebrowsing.provider.google.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google.gethashURL", "");
user_pref("browser.safebrowsing.provider.google.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google.reportURL", "");
user_pref("browser.safebrowsing.provider.google.updateURL", "");
user_pref("browser.safebrowsing.provider.google4.advisoryURL", "");
user_pref("browser.safebrowsing.provider.google4.dataSharing.enabled", false);
user_pref("browser.safebrowsing.provider.google4.dataSharingURL", "");
user_pref("browser.safebrowsing.provider.google4.gethashURL", "");
user_pref("browser.safebrowsing.provider.google4.reportMalwareMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportPhishMistakeURL", "");
user_pref("browser.safebrowsing.provider.google4.reportURL", "");
user_pref("browser.safebrowsing.provider.google4.updateURL", "");
user_pref("browser.safebrowsing.provider.mozilla.gethashURL", "");
user_pref("browser.safebrowsing.provider.mozilla.updateURL", "");
user_pref("browser.safebrowsing.reportPhishURL", "");
user_pref("browser.search.countryCode", "US"); // Fill in your 2-letter country code from: https://en.wikipedia.org/wiki/Country_code
user_pref("browser.search.geoSpecificDefaults", false);
user_pref("browser.search.geoSpecificDefaults.url", "");
user_pref("browser.search.geoip.url", "");
user_pref("browser.search.log", false);
user_pref("browser.search.order.1", "");
user_pref("browser.search.order.2", "");
user_pref("browser.search.order.3", "");
user_pref("browser.search.order.US.1", "");
user_pref("browser.search.order.US.2", "");
user_pref("browser.search.order.US.3", "");
user_pref("browser.search.region", "US"); // Fill in your 2-letter country code from: https://en.wikipedia.org/wiki/Country_code
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.update.log", false);
user_pref("browser.search.widget.inNavBar", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", false);
user_pref("browser.sessionhistory.max_entries", 2);
user_pref("browser.sessionhistory.max_total_viewers", -1);
user_pref("browser.sessionstore.enabled", false);
user_pref("browser.sessionstore.interval", 0);
user_pref("browser.sessionstore.interval.idle", 0);
user_pref("browser.sessionstore.max_resumed_crashes", 0);
user_pref("browser.sessionstore.max_serialize_back", 0);
user_pref("browser.sessionstore.max_serialize_forward", 0);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_hidden_tabs", false);
user_pref("browser.sessionstore.restore_on_demand", false);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
user_pref("browser.sessionstore.restore_tabs_lazily", false);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.resume_session_once", false);
user_pref("browser.sessionstore.resuming_after_os_restart", false);
user_pref("browser.shell.checkDefaultBrowser", false);
//user_pref("browser.startup.homepage", "https://duckduckgo.com https://startpage.com https://searx.info https://www.qwant.com https://swisscows.com https://metager.org"); // Choose 1 of these "Privacy Search Engines" to set it for the HOME icon next to the URL-Bar ! DuckDuckGo = Yahoo , Bing , Yandex Results ; Startpage = Google Results ; Searx = Bing Results ; Qwant = Bing , Google , Reddit , Wikipedia , Yahoo , Yandex Results ; Swisscows = Bing (Family-friendly) ; Metager = 50 search engines
user_pref("browser.startup.page", 0);
user_pref("browser.statusbar.mode", 1);
user_pref("browser.tabs.allowTabDetach", false); // If you want to drag'n'drop your tabs into a NEW browser window, remove this preference.
user_pref("browser.tabs.copyallurls", false);
user_pref("browser.tabs.copyurl", false);
user_pref("browser.tabs.copyurl.activetab", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.duplicateTab", false);
user_pref("browser.tabs.loadInBackground", false);
//user_pref("browser.toolbars.bookmarks.visibility", "always" OR "never"); // Edit this preference to show(always) or hide(never) the Bookmarks Toolbar !
user_pref("browser.translation.engine", "");
user_pref("browser.uitour.enabled", false);
user_pref("browser.uitour.themeOrigin", "");
user_pref("browser.uitour.url", "");
user_pref("browser.urlbar.autocomplete.enabled", false);
user_pref("browser.urlbar.autoFill", false);
user_pref("browser.urlbar.autoFill.typed", false);
user_pref("browser.urlbar.daysBeforeHidingSuggestionsPrompt", 0);
user_pref("browser.urlbar.decodeURLsOnCopy", true);
user_pref("browser.urlbar.disableExtendForTests", true);
user_pref("browser.urlbar.filter.javascript", true);
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.oneOffSearches", false);
//user_pref("browser.urlbar.openViewOnFocus", false); // This preference may be deprecated.
user_pref("browser.urlbar.searchSuggestionsChoice", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.history.onlyTyped", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.unifiedcomplete", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.xr.warning.infoURL", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("device.sensors.enabled", false);
user_pref("devtools.devedition.promo.url", "");
user_pref("devtools.devices.url", "");
user_pref("devtools.gcli.imgurUploadURL", "");
user_pref("devtools.gcli.jquerySrc", "");
user_pref("devtools.gcli.lodashSrc", "");
user_pref("devtools.gcli.underscoreSrc", "");
user_pref("devtools.performance.recording.ui-base-url", "");
user_pref("devtools.remote.adb.extensionURL", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.templatesURL", "");
user_pref("dom.battery.enabled", false);
//user_pref("dom.enable_performance", false); // Some Internet Sites may only work partially !
user_pref("dom.gamepad.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.network.enabled", false);
user_pref("dom.presentation.device.name", "");
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_pbm", true);
//user_pref("dom.storage.enabled", false); // Add-ons may not work as expected. You may not be able to login on EncryptedMail/VPN Providers. Some Internet Sites may only work partially !
//user_pref("dom.storage_access.enabled", false); // Some Internet Sites may only work partially !
user_pref("dom.vibrator.enabled", false);
//user_pref("dom.webnotifications.enabled", false); // If you don't want Website Notifications in the URL Bar, remove the 2 / in front of user_pref.
user_pref("domsecurity.httpsonly.infoURL", "");
user_pref("experiments.manifest.uri", "");
user_pref("extensions.abuseReport.amoDetailsURL", "");
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.abuseReport.url", "");
user_pref("extensions.blocklist.addonItemURL", "");
user_pref("extensions.blocklist.detailsURL", "");
user_pref("extensions.blocklist.enabled", false);
user_pref("extensions.blocklist.itemURL", "");
user_pref("extensions.blocklist.url", "");
user_pref("extensions.formautofill.addresses.enabled", false);
user_pref("extensions.formautofill.available", "off");
user_pref("extensions.formautofill.creditCards.enabled", false);
user_pref("extensions.formautofill.heuristics.enabled", false);
user_pref("extensions.geckoProfiler.symbols.url", "");
user_pref("extensions.getAddons.browseAddons", "");
user_pref("extensions.getAddons.cache.enabled", false);
user_pref("extensions.getAddons.compatOverides.url", "");
user_pref("extensions.getAddons.discovery.api_url", "");
user_pref("extensions.getAddons.get.url", "");
user_pref("extensions.getAddons.getWithPerformance.url", "");
user_pref("extensions.getAddons.langpacks.url", "");
user_pref("extensions.getAddons.link.url", "");
user_pref("extensions.getAddons.recommended.browseURL", "");
user_pref("extensions.getAddons.recommended.url", "");
user_pref("extensions.getAddons.search.browseURL", "");
user_pref("extensions.getAddons.search.url", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.getAddons.themes.browseURL", "");
user_pref("extensions.pocket.api", "");
user_pref("extensions.pocket.enabled", false);
user_pref("extensions.pocket.site", "");
user_pref("extensions.recommendations.privacyPolicyUrl", "");
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.background.url", "");
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.url", "");
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
user_pref("extensions.webextensions.identity.redirectDomain", "");
user_pref("extensions.webservice.discoverURL", "");
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
user_pref("general.smoothScroll", true);
//user_pref("general.useragent.override", ""); // Fill in a FAKE USERAGENT or search on the internet for "firefox useragentstring" !
//user_pref("general.warnOnAboutConfig", false); // This preference may be deprecated.
user_pref("geo.enabled", false); // If you want to use any MAPS Provider, remove this and/or maybe ALL "geo.*" preferences.
user_pref("geo.provider-country.network.url", "");
user_pref("geo.provider.network.url", "");
user_pref("geo.wifi.logging.enabled", false);
user_pref("geo.wifi.uri", "");
user_pref("home.sync.updateMode", 0);
user_pref("identity.fxaccounts.auth.uri", "");
user_pref("identity.fxaccounts.commands.enabled", false);
user_pref("identity.fxaccounts.enabled", false); // If you want to use a "Firefox Account", remove ALL "identity.*" and "services.sync.*" preferences !
user_pref("identity.fxaccounts.pairing.enabled", false);
user_pref("identity.fxaccounts.remote.oauth.uri", "");
user_pref("identity.fxaccounts.remote.pairing.uri", "");
user_pref("identity.fxaccounts.remote.profile.uri", "");
user_pref("identity.fxaccounts.remote.root", "");
user_pref("identity.fxaccounts.service.monitorLoginUrl", "");
user_pref("identity.fxaccounts.service.sendLoginUrl", "");
user_pref("identity.fxaccounts.toolbar.accessed", false);
user_pref("identity.fxaccounts.toolbar.enabled", false);
user_pref("identity.mobilepromo.android", "");
user_pref("identity.mobilepromo.ios", "");
user_pref("identity.sendtabpromo.url", "");
user_pref("identity.sync.tokenserver.uri", "");
user_pref("intl.accept_languages", "en-us,en");
user_pref("intl.locale.matchOS", false);
user_pref("intl.locale.os", "en-US");
user_pref("intl.locale.requested", "en-US");
//user_pref("javascript.enabled", false); // Some Internet Sites may only work partially ! But if you want a more secure browser, remove the 2 / in front of user_pref. Java Scripts on BAD websites ARE malicious !
user_pref("keyword.enabled", false);
user_pref("layers.acceleration.disabled", true);
user_pref("layers.acceleration.force-enabled", false);
user_pref("layout.spellcheckDefault", 0);
user_pref("lightweightThemes.getMoreURL", "");
user_pref("lightweightThemes.update.enabled", false);
user_pref("loop.enabled", false);
user_pref("mailnews.messageid_browser.url", "");
user_pref("mailnews.mx_service_url", "");
user_pref("media.autoplay.allow-muted", false);
user_pref("media.autoplay.block-webaudio", true); // Blocks "Internet Sites/Integrated Players" from playing Audio.
user_pref("media.autoplay.default", 5); // 0: Autoplay allowed , 1: Autoplay blocked , 2: Prompt the user , 5: BlockAll // If you want Videos to autoplay, remove ALL "media.autoplay.*" preferences.
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("media.decoder-doctor.new-issue-endpoint", "");
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.gmp-eme-adobe.autoupdate", false);
user_pref("media.gmp-gmpopenh264.autoupdate", false);
user_pref("media.gmp-gmpopenh264.enabled", false);
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.updateEnabled", false);
user_pref("media.gmp-manager.url", "");
user_pref("media.gmp-manager.url.override", "");
user_pref("media.gmp-widevinecdm.autoupdate", false);
user_pref("media.gmp-widevinecdm.enabled", false);
user_pref("media.hardwaremediakeys.enabled", false);
user_pref("media.navigator.enabled", false);
user_pref("media.navigator.video.enabled", false);
user_pref("media.peerconnection.default_iceservers", "");
user_pref("media.peerconnection.dtmf.enabled", false);
user_pref("media.peerconnection.enabled", false); // If you want to use Web-Whatsapp, Web-Skype, Google-Hangouts and so on, remove ALL "media.peerconnection.*" preferences to make it work, but this WILL leak your internal IP-Address !
user_pref("media.peerconnection.ice.default_address_only", false);
user_pref("media.peerconnection.ice.no_host", true);
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
user_pref("media.peerconnection.ice.tcp", false);
user_pref("media.peerconnection.identity.enabled", false);
user_pref("media.peerconnection.identity.timeout", 1);
user_pref("media.peerconnection.rtpsourcesapi.enabled", false);
user_pref("media.peerconnection.simulcast", false);
user_pref("media.peerconnection.turn.disable", true);
user_pref("media.peerconnection.use_document_iceservers", false);
user_pref("media.peerconnection.video.enabled", false);
user_pref("media.peerconnection.video.h264_enabled", false);
user_pref("media.peerconnection.video.vp9_enabled", false);
user_pref("media.peerconnection.video.vp9_preferred", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.DNSv4.domain", "");
user_pref("network.connectivity-service.DNSv6.domain", "");
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.connectivity-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1);
user_pref("network.cookie.lifetime.days", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
//user_pref("network.dns.echconfig.enabled", true); // instead of ESNI !
//user_pref("network.dns.use_https_rr_as_altsvc", true); // instead of ESNI !
user_pref("network.dnsCacheEntries", 0); // This Preference shows how many entries are being displayed in about:networking -DNS
user_pref("network.dnsCacheExpiration", 0); // This Preference shows how long entries are being displayed in SECONDS in about:networking -DNS
user_pref("network.dnsCacheExpirationGracePeriod", 0); // This Preference shows how long entries are being displayed in SECONDS in about:networking -DNS
user_pref("network.file.disable_unc_paths", true);
//user_pref("network.http.referer.spoofSource", true); // When you visit Websites that protect themselves with CAPTCHAS, leave this preference disabled.
//user_pref("network.http.sendRefererHeader", 0); // Some Internet Sites may only work partially !
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.predictor.cleaned-up", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.proxy.autoconfig_url", "");
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("network.proxy.no_proxies_on", "");
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.socks_version", 5);
user_pref("network.proxy.type", 0);
user_pref("network.security.esni.enabled", true);
//user_pref("network.trr.bootstrapAddress", "1.1.1.1"); // Use "1.1.1.1" ONLY, when "network.trr.resolvers"=https://cloudflare-dns.com/dns-query !
user_pref("network.trr.confirmationNS", "");
//user_pref("network.trr.excluded-domains", "localhost,local");
user_pref("network.trr.mode", 3); // 0:DOH=disabled , 2:DOH=enabled ISP-DNS=Backup , 3:DOH=enabled ISP-DNS=disabled. Change it to "2" if Firefox doesn't let you connect to the Internet ! This preference WILL ignore your "System hosts" file or enable "network.trr.excluded-domains" to let Firefox use it ! INFO: https://en.wikipedia.org/wiki/Hosts_(file)
user_pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare (PRIVACY)\", \"url\": \"https://cloudflare-dns.com/dns-query\" },{ \"name\": \"Cloudflare - Malware (PRIVACY)\", \"url\": \"https://security.cloudflare-dns.com/dns-query\" },{ \"name\": \"Cloudflare - Malware,Adult (PRIVACY)\", \"url\": \"https://family.cloudflare-dns.com/dns-query\" },{ \"name\": \"Quad9 (PRIVACY)\", \"url\": \"https://dns.quad9.net/dns-query\" },{ \"name\": \"NextDNS (PRIVACY)\", \"url\": \"https://dns.nextdns.io/\" },{ \"name\": \"CleanBrowsing - Security (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/security-filter/\" },{ \"name\": \"CleanBrowsing - Family (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/family-filter/\" },{ \"name\": \"CleanBrowsing - Adult (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/adult-filter/\" },{ \"name\": \"AdGuard (PRIVACY)\", \"url\": \"https://dns.adguard.com/dns-query\" },{ \"name\": \"AdGuard - Family (PRIVACY)\", \"url\": \"https://dns-family.adguard.com/dns-query\" },{ \"name\": \"AdGuard - NoFilter (PRIVACY)\", \"url\": \"https://dns-unfiltered.adguard.com/dns-query\" },{ \"name\": \"Digitale Gesellschaft (PRIVACY)\", \"url\": \"https://dns.digitale-gesellschaft.ch/dns-query\" },{ \"name\": \"OpenDNS (NO PRIVACY)\", \"url\": \"https://doh.opendns.com/dns-query\" },{ \"name\": \"OpenDNS - Family (NO PRIVACY)\", \"url\": \"https://doh.familyshield.opendns.com/dns-query\" }]"); // { \"name\": \"Cloudflare DNSoverTor (Experimental ! Maybe only used for TorBrowser)\", \"url\": \"https://dns4torpnlfs2ifuz2s2yf3fc7rdmsbhm6rw75euj35pac6ap25zgqad.onion/\"} // Choose 1 of these DOH-Servers in the Firefox Settings.
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
//user_pref("network.warnOnAboutNetworking", false); // If you don't want a warning on about:networking, remove the 2 / in front of user_pref.
user_pref("nglayout.initialpaint.delay", 0);
user_pref("pfs.datasource.url", "");
user_pref("pfs.filehint.url", "");
user_pref("places.history.enabled", false);
user_pref("plugin.state.java", 2);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugin.state.librhythmbox-itms-detection-plugin", 0);
user_pref("plugins.update.url", "");
user_pref("privacy.announcements.enabled", false);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.cpd.cache", true);
user_pref("privacy.cpd.cookies", true);
user_pref("privacy.cpd.downloads", true);
user_pref("privacy.cpd.formdata", true);
user_pref("privacy.cpd.history", true);
user_pref("privacy.cpd.offlineApps", true);
user_pref("privacy.cpd.openWindows", true);
user_pref("privacy.cpd.passwords", true);
user_pref("privacy.cpd.sessions", true);
user_pref("privacy.cpd.siteSettings", true);
user_pref("privacy.donottrackheader.enabled", true);
user_pref("privacy.donottrackheader.value", 1);
user_pref("privacy.item.cookies", true);
user_pref("privacy.popups.showBrowserMessage", false);
//user_pref("privacy.resistFingerprinting", true); // If you want more privacy, remove the 2 / in front of user_pref, but this will ALWAYS load Firefox in a SMALLER window like TorBrowser ! Some Internet Sites may only work partially !
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.spoof_english", 2);
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.trackingprotection.pbmode.enabled", true);
user_pref("privacy.trackingprotection.ui.enabled", true);
user_pref("privacy.userContext.enabled", false);
//user_pref("reader.parse-on-load.enabled", false); // Reader View
user_pref("security.certerrors.mitm.priming.endpoint", "");
user_pref("security.remote_settings.crlite_filters.signer", "");
user_pref("security.remote_settings.intermediates.signer", "");
user_pref("security.ssl.errorReporting.automatic", false);
user_pref("security.ssl.errorReporting.enabled", false);
user_pref("security.ssl.errorReporting.url", "");
user_pref("services.blocklist.addons.collection", "");
user_pref("services.blocklist.addons.signer", "");
user_pref("services.blocklist.gfx.collection", "");
user_pref("services.blocklist.gfx.signer", "");
user_pref("services.blocklist.onecrl.collection", "");
user_pref("services.blocklist.pinning.signer", "");
user_pref("services.blocklist.plugins.collection", "");
user_pref("services.blocklist.plugins.signer", "");
user_pref("services.blocklist.update_enabled", false);
user_pref("services.settings.security.onecrl.signer", "");
user_pref("services.settings.server", "");
user_pref("services.sync.enabled", false); // If you want to use a "Firefox Account", remove ALL "identity.*" and "services.sync.*" preferences !
user_pref("services.sync.fxa.privacyURL", "");
user_pref("services.sync.fxa.termsURL", "");
user_pref("services.sync.jpake.serverURL", "");
user_pref("services.sync.privacyURL", "");
user_pref("services.sync.serverURL", "");
user_pref("services.sync.statusURL", "");
user_pref("services.sync.syncKeyHelpURL", "");
user_pref("services.sync.termsURL", "");
user_pref("services.sync.tokenServerURI", "");
user_pref("shield.savant.enabled", false);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.generation.enabled", false);
user_pref("signon.management.page.breachAlertUrl", "");
user_pref("signon.management.page.breach-alerts.enabled", false);
user_pref("signon.management.page.faqURL", "");
user_pref("signon.management.page.feedbackURL", "");
user_pref("signon.management.page.mobileAndroidURL", "");
user_pref("signon.management.page.mobileAppleURL", "");
user_pref("signon.rememberSignons", false);
user_pref("signon.storeSignons", false);
user_pref("signon.storeWhenAutocompleteOff", false);
user_pref("startup.homepage_override_url", "");
user_pref("startup.homepage_welcome_url", "");
user_pref("startup.homepage_welcome_url.additional", "");
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.datacollection.infoURL", "");
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("toolkit.metrics.ping.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("urlclassifier.downloadAllowTable", "");
user_pref("urlclassifier.downloadBlockTable", "");
user_pref("urlclassifier.passwordAllowTable", "");
user_pref("urlclassifier.phishTable", "");
user_pref("urlclassifier.trackingTable", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("webextensions.storage.sync.serverURL", "");
user_pref("webgl.disabled", true); // 3D Rendering !
user_pref("xpinstall.signatures.devInfoURL", "");
user_pref("xpinstall.signatures.required", false);
user_pref("xpinstall.whitelist.required", true);
// END: prefs.js file !
