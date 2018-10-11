webpackJsonp([22],{494:function(n,e){n.exports={title:"1.4.6 Release",description:"Lightbox and Varrock Museum quiz solver, config panel tags and favorites, Discord bosses & minigames",author:"Tomas",__content:'<p>A lightbox solver plugin was added which tells you the pattern to solve lightboxes after\nobserving a few of the switches. Contributed by <a href="https://github.com/Adam-">@Adam-</a>.</p>\n<p><img src="/img/blog/1.4.6-Release/lightboxsolver.png" alt="lightboxsolver"/></p>\n<p>A helper for Varrock Museum Quiz was added as well that highlights correct answer to\nquestions in Varrock Museum basement. Thanks to <a href="https://github.com/vikke1234">@vikke1234</a>\nwho contributed this feature.</p>\n<p><img src="/img/blog/1.4.6-Release/varrockmuseumsolver.png" alt="varrockmuseumsolver"/></p>\n<p>The configuration panel was significantly improved thanks to big contribution from\n<a href="https://github.com/takuyakanbr">@takuyakanbr</a>. Some of the improvements are:</p>\n<ul>\n<li>Each plugin now has a short description when hovered</li>\n<li>Each plugin now has tags that will make plugins easier to search for</li>\n<li>Plugins can now be pinned to the top of the panel (a new star icon was added next to each plugin name\nthat when clicked will pin the config option to top)</li>\n<li>Search bar in configuration panel will now always stay on top</li>\n<li>Each configuration page for plugins now have back and on/off buttons at the top of panel</li>\n</ul>\n<p><img src="/img/blog/1.4.6-Release/configbackbutton.png" alt="configbackbutton"/>\n<img src="/img/blog/1.4.6-Release/configfavorites.png" alt="configfavorites"/>\n<img src="/img/blog/1.4.6-Release/configtags.png" alt="configtags"/>\n<img src="/img/blog/1.4.6-Release/configtooltip.png" alt="configtooltip"/></p>\n<p>Thanks to another awesome contribution from <a href="https://github.com/PandahRS">@PandahRS</a> who spent\na lot of time manually mapping a lot of RuneScape surface to regions, the Discord plugin now has\na lot of new features, including display of <strong>city</strong> you are in, <strong>dungeon</strong> you are currently\nexploring, <strong>boss</strong> you are currently fighting and even <strong>minigame</strong> you are currently playing.</p>\n<p>Due to privacy reasons, these new location-based features are disabled in any PVP scenario, such\nas PVP worlds, High Risk worlds, DMM and Seasonal DMM worlds.</p>\n<p><img src="/img/blog/1.4.6-Release/discord1.png" alt="discord1"/>\n<img src="/img/blog/1.4.6-Release/discord2.png" alt="discord2"/></p>\n<p>In addition to the highlighted features, there have been several other improvements and bugfixes this release:</p>\n<ul>\n<li>!total, !clues and !lvl commands now properly show ranks based on account types</li>\n<li>Plenty of new food types have been added to Item Stats plugin</li>\n<li>SOTD timer now properly works also for SOTL</li>\n<li>Obstacles for Agility Pyramid entrance and Morytania pirate ship have been added to Agility plugin</li>\n<li>Al-Kharid lap counter has been fixed</li>\n<li>XP tracker now shows dots instead of commas to follow OSRS style of displaying numbers</li>\n<li>Fishing plugin now supports all types of eels</li>\n<li>Bug with inventory tagger plugin showing items with different models depending on the quantity\nincorrectly have been fixed</li>\n</ul>\n<p>Enjoy!</p>\n<p>~ Tomas</p>\n<h3 id="new-commits">New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (8):\n      runelite-api: make HashTable a generic\n      Calculate and store widget parent id and position when the interfaces are rendered\n      Revert &quot;Add ironman status and AccountType to API&quot;\n      chat commands: fix to use exiting accounttype api\n      agility plugin: fix Al Kharid lap counter\n      puzzle solver: add lightbox solver\n      chat commands: store kill counts in config\n      Change Widget::parentId behavior to work again if the widget hasn&#39;t been drawn yet\n\nDamen (2):\n      Fix Dark Crab req lvl in skill calculator (#4071)\n      Prevent cannonball count conflicting with health bars (#2857)\n\nGamer1120 (1):\n      Fix hiscore lookup for ironman in chat commands\n\nJHPinto (1):\n      slayer plugin: move item count overlay checks to render\n\nJeremy Plsek (2):\n      item manager: add item outline caching\n      inventory tags: use item manager for outlines\n\nJordan (1):\n      Ignore level goals which have been passed (#3805)\n\nJordan Atwood (17):\n      item stats plugin: Add Edible seaweed\n      chat color: Fix description typo\n      Update Veng Other / Energy Transfer animation ID\n      Add Vengeance Other graphic ID\n      timers plugin: Check for Vengeance Other graphic\n      item stats: Add missing RFD foods\n      fishing plugin: Add cave eel and slimy eel spots\n      agility plugin: Add Lumbridge swamp cave shortcuts\n      item stats plugin: Add field ration\n      grand exchange plugin: Fix error message typos\n      grand exchange plugin: Clear render on empty string\n      item stats plugin: Fix import ordering\n      item stats plugin: Fix Zamorak brew stat changes\n      skill calculator: Fix combined items with decimals\n      item stats: Add negative attack bonus to wines\n      clues: Fix Cap&#39;n Izzy No-Beard anagram clue\n      agility plugin: Add pyramid entrance obstacles\n\nKamiel (1):\n      screen-markers: fix graphical bug\n\nMagic fTail (1):\n      AgilityPlugin: Add obstacles north of pirate ship (#4084)\n\nMax Weber (3):\n      mixins: Don&#39;t show siblings in dynamic widget&#39;s child lists\n      farmingtracker: Correct several patch timings\n      itemstats: Add variable healing food\n\nNathen Sample (1):\n      Represent decimals as .&#39;s not ,&#39;s (#4059)\n\nPandahRS (5):\n      Make skilling activity configurable in Discord\n      Add bosses to Discord plugin\n      Add cities to Discord plugin\n      Add dungeons to discord plugin\n      Add minigames to Discord plugin\n\nTomas Slusny (7):\n      Add ironman status and AccountType to API\n      Make SOTD/SOTL timer use chat messsage\n      Return preferredSize.width from TitleComponent\n      Make !clues command respect account type\n      Add logging of presence to DiscordService\n      Make Discord plugin more extensible/support region\n      Reset Discord state if now &gt; updated + timeout\n\nViktor Horsmanheimo (2):\n      Add widget IDs for the varrock museum quiz\n      Add Varrock museum quiz solver\n\ntakuyakanbr (5):\n      Add description and tags fields to PluginDescriptor\n      config panel: change plugin search to use plugin name + tags\n      config panel: add ability to pin plugins to the top\n      config panel: keep search bar at the top while scrolling Add back and toggle buttons at the top of plugin configuration pages\n      Replace fields in ConfigGroup with a single `value` field\n</code></pre>'}}});
//# sourceMappingURL=22.e0842824.chunk.js.map