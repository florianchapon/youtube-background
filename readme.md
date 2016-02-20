
## Youtube Background

Youtube background is a flexible library that allow you to post your awesome dynamic content as wallpaper.
This library is `FLEXIBLE` and highly `CUSTOMISABLE`. In fact, the embed video will suits every type of display, from mobile devices to TVs. `CUSTOMISABLE` because you can master:

- The video link
- The start time
- The end time
- The ouput volume (on-off, and % level, from 0 to 100).


### Installation

First you have to download the zip file, containing an index.php that allow you to load the script "ytbg.js", and the script himself.
As an explanation, the only thing you have to do for your webpage is to set your parameters when you call the javascript function "ytbg".

Here is an exemple:
```javascript
$(document).ready(function() {	
	ytbg("vQWlNALvbhE", 0, 17, 1);
});
```
```javascript
ytbg("video link", starttime, endtime, volume).
```
You dont have to set every parameters because there is some default value.

**Default**
Start time = 0
End time = 0 (total video length)
Volume = 0 (muted)