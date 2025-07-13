// Version:1.Y2025M07D11

// This is a PRIVACY FOCUSED prefs.js file that should work with many MOZILLA based browsers !

// Please DON'T file a bug report to MOZILLA if anything doesn't work ! Instead search in this file for a solution or contact the maintainer/developer of this prefs.js file. Thank you.

// Copy this file in your BACKUP LOCATION and ONLY edit it when it is placed in /FirefoxPortable/profile/ !

// Download a portable version of Firefox from the sources below, so that your default Firefox doesn't break !

// WindowsOS: https://portableapps.com
// GNU/Linux: https://www.mozilla.org https://ftp.mozilla.org/pub/firefox/releases/

// You can enable all "//user_pref" lines by removing the 2 / in front of user_pref !

// If you have a "/FirefoxPortable/profile/invalidprefs.js" file, then something went wrong during your editing !

// GNU/Linux Users: Create a "profile" folder in /FirefoxPortable/ and copy this "prefs.js" file in /FirefoxPortable/profile/.
// WindowsOS Users: The PortableApps-Firefox should already have a PROFILE folder.

//*****************************************************************************************************************************************************
// START:GNU/Linux Desktop Link---------- IMPORTANT ! Remove this line and the 2 slashes+spaces from all entries of your Desktop Link to make it work ! Name it "FirefoxPortable.desktop" on GNU/Linux, right-click on it - Preferences - access rights - execute - check.
// [Desktop Entry]
// Terminal=false
// Icon=/path/to/FirefoxPortable/browser/chrome/icons/default/default128.png < IMPORTANT ! Edit this path !
// Name=FirefoxPortable
// Exec=/path/to/FirefoxPortable/firefox -profile /path/to/FirefoxPortable/profile/ < IMPORTANT ! Edit these paths !
// Type=Application
// END:GNU/Linux Desktop Link---------- IMPORTANT ! Remove this line and the 2 slashes+spaces from all entries of your Desktop Link to make it work !
//*****************************************************************************************************************************************************

// Features DISABLED----------
// Connections to MOZILLA , GOOGLE , and other Servers
// Firefox Updates
// Firefox Account
// Pocket Account
// Sync
// Safe Browsing
// Permissions for: Geo Location, Camera, Microphone, Notifications, Autoplay Audio/Video, Virtual Reality
// Plugins
// WebRTC
// WebGL
// Telemetry
// Features DISABLED----------

// Features ENABLED---------- 
// Private Browsing Mode
// DOH (DNS over HTTPS) Many Privacy Servers
// DNT (Do not track)
// Block Third-Party Cookies
// Clear Private Data
// Privacy Search Engines for HOME Button
// Features ENABLED----------

// More privacy
//-------------

// delete the following files:

// /FirefoxPortable/crashreporter
// /FirefoxPortable/crashreporter.ini
// /FirefoxPortable/pingsender
// /FirefoxPortable/updater
// /FirefoxPortable/updater.ini
// /FirefoxPortable/update-settings.ini
// /FirefoxPortable/browser/crashreporter-override.ini
// /FirefoxPortable/browser/features/*.xpi Choose wisely !

// remove the URLs from:

// /FirefoxPortable/application.ini
// /FirefoxPortable/platform.ini

