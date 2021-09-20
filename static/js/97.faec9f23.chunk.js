(this["webpackJsonprunelite.net"]=this["webpackJsonprunelite.net"]||[]).push([[97],{687:function(e,n){e.exports={title:"1.5.26 Release",description:"Mining rock respawn timer, inventory grid, and F-key remapping",author:"Adam",body:'<p>A mining plugin has been added which shows respawn times for rocks.</p>\n<p><img src="/img/blog/1.5.26-Release/mining.gif" alt="mining"></p>\n<p>An inventory grid plugin was added which will overlay a grid of each item slot\nin the inventory when an item is dragged, aiding with rearranging inventory\nitems.</p>\n<p><img src="/img/blog/1.5.26-Release/invgrid.gif" alt="invgrid"></p>\n<p>The WASD plugin has been <em>renamed</em> to the Key Remapping plugin. If you had it on\nprior to the update you will need to turn it on again. It now also supports\nremapping the number keys (<code>0-9</code>, <code>-</code>, and <code>=</code>) to the F keys, to aid Mac users.</p>\n<p>There are also several smaller improvements and bug fixes, including:</p>\n<ul>\n<li>The wine ferment timer was fixed, again, and actually works now</li>\n<li>The Barbarian Assault plugin was updated for last week\'s game update and now\ncorrectly shows the wave time again</li>\n<li>Fix the agility plugin not highlighting the Al-Kharid zipline</li>\n<li>Fix the clue plugin to identify the correct stash unit near the Exam Centre</li>\n<li>The authenticator code can now be pasted into the login screen, similar to\nusername and password</li>\n</ul>\n<p>Enjoy!</p>\n<p>- Adam</p>\n<h3>New commits</h3>\n<p>We had 7 contributors this release!</p>\n<pre><code>Adam (19):\n      Revert &quot;cooking plugin: fix wine fermentation timer to begin at appropriate time&quot;\n      Revert &quot;cooking plugin: add wine ferment timer&quot;\n      Revert &quot;cooking plugin: rename session to cooking session&quot;\n      cooking plugin: add wine ferment timer\n      mixins: fix game object events to not fire for actors, projectiles, and graphic objects\n      client: add mining plugin\n      ba: update to no longer use icons to determine role\n      ba: fix wave timer announce from exiting a tutorial\n      ba: null game time after the game has been finished\n      music plugin: delete all child widgets before adding buttons\n      quest plugin: delete all child widgets before adding buttons\n      wasd plugin: rename to keyremapping plugin\n      keyremapping plugin: add F-key remapping\n      keyremapping: fix keys getting stuck from map loading\n      keyremappinig: replace some lambdas with method references\n      achievement diary: fix legends guild jewllery task\n      api: modify Widget.getWidgetItem to return widget items when no item exists\n      client: add inventory grid plugin\n      inventory grid: add delay before activating overlay\n\nHydrox6 (1):\n      agility: Fix highlighting of Al Kharid zip line\n\nJordan Atwood (1):\n      HotColdLocation: Replace nbsp with normal spaces\n\nRon Young (2):\n      mixins: correct widget item bounds location for if1\n      client: readjust widget item overlay positions for modified widget item bounds\n\nTomas Slusny (3):\n      Expose loginIndex and otp fields from runescape client\n      Add LOGIN_SCREEN_AUTHENTICATOR game state\n      Add support for pasting authenticator code on login screen\n\nWilliam Collishaw (2):\n      Remove redundant subString endindex .length() calls\n      Replace redundant StringBuilder append String.subString with append CharSequence\n\nxDemoN (2):\n      Fix numulite buy limit in GE plugin (#8962)\n      Cluescrolls: Swap STASH Units for Exam Centre Emote Clues (#8963)\n</code></pre>\n',image:"/img/blog/1.5.26-Release/mining.gif"}}}]);
//# sourceMappingURL=97.faec9f23.chunk.js.map