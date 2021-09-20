(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[32],{622:function(e,n){e.exports={title:"1.3.2 Release",description:"Movable overlays, revamped clue scoll plugin, and tithe farm plugin",author:"Adam",body:'<p>Movable overlay support is finally here! This allows you to move any RuneLite\nOverlay to any position on the screen. Hold alt to do so. There are 4 (or 5 on\nresizable) &quot;snap corners&quot; provided where, if you move an overlay to a snap\ncorner, the client will dynamically place the overlay to not draw on top of\nother overlays. Thanks to <a href="https://github.com/deathbeam" native="" rel="nofollow">@deathbeam</a> for this\nfeature.</p>\n<p><img src="/img/blog/1.3.2-Release/overlays.gif" alt="overlay"></p>\n<p>The clue scroll plugin has been rewritten, and now supports all clue types.\nThanks to <a href="https://github.com/devlotto" native="" rel="nofollow">@devLotto</a> for their work on this.</p>\n<p><img src="/img/blog/1.3.2-Release/clue1.png" alt="clue1">\n<img src="/img/blog/1.3.2-Release/clue2.png" alt="clue2"></p>\n<p>A tithe farm plugin was added by <a href="https://github.com/unmoon" native="" rel="nofollow">@Unmoon</a>, which tracks plant growth stages and state.</p>\n<p><img src="/img/blog/1.3.2-Release/tithe.png" alt="tithe"></p>\n<p>The agility plugin now has an additional lap counter overlay by <a href="https://github.com/sethtroll" native="" rel="nofollow">@sethtroll</a>:</p>\n<p><img src="/img/blog/1.3.2-Release/agility.png" alt="agility"></p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The instance map plugin maps now look the same as the ingame minimap</li>\n<li>Mouse tooltips were moved to the bottom right corner of the mouse, and are now\nhidden when the game has a tooltip open.</li>\n<li>Fixed slayer points and streak being lost on restart</li>\n<li>A kingdom of Miscellania plugin has been added to show you your support, and\noptionally warn if it is unpopular</li>\n<li>The raids points interface has been replaced with an overlay that also\nincludes party size. As with the other overlays, this is now movable.</li>\n<li>Antipoison and superantipoision were added to the timers plugin</li>\n<li>Add holy wrench effect to itemstats plugin</li>\n<li>Sort infoboxes by plugin and priority</li>\n<li>Add Silver sickle(b) to menu swapper plugin</li>\n<li>Expand list of skill abbreviations for the !lvl command</li>\n<li>Add spicey stew to item stats plugin</li>\n<li>Add cave horror cannon spot</li>\n<li>Fix lizardmen cannon spot</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 15 contributors this release!</p>\n<pre><code>Adam (14):\n      config manager: check for invalid keynames in loadFromFile\n      config manager: add get and set configuration methods for objects\n      Add movable overlay support\n      travis: remove oracle-java8-installer as it broke and use the oraclejdk travis ships, which is new enough now\n      feed plugin: make scheduled method public\n      wsservice: remove sessions on close or error\n      instance map plugin: rewrite to use client minimap code\n      runescape-client: export varc related classes/fields\n      Add varc api accessors, and tooltip varclient\n      mouse highlight plugin: hide tooltips when the client is showing tooltips\n      xp globes: move expire check to a scheduled method\n      cluescroll overlay: set priority to low\n      agility lap overlay: set priority to low\n      slayer plugin: load points and streak on login and startup\n\nCharlie Waters (2):\n      Fix clue scroll plugin game object query for world overlay\n      Fix some clue solutions\n\nInfinitay (4):\n      Added Kingdom of Miscellania plugin\n      Added daily task indicators plugin\n      Fixed checkCanCollectEssence method\n      Disabled plugin by default  - Hopefully will encourage users seeking this    feature to configure it to their liking.    For example, if ironman, disable herb box.\n\nJoshua Filby (50):\n      refactor: rename widgetSettings to clientVarps\n      refactor: rename settings to serverVarps\n      refactor: remove unnecessary Client#getSettings(), use Client#getVarps()\n      fix: hook clientVarps instead of settings\n      refactor: rename get/set settings to get/set varp\n      refactor(widget): rename method4463 to decodeListener\n      refactor(widget): rename method4464 to decodeTransmitList\n      refactor(widget): rename field2898 to onLoadListener\n      refactor(widget): rename mouseEnterListener to onMouseOverListener\n      refactor(widget): rename mouseExitListener to onMouseLeaveListener\n      refactor(widget): rename field2807 to onTargetLeaveListener\n      refactor(widget): rename field2908 to onTargetEnterListener\n      refactor(widget): rename configListenerArgs to onVarTransmitListener\n      refactor(widget): rename tableListenerArgs to onInvTransmitListener\n      refactor(widget): rename skillListenerArgs to onStatTransmitListener\n      refactor(widget): rename renderListener to onTimerListener\n      refactor(widget): rename field2917 to onOpListener\n      refactor(widget): rename mouseHoverListener to onMouseRepeatListener\n      refactor(widget): rename field2899 to onClickListener\n      refactor(widget): rename field2900 to onClickRepeatListener\n      refactor(widget): rename field2901 to onReleaseListener\n      refactor(widget): rename field2902 to onHoldListener\n      refactor(widget): rename field2906 to onDragListener\n      refactor(widget): rename field2907 to onDragCompleteListener\n      refactor(widget): rename scrollListener to onScrollWheelListener\n      refactor(widget): rename configTriggers to varTransmitTriggers\n      refactor(widget): rename tableModTriggers to invTransmitTriggers\n      refactor(widget): rename skillTriggers to statTransmitTriggers\n      refactor(widget): rename selectedAction to targetVerb\n      refactor(widget): rename field2895 to dragRenderBehavior\n      refactor(widget): rename field2894 to dragDeadTime\n      refactor(widget): rename field2817 to dragDeadZone\n      refactor(widget): rename config to clickMask\n      refactor(widget): rename name to opBase\n      refactor(widget): rename field2866 to offsetX2d\n      refactor(widget): rename field2867 to offsetY2d\n      refactor(widget): rename field2919 to onChatTransmitListener\n      refactor(widget): rename field2920 to onKeyListener\n      refactor(widget): rename field2921 to onFriendTransmitListener\n      refactor(widget): rename field2922 to onClanTransmitListener\n      refactor(widget): rename field2923 to onMiscTransmitListener\n      refactor(widget): rename field2924 to onDialogAbortListener\n      refactor(widget): rename field2925 to onSubChangeListener\n      refactor(widget): rename field2873 to onStockTransmitListener\n      refactor(widget): rename field2820 to onCamFinishedListener\n      refactor(widget): rename field2926 to onResizeListener\n      refactor(widget): rename mouseActionsPresent to hasListener\n      refactor(widget): rename field2951 to noScrollThrough\n      fix: import correct field for click masks\n      fix: import correct field for op base\n\nKamiel (6):\n      Item price tooltip: use linebreak instead of comma\n      Fix ranging potion showing invalid boost value\n      Ground items: Only consume mouse clicks when a checkbox has been clicked\n      Show remaining time on successful hunter traps\n      Add raid party size varbit\n      Replace raids points widget with custom overlay\n\nLotto (9):\n      runelite-api: make InventoryItemQuery take in InventoryID\n      runelite-api: add emote window widget info\n      runelite-client: pass in z offset into renderActorOverlayImage\n      runelite-client: extend overlay util to render Areas and LocalPoint\n      runelite-client: add line wrapping to PanelComponent lines\n      runelite-api: add sprite ids class\n      runelite-client: add resource images to clue scroll plugin\n      runelite-client: revamp clue scroll plugin\n      runelite-client: remove old clue scroll enums\n\nLyn Levenick (2):\n      Add notifications for NMZ power-up spawns\n      Fix tray icon crash when clicked quickly on start\n\nMax Weber (10):\n      itemstats: Support holy wrench effect\n      configmanager: synchronize disk access\n      itemstats: use EnergyStat instead of anonymous stat\n      menumanager: Actually remove menu options\n      injector: Allow &lt;clinit&gt; an &lt;init&gt; injection with multiple mixins on the same class\n      deob: Always use / delimters in pool.Class\n      injector: Allow assertions to be used in mixins\n      mixins: Use assert in scriptvm\n      runelite-client: Add ClientThread to aid in synchronizing with the client\n      Ensure createItemSprite is called on the game thread\n\nSeth (4):\n      info boxes: associate plugins to infoboxes\n      info boxes: sort boxes by priority\n      jewelrycharges: Add Teleport crystal(5)\n      agility plugin: Add lap counter\n\nShaunDreclin (1):\n      Add Silver sickle(b) to menu entry swapper plugin.\n\nSoyChai (4):\n      Expand list of skill abbreviations for the !Lvl command\n      Expand tests for and document the Experience API\n      Add spicy stews to item stats plugin\n      Extra documentation for the Stat and StatChange classes\n\nTomas Slusny (18):\n      Add Cave Horror cannon spot\n      Fix Lizardmen cannon spot plane\n      Add support for points to ConfigManager\n      Add support for getting real canvas dimensions\n      Calculate overlay bounds also for dynamic overlays\n      Create translated copy of OverlayBounds\n      Improve caching of game-related variables\n      Change multiple overlay lists to map\n      Instance map improvements + moving\n      Make unsetConfiguration non-blocking\n      Disable overlay dragging mode on focus lost\n      Remove not needed parent point and minimap orb\n      Move tooltip to the right-bottom of the mouse\n      Add null-check for overlays in OverlayRenderer\n      Add getCanvasOffset to clientUI, fix screenshots\n      Add formatNumber methods to StackFormatter\n      Expand panels based on click event not isSelected\n      Add null-check for Client to MenuManager\n\nUnmoon (1):\n      Add Tithe Farm plugin\n\njamesahhh (1):\n      Add antipoison and superantipoison timers (#1159)\n\nrune3132 (1):\n      Additions to Jewellery count plugin\n</code></pre>\n',image:"/img/blog/1.3.2-Release/overlays.gif"}}}]);
//# sourceMappingURL=32.3b019cb4.chunk.js.map