// START: prefs.js file !
user_pref("accessibility.support.url", "");
user_pref("accessibility.typeaheadfind", false);
user_pref("app.faqURL", "");
user_pref("app.feedback.baseURL", "");
user_pref("app.normandy.api_url", "");
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.first_run", false);
user_pref("app.normandy.optoutstudies.enabled", false);
user_pref("app.normandy.shieldLearnMoreUrl", "");
user_pref("app.privacyURL", "");
user_pref("app.productInfo.baseURL", "");
user_pref("app.releaseNotesURL", "");
user_pref("app.releaseNotesURL.aboutDialog", "");
user_pref("app.releaseNotesURL.prompt", "");
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.support.baseURL", "");
user_pref("app.support.e10sAccessibilityUrl", "");
user_pref("app.support.inputURL", "");
user_pref("app.update.auto", false);
user_pref("app.update.autocheck", false);
user_pref("app.update.channel", "");
user_pref("app.update.check.enabled", false);
user_pref("app.update.checkInstallTime", false);
user_pref("app.update.checkInstallTime.days", 0);
user_pref("app.update.doorhanger", false);
user_pref("app.update.download.promptMaxAttempts", 0);
user_pref("app.update.elevation.promptMaxAttempts", 0);
user_pref("app.update.enabled", false);
user_pref("app.update.interval", 0);
user_pref("app.update.langpack.enabled", false);
user_pref("app.update.log", false);
user_pref("app.update.log.file", false);
user_pref("app.update.promptWaitTime", 0);
user_pref("app.update.service.enabled", false);
user_pref("app.update.silent", false);
user_pref("app.update.staging.enabled", false);
user_pref("app.update.startup.check", false);
user_pref("app.update.timerFirstInterval", 0);
user_pref("app.update.timerMinimumDelay", 0);
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
user_pref("browser.backup.template.fallback-download.aurora", "");
user_pref("browser.backup.template.fallback-download.beta", "");
user_pref("browser.backup.template.fallback-download.esr", "");
user_pref("browser.backup.template.fallback-download.nightly", "");
user_pref("browser.backup.template.fallback-download.release", "");
user_pref("browser.bookmarks.addedImportButton", false);
user_pref("browser.bookmarks.max_backups", 0);
user_pref("browser.bookmarks.restore_default_bookmarks", false);
user_pref("browser.bookmarksBar.position", "top");
user_pref("browser.cache.check_doc_frequency", 1);
user_pref("browser.cache.disk.capacity", 1048576); // 1048576=1Gigabyte
//user_pref("browser.cache.disk.enable", true); // Remove the 2 / in front of "user_pref" ONLY when you are using a "RAM-Disk" with "browser.cache.disk.parent_directory" and remove the line "browser.privatebrowsing.autostart" !
//user_pref("browser.cache.disk.parent_directory", "WindowsOS: RAM-Disk-Letter:\FirefoxPortableCache\ , GNU/Linux: /dev/shm/FirefoxPortableCache/"); "browser.cache.disk.enable" MUST be set to TRUE to use this preference ! INFO: https://en.wikipedia.org/wiki/List_of_RAM_drive_software
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
//user_pref("browser.display.background_color", "#000000"); // Shows a BLACK page in "new tabs" BUT also on some websites. Black doesn't hurt your eyes and saves energy if you are on a mobile computer using a rechargeable battery !
user_pref("browser.display.document_color_use", 1);
//user_pref("browser.display.focus_background_color", "#000000"); // Shows a BLACK page in "new tabs" BUT also on some websites. Black doesn't hurt your eyes and saves energy if you are on a mobile computer using a rechargeable battery !
//user_pref("browser.display.use_document_fonts", 0); // Some websites may only work partially !
user_pref("browser.download.autohideButton", true);
user_pref("browser.download.forbid_open_with", true);
//user_pref("browser.eme.ui.enabled", false); // Disables DRM Pop-up notification on websites.
user_pref("browser.fixup.alternate.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("browser.geolocation.warning.infoURL", "");
user_pref("browser.getdevtools.url", "");
user_pref("browser.laterrun.enabled", false);
user_pref("browser.library.activity-stream.enabled", false);
user_pref("browser.link.open_newwindow", 3);
user_pref("browser.messaging-system.whatsNewPanel.enabled", false); // "What's new" disabled.
user_pref("browser.ml.chat.enabled", false);
user_pref("browser.ml.chat.shortcuts", false);
user_pref("browser.ml.modelHubRootUrl", "");
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
//user_pref("browser.newtabpage.activity-stream.discoverystream.config", ""); // Pocket Account !
user_pref("browser.newtabpage.activity-stream.discoverystream.enabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.endpointSpocsClear", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.endpoints", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.engagementLabelEnabled", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.flight.blocks", "");
user_pref("browser.newtabpage.activity-stream.discoverystream.hardcoded-basic-layout", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.isCollectionDismissible", false);
user_pref("browser.newtabpage.activity-stream.discoverystream.merino-provider.endpoint", "");
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
user_pref("browser.newtabpage.activity-stream.feeds.section.highlights", false); // "Settings - Home - Firefox Home Content - Recent activity" PRIMARY
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false); // Pocket Account ! // "Settings - Home - Firefox Home Content - Topstories" PRIMARY
//user_pref("browser.newtabpage.activity-stream.feeds.section.topstories.options", ""); // Pocket Account ! Will produce an ERROR in TERMINAL !
user_pref("browser.newtabpage.activity-stream.feeds.snippets", false); // "Settings - Home - Firefox Home Content - Snippets" PRIMARY
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false); // "Settings - Home - Firefox Home Content - Shortcuts" PRIMARY
user_pref("browser.newtabpage.activity-stream.feeds.weatherfeed", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.system.showWeather", false);
user_pref("browser.newtabpage.activity-stream.filterAdult", false);
user_pref("browser.newtabpage.activity-stream.fxaccounts.endpoint", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.handoffToAwesomebar", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.noDefaultSearchTile", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts", false);
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.havePinned", "");
user_pref("browser.newtabpage.activity-stream.improvesearch.topSiteSearchShortcuts.searchEngines", "");
user_pref("browser.newtabpage.activity-stream.pocketCta", ""); // Pocket Account !
user_pref("browser.newtabpage.activity-stream.section.highlights.includeBookmarks", false); // "Settings - Home - Firefox Home Content - Recent activity" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includeDownloads", false); // "Settings - Home - Firefox Home Content - Recent activity" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includePocket", false); // Pocket Account ! // "Settings - Home - Firefox Home Content - Recent activity" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.includeVisited", false); // "Settings - Home - Firefox Home Content - Recent activity" SECONDARY
user_pref("browser.newtabpage.activity-stream.section.highlights.rows", 0);
user_pref("browser.newtabpage.activity-stream.section.topstories.rows", 0); // Pocket Account !
user_pref("browser.newtabpage.activity-stream.sectionOrder", "");
user_pref("browser.newtabpage.activity-stream.showSearch", false); // "Settings - Home - Firefox Home Content - Web Search" PRIMARY
user_pref("browser.newtabpage.activity-stream.showSponsored", false);
user_pref("browser.newtabpage.activity-stream.showSponsoredTopSites", false); // "Settings - Home - Firefox Home Content - Shortcuts" SECONDARY
user_pref("browser.newtabpage.activity-stream.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry.ping.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion", false);
user_pref("browser.newtabpage.activity-stream.telemetry.structuredIngestion.endpoint", "");
user_pref("browser.newtabpage.activity-stream.telemetry.ut.events", false);
user_pref("browser.newtabpage.activity-stream.tippyTop.service.endpoint", "");
user_pref("browser.newtabpage.activity-stream.topSitesRows", 0); // "Settings - Home - Homepage Content - Shortcuts - Sites you save or visit"
user_pref("browser.newtabpage.activity-stream.unifiedAds.endpoint", "");
user_pref("browser.newtabpage.directory.ping", "");
user_pref("browser.newtabpage.directory.source", "");
user_pref("browser.newtabpage.enabled", false);
user_pref("browser.newtabpage.enhanced", false);
user_pref("browser.newtabpage.pinned", "");
user_pref("browser.onboarding.enabled", false);
user_pref("browser.pagethumbnails.capturing_disabled", true);
user_pref("browser.partnerlink.attributionURL", "");
user_pref("browser.ping-centre.log", false);
user_pref("browser.ping-centre.production.endpoint", "");
user_pref("browser.ping-centre.staging.endpoint", "");
user_pref("browser.ping-centre.telemetry", false);
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);
user_pref("browser.privatebrowsing.autostart", true); // You can remove this preference when you are using "browser.cache.disk.enable" and "browser.cache.disk.parent_directory" with a RAM-Disk ! This preference (Private Browsing Mode) will delete ALL USER DATA like "Passwords, Cookies, History, Sessions" when you close Firefox ! // If you want the cache to be saved in your /FirefoxPortable/profile/ folder, remove this preference.
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
user_pref("browser.search.searchEngineRemoval", "");
user_pref("browser.search.searchEnginesURL", "");
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.search.update", false);
user_pref("browser.search.update.log", false);
user_pref("browser.search.widget.inNavBar", false);
user_pref("browser.selfsupport.url", "");
user_pref("browser.send_pings", false);
user_pref("browser.send_pings.require_same_host", false);
user_pref("browser.sessionhistory.max_entries", 50); // 0="Arrow-Left" and "Arrow-Right" next to the URL-Bar is disabled.
user_pref("browser.sessionhistory.max_total_viewers", -1);
//user_pref("browser.sessionstore.collect_session_storage", false); // No INFO !
user_pref("browser.sessionstore.enabled", false);
user_pref("browser.sessionstore.interval", 0);
user_pref("browser.sessionstore.interval.idle", 0);
user_pref("browser.sessionstore.max_resumed_crashes", 0);
user_pref("browser.sessionstore.max_serialize_back", 0);
user_pref("browser.sessionstore.max_serialize_forward", 0);
user_pref("browser.sessionstore.max_tabs_undo", 0);
user_pref("browser.sessionstore.max_windows_undo", 0);
//user_pref("browser.sessionstore.platform_collection", false); // No INFO !
user_pref("browser.sessionstore.privacy_level", 2);
user_pref("browser.sessionstore.restore_hidden_tabs", false);
user_pref("browser.sessionstore.restore_on_demand", false);
user_pref("browser.sessionstore.restore_pinned_tabs_on_demand", false);
user_pref("browser.sessionstore.restore_tabs_lazily", false);
user_pref("browser.sessionstore.resume_from_crash", false);
user_pref("browser.sessionstore.resume_session_once", false);
user_pref("browser.sessionstore.resuming_after_os_restart", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.slowStartup.maxSamples", 0);
user_pref("browser.slowStartup.notificationDisabled", true);
user_pref("browser.snippets.enabled", "");
user_pref("browser.snippets.geoUrl", "");
user_pref("browser.snippets.statsUrl", "");
user_pref("browser.snippets.syncPromo.enabled", false);
user_pref("browser.snippets.updateUrl", "");
user_pref("browser.startup.blankWindow", false);
user_pref("browser.startup.couldRestoreSession.count", -1);
user_pref("browser.startup.homepage", "https://www.startpage.com"); // Choose 1 of these "Privacy Search Engines" to set it for the HOME icon next to the URL-Bar ! https://www.qwant.com https://swisscows.com https://www.mojeek.com https://duckduckgo.com https://searx.space(Multi-Instance-Provider)
user_pref("browser.startup.page", 0);
user_pref("browser.startup.preXulSkeletonUI", false);
user_pref("browser.statusbar.mode", 1);
user_pref("browser.tabs.allowTabDetach", false); // If you want to drag'n'drop your tabs into a NEW browser window, remove this preference.
//user_pref("browser.tabs.closeWindowWithLastTab", false); // Doesn't close the browser when you close all tabs.
user_pref("browser.tabs.copyallurls", false);
user_pref("browser.tabs.copyurl", false);
user_pref("browser.tabs.copyurl.activetab", false);
user_pref("browser.tabs.crashReporting.sendReport", false);
user_pref("browser.tabs.duplicateTab", false);
user_pref("browser.tabs.hoverPreview.enabled", false);
user_pref("browser.tabs.hoverPreview.showThumbnails", false);
user_pref("browser.tabs.insertRelatedAfterCurrent", false);
user_pref("browser.tabs.loadInBackground", false);
user_pref("browser.tabs.pinnedIconOnly", false);
//user_pref("browser.tabs.remote.separatedMozillaDomains", ""); // Can't install add-ons from https://addons.mozilla.org
//*user_pref("browser.tabs.toolbarposition", "" OR "topabove");
user_pref("browser.tabs.warnOnClose", true);
user_pref("browser.toolbars.bookmarks.visibility", "always"); // Edit this preference to show(always) or hide(never) the Bookmarks Toolbar !
user_pref("browser.topsites.contile.cachedTiles", "");
user_pref("browser.topsites.contile.endpoint", "");
user_pref("browser.translation.engine", "");
user_pref("browser.translations.automaticallyPopup", false);
user_pref("browser.translations.enable", false);
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
user_pref("browser.urlbar.keepPanelOpenDuringImeComposition", false);
user_pref("browser.urlbar.maxHistoricalSearchSuggestions", 0);
user_pref("browser.urlbar.maxRichResults", 0);
user_pref("browser.urlbar.merino.endpointURL", "");
user_pref("browser.urlbar.oneOffSearches", false);
user_pref("browser.urlbar.openViewOnFocus", false); // This preference may be deprecated.
//user_pref("browser.urlbar.placeholderName", ""); // "Settings - Search - Search Shortcuts - Search Engines
user_pref("browser.urlbar.placeholderName.private", "");
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.searchSuggestionsChoice", false);
user_pref("browser.urlbar.showSearchSuggestionsFirst", false);
user_pref("browser.urlbar.speculativeConnect.enabled", false);
user_pref("browser.urlbar.suggest.bookmark", false);
user_pref("browser.urlbar.suggest.clipboard", false);
user_pref("browser.urlbar.suggest.engines", false);
user_pref("browser.urlbar.suggest.history", false);
user_pref("browser.urlbar.suggest.history.onlyTyped", false);
user_pref("browser.urlbar.suggest.openpage", false);
user_pref("browser.urlbar.suggest.quickactions", false); // "Settings - Privacy & Security - Address Bar - Quick Actions
user_pref("browser.urlbar.suggest.quicksuggest", false); // "Settings - Privacy & Security - Address Bar / Firefox Suggest" PRIMARY
user_pref("browser.urlbar.suggest.quicksuggest.sponsored", false); // "Settings - Privacy & Security - Address Bar / Firefox Suggest" SECONDARY
user_pref("browser.urlbar.suggest.recentsearches", false);
user_pref("browser.urlbar.suggest.searches", false);
user_pref("browser.urlbar.suggest.topsites", false);
user_pref("browser.urlbar.suggest.trending", false);
user_pref("browser.urlbar.suggest.weather", false);
user_pref("browser.urlbar.timesBeforeHidingSuggestionsHint", 0);
user_pref("browser.urlbar.trimURLs", false);
user_pref("browser.urlbar.unifiedcomplete", false);
user_pref("browser.urlbar.update1", false);
user_pref("browser.urlbar.update1.interventions", false);
user_pref("browser.urlbar.update1.searchTips", false);
user_pref("browser.urlbar.usepreloadedtopurls.enabled", false);
user_pref("browser.urlbar.userMadeSearchSuggestionsChoice", true);
user_pref("browser.webapps.updateCheckUrl", "");
user_pref("browser.xr.warning.infoURL", "");
user_pref("captivedetect.canonicalURL", "");
user_pref("datareporting.healthreport.about.reportUrl", "");
user_pref("datareporting.healthreport.documentServerURI", "");
user_pref("datareporting.healthreport.infoURL", "");
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.policy.dataSubmissionEnabled.v2", false);
user_pref("datareporting.policy.firstRunURL", "");
user_pref("datareporting.usage.uploadEnabled", false);
user_pref("device.sensors.enabled", false);
user_pref("devtools.debugger.pending-selected-location", "");
user_pref("devtools.devedition.promo.url", "");
user_pref("devtools.devices.url", "");
user_pref("devtools.gcli.imgurUploadURL", "");
user_pref("devtools.gcli.jquerySrc", "");
user_pref("devtools.gcli.lodashSrc", "");
user_pref("devtools.gcli.underscoreSrc", "");
user_pref("devtools.performance.recording.ui-base-url", ""); // When the browser is launched from TERMINAL, it shows an error that it falls back to https://profiler.firefox.com
user_pref("devtools.remote.adb.extensionURL", "");
user_pref("devtools.webide.adbAddonURL", "");
user_pref("devtools.webide.autoinstallADBHelper", false);
user_pref("devtools.webide.templatesURL", "");
user_pref("dom.battery.enabled", false);
//user_pref("dom.block_download_insecure", false); // Remove the 2 / in front of user_pref to enable insecure downloads.
user_pref("dom.disable_beforeunload", true);
//user_pref("dom.enable_performance", false); // Some websites may only work partially !
user_pref("dom.enable_performance_navigation_timing", false);
user_pref("dom.gamepad.enabled", false);
user_pref("dom.ipc.plugins.flash.subprocess.crashreporter.enabled", false);
user_pref("dom.ipc.plugins.reportCrashURL", false);
user_pref("dom.keyboardevent.keypress.hack.dispatch_non_printable_keys", "");
user_pref("dom.keyboardevent.keypress.hack.use_legacy_keycode_and_charcode", "");
user_pref("dom.network.enabled", false);
user_pref("dom.presentation.device.name", "");
user_pref("dom.private-attribution.submission.enabled", false);
user_pref("dom.push.connection.enabled", false);
user_pref("dom.push.enabled", false);
user_pref("dom.push.serverURL", "");
user_pref("dom.push.userAgentID", "");
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_ever_enabled", true);
user_pref("dom.security.https_only_mode_ever_enabled_pbm", true);
user_pref("dom.security.https_only_mode_pbm", false);
user_pref("dom.security.https_only_mode_send_http_background_request", false);
user_pref("dom.sitepermsaddon-provider.separatedBlocklistedDomains", "");
//user_pref("dom.storage.enabled", false); // Add-ons may not work as expected. You may not be able to login on EncryptedMail/VPN Providers. Some websites may only work partially !
//user_pref("dom.storage_access.enabled", false); // Some websites may only work partially !
user_pref("dom.vibrator.enabled", false);
user_pref("dom.vibrator.max_vibrate_ms", 0);
user_pref("dom.vr.autoactivate.enabled", false);
user_pref("dom.vr.enabled", false); // Virtual Reality
user_pref("dom.vr.oculus.enabled", false);
user_pref("dom.vr.oculus.invisible.enabled", false);
user_pref("dom.vr.openvr.enabled", false);
user_pref("dom.vr.osvr.enabled", false);
user_pref("dom.vr.poseprediction.enabled", false);
user_pref("dom.vr.process.enabled", false);
user_pref("dom.vr.puppet.enabled", false);
user_pref("dom.vr.webxr.enabled", false);
user_pref("dom.webnotifications.enabled", false); // If you want Website Notifications in the URL Bar, remove this line.
user_pref("domsecurity.httpsonly.infoURL", "");
user_pref("experiments.manifest.uri", "");
user_pref("extensions.abuseReport.amoDetailsURL", "");
user_pref("extensions.abuseReport.amoFormURL", "");
user_pref("extensions.abuseReport.enabled", false);
user_pref("extensions.abuseReport.url", "");
user_pref("extensions.addonAbuseReport.url", "");
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
user_pref("extensions.getAddons.browserMappings.url", "");
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
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("extensions.pocket.api", ""); // Pocket Account !
user_pref("extensions.pocket.bffApi", ""); // Pocket Account !
user_pref("extensions.pocket.enabled", false); // Pocket Account !
user_pref("extensions.pocket.site", ""); // Pocket Account !
user_pref("extensions.recommendations.privacyPolicyUrl", "");
user_pref("extensions.recommendations.themeRecommendationUrl", "");
user_pref("extensions.screenshots.disabled", true);
user_pref("extensions.screenshots.upload-disabled", true);
user_pref("extensions.shield-recipe-client.api_url", "");
user_pref("extensions.systemAddon.update.enabled", false);
user_pref("extensions.systemAddon.update.url", "");
user_pref("extensions.unifiedExtensions.enabled", false);
user_pref("extensions.update.autoUpdateDefault", false);
user_pref("extensions.update.background.url", "");
user_pref("extensions.update.enabled", false);
user_pref("extensions.update.url", "");
user_pref("extensions.webcompat-reporter.enabled", false);
user_pref("extensions.webcompat-reporter.newIssueEndpoint", "");
user_pref("extensions.webextensions.identity.redirectDomain", "");
user_pref("extensions.webextensions.restrictedDomains", "");
user_pref("extensions.webservice.discoverURL", "");
user_pref("full-screen-api.warning.timeout", 0);
user_pref("gecko.handlerService.schemes.irc.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.ircs.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.0.uriTemplate", "");
user_pref("gecko.handlerService.schemes.mailto.1.uriTemplate", "");
user_pref("gecko.handlerService.schemes.webcal.0.uriTemplate", "");
//user_pref("general.config.filename", "");
user_pref("general.smoothScroll", true);
//user_pref("general.useragent.override", ""); // Fill in a FAKE USERAGENT or search on the internet for "firefox useragentstring" !
//user_pref("general.warnOnAboutConfig", false); // This preference may be deprecated.
user_pref("geo.enabled", false); // If you want to use any MAPS Provider, remove this and/or maybe ALL "geo.*" preferences.
user_pref("geo.provider-country.network.url", "");
user_pref("geo.provider.geoclue.always_high_accuracy", false);
user_pref("geo.provider.network.url", "");
user_pref("geo.provider.use_geoclue", false);
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
//user_pref("javascript.enabled", false); // Some websites may only work partially ! But if you want a more secure browser, remove the 2 / in front of user_pref. Java Scripts on BAD websites ARE malicious !
//user_pref("javascript.options.wasm", false); // Some websites may only work partially !
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
user_pref("media.autoplay.block-webaudio", true); // Blocks websites or "embedded Players" from playing Audio.
user_pref("media.autoplay.blocking_policy", 2);
user_pref("media.autoplay.default", 5); // 0: Autoplay allowed , 1: Autoplay blocked , 2: Prompt the user , 5: BlockAll // If you want Videos to autoplay, remove ALL "media.autoplay.*" preferences.
user_pref("media.autoplay.enabled.user-gestures-needed", false);
user_pref("media.decoder-doctor.new-issue-endpoint", "");
user_pref("media.devices.enumerate.legacy.allowlist", "");
user_pref("media.eme.enabled", false); // DRM disabled.
user_pref("media.getusermedia.browser.enabled", false);
user_pref("media.getusermedia.screensharing.enabled", false);
user_pref("media.getusermedia.audiocapture.enabled", false);
user_pref("media.gmp-eme-adobe.autoupdate", false); // Video-Plugin
user_pref("media.gmp-gmpopenh264.autoupdate", false); // Video-Plugin
user_pref("media.gmp-gmpopenh264.enabled", false); // Video-Plugin
user_pref("media.gmp-gmpopenh264.provider.enabled", false); // Video-Plugin
user_pref("media.gmp-manager.certs.1.commonName", "");
user_pref("media.gmp-manager.certs.2.commonName", "");
user_pref("media.gmp-manager.chromium-update-url", ""); // Video-Plugin
user_pref("media.gmp-manager.updateEnabled", false); // Video-Plugin
user_pref("media.gmp-manager.url", ""); // Video-Plugin
user_pref("media.gmp-manager.url.override", ""); // Video-Plugin
user_pref("media.gmp-widevinecdm.autoupdate", false); // Video-Plugin
user_pref("media.gmp-widevinecdm.enabled", false); // Video-Plugin
user_pref("media.hardwaremediakeys.enabled", false);
user_pref("media.hardware-video-decoding.enabled", true);
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
user_pref("media.videocontrols.picture-in-picture.audio-toggle.enabled", false);
user_pref("media.videocontrols.picture-in-picture.display-text-tracks.enabled", false);
user_pref("media.videocontrols.picture-in-picture.display-text-tracks.toggle.enabled", false);
user_pref("media.videocontrols.picture-in-picture.enable-when-switching-tabs.enabled", false);
user_pref("media.videocontrols.picture-in-picture.enabled", false); // Picture-in-Picture ! If you want to use it, remove ALL "media.videocontrols.picture-in-picture.*" preferences to make it work !
user_pref("media.videocontrols.picture-in-picture.improved-video-controls.enabled", false);
user_pref("media.videocontrols.picture-in-picture.keyboard-controls.enabled", false);
user_pref("media.videocontrols.picture-in-picture.respect-disablePictureInPicture", false);
user_pref("media.videocontrols.picture-in-picture.urlbar-button.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.always-show", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.enabled", false);
user_pref("media.videocontrols.picture-in-picture.video-toggle.has-used", false);
user_pref("media.video_stats.enabled", false);
user_pref("media.webspeech.synth.enabled", false);
user_pref("messaging-system.rsexperimentloader.enabled", false);
user_pref("network.allow-experiments", false);
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.DNS_HTTPS.domain", "");
user_pref("network.connectivity-service.DNSv4.domain", "");
user_pref("network.connectivity-service.DNSv6.domain", "");
user_pref("network.connectivity-service.IPv4.url", "");
user_pref("network.connectivity-service.IPv6.url", "");
user_pref("network.connectivity-service.enabled", false);
user_pref("network.cookie.cookieBehavior", 1); // 0=Accept cookies and site data , 1=Block all third-party cookies , 2=Block all cookies , 3=Block cookies from unvisited websites , 4=Block cross-site and social media trackers.
user_pref("network.cookie.lifetime.days", 1);
user_pref("network.cookie.lifetimePolicy", 2);
user_pref("network.dns.disableIPv6", true);
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
//user_pref("network.dns.echconfig.enabled", true); // instead of ESNI !
//user_pref("network.dns.use_https_rr_as_altsvc", true); // instead of ESNI !
user_pref("network.dnsCacheEntries", 0); // This Preference shows how many entries are being displayed in about:networking/DNS
user_pref("network.dnsCacheExpiration", 0); // This Preference shows how long entries are being displayed in SECONDS in about:networking/DNS
user_pref("network.dnsCacheExpirationGracePeriod", 0); // This Preference shows how long entries are being displayed in SECONDS in about:networking/DNS
user_pref("network.file.disable_unc_paths", true);
//user_pref("network.http.referer.spoofSource", true); // When you visit Websites that protect themselves with CAPTCHAS, leave this line disabled.
//user_pref("network.http.sendRefererHeader", 0); // Some websites may only work partially !
user_pref("network.http.speculative-parallel-limit", 0);
user_pref("network.manage-offline-status", false);
user_pref("network.microsoft-sso-authority-list", "");
user_pref("network.predictor.cleaned-up", true);
user_pref("network.predictor.enable-prefetch", false);
user_pref("network.predictor.enabled", false);
user_pref("network.prefetch-next", false);
user_pref("network.protocol-handler.external.ms-windows-store", false);
user_pref("network.proxy.autoconfig_url", "file:///path/to/proxy.pac");
user_pref("network.proxy.autoconfig_url.include_path", false);
user_pref("network.proxy.no_proxies_on", "");
user_pref("network.proxy.share_proxy_settings", true);
user_pref("network.proxy.socks_remote_dns", true);
user_pref("network.proxy.socks5_remote_dns", true);
user_pref("network.proxy.socks_version", 5);
user_pref("network.proxy.type", 0);
user_pref("network.security.esni.enabled", true);
user_pref("network.trr.confirmationNS", "");
user_pref("network.trr.default_provider_uri", "");
//user_pref("network.trr.exclude-etc-hosts", false);
//user_pref("network.trr.excluded-domains", "localhost,local");
user_pref("network.trr.mode", 3); // 0:DOH=disabled , 2:DOH=enabled ISP-DNS=Backup , 3:DOH=enabled ISP-DNS=disabled. This preference WILL ignore your System's "hosts" file ! Enable "network.trr.excluded-domains" to let Firefox use it ! INFO: https://en.wikipedia.org/wiki/Hosts_(file)
user_pref("network.trr.ohttp.config_uri", "");
user_pref("network.trr.ohttp.relay_uri", "");
user_pref("network.trr.ohttp.uri", "");
user_pref("network.trr.resolvers", "[{ \"name\": \"Cloudflare (PRIVACY)\", \"url\": \"https://cloudflare-dns.com/dns-query\" },{ \"name\": \"Cloudflare - Malware (PRIVACY)\", \"url\": \"https://security.cloudflare-dns.com/dns-query\" },{ \"name\": \"Cloudflare - Malware,Adult (PRIVACY)\", \"url\": \"https://family.cloudflare-dns.com/dns-query\" },{ \"name\": \"Quad9 (PRIVACY)\", \"url\": \"https://dns.quad9.net/dns-query\" },{ \"name\": \"NextDNS (PRIVACY)\", \"url\": \"https://dns.nextdns.io/\" },{ \"name\": \"NextDNS-TRR (PRIVACY ? ? ?)\", \"url\": \"https://trr.dns.nextdns.io/\" },{ \"name\": \"CleanBrowsing - Security (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/security-filter/\" },{ \"name\": \"CleanBrowsing - Family (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/family-filter/\" },{ \"name\": \"CleanBrowsing - Adult (PRIVACY)\", \"url\": \"https://doh.cleanbrowsing.org/doh/adult-filter/\" },{ \"name\": \"AdGuard (PRIVACY)\", \"url\": \"https://dns.adguard.com/dns-query\" },{ \"name\": \"AdGuard - Family (PRIVACY)\", \"url\": \"https://dns-family.adguard.com/dns-query\" },{ \"name\": \"AdGuard - NoFilter (PRIVACY)\", \"url\": \"https://dns-unfiltered.adguard.com/dns-query\" },{ \"name\": \"Digitale Gesellschaft Switzerland (PRIVACY)\", \"url\": \"https://dns.digitale-gesellschaft.ch/dns-query\" },{ \"name\": \"OpenDNS (NO PRIVACY)\", \"url\": \"https://doh.opendns.com/dns-query\" },{ \"name\": \"OpenDNS - Family (NO PRIVACY)\", \"url\": \"https://doh.familyshield.opendns.com/dns-query\" }]"); // { \"name\": \"Cloudflare DNSoverTor (Experimental ! Maybe only used for TorBrowser)\", \"url\": \"https://dns4torpnlfs2ifuz2s2yf3fc7rdmsbhm6rw75euj35pac6ap25zgqad.onion/dns-query\"} // Choose 1 of these DOH-Servers in the Firefox Settings.
user_pref("network.trr.uri", "https://cloudflare-dns.com/dns-query");
user_pref("network.trr.use_ohttp", false);
user_pref("network.trr_ui.skip_reason_learn_more_url", "");
//user_pref("network.warnOnAboutNetworking", false); // If you don't want a warning on about:networking, remove the 2 / in front of user_pref.
user_pref("nglayout.initialpaint.delay", 0);
user_pref("offline-apps.allow_by_default", false);
user_pref("pdfjs.altTextLearnMoreUrl", "");
user_pref("permissions.default.camera", 2); // Permission: Camera
user_pref("permissions.default.desktop-notification", 2); // Permission: Notifications
user_pref("permissions.default.geo", 2); // Permission: Location
user_pref("permissions.default.microphone", 2); // Permission: Microphone
user_pref("permissions.default.xr", 2); // Permission: "Virtual Reality"
user_pref("pfs.datasource.url", "");
user_pref("pfs.filehint.url", "");
user_pref("places.history.enabled", false);
user_pref("plugin.default.state", 0);
user_pref("plugin.state.java", 2);
user_pref("plugin.state.libgnome-shell-browser-plugin", 0);
user_pref("plugin.state.librhythmbox-itms-detection-plugin", 0);
user_pref("plugins.update.url", "");
user_pref("privacy.announcements.enabled", false);
user_pref("privacy.clearHistory.browsingHistoryAndDownloads", true);
user_pref("privacy.clearHistory.cache", true);
user_pref("privacy.clearHistory.cookiesAndStorage", true);
user_pref("privacy.clearHistory.formdata", true);
user_pref("privacy.clearHistory.historyFormDataAndDownloads", true);
user_pref("privacy.clearHistory.siteSettings", true);
user_pref("privacy.clearOnShutdown.cache", true);
user_pref("privacy.clearOnShutdown.cookies", true);
user_pref("privacy.clearOnShutdown.downloads", true);
user_pref("privacy.clearOnShutdown.formdata", true);
user_pref("privacy.clearOnShutdown.history", true);
user_pref("privacy.clearOnShutdown.offlineApps", true);
user_pref("privacy.clearOnShutdown.openWindows", true);
user_pref("privacy.clearOnShutdown.sessions", true);
user_pref("privacy.clearOnShutdown.siteSettings", true);
user_pref("privacy.clearOnShutdown_v2.browsingHistoryAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.cache", true);
user_pref("privacy.clearOnShutdown_v2.cookiesAndStorage", true);
user_pref("privacy.clearOnShutdown_v2.downloads", true);
user_pref("privacy.clearOnShutdown_v2.formdata", true);
user_pref("privacy.clearOnShutdown_v2.historyFormDataAndDownloads", true);
user_pref("privacy.clearOnShutdown_v2.siteSettings", true);
user_pref("privacy.clearSiteData.browsingHistoryAndDownloads", true);
user_pref("privacy.clearSiteData.cache", true);
user_pref("privacy.clearSiteData.cookiesAndStorage", true);
user_pref("privacy.clearSiteData.formdata", true);
user_pref("privacy.clearSiteData.historyFormDataAndDownloads", true);
user_pref("privacy.clearSiteData.siteSettings", true);
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
user_pref("privacy.firstparty.isolate", false);
user_pref("privacy.globalprivacycontrol.enabled", true);
user_pref("privacy.GPCheader.enabled", true);
user_pref("privacy.item.cookies", true);
user_pref("privacy.popups.showBrowserMessage", false);
//user_pref("privacy.resistFingerprinting", true); // Remove the 2 / in front of user_pref to prevent fingerprinting. This will ALWAYS load Firefox in a SMALLER window like TorBrowser ! Some websites may only work partially !
//user_pref("privacy.resistFingerprinting.letterboxing", true); // Remove the 2 / in front of user_pref to prevent fingerprinting. This will make Website-View smaller.
user_pref("privacy.restrict3rdpartystorage.partitionedHosts", "");
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
user_pref("privacy.spoof_english", 2);
user_pref("privacy.trackingprotection.emailtracking.webapp.domains", "");
user_pref("privacy.trackingprotection.introURL", "");
user_pref("privacy.userContext.enabled", false);
user_pref("reader.parse-on-load.enabled", false); // Reader View ! Remove this preference if you want to read websites easier.
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
user_pref("services.sync.addons.trustedSourceHostnames", "");
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
user_pref("sidebar.revamp", false);
user_pref("sidebar.verticalTabs", false);
user_pref("signon.autofillForms", false);
user_pref("signon.autofillForms.http", false);
user_pref("signon.firefoxRelay.base_url", "");
user_pref("signon.firefoxRelay.feature", "disabled");
user_pref("signon.firefoxRelay.learn_more_url", "");
user_pref("signon.firefoxRelay.manage_url", "");
user_pref("signon.firefoxRelay.privacy_policy_url", "");
user_pref("signon.firefoxRelay.terms_of_service_url", "");
user_pref("signon.generation.enabled", false);
user_pref("signon.icecatRelay.base_url", "");
user_pref("signon.icecatRelay.feature", "disabled");
user_pref("signon.icecatRelay.learn_more_url", "");
user_pref("signon.icecatRelay.manage_url", "");
user_pref("signon.icecatRelay.privacy_policy_url", "");
user_pref("signon.icecatRelay.terms_of_service_url", "");
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
user_pref("svg.context-properties.content.allowed-domains", "");
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.crashreporter.infoURL", "");
user_pref("toolkit.datacollection.infoURL", "");
//user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true); // This Preference will use a "/FirefoxPortable/profile/chrome/userChrome.css" file. Visit https://www.userchrome.org or search the Internet for "firefox userchrome.css".
user_pref("toolkit.shopping.ohttpConfigURL", "");
user_pref("toolkit.shopping.ohttpRelayURL", "");
user_pref("toolkit.metrics.ping.enabled", false);
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.cachedClientID", "");
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.telemetry.dap.helper.url", "");
user_pref("toolkit.telemetry.dap.leader.url", "");
user_pref("toolkit.telemetry.dap_enabled", false);
user_pref("toolkit.telemetry.dap_helper", "");
user_pref("toolkit.telemetry.dap_leader", "");
user_pref("toolkit.telemetry.dap_task1_enabled", false);
user_pref("toolkit.telemetry.ecosystemtelemetry.enabled", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.hybridContent.enabled", false);
user_pref("toolkit.telemetry.infoURL", "");
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.previousBuildID", "");
user_pref("toolkit.telemetry.reportingpolicy.firstRun", false);
user_pref("toolkit.telemetry.server", "");
user_pref("toolkit.telemetry.server_owner", "");
user_pref("toolkit.telemetry.shutdownPingSender.backgroundtask.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabledFirstSession", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("ui.systemUsesDarkTheme", 0);
user_pref("urlclassifier.downloadAllowTable", "");
user_pref("urlclassifier.downloadBlockTable", "");
user_pref("urlclassifier.passwordAllowTable", "");
user_pref("urlclassifier.phishTable", "");
user_pref("urlclassifier.trackingAnnotationSkipURLs", "");
user_pref("urlclassifier.trackingTable", "");
user_pref("webchannel.allowObject.urlWhitelist", "");
user_pref("webextensions.storage.sync.serverURL", "");
user_pref("webgl.disabled", true); // WebGL ! 3D Rendering ! Some MAPS or other WebGL based websites may not work !
user_pref("webgl.enable-debug-renderer-info", false); // Some MAPS or other WebGL based websites may not work !
user_pref("webgl.enable-webgl2", false); // Some MAPS or other WebGL based websites may not work !
user_pref("webgl.min_capability_mode", true); // Some MAPS or other WebGL based websites may not work !
user_pref("widget.gtk.overlay-scrollbars.enabled", false);
user_pref("xpinstall.signatures.devInfoURL", "");
user_pref("xpinstall.signatures.required", false);
user_pref("xpinstall.whitelist.required", true);
// END: prefs.js file !
