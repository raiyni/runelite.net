(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[126],{716:function(n,e){n.exports={title:"1.6.18 & 1.6.19 Releases",description:"Config panel enhancements, XP Tracker drag-and-drop reordering, Farming contract indicators",author:"Jordan",body:'<p>We\'ve added a number of enhancements to our config panel! Busy settings panels populated with many\noptions now have their options split into sections which can be expanded or contracted so you can\nquickly find the options you\'re looking for. Individual settings can also be reset to their default\nvalues by clicking on their labels and selecting the &quot;Reset&quot; menu option.</p>\n<p><img src="/img/blog/1.6.19-Release/config-panel-sections-individual-reset.png" alt="Config panel sections, resetting individual options"></p>\n<p>Additionally, you can click the dropdown button of the config panel search bar to see a list of\ncommon plugin categories to search.</p>\n<p><img src="/img/blog/1.6.19-Release/config-tag-dropdown.png" alt="Config tag categories dropdown"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/XP-Tracker" native="" rel="nofollow">XP Tracker plugin</a> now supports drag and\ndrop reordering in the panel so you can reorder your skills to your liking. Thanks to\n<a href="https://github.com/Shingyx" native="" rel="nofollow">@Shingyx</a> for this great enhancement.</p>\n<p><img src="/img/blog/1.6.19-Release/xp-tracker-reordering.gif" alt="XP tracker drag-and-drop reordering"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Time-Tracking" native="" rel="nofollow">Time Tracking plugin</a> now displays a\nfarming contract indicator next whatever crop is currently assigned as your farming contract, and can show an infobox with the crop name and state. Thanks\nto <a href="https://github.com/melkypie" native="" rel="nofollow">@melkypie</a> for this feature.</p>\n<p><img src="/img/blog/1.6.19-Release/farming-tracker-contract-indicator.png" alt="Farming time tracking contract indicator"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The Darkmeyer login screen has been added to the login screen plugin</li>\n<li><code>RuneLite</code> settings has a new option to change the window transparency</li>\n<li>A gorilla emoji has been added to the Emoji plugin</li>\n<li>Arceuus teleport portals in the POH now display portal icons using the POH plugin</li>\n<li>The NPC Indicators plugin can now prevent highlighting dead NPCs and can set a custom color to\ndead NPCs\' menu entries</li>\n<li>The Agility plugin now highlights Sepulchre stairs and platforms, and has an option to also\nhighlight swords and arrows</li>\n<li>A number of clues have been given improved hints to better display the target location</li>\n<li>The slayer plugin no longer forgets your points and streak when you have no current task</li>\n<li>The Chat Notifications plugin can now send notifications when receiving broadcast messages</li>\n<li>Quests with non-uniform completion dialogs now capture screenshots with proper file names</li>\n<li>Removing favorite worlds in the world hopper panel no longer prevents you from removing other favorited worlds</li>\n<li>The individual group loot tracker view now shows the correct total loot value</li>\n<li>A bug causing the loottracker to sometimes log Chambers of Xeric loot multiple times has been fixed</li>\n<li>Ground Item notifications no longer display the item quantity twice</li>\n<li>Fix the Grand Exchange search panel from breaking when the search dialog is cleared</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 30 contributors this release!</p>\n<pre><code>Adam (27):\n      plugin manager: chain child injectors for plugin dependencies\n      plugin manager: don\'t search child injector bindings for configs\n      hooks: remove remaining static callbacks\n      http-api: use separate class for ge trade history\n      ge plugin: submit trades even when not logged in\n      ge plugin: submit partially completed trades\n      ge controller: publish trade data to redis\n      ge plugin: include world type in trades\n      ge controller: add total to trade message\n      ge plugin: null client session id on session close\n      ge: submit spent price instead of computed per-item price\n      ge plugin: include if trade is synced on login\n      ge: include slot id\n      ge: include both delta qty and qty\n      ge plugin: ignore offers being cleared on logout\n      client: remove unnecessary annotation-providing dependencies from runtime classpath\n      Revert &quot;clanchat: Add player name to kick message (#11555)&quot;\n      npc indicators: rename highlight dead npcs to ignore dead npcs\n      npc indicators: add option to highlight dead npc menu entries\n      ge: fix computing bought/sold amount\n      pom: set release 8 on jdk9+\n      slayer plugin: fix points and streak being forgotten when restarted with no task\n      api: add spawn time to tileitem\n      agility plugin: highlight Sepulchre arrows and swords\n      loottrackerpanel: use setComponentZOrder instead of remove+add\n      config panel: add option to reset individual config options\n      attack styles: fix npe when config values are unset\n\nAdam Blaida (1):\n      Update lumbridge guide\'s position for anagram clue\n\nAleksander Birkeland (1):\n      ClientUI: Add support for changing window opacity.\n\nAlfred Ababio (1):\n      key remapper: don\'t consume keytype events when dialog is open\n\nBlackberry0Pie (1):\n      raids: Add &quot;cox&quot; to plugin tags (#11873)\n\nBrandon Austin (1):\n      metronome: Reset plugin state on shutDown (#11667)\n\nBroooklyn (9):\n      grounditems: Fix grammar in config descriptions (#11743)\n      emoji: Add gorilla emoji (#11562)\n      clues: Add missing Agility and Max cape IDs to skill challenge\n      poh: Add portal icons for Arceuus teleports\n      agility plugin: add reset option to overlay\n      util: Add removeFormattingTags text function\n      chatnotifications: Add notification for broadcast messages\n      agility plugin: highlight platforms and stairs in Sepulchre\n      RunecraftConfig: Add config section for `Show Blood Rift`\n\nCrow (1):\n      skillcalculator: Add divine potions to herblore calculator (#11676)\n\nDamen (1):\n      loot tracker: fix cox loot being double-counted after region load\n\nDominik (1):\n      Add item mapping for twisted ancestral robes (#11761)\n\nHydrox (1):\n      gpu: fix major visual glitches on linux (#11389)\n\nHydrox6 (7):\n      Add all other pearl rod animations\n      login screen: reset fire state when disabling the plugin\n      login screen: add darkmeyer login screen\n      clues: update ranging mix sherlock master challenge\n      config: add support for sections\n      add sections to various configs\n      menu entry swapper: split hardwood grove into 2 options\n\nJacob Lindelof (1):\n      antidrag: Add option to use CTRL to disable delay\n\nJesse Serrao (2):\n      npc indicators: add option to not highlight dead npcs\n      npchighlight: Recolor spell cast and &quot;use item&quot; menu entries (#11595)\n\nJordan Atwood (2):\n      infoboxmanager: Test infoboxes with same plugin and priority\n      ConfigPanel: Fix checkstyle violation\n\nMarbleTurtle (2):\n      clanchat: Add player name to kick message (#11555)\n      CrypticClue: Improve various clue hints (#11852)\n\nMax Weber (8):\n      hiscore: modify the ui on the edt only\n      IconTextField: add combobox-style suggestion dropdown\n      config: add tag suggestions\n      PluginManager: don\'t duplicate dependency plugins if they already exist\n      worldmap: add Sins of the Father start location\n      IconTextField: fire clear listener after text has been cleared\n      cache: emit null npc ids\n      rl-api/Widget: export animation and sprite tiling\n\nNathan Leba (1):\n      worldhopper: Fix unfavorite removing all favorited worlds (#11739)\n\nRangvaldr (1):\n      AgilityShortcut: Add Witchaven Dungeon agility shortcut (#11690)\n\nSomeZer0 (1):\n      boosts: Improve &quot;Boost amount threshold&quot; config description (#11744)\n\nSu-Shing Chen (1):\n      xptracker: Add drag and drop reordering for tracker panel bars (#4118)\n\nTheStonedTurtle (4):\n      item stats - Fix revitalisation potion prayer bonus\n      item stats - Fix sanfew serum restore bonuses\n      loot tracker - Fix total values when not grouping loot\n      item stats overlay: limit bank widgets to item container\n\nbranisk (2):\n      worldmap: Fix Kebos Lowlands mining site tooltip (#11748)\n      timers: remove stamina timer upon entering the Gauntlet (#11742)\n\ncyantheum (1):\n      motherlode: Fix vein overlay not displaying on upper level (#11796)\n\nemerald000 (1):\n      worldmap: Fix Asgarnian Ice Dungeon spelling (#11864)\n\njohannfrias (1):\n      screenshot: fix quest screenshot naming method (#11580)\n\nloldudester (1):\n      antidrag: Enable shift-antidrag in PvP regardless of onShiftOnly config\n\nmelkypie (7):\n      itemmanager: add worn items mapping for black graceful\n      clues: account for blisterwood flail and black graceful\n      itemskeptondeath: add dark squirrel to always lost items\n      runenergy: add black graceful\n      itemmappings: map blood fury to amulet of fury\n      worldmap: add hallowed sepulchre to minigames\n      timetracking: add farming contract functionality\n\noneilljos (1):\n      grounditems: Remove duplicate item count in notifications (#10526)\n\nwhile-loop (1):\n      chat-history: fix plugin not clearing history\n</code></pre>\n',image:"/img/blog/1.6.19-Release/config-panel-sections-individual-reset.png"}}}]);
//# sourceMappingURL=126.660d97f6.chunk.js.map