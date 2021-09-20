(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[131],{721:function(e,n){e.exports={title:"1.6.24 & 1.6.25 Release",description:"Zalcano plugin, inventory tag underlines, GPU anisotropic filtering, potion duration tooltips, and mining session overlay",author:"Jordan",body:'<p>We have added a <a href="https://github.com/runelite/runelite/wiki/Zalcano" native="" rel="nofollow">Zalcano plugin</a> which offers\nseveral useful arrow highlights and overlays. Thanks to <a href="https://github.com/hex-agon" native="" rel="nofollow">@Hexagon</a> for\nthis contribution!</p>\n<p><img src="/img/blog/1.6.25-Release/zalcano-hint-arrow.png" alt="Weakened Zalcano with a hint arrow above her"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Inventory-Tags" native="" rel="nofollow">Inventory Tags plugin</a> can now\ndraw an underline as a more subtle option for your tagged items. Thanks to\n<a href="https://github.com/jualkaup" native="" rel="nofollow">@jualkaup</a> for this feature.</p>\n<p><img src="/img/blog/1.6.25-Release/inventory-tag-underline.png" alt="Inventory tag underlines"></p>\n<p>We have added an anisotropic filtering setting to the <a href="https://github.com/runelite/runelite/wiki/GPU" native="" rel="nofollow">GPU\nplugin</a> that makes textures appear smoother and have\nfewer &quot;jagged&quot; and sharp pixels, especially when zoomed out, as shown in the comparison table below.\nThanks to <a href="https://github.com/pacf531" native="" rel="nofollow">@pacf531</a> and <a href="https://github.com/Toocanzs" native="" rel="nofollow">@Toocanzs</a> for\nmaking this feature happen.</p>\n<table>\n<thead>\n<tr>\n<th style="text-align:center">GPU anisotropic filtering enabled</th>\n<th style="text-align:center">GPU anisotropic filtering disabled</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td style="text-align:center"><video src="/img/blog/1.6.25-Release/gpu-anisotropic-enabled.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.6.25-Release/gpu-anisotropic-enabled.mp4" download>download the file</a> instead.\nHere is a description of the content: GPU plugin with anisotropic filtering enabled\n</video></td>\n<td style="text-align:center"><video src="/img/blog/1.6.25-Release/gpu-anisotropic-disabled.mp4" autoPlay=true muted=true loop=true playsInline=true preload="auto">\nYour browser does not support playing HTML5 video.\nYou can <a href="/img/blog/1.6.25-Release/gpu-anisotropic-disabled.mp4" download>download the file</a> instead.\nHere is a description of the content: GPU plugin with anisotropic filtering disabled\n</video></td>\n</tr>\n</tbody>\n</table>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Item-Stats" native="" rel="nofollow">Item Stats plugin</a> now displays a tooltip\nfor duration effects granted by antipoison potions, anti-fire potions, and the like. Thanks to\n<a href="https://github.com/MMagicala" native="" rel="nofollow">@MMagicala</a> for this enhancement.</p>\n<p><img src="/img/blog/1.6.25-Release/potion-duration-tooltips.png" alt="Potion duration tooltips"></p>\n<p>The <a href="https://github.com/runelite/runelite/wiki/Mining" native="" rel="nofollow">Mining plugin</a> now displays a session overlay\nthat counts ores mined per hour and throughout the session, along with an indicator of whether you\nare currently mining. Thanks to <a href="https://github.com/JZomerlei" native="" rel="nofollow">@JZomerlei</a> for this addition.</p>\n<p><img src="/img/blog/1.6.25-Release/mining-session.png" alt="Mining session overlay while actively mining">\n<img src="/img/blog/1.6.25-Release/mining-session-not-mining.png" alt="Mining session overlay when not actively mining"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Timers" native="" rel="nofollow">Timers plugin</a> now shows an infobox with\nyour elapsed Fight Cave or Inferno time</li>\n<li>Interacting with <a href="https://github.com/runelite/runelite/wiki/Bank-Tags#using-tag-tabs" native="" rel="nofollow">Bank Tag\ntabs</a> no longer clears your\nactive bank search</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Inventory-Grid" native="" rel="nofollow">Inventory Grid plugin</a> now operates\nwhile viewing your bank</li>\n<li>An issue causing Discord party invites to fail has been fixed</li>\n<li>Tooltip labels have been added to clue scroll and minigame entries in the <a href="https://github.com/runelite/runelite/wiki/HiScore" native="" rel="nofollow">HiScore\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Agility" native="" rel="nofollow">Agility plugin</a> now estimates your laps\nper hour more accurately</li>\n<li>Some Godwars Dungeon obstacles and the Prifddinas portals are now highlighted properly by the\n<a href="https://github.com/runelite/runelite/wiki/Agility" native="" rel="nofollow">Agility plugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Clue-Scroll" native="" rel="nofollow">Clue Scroll plugin</a> now shows a\nlocation description for map clues</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Cannon" native="" rel="nofollow">Cannon plugin</a> now suggests a spot for\nBloodvelds in the Meiyerditch Laboratories</li>\n<li>You can now look up your Nightmare kill count with the <a href="https://github.com/runelite/runelite/wiki/Chat-Commands" native="" rel="nofollow">Chat Commands\nplugin</a> using the <code>nm</code>, <code>tnm</code>, and\n<code>nmare</code> abbreviations</li>\n<li>Teleport tablets are now labeled by the <a href="https://github.com/runelite/runelite/wiki/Item-Identification" native="" rel="nofollow">Item Identification\nplugin</a></li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Nightmare-Zone" native="" rel="nofollow">Nightmare Zone plugin</a> can now send\nnotifications prior to your overload boosts expiring</li>\n<li>A bug which could cause flash notifications to become stuck has been fixed</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Menu-Entry-Swapper" native="" rel="nofollow">Menu Entry Swapper plugin</a> now\nswaps the &quot;Collect&quot; option on Advisor Ghrim, the various quick-travel menu entries on Rellekka\nNPCs, and prefers the &quot;Last-destination&quot; option when using the Zanaris fairy ring</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Cooking" native="" rel="nofollow">Cooking plugin</a> now updates its session\ncounter when drying sinew</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/Prayer" native="" rel="nofollow">Prayer plugin</a> now shows a sensible\nduration text for durations greater than 1 hour</li>\n<li>Iorwerth Warriors are now understood to be elves by the <a href="https://github.com/runelite/runelite/wiki/Slayer" native="" rel="nofollow">Slayer\nplugin</a></li>\n<li>XD and pleading emojis have been added to the <a href="https://github.com/runelite/runelite/wiki/Emojis" native="" rel="nofollow">Emojis\nplugin</a> with the <code>Xd</code> and <code>(n_n)</code> triggers,\nrespectively</li>\n<li>Vyres have been added to the <a href="https://github.com/runelite/runelite/wiki/Skill-Calculator" native="" rel="nofollow">Thieving skill\ncalculator</a></li>\n<li>A bug where Chambers of Xeric personal best times were not recorded for certain team sizes has\nbeen fixed</li>\n<li>The <a href="https://github.com/runelite/runelite/wiki/World-Map" native="" rel="nofollow">World Map plugin</a> no longer shows a\nmisplaced quest icon for the Misthalin Mystery quest</li>\n<li>Bird nests and the opening of grubby, stone, Dorgesh-Kaan, and H.A.M. chests are now tracked by\nthe <a href="https://github.com/runelite/runelite/wiki/Loot-Tracker" native="" rel="nofollow">Loot Tracker plugin</a></li>\n</ul>\n<p>Enjoy!</p>\n<p>- Jordan</p>\n<h3>New commits</h3>\n<p>We had 32 contributors this release!</p>\n<pre><code>Adam (26):\n      tagtabs: split tag search from bank search\n      tagtabs: close tab when clicking on main bank tab\n      tagtabs: show tab separators in tag tabs\n      tagtabs: fix clearing bank search when opening tags\n      clientui: reset frame position in safe mode\n      clientui: use contains instead of intersects for screen bounds checking\n      inventory-grid: show grid when viewing bank\n      mouse highlight: fix interface tooltips option\n      menu swapper: update jewellery box clan wars swap to ferox enclave\n      item stats: add duration tooltips to potions\n      api: add GraphicsObject finished()\n      slayer plugin: support new Turael task completion message\n      mining plugin: rename MiningOverlay to MiningRocksOverlay\n      mining plugin: add session stats\n      loot tracker service: use bigint for kill id\n      gpu plugin: initialize aa fbo handles\n      xp globes: fix timing out xp globes after no xp is gained\n      timers plugin: add fight cave and inferno timers\n      xp globes: remove double globeCache index\n      http-service: increase loot tracker retention to 90 days\n      discord: remove DiscordReplyType\n      discord: add logging to Discord rpc callbacks\n      party service: prioritize user join handler over plugins\n      hiscore panel: fix lookup to run on edt\n      hiscore panel: add names to skill label tooltips\n      Add Leagues hiscores and update icons for Trailblazer League\n\nArman Rafian (1):\n      agility: Improve laps per hour calculation accuracy (#12246)\n\nBlackberry0Pie (1):\n      fairyring: Add Falo the bard tag to Sinclair Mansion fairy ring (#12030)\n\nBroooklyn (11):\n      agility: fix Sara GWD obstacle highlights\n      agility: add GWD crack obstacle highlight\n      clues: fix apostrophe positioning for Seers\' Village\n      clues: add descriptions for MapClues\n      clues: update BeginnerMapClue to use MapClue description constants\n      cannon: Add Meiyerditch Laboratory Bloodveld cannon spot (#12078)\n      discord: Add castle wars underground region ID (#12075)\n      agility: Fix prif portal highlighting\n      clue: Fix K\'ril\'s chamber master clue step plane\n      chat commands: add Nightmare abbreviations\n      Item identification: add tablets\n\nChris Janusiewicz (1):\n      nmz plugin: add option to send overload notification prior to expire\n\nCyborger1 (1):\n      farming: Improve names of Poison ivy and Dwarf weed patches (#12134)\n\nDerek Lopes (1):\n      Notifier: Disable flash notification when off is selected to prevent stuck flash state\n\nErik Humphrey (1):\n      clues: Fix \'Headbang at the exam centre\' clue text (#12297)\n\nHenry Darnell (1):\n      Update deprecated/default Travis configs (#10880)\n\nHexagon (1):\n      client: add zalcano plugin\n\nHydrox (1):\n      loottrackerclient: log when submitting loot isn\'t successful\n\nHydrox6 (1):\n      mousehighlight: make &quot;drop&quot; not show when interface tooltips are off\n\nJZomerlei (1):\n      achivement dairy plugin: Add satisfiesRequirement to Requirement (#12265)\n\nJonathan Charles (1):\n      menu swapper: add Advisor Ghrim collect swap\n\nJordan Atwood (6):\n      OverlayRenderer: Fix overlay resizing logic\n      HotColdLocation: Center some location spots\n      slayer: Fix slaughter bracelet proc text\n      HotColdLocation: Fix Mos Le\'Harmless southern bar spot\n      menuentryswapper: Prefer last-destination on Zanaris fairy ring\n      ItemIdentification: Fix target teleport definition\n\nJussi Kauppinen (2):\n      cooking: Add support for drying sinew (#12184)\n      inventory-tags: add underline as display option\n\nLA (1):\n      screenshot: Capture Barbarian Assault high gamble screenshots (#12071)\n\nLandy Chan (1):\n      prayer plugin: fix time remaining text when greater than 1 hour\n\nLazyScaper (2):\n      worldmap: Fix Misthalin mystery quest icon position (#12273)\n      skill calc: add Vyres to thieving calc\n\nMarbleTurtle (2):\n      EmoteClue: Change location from Digsite to Exam Centre\n      SkillChallengeClue: Update dragonhide clue text (#12217)\n\nMeeran (2):\n      ItemMapping: Add Bryophyta\'s staff (#12286)\n      ItemMapping: Add Ring of endurance\n\nOneProGoober (1):\n      emoji: Add XD and pleading emojis (#12203)\n\nRansomTime (1):\n      task: add Iorweth Warriors to list of targets for elves\n\nSirGirion (1):\n      loottracker: Add bird nest loot tracking (#12237)\n\nTheStonedTurtle (1):\n      Dev Tools - Add Inventory Inspector\n\nToocanzs (1):\n      gpu: add anisotropic filtering\n\nXrioBtw (1):\n      PrayerType: Fix BURST_OF_STRENGTH description typo (#12138)\n\nhoneyhoney (3):\n      menuentryswapper: Add Rellekka quick travel NPCs (#12333)\n      bank: Fix NPE in PostScriptFired subscriber (#12342)\n      WorldMapOverlay: Adjust tooltip text position to match vanilla tooltips (#12380)\n\nkjartantr (1):\n      SlayerUnlock: Update varbits enum (#12214)\n\nleejt (2):\n      loot tracker: track grubby, stone, Dorgesh-Kaan and HAM chests\n      loot tracker: add metadata field to loot record\n\nmelkypie (1):\n      chatcommands: make cox pb account for 11-15 and 16-23 team sizes\n\ntrimbe (2):\n      bank tags: update detection of active tab for separator removal\n      bank tags: invoke only the scrollbar update after removing separators\n</code></pre>\n',image:"/img/blog/1.6.25-Release/zalcano-hint-arrow.png"}}}]);
//# sourceMappingURL=131.953857b9.chunk.js.map