// ==UserScript==
// @name         Redditority Report
// @namespace    https://github.com/PlecoChanDev/Redditority-Report
// @version      3.9.8
// @downloadURL  https://raw.githubusercontent.com/PlecoChanDev/Redditority-Report/refs/heads/main/Script.js
// @updateURL    https://raw.githubusercontent.com/PlecoChanDev/Redditority-Report/refs/heads/main/Script.js
// @description  Now you know what to blame when you see dogshit on your timeline!
// @match        https://www.reddit.com/*
// @match        https://old.reddit.com/*
// @match        https://new.reddit.com/*
// @grant        GM_xmlhttpRequest
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_registerMenuCommand
// @connect      www.reddit.com
// @connect      old.reddit.com
// @run-at       document-idle
// ==/UserScript==

(function(){
'use strict';
const VER='3.9.8',CK='redditFlaggerConfig_v2',AK='redditFlaggerCache_v2',DK='redditFlaggerDefaultSig_v2',PA='data-subreddit-flagger',EA='data-flagger-eid',AA='data-flagger-addbtn',ML=80,AGE_SCAN_VERSION=5,RULE_SCAN_VERSION=3,HISTORY_CACHE_VERSION=1;
const DG=[{"id":"gykogppsp","label":"C.AI","description":"Catch all for any use of recreational AI.","color":"#c0392b","textColor":"#ffffff","minPosts":2,"subreddits":["characterai","characterai_lounge","characterAI_no_filter","characterairunaways","characterairevolution","character_ai_recovery","chaiapp","sillytavernai","fetishcai","cairevolution","aipartners","aigirlfriend","aiboyfriend","soraai","claudeai","grok","novelai","geminiai","JanitorAI_Refuges","JanitorAI_Official","sunoai"],"keywords":[],"descKeywords":[],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"gii0qdy03","label":"Neurodivergent","description":"Is this person's brain inherently different? This person may have trouble understanding certain content.","color":"#8e44ad","textColor":"#ffffff","minPosts":3,"subreddits":["autism","Autism_Parenting","neurodiversity","evilautism","autisticadults","autisticpride","aspergers","autisminwomen","aspiememes","aspergirls","plural","plural_systems","fictionkin"],"keywords":[],"descKeywords":["ASD","AuDHD"],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"gpscosjxa","label":"Underage","description":"Common subs for underage people to be in. Yes, Roblox is an automatic flag.","color":"#e67e22","textColor":"#000000","minPosts":2,"subreddits":["RobloxAvatars","roblox","DandysWorld_","teenagers","teenagersbutbetter","FreeRobloxAccounts2","bloxymemes","GenAlpha","Teenager","RobloxAvatarReview","teenagersbutworse","askteenboys","AskTeenGirls","Teenager_Polls","TeenVent","teenagersbutarguing","furryteens","forsakenroblox","AntiForsaken","Teenagersbutnotweird","teenagersbutpractical","teenagers4real","conservativeyouth","tds_roblox","sillyteens","GenBeta","theteenagerpeople","musicteenager","teenagersbutnottrashy","middleschoolstudents","highschool","Teenpoll","askteens","secretteenagers","adoptmetrading","adoptmegiveaways","dieofdeathroblox","adviceforteens","younger_genz","teenmusicfun","Onlyteenagersallowed","under18","sadyouth","teenagercirclejerk","teenprotips","teen4teen","trueteenagers","teenagewriters","teenagersmixtape","teenagerartists","teengamers","LGBTeens"],"keywords":[],"descKeywords":[],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"geexk3j7l","label":"Chr. Online","description":"Chronically Online : This person is likely very annoying... HOPE THIS HELPS!","color":"#80ff80","textColor":"#000000","minPosts":5,"subreddits":["Peoplewhogiveashit","Proship","whenthe","Deltarune","coaxedintoasnafu","proshiphub","whennews","supersillybreakingbad","vocaloid","yumeshipping","thedigitalcircus","fictolove","fictochill","tadc","hazbin","Undertale","BFDI","projectsekai","theamazingdigitalciru","gamingcirclejerk","196","subredditdrama","losercity","197","wplacelive","AndyAndLeyley","ralsei","undynesayingseven","deltarunememes","tenna","goodfountainsealers","deltarunev2","krisellefanclub","waterfalldump","funComunitty","funcommunitythesequel","boykisser2","boykisser","boykisser3","196x2","evilfountainopeners","multifandom","thegangleforce","spamton","jaxfanclub","amazingdigitalcircus"],"keywords":[],"descKeywords":["🍉","🇵🇸"],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"gnow3jd8s","label":"BIDOOF'D","description":"This person is jacking it on their main account!!!","color":"#0067ce","textColor":"#ffffff","minPosts":2,"subreddits":["yiff","traps","femboys","gfur","18F","18NSFW","18y","anal","ass","hentai","doujinshi","Ecchi","Yaoi","Yuri","porn","FurryFemboy","bunnys_yiff_sub","gooned","yiffcomics","clopclop","fivefapsatfreddys","furryfeet","femboyfeet","softfemboys","gayfurryporn","honeyfuckers","hazbinbrothel","furrygoonpit","femboyhentai","furrygooners","boypussy","pets_and_ownwers","yifftrade","hentaitrade_n_feed","femboyfantasys","jerkbudshentai","derpixon","traphentai","hungfemboys","mylittleponynsfw","furrypornsubreddit","femyiff","bleachedfemboy","femboybussy","donut_butt_yiff","gayassholegonewild","gayfurryphotodump","dadsgonewild","olddicks","goonerutopia","FemboyandFutaHentai","sissyhentaicomics","constructioncock","manass","mexicancocks","gaycheaters","sluttyconfessions","facepornonly","politicsplay","muslimcocklovers","fairtheatrenycsluts","masturbation","dirtyfeet","femalefeet","feetinyourface","footfetish","girlslovetopee","nativeamericanbabes","cncfreaks","plushophile","fursuitsex","furryfleshlights","pokesluts","hentaibeast","vrchaterp","vrchatfurryerp","vrchatnsfw","rule34","artistic_hentai","fucktoyfactory","girlinferioritycaps","fuckingfascists","barbieacademy","aiyiff","everythinggooncaption","goonstories","edgingtalk","gooninghentai","marvelrivalsr34nsfw","hentai_ptbr","hentai_brbr","iwanttobeherhentai","hentaifeeding","jerkoffoncam","mlpgoon","jerkoffchat","askdickpic","kinktown","dirtysnapchat"],"keywords":[],"descKeywords":[],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"g2avxnlag","label":"SUS","description":"Honestly I just want a funny section to screenshot if someone is in one of these. Combo of funny/concerning/wild subs.","color":"#000000","textColor":"#ffffff","minPosts":3,"subreddits":["incestisntwrong","sinkpissers","rape_hentai","feraladdiciton","femboyrape","guro","rape_furry","jellybeanr34porn","barelylegalteens","hentaireverserape2","traumatizedsluts2","mindbreak","teenbbw","ntr","feraladdiction","feralai","feral_yiff","feralsex","feralsexual2","feralhentai","baddragon","incestconfessions","daddyincestfantasy","baddadsanddaughters","uglybastardporn","bustyferal","feral_male_yiff","gayferalyiff","sibkisser","IncestAnimemes","incestcorner","incest_confessional","realinceststories","incest_confessionsirl","incest_taboo_talks","incestdebate","incestuousrightsnow","momsonincest","incestnaturally","keepingitiinthefamily","freeusefamilyincest","beastierp","loveofincest","incesttaboofamily","incestobsessed","incestclub","incestsexstories","incestsnaps","oldyoungtabooporn","ai_taboos","daddyslilgirl","daddysdarkfiction","daddyschoolforgirls","rapekink_india","furry_incest","nolimitshentai12","CuteandFunnyArt","cubbys","barleylegalbrats","diaperhumiliationabdl","diapercucks","diaper_messing","rapebaitholes","degradedslutr4r","rapefetishdms","cartoons_toons_beast","lesbianrapehentainsfw","hentailimitless","rapehentaianime","gfurincest","feralpokeporn","feralpokemonporn","cutesexual","onlineaffairs"],"keywords":["cunny","uohh","cute and funny","😭💢"],"descKeywords":[],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"gb7o85fpb","label":"Cortisol UP","description":"This person very susceptable to ragebait. Requires high cortisol posting in subs where you just spend all day getting mad.","color":"#ffffff","textColor":"#000000","minPosts":5,"subreddits":["artisthate","antiai","aiwars","defendingaiart","defendingai","palestine","shitaibrossay","fuck67","67hate","anti67alliance","anti_steal_a_brainrot","imisstheoldidubbbz","h3h3productions","memesopdidnotlike","livestreamfail","destiny","trollcoping"],"keywords":[],"descKeywords":[],"flairStyle":{"accentColor":"#000000","pattern":"none","separate":false,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":false,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"rules":[]},{"id":"gkil801b3","label":"DANGER","description":"This person is more than sus, they may actually be illegal (allegedely). Contains dogwhistles and platforms infamous for illegal shit (telegram excluded due to how many furries and weed dealers are on it)","color":"#840000","textColor":"#ffffff","flairStyle":{"accentColor":"#000000","pattern":"caution","separate":true,"glow":false,"glowRadius":7,"glowIntensity":0.65,"blink":true,"blinkSpeed":1.15,"blinkMinOpacity":0.22,"blinkFade":true},"minPosts":1,"subreddits":[],"keywords":["NL group","NL Groups"],"descKeywords":["limitless","session","teleguard","no limits","zangi","CP video","CP group","send me anything","age of attraction"],"rules":["risque-platforms"]}];
const SKIP=new Set(['AutoModerator']);
const NO_FETCH=new Set(['[deleted]']);
const IS_OLD=location.hostname==='old.reddit.com'||!!document.querySelector('#siteTable,.redesign-beta-optin');
const DBG={pending:{l:'pending',bg:'rgba(255,255,255,.03)',c:'#3a3a4a',p:0},searching:{l:'searching...',bg:'rgba(255,255,255,.05)',c:'#555',p:1},cached:{l:'cached',bg:'rgba(210,170,60,.08)',c:'#a08530',p:0},complete:{l:'complete',bg:'rgba(50,180,100,.08)',c:'#2d8a56',p:0},error:{l:'error',bg:'rgba(200,50,50,.08)',c:'#b04040',p:0}};
const DEFAULT_AGE_RULES={"numberPattern":"\\d{2}","minAge":10,"maxAge":99,"underageMax":17,"nearbyWords":5,"strongPatterns":["\\b(?:i\\s*(?:am|['’]m)|im)\\s+(?:(?:currently|only|just|now|actually)\\s+)?(?:a\\s+)?(\\d{2})\\b(?!\\s*(?:days?|weeks?|months?|minutes?|hours?|percent|%))","\\bmy\\s+age\\s+(?:is|=|:)\\s*(\\d{2})\\b","\\bi(?:'ve|\\s+have)?\\s+(?:just\\s+)?turned\\s+(\\d{2})\\b"],"uncertainPatterns":["\\b(?:i\\s*(?:am|['’]m)|im)\\s+(?:about|around|almost|nearly|roughly|probably|maybe)\\s+(\\d{2})\\b","\\bmy\\s+age\\s+was\\s+(\\d{2})\\b","\\b(\\d{2})\\s*(?:years?\\s*old|y\\/?o|yo|y)\\b","(?:^|[\\s,(])(\\d{2})\\s*[mfn](?=$|[\\s,)])","(?:^|[^a-z0-9])[mf]\\s*(\\d{2})(?![a-z0-9])"],"bioPatterns":["\\b(\\d{2})\\s*(?:y\\/?o|yo|y)\\b","\\bage\\s*(?:is|=|:)?\\s*(\\d{2})\\b"],"bioUniquePatterns":["(?:^|[\\s,|(/])(\\d{2})\\s*[mfn](?=$|[\\s,|)/])","(?:^|[^a-z0-9])[mf]\\s*(\\d{2})(?![a-z0-9])"]};
const GENDER_FIRST_AGE_PATTERN="(?:^|[^a-z0-9])[mf]\\s*(\\d{2})(?![a-z0-9])";
const AGE_FLAIR_PATTERN=/^(?:(\d{2})\s*(?:[mfn]|y\s*\/?\s*o|yo|y)?|[mf]\s*(\d{2}))$/i;
const DEFAULT_AGE_FLAIR_SUBREDDITS=["teenagers","Onlyteenagersallowed","teenagersbutworse","TeenagersButBetter","teenagers4real","under18","GenBeta","Teen4Teen","teenrelationships","forkids","trueteenagers","teenagercirclejerk"];
const DEFAULT_FLAIR_STYLE={accentColor:'#000000',pattern:'none',separate:false,glow:false,glowRadius:7,glowIntensity:.65,blink:false,blinkSpeed:1.15,blinkMinOpacity:.22,blinkFade:true},FLAIR_PATTERNS=new Set(['none','diagonal','caution','checker','dots']);
const BUILTIN_RULES=[{id:'risque-platforms',name:'Risque Platforms',description:'Detects Session or TeleGuard contact details and mentions in profile descriptions, post titles, and comment bodies.',scopes:['Profile description','Post titles','Comments'],patterns:[/\b05[0-9a-f]{64}\b/i,/\b(?:getsession(?:\.org)?|session\.id|session\s+(?:messenger|app|account|contact|id|code|username)|(?:add|message|dm|contact)\s+me\s+(?:on\s+)?session|(?:use|using|on)\s+session)\b/i,/\btele[\s-]*guard\b/i,/\b(?:teleguard|tele[\s-]*guard|tg)\s*(?:id|code|contact)?\s*[:#-]?\s*[a-z0-9]{9}\b/i]}],BUILTIN_RULE_MAP=new Map(BUILTIN_RULES.map(r=>[r.id,r]));
function normalizeGroupRules(raw){if(!Array.isArray(raw))return[];return[...new Set(raw.map(String).filter(id=>BUILTIN_RULE_MAP.has(id)))]}
function validHex(value,fallback){const v=String(value||'').trim();return/^#[0-9a-f]{6}$/i.test(v)?v:fallback}
function boundedNumber(value,min,max,fallback){const n=Number(value);return Number.isFinite(n)?Math.min(max,Math.max(min,n)):fallback}
function normalizeFlairStyle(raw){const s=raw&&typeof raw==='object'?raw:{};return{accentColor:validHex(s.accentColor,DEFAULT_FLAIR_STYLE.accentColor),pattern:FLAIR_PATTERNS.has(s.pattern)?s.pattern:'none',separate:!!s.separate,glow:!!s.glow,glowRadius:boundedNumber(s.glowRadius,1,24,DEFAULT_FLAIR_STYLE.glowRadius),glowIntensity:boundedNumber(s.glowIntensity,.1,1,DEFAULT_FLAIR_STYLE.glowIntensity),blink:!!s.blink,blinkSpeed:boundedNumber(s.blinkSpeed,.3,4,DEFAULT_FLAIR_STYLE.blinkSpeed),blinkMinOpacity:boundedNumber(s.blinkMinOpacity,.05,.9,DEFAULT_FLAIR_STYLE.blinkMinOpacity),blinkFade:s.blinkFade==null?DEFAULT_FLAIR_STYLE.blinkFade:!!s.blinkFade}}
function flairPatternCss(color,rawStyle){const base=validHex(color,'#3498db'),s=normalizeFlairStyle(rawStyle),accent=s.accentColor;switch(s.pattern){case'diagonal':return{background:`repeating-linear-gradient(135deg,${base} 0 6px,${accent} 6px 12px)`};case'caution':return{background:`repeating-linear-gradient(45deg,${base} 0 9px,${accent} 9px 18px)`};case'checker':return{background:`conic-gradient(${base} 25%,${accent} 0 50%,${base} 0 75%,${accent} 0)`,backgroundSize:'12px 12px'};case'dots':return{background:`radial-gradient(circle,${accent} 0 2px,transparent 2.5px),${base}`,backgroundSize:'9px 9px'};default:return{background:base}}}
function applyFlairPattern(element,source){const css=flairPatternCss(source.color,source.flairStyle);element.style.background=css.background;element.style.backgroundSize=css.backgroundSize||''}
function hexToRgba(hex,alpha){const value=validHex(hex,'#000000').slice(1),r=parseInt(value.slice(0,2),16),g=parseInt(value.slice(2,4),16),b=parseInt(value.slice(4,6),16);return`rgba(${r},${g},${b},${alpha})`}
function applyFlairEffects(element,source){const s=normalizeFlairStyle(source.flairStyle),radius=s.glowRadius,intensity=s.glowIntensity;element.classList.toggle('flagger-flair-blink',s.blink);element.classList.toggle('flagger-flair-blink-fade',s.blink&&s.blinkFade);element.style.setProperty('--flagger-blink-speed',`${s.blinkSpeed}s`);element.style.setProperty('--flagger-blink-min',String(s.blinkMinOpacity));element.style.boxShadow=s.glow?`0 0 ${radius}px ${hexToRgba(s.accentColor,intensity)},0 0 ${radius*2}px ${hexToRgba(s.accentColor,intensity*.65)}`:''}
function applyFlairVisual(element,source){applyFlairPattern(element,source);applyFlairEffects(element,source)}

const uid=()=>'g'+Math.random().toString(36).slice(2,10);
const mkE=()=>'e'+Math.random().toString(36).slice(2,10);
function el(t,c){const e=document.createElement(t);if(c)e.className=c;return e}
function getEid(e){let i=e.getAttribute(EA);if(!i){i=mkE();e.setAttribute(EA,i)}return i}

/* Config */
let _cfgTs=0;
function loadCfg(){try{const r=GM_getValue(CK,null);if(!r)return null;const p=JSON.parse(r);_cfgTs=p._savedAt||0;return p}catch{return null}}
function saveCfg(c){try{const raw=GM_getValue(CK,null);if(raw){const st=JSON.parse(raw)._savedAt||0;if(st>_cfgTs&&!confirm('Another tab saved a newer config. Overwrite it?'))return;}}catch{}c._savedAt=Date.now();_cfgTs=c._savedAt;GM_setValue(CK,JSON.stringify(c));rebuildLookups()}
function freshDef(){return structuredClone(DG).map(g=>({...g,id:uid()}))}
const _dgSig=JSON.stringify([DG,DEFAULT_AGE_RULES,DEFAULT_AGE_FLAIR_SUBREDDITS]).length;
function dfltUpdated(){return parseInt(GM_getValue(DK,'0'))!==_dgSig}
function ackDflt(){GM_setValue(DK,String(_dgSig))}
function mergeDflt(groups,track){let n=0;for(const dg of DG){const ug=groups.find(g=>g.label===dg.label);if(!ug)continue;for(const s of dg.subreddits){if(!ug.subreddits.some(x=>x.toLowerCase()===s.toLowerCase())){ug.subreddits.push(s);if(track)track.add(s.toLowerCase());n++;}}}return n}
function normalizeFlairSubreddits(raw){const missing=raw==null,input=Array.isArray(raw)?raw:typeof raw==='string'?raw.split(/[\s,]+/):DEFAULT_AGE_FLAIR_SUBREDDITS,seen=new Set(),out=[];for(const value of input){const sub=String(value||'').trim().replace(/^r\//i,'');if(!sub||!/^[A-Za-z0-9_]+$/.test(sub))continue;const key=sub.toLowerCase();if(!seen.has(key)){seen.add(key);out.push(sub)}}return out.length||!missing?out:[...DEFAULT_AGE_FLAIR_SUBREDDITS]}
function getCfg(){const s=loadCfg(),groups=(s?.groups??freshDef()).map(g=>({...g,rules:normalizeGroupRules(g.rules)}));return{groups,manualUsers:s?.manualUsers??{},persistDebug:s?.persistDebug??false,showAddButtons:s?.showAddButtons??true,showAge:s?.showAge??false,ageRules:s?.ageRules??structuredClone(DEFAULT_AGE_RULES),ageFlairSubreddits:normalizeFlairSubreddits(s?.ageFlairSubreddits),maxPages:s?.maxPages??4,cacheDurationHours:s?.cacheDurationHours??24,maxConcurrent:s?.maxConcurrent??2,requestDelayMs:s?.requestDelayMs??1500}}
let CFG=getCfg();

// Lookups and text matchers are compiled once per config save.
let subToGroups=new Map(),exactSubGroupIds=new Map(),subPatterns=[],groupPatterns=new Map(),subGroupCache=new Map(),dMap=new Map(),compiledKeywordGroups=[],compiledDescGroups=new Map(),compiledRuleGroups=[],tagMemo=new WeakMap();
function compileTextMatcher(value){if(!value)return null;if(isRxEntry(value)){const p=parseRxEntry(value);if(!p)return null;const flags=p.rx.flags.includes('i')?p.rx.flags:p.rx.flags+'i';return{raw:value,display:p.nick||value,type:'rx',rx:new RegExp(p.rx.source,flags)}}if(value.includes('*'))return{raw:value,display:value,type:'wild',rx:new RegExp(value.toLowerCase().replace(/[.+^${}()|[\]\\]/g,'\\$&').replace(/\*/g,'.*'),'i')};return{raw:value,display:value,type:'plain',value:value.toLowerCase()}}
function textMatcherHits(m,text,lowerText){if(m.type==='plain')return(lowerText??text.toLowerCase()).includes(m.value);m.rx.lastIndex=0;return m.rx.test(text)}
function rebuildLookups(){
  subToGroups=new Map();exactSubGroupIds=new Map();subPatterns=[];groupPatterns=new Map();subGroupCache=new Map();dMap=new Map();compiledKeywordGroups=[];compiledDescGroups=new Map();compiledRuleGroups=[];tagMemo=new WeakMap();
  for(const g of CFG.groups){
    dMap.set(g.label,g.description||'');
    const gi={color:g.color,label:g.label,textColor:g.textColor||'#fff',flairStyle:normalizeFlairStyle(g.flairStyle),desc:g.description||''};
    for(const s of g.subreddits){
      const k=s.toLowerCase();
      if(isRxEntry(s)){
        const p=parseRxEntry(s);
        if(p){subPatterns.push({rx:p.rx,gi});if(!groupPatterns.has(g.id))groupPatterns.set(g.id,[]);groupPatterns.get(g.id).push(p.rx);}
      }else if(k.includes('*')){
        const rx=new RegExp('^'+k.replace(/[.+^${}()|[\]\\]/g,'\\$&').replace(/\*/g,'.*')+'$');
        subPatterns.push({rx,gi});
        if(!groupPatterns.has(g.id))groupPatterns.set(g.id,[]);
        groupPatterns.get(g.id).push(rx);
      }else{
        if(!subToGroups.has(k))subToGroups.set(k,[]);
        subToGroups.get(k).push(gi);
        if(!exactSubGroupIds.has(k))exactSubGroupIds.set(k,[]);
        exactSubGroupIds.get(k).push(g.id);
      }
    }
    const keywordMatchers=(g.keywords||[]).map(compileTextMatcher).filter(Boolean);if(keywordMatchers.length)compiledKeywordGroups.push({id:g.id,label:g.label,color:g.color,textColor:g.textColor||'#fff',matchers:keywordMatchers});
    const descMatchers=(g.descKeywords||[]).map(compileTextMatcher).filter(Boolean);if(descMatchers.length)compiledDescGroups.set(g.id,descMatchers);
    const rules=normalizeGroupRules(g.rules).map(id=>BUILTIN_RULE_MAP.get(id));if(rules.length)compiledRuleGroups.push({id:g.id,rules});
  }
}
function getGroupsForSub(sub){
  const k=sub.toLowerCase();
  if(subGroupCache.has(k))return subGroupCache.get(k);
  const r=subToGroups.get(k)||[];
  const seen=new Set(r.map(g=>g.label)),all=[...r];
  for(const{rx,gi}of subPatterns){rx.lastIndex=0;if(rx.test(k)&&!seen.has(gi.label)){seen.add(gi.label);all.push(gi)}}
  subGroupCache.set(k,all);
  return all;
}
rebuildLookups();
function isRxEntry(s){return typeof s==='string'&&s.startsWith('/')&&s.includes('::')}
function parseRxEntry(s){const i=s.indexOf('::');const rp=s.slice(0,i),nick=s.slice(i+2),m=rp.match(/^\/(.*)\/([gimsuy]*)$/);if(!m)return null;try{return{rx:new RegExp(m[1],m[2]||'i'),nick,raw:s}}catch{return null}}

/* Cache */
let _co=null,_cd=false;
const _ageSigCache=new WeakMap();
function ageRulesSignature(rules){if(rules&&typeof rules==='object'&&_ageSigCache.has(rules))return _ageSigCache.get(rules);const s=JSON.stringify(normalizeAgeRules(rules));let h=2166136261;for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}const sig=`${AGE_SCAN_VERSION}:${(h>>>0).toString(36)}`;if(rules&&typeof rules==='object')_ageSigCache.set(rules,sig);return sig}
function ageScanSignature(rules,flairSubreddits){return`${ageRulesSignature(rules)}:${normalizeFlairSubreddits(flairSubreddits).map(s=>s.toLowerCase()).sort().join(',')}`}
function flairRulesSignature(groups=CFG.groups){const value=groups.map(g=>[g.id,g.label,g.minPosts,[...(g.subreddits||[])].sort(),[...(g.keywords||[])].sort(),[...(g.descKeywords||[])].sort(),normalizeGroupRules(g.rules).sort()]);let h=2166136261,s=JSON.stringify(value);for(let i=0;i<s.length;i++){h^=s.charCodeAt(i);h=Math.imul(h,16777619)}return`${RULE_SCAN_VERSION}:${(h>>>0).toString(36)}`}
function gc(){if(_co)return _co;try{_co=JSON.parse(GM_getValue(AK,'{}'))}catch{_co={}}return _co}
function flushDisk(){if(_cd&&_co){GM_setValue(AK,JSON.stringify(_co));_cd=false}}
setInterval(flushDisk,5000);
function gcu(u){const k=u.toLowerCase(),c=gc(),e=c[k];if(!e)return null;if(e.historyCacheVersion!==HISTORY_CACHE_VERSION||(Date.now()-e.timestamp)/36e5>CFG.cacheDurationHours||e.flairRulesSignature!==flairRulesSignature()||(CFG.showAge&&(e.ageScanVersion!==AGE_SCAN_VERSION||e.ageRulesSignature!==ageScanSignature(CFG.ageRules,CFG.ageFlairSubreddits)))){delete c[k];_cd=true;return null}return e}
function scu(u,sc,bio,kwGroupCounts,kwDisplayHits,ruleGroupHits,groupEvidence,detectedAge,ageEvidence,ageScanVersion,ageRuleSig){gc()[u.toLowerCase()]={subCounts:sc,bio:bio||'',kwGroupCounts:kwGroupCounts||{},kwDisplayHits:kwDisplayHits||[],ruleGroupHits:ruleGroupHits||{},groupEvidence:Array.isArray(groupEvidence)?groupEvidence:[],flairRulesSignature:flairRulesSignature(),historyCacheVersion:HISTORY_CACHE_VERSION,detectedAge:detectedAge||null,ageEvidence:ageEvidence||[],ageScanVersion:ageScanVersion||0,ageRulesSignature:ageRuleSig||'',timestamp:Date.now()};_cd=true}
function clearCache(){_co={};_cd=false;GM_setValue(AK,'{}');uKwHits.clear()}
function flushUser(u){const k=u.toLowerCase(),c=gc();delete c[k];_cd=true;inFlight.delete(k);uLogs.delete(k);uKwHits.delete(k);logU(u,'Cache flushed manually')}

/* Log */
const uLogs=new Map(),uKwHits=new Map();
const _tfmt=new Intl.DateTimeFormat('en-US',{hour12:false,hour:'2-digit',minute:'2-digit',second:'2-digit',fractionalSecondDigits:3});
function logU(u,m){const k=u.toLowerCase();if(!uLogs.has(k))uLogs.set(k,[]);const a=uLogs.get(k),t=_tfmt.format(Date.now());a.push({time:t,message:m});if(a.length>ML)a.shift()}
function getLog(u){return uLogs.get(u.toLowerCase())||[]}

/* ═══════ STYLES ═══════ */
function injectCSS(){
if(document.getElementById('fl-css'))return;
const s=document.createElement('style');s.id='fl-css';
s.textContent=`
.flagger-badge,.flagger-badge *,.subreddit-flagger-debug,.flagger-overlay,.flagger-overlay *{box-sizing:border-box}
@keyframes flaggerPulse{0%,100%{opacity:1}50%{opacity:.35}}
@keyframes flaggerFlairBlinkHard{0%,48%,100%{opacity:1;filter:brightness(1)}49%,92%{opacity:var(--flagger-blink-min,.22);filter:brightness(1.8)}}
@keyframes flaggerFlairBlinkFade{0%,100%{opacity:1;filter:brightness(1)}50%{opacity:var(--flagger-blink-min,.22);filter:brightness(1.8)}}
@keyframes flaggerFadeIn{from{opacity:0;transform:scale(.97)}to{opacity:1;transform:scale(1)}}
@keyframes flaggerSlideUp{from{opacity:0;transform:translateY(6px)}to{opacity:1;transform:translateY(0)}}
.flagger-overlay{position:fixed;inset:0;background:rgba(0,0,0,.55);z-index:1000001;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,'Helvetica Neue',sans-serif;animation:flaggerFadeIn .15s ease}

/* Log popup */
.flog-panel{background:#111119;color:#c8c8d4;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:min(620px,92vw);max-height:80vh;display:flex;flex-direction:column;box-shadow:0 24px 80px rgba(0,0,0,.65);animation:flaggerSlideUp .2s ease}
.flog-header{display:flex;justify-content:space-between;align-items:center;padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.06)}.flog-title{font-size:13px;font-weight:600;color:#e8e8f0}.flog-title span{color:#666;font-weight:400}
.flog-body{overflow-y:auto;padding:0;flex:1}
.flog-summary{padding:14px 18px;border-bottom:1px solid rgba(255,255,255,.05);background:rgba(255,255,255,.015)}
.flog-summary-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;margin-bottom:10px}
.flog-tags-row{display:flex;flex-wrap:wrap;gap:6px;margin-bottom:10px}
.flog-tag-pill{display:inline-flex;align-items:center;gap:5px;padding:3px 10px;border-radius:5px;font-size:11px;font-weight:600;cursor:pointer;position:relative;outline:none;transition:filter .12s,box-shadow .12s}.flog-tag-pill:hover,.flog-tag-pill:focus-visible{filter:brightness(1.12)}.flog-tag-pill.active{box-shadow:0 0 0 2px rgba(255,255,255,.65) !important}
.flog-tag-count{opacity:.7;font-weight:400;font-size:10px}
.flog-tag-tip{display:none;position:fixed;background:#0a0a12;color:#d2d2dc;border:1px solid rgba(255,255,255,.16);border-radius:7px;padding:8px 11px;font-size:11px;font-style:normal;white-space:normal;width:max-content;max-width:min(340px,calc(100vw - 16px));max-height:min(220px,calc(100vh - 16px));overflow:auto;line-height:1.5;z-index:1000011;box-shadow:0 8px 28px rgba(0,0,0,.75);pointer-events:auto;font-weight:400;overflow-wrap:anywhere}
.flog-group-evidence{margin:2px 0 12px;padding:10px;background:rgba(255,255,255,.018);border:1px solid rgba(255,255,255,.06);border-radius:8px}.flog-evidence-head{display:flex;align-items:center;gap:8px;margin-bottom:8px}.flog-evidence-title{font-size:11px;font-weight:700;color:#bbb;flex:1}.flog-evidence-count{font-size:9px;color:#555;font-variant-numeric:tabular-nums}.flog-evidence-item{padding:8px 9px;margin-bottom:5px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.045);border-radius:6px}.flog-evidence-item:last-child{margin-bottom:0}.flog-evidence-meta{display:flex;align-items:center;gap:6px;margin-bottom:4px;min-width:0}.flog-evidence-kind{font-size:8px;font-weight:800;text-transform:uppercase;letter-spacing:.06em;color:#80aee0;background:rgba(50,110,180,.14);padding:2px 5px;border-radius:3px}.flog-evidence-sub{font-size:10px;color:#777;text-decoration:none;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.flog-evidence-sub:hover{color:#bbb;text-decoration:underline}.flog-evidence-time{font-size:9px;color:#3e3e4c;margin-left:auto;white-space:nowrap}.flog-evidence-reason{font-size:9px;color:#7a5262;margin-bottom:4px}.flog-evidence-text{font-size:11px;line-height:1.5;color:#888;white-space:pre-wrap;word-break:break-word}.flog-evidence-empty{padding:14px 8px;text-align:center;font-size:10px;color:#555;font-style:italic}
.flog-no-tags{font-size:11px;color:#444;font-style:italic}
.flog-subs-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;margin-bottom:6px;margin-top:2px}
.flog-sub-row{display:flex;align-items:center;gap:6px;padding:4px 0}
.flog-sub-name{font-size:11px;color:#888;min-width:0;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
.flog-sub-name.watched{font-weight:600}
.flog-sub-pills{display:flex;gap:3px;flex-shrink:0}
.flog-sub-mini{font-size:8px;font-weight:700;padding:1px 5px;border-radius:3px;white-space:nowrap;line-height:1.4}
.flog-sub-bar-wrap{width:80px;height:5px;background:rgba(255,255,255,.04);border-radius:3px;overflow:hidden;flex-shrink:0}.flog-sub-bar{height:100%;border-radius:3px}
.flog-sub-count{font-size:10px;color:#555;width:28px;text-align:right;flex-shrink:0;font-variant-numeric:tabular-nums}
.flog-sub-divider{height:1px;background:rgba(255,255,255,.04);margin:6px 0}
.flog-meta{font-size:10px;color:#333;margin-top:8px}.flog-meta span{color:#555}
.flog-log-section{padding:10px 18px}.flog-log-title{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;margin-bottom:6px}
.flog-entry{display:flex;gap:10px;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.03)}.flog-entry:last-child{border:none}
.flog-time{color:#444;white-space:nowrap;flex-shrink:0;font-size:11px;font-family:'SF Mono',Consolas,monospace;padding-top:1px}
.flog-msg{color:#999;font-size:12px;word-break:break-word;line-height:1.45}
.flog-msg.c-err{color:#d94f4f}.flog-msg.c-ok{color:#3dba6f}.flog-msg.c-info{color:#5494d4}.flog-msg.c-cache{color:#d4a24e}
.flog-empty{color:#333;text-align:center;padding:30px;font-size:12px;font-style:italic}
.flog-footer{padding:10px 18px;border-top:1px solid rgba(255,255,255,.05);display:flex;justify-content:flex-end;gap:8px}

/* Badge */
.flagger-badge{display:inline-flex;align-items:center;gap:4px;vertical-align:middle;cursor:pointer;line-height:1;position:relative;margin-left:6px;flex-shrink:0;overflow:visible}
.flagger-badge-unit{display:inline-flex;flex-direction:column;border-radius:4px;overflow:hidden;line-height:1;max-height:1.4em;flex-shrink:0;position:relative}
.flagger-badge-label{display:block;font-size:10px;font-weight:600;padding:2px 8px 1px;white-space:nowrap;letter-spacing:.01em}
.flagger-badge-bar{display:flex;width:100%;height:4px}.flagger-badge-bar-seg{height:100%;min-width:3px}
.flagger-flair-blink{animation-name:flaggerFlairBlinkHard;animation-duration:var(--flagger-blink-speed,1.15s);animation-timing-function:steps(1,end);animation-iteration-count:infinite}.flagger-flair-blink.flagger-flair-blink-fade{animation-name:flaggerFlairBlinkFade;animation-timing-function:ease-in-out}
@media (prefers-reduced-motion:reduce){.flagger-flair-blink{animation:none}}
.flagger-badge-tooltip{display:none;position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);background:#111119;color:#c8c8d4;border:1px solid rgba(255,255,255,.08);border-radius:8px;padding:8px 12px;font-size:11px;white-space:nowrap;z-index:99999;box-shadow:0 8px 24px rgba(0,0,0,.5);pointer-events:none}
.flagger-badge-tooltip::after{content:'';position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:rgba(255,255,255,.08)}.flagger-badge-tooltip.tt-below::after{top:auto;bottom:100%;border-top-color:transparent;border-bottom-color:rgba(255,255,255,.08)}.flagger-badge:hover .flagger-badge-tooltip{display:block}
.flagger-tt-row{display:flex;align-items:center;gap:6px;padding:2px 0}.flagger-tt-swatch{width:7px;height:7px;border-radius:2px;flex-shrink:0}.flagger-tt-name{font-size:11px}.flagger-tt-count{color:#555;margin-left:auto;padding-left:14px;font-variant-numeric:tabular-nums;font-size:11px}
.flagger-tt-desc{font-size:10px;color:#666;font-style:italic;padding:2px 0 4px;border-bottom:1px solid rgba(255,255,255,.05);margin-bottom:2px;white-space:normal;max-width:260px;line-height:1.3}

/* Debug flair */
.subreddit-flagger-debug{display:inline-block;font-size:9px;font-weight:600;padding:1px 7px;border-radius:9999px;margin-left:5px;vertical-align:middle;line-height:1.6;cursor:pointer;white-space:nowrap;font-family:'SF Mono',Consolas,monospace;letter-spacing:.01em;flex-shrink:0;transition:background .3s,color .3s,border-color .3s}

/* Shared */
.fl-close{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.06);color:#555;width:28px;height:28px;border-radius:7px;cursor:pointer;font-size:15px;display:flex;align-items:center;justify-content:center;transition:all .12s}.fl-close:hover{background:rgba(220,50,50,.15);color:#d94f4f;border-color:rgba(220,50,50,.2)}
.fl-btn{padding:7px 14px;border:none;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;transition:all .12s;font-family:inherit;letter-spacing:.01em}.fl-btn:active{transform:scale(.97)}
.fl-btn-danger{background:rgba(200,50,40,.12);color:#d94f4f;border:1px solid rgba(200,50,40,.15)}.fl-btn-danger:hover{background:rgba(200,50,40,.2)}
.fl-btn-success{background:rgba(30,132,73,.2);color:#3dba6f;border:1px solid rgba(30,132,73,.25)}.fl-btn-success:hover{background:rgba(30,132,73,.3)}
.fl-btn-ghost{background:rgba(255,255,255,.03);color:#777;border:1px solid rgba(255,255,255,.06)}.fl-btn-ghost:hover{background:rgba(255,255,255,.06);color:#aaa}
.fl-btn-sm{padding:4px 10px;font-size:10px}
.fl-btn-warn{background:rgba(200,150,40,.12);color:#d4a24e;border:1px solid rgba(200,150,40,.15)}.fl-btn-warn:hover{background:rgba(200,150,40,.2)}
.fl-btn-primary{background:rgba(40,100,180,.2);color:#5ca8e6;border:1px solid rgba(40,100,180,.2)}.fl-btn-primary:hover{background:rgba(40,100,180,.3)}

/* Settings panel */
.fs-panel{background:#0e0e18;color:#c8c8d4;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:min(660px,94vw);max-height:88vh;display:flex;flex-direction:column;box-shadow:0 32px 100px rgba(0,0,0,.7);animation:flaggerSlideUp .2s ease}
.fs-header{display:flex;justify-content:space-between;align-items:center;padding:18px 22px;border-bottom:1px solid rgba(255,255,255,.06)}.fs-header-title{font-size:15px;font-weight:700;color:#e8e8f0;letter-spacing:-.02em}.fs-header-ver{font-size:11px;color:#444;font-weight:400;margin-left:8px}

/* Tabs */
.fs-tabs{display:flex;gap:0;border-bottom:1px solid rgba(255,255,255,.06);padding:0 22px}
.fs-tab{padding:10px 18px;font-size:11px;font-weight:600;color:#555;cursor:pointer;border-bottom:2px solid transparent;transition:all .15s;letter-spacing:.02em}
.fs-tab:hover{color:#888}
.fs-tab.active{color:#e0e0ec;border-bottom-color:#3dba6f}
.fs-tab-content{display:none}
.fs-tab-content.active{display:block}
.fs-doc-lead{font-size:11px;line-height:1.55;color:#777;margin:-2px 0 14px}.fs-doc-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}.fs-doc-card{padding:12px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:8px}.fs-doc-card-wide{grid-column:1/-1}.fs-doc-title{font-size:12px;font-weight:700;color:#bbb;margin-bottom:8px}.fs-doc-rule{padding:7px 0;border-top:1px solid rgba(255,255,255,.04)}.fs-doc-rule:first-of-type{border-top:none;padding-top:0}.fs-doc-rule-name{font-size:10px;font-weight:700;color:#888;margin-bottom:3px}.fs-doc-rule-text{font-size:10px;line-height:1.5;color:#555}.fs-doc-code{display:inline-block;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:10px;color:#b18ae8;background:rgba(130,80,220,.12);border:1px solid rgba(130,80,220,.2);border-radius:4px;padding:1px 5px;margin:1px 2px 1px 0;white-space:nowrap}.fs-doc-note{margin-top:8px;padding:8px 10px;border-left:2px solid #d19532;background:rgba(209,149,50,.06);font-size:10px;line-height:1.5;color:#806a46}@media(max-width:560px){.fs-doc-grid{grid-template-columns:1fr}.fs-doc-card-wide{grid-column:auto}}

.fs-body{overflow-y:auto;padding:18px 22px;flex:1}.fs-section{margin-bottom:22px}
.fs-section-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;margin-bottom:10px;padding-bottom:6px;border-bottom:1px solid rgba(255,255,255,.04)}
.fs-opt-row{display:flex;align-items:center;justify-content:space-between;padding:11px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:8px;margin-bottom:6px}.fs-opt-text{font-size:12px;color:#aaa}.fs-opt-sub{font-size:10px;color:#444;margin-top:2px}
.fs-toggle{position:relative;width:36px;height:20px;background:rgba(255,255,255,.08);border-radius:10px;cursor:pointer;transition:background .2s;flex-shrink:0;border:1px solid rgba(255,255,255,.06)}.fs-toggle.on{background:#1a7a42;border-color:#27ae60}.fs-toggle::after{content:'';position:absolute;top:2px;left:2px;width:14px;height:14px;background:#ccc;border-radius:50%;transition:transform .2s}.fs-toggle.on::after{transform:translateX(16px);background:#fff}
.fs-cache-row{display:flex;align-items:center;gap:10px;padding:11px 14px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:8px}.fs-cache-info{font-size:12px;color:#666;flex:1}
.fs-card{background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:10px;padding:14px 16px;margin-bottom:8px;transition:border-color .15s}.fs-card:hover{border-color:rgba(255,255,255,.1)}
.fs-card-head{display:flex;align-items:center;gap:10px;margin-bottom:10px}
.fs-color-tools{display:inline-flex;align-items:center;gap:3px;height:20px;flex:0 0 auto}.fs-card-swatch{display:block;width:20px;height:20px;min-width:20px;margin:0;border-radius:4px;border:2px solid rgba(255,255,255,.12);cursor:pointer;padding:0;appearance:none;-webkit-appearance:none}.fs-card-swatch::-webkit-color-swatch-wrapper{padding:0}.fs-card-swatch::-webkit-color-swatch{border:none;border-radius:2px}
.fs-advanced-btn{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;min-width:20px;margin:0;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.03);color:transparent;cursor:pointer;padding:0;font-size:0;line-height:0;flex:0 0 20px}.fs-advanced-btn::before{content:'';width:5px;height:5px;border-top:1.5px solid #777;border-right:1.5px solid #777;transform:rotate(45deg);margin-left:-2px}.fs-advanced-btn:hover{background:rgba(255,255,255,.08)}.fs-advanced-btn:hover::before{border-color:#ddd}
.fs-card-name{flex:1;background:none;border:none;outline:none;color:#e0e0ec;font-size:13px;font-weight:600;font-family:inherit;padding:0;border-bottom:1px solid transparent;transition:border-color .15s}.fs-card-name:focus{border-bottom-color:rgba(255,255,255,.15)}.fs-card-name::placeholder{color:#333}
.fs-card-del{background:none;border:none;color:#333;cursor:pointer;font-size:14px;padding:4px 6px;border-radius:4px;transition:all .12s}.fs-card-del:hover{color:#d94f4f;background:rgba(200,50,50,.1)}
.fs-card-desc{width:100%;background:none;border:none;border-bottom:1px solid rgba(255,255,255,.04);outline:none;color:#777;font-size:11px;font-family:inherit;padding:2px 0 4px;margin-bottom:8px;transition:border-color .15s}.fs-card-desc:focus{border-bottom-color:rgba(255,255,255,.15)}.fs-card-desc::placeholder{color:#2a2a3a}
.fs-card-desc-area{display:block;min-height:34px;max-height:120px;line-height:1.45;white-space:pre-wrap;overflow-wrap:anywhere;overflow-x:hidden;resize:vertical;box-sizing:border-box}
.fs-row{display:flex;gap:8px;align-items:center;margin-bottom:8px}.fs-lbl{font-size:10px;color:#444;width:70px;flex-shrink:0;text-align:right;text-transform:uppercase;letter-spacing:.06em;font-weight:600}
.fs-inp{background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:5px;padding:5px 9px;color:#bbb;font-size:11px;flex:1;font-family:inherit;outline:none;transition:border-color .15s}.fs-inp:focus{border-color:rgba(90,150,220,.4)}.fs-inp-sm{width:52px;flex:none;text-align:center}
.fs-inp-color{width:30px;height:26px;padding:2px;border:1px solid rgba(255,255,255,.08);border-radius:5px;background:rgba(255,255,255,.03);cursor:pointer;flex:none;appearance:none;-webkit-appearance:none}.fs-inp-color::-webkit-color-swatch-wrapper{padding:0}.fs-inp-color::-webkit-color-swatch{border:none;border-radius:3px}
.fs-chips{display:flex;flex-wrap:wrap;gap:4px;min-height:28px;padding:4px 6px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px;flex:1;align-items:center;cursor:text;transition:border-color .15s}.fs-chips:focus-within{border-color:rgba(90,150,220,.4)}
.fs-chip{display:inline-flex;align-items:center;gap:2px;background:rgba(255,255,255,.06);color:#999;padding:2px 7px;border-radius:4px;font-size:10px;white-space:nowrap}.fs-chip-x{cursor:pointer;color:#555;font-size:12px;line-height:1;margin-left:3px;transition:color .12s}.fs-chip-x:hover{color:#d94f4f}
.fs-chip-inp{background:none;border:none;outline:none;color:#bbb;font-size:10px;min-width:80px;flex:1;padding:2px;font-family:inherit}.fs-chip-inp::placeholder{color:#333}.fs-chip-wild{background:rgba(230,150,20,.15);color:#e09030;border:1px solid rgba(230,150,20,.3)}.fs-chip-inp-wild{color:#e09030}.fs-chip-rx{background:rgba(130,80,220,.15);color:#a06ee0;border:1px solid rgba(130,80,220,.3);cursor:pointer}.fs-chip-inp-rx{color:#a06ee0}.fs-chip-kw{background:rgba(20,160,160,.15);color:#2ccbcb;border:1px solid rgba(20,160,160,.3)}.fs-chip-rule{height:20px;line-height:14px;box-sizing:border-box;background:rgba(210,70,105,.14);color:#dc718e;border:1px solid rgba(210,70,105,.28)}.fs-chip-new{background:rgba(50,180,100,.2);color:#3db86e;border:1px solid rgba(50,180,100,.35)}
.fs-rule-select{appearance:auto;-webkit-appearance:auto;flex:0 0 84px;width:84px;min-width:84px;height:20px;cursor:pointer;padding:1px 16px 1px 6px;font-size:10px;line-height:16px;border-radius:4px}.fs-rule-card{padding:14px 16px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:9px;margin-bottom:8px}.fs-rule-head{display:flex;align-items:center;gap:8px;margin-bottom:6px}.fs-rule-name{font-size:12px;font-weight:700;color:#ccc}.fs-rule-built-in{font-size:8px;font-weight:700;text-transform:uppercase;letter-spacing:.08em;color:#a85672;background:rgba(210,70,105,.1);border:1px solid rgba(210,70,105,.18);padding:2px 5px;border-radius:3px}.fs-rule-desc{font-size:10px;color:#666;line-height:1.5}.fs-rule-scopes{display:flex;flex-wrap:wrap;gap:4px;margin-top:9px}.fs-rule-scope{font-size:9px;color:#777;background:rgba(255,255,255,.035);border:1px solid rgba(255,255,255,.055);padding:2px 6px;border-radius:4px}.fs-rule-usage{font-size:10px;color:#444;margin-top:9px}
.fs-preview{display:inline-flex;flex-direction:column;border-radius:4px;overflow:hidden;margin-left:auto;flex-shrink:0;line-height:1}.fs-preview-label{font-size:9px;font-weight:600;padding:2px 7px 1px;white-space:nowrap}
.fs-footer{display:flex;justify-content:space-between;align-items:center;padding:14px 22px;border-top:1px solid rgba(255,255,255,.06)}.fs-footer-hint{font-size:10px;color:#2a2a36}.fs-footer-btns{display:flex;gap:8px}
.flagger-add-btn{display:inline-flex;align-items:center;justify-content:center;width:26px;height:26px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:50%;cursor:pointer;color:#666;font-size:15px;font-weight:400;margin-left:6px;flex-shrink:0;transition:all .15s;font-family:-apple-system,sans-serif;line-height:1;padding:0;vertical-align:middle}.flagger-add-btn:hover{background:rgba(90,150,220,.15);color:#5ca8e6;border-color:rgba(90,150,220,.3)}
.flagger-join-wrap{display:inline-flex !important;align-items:center !important;gap:0 !important;flex-shrink:0}
.flagger-mini-overlay{position:fixed;inset:0;background:rgba(0,0,0,.5);z-index:1000002;display:flex;align-items:center;justify-content:center;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;animation:flaggerFadeIn .12s ease}
.flagger-mini-panel{background:#0e0e18;border:1px solid rgba(255,255,255,.06);border-radius:12px;width:min(420px,90vw);box-shadow:0 24px 80px rgba(0,0,0,.7);animation:flaggerSlideUp .18s ease}
.flagger-mini-header{padding:16px 18px 12px;border-bottom:1px solid rgba(255,255,255,.05)}.flagger-mini-title{font-size:13px;font-weight:600;color:#e0e0ec;margin-bottom:2px}.flagger-mini-sub{font-size:11px;color:#555}
.flagger-mini-body{padding:14px 18px}.flagger-mini-footer{padding:12px 18px;border-top:1px solid rgba(255,255,255,.05);display:flex;justify-content:flex-end;gap:8px}
.fs-ie-row{display:flex;gap:8px;margin-bottom:8px}.fs-ie-textarea{width:100%;min-height:80px;max-height:200px;background:rgba(255,255,255,.03);border:1px solid rgba(255,255,255,.06);border-radius:6px;padding:8px 10px;color:#aaa;font-size:10px;font-family:'SF Mono',Consolas,monospace;resize:vertical;outline:none;transition:border-color .15s;line-height:1.5}.fs-ie-textarea:focus{border-color:rgba(90,150,220,.4)}
.fs-ie-status{font-size:10px;margin-top:4px;min-height:14px}.fs-ie-status.ok{color:#3dba6f}.fs-ie-status.err{color:#d94f4f}
.fstyle-overlay{z-index:1000012;background:rgba(0,0,0,.72)}.fstyle-panel{width:min(480px,92vw);background:#111119;border:1px solid rgba(255,255,255,.08);border-radius:12px;box-shadow:0 28px 90px rgba(0,0,0,.75);overflow:hidden}.fstyle-body{padding:18px 20px}.fstyle-preview-wrap{display:flex;align-items:center;justify-content:center;min-height:62px;margin-bottom:16px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.05);border-radius:8px}.fstyle-preview{display:inline-flex;padding:4px 12px;border-radius:5px;font-size:12px;font-weight:700;line-height:1.2}.fstyle-row{display:flex;align-items:center;gap:10px;padding:9px 0;border-bottom:1px solid rgba(255,255,255,.04)}.fstyle-row:last-child{border-bottom:none}.fstyle-row-text{flex:1}.fstyle-row-title{font-size:11px;color:#aaa}.fstyle-row-sub{font-size:9px;color:#444;margin-top:2px}.fstyle-select{appearance:auto;-webkit-appearance:auto;cursor:pointer;max-width:160px}.fstyle-footer{display:flex;justify-content:flex-end;gap:8px;padding:12px 20px;border-top:1px solid rgba(255,255,255,.05)}
.fstyle-effect-options{margin:0 0 4px 18px;padding:2px 10px 4px;border-left:2px solid rgba(255,255,255,.06);background:rgba(255,255,255,.012);border-radius:0 6px 6px 0}.fstyle-range{width:132px;accent-color:#5ca8e6}.fstyle-range-value{font-size:10px;color:#777;width:42px;text-align:right;font-variant-numeric:tabular-nums}
.fsub-panel{background:#0e0e18;color:#c8c8d4;border:1px solid rgba(255,255,255,.06);border-radius:14px;width:min(680px,94vw);max-height:85vh;display:flex;flex-direction:column;box-shadow:0 32px 100px rgba(0,0,0,.7);animation:flaggerSlideUp .2s ease}
.fsub-header{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;border-bottom:1px solid rgba(255,255,255,.06)}.fsub-title{font-size:13px;font-weight:600;color:#e8e8f0}.fsub-title span{color:#666;font-weight:400}
.fsub-body{overflow-y:auto;padding:16px 20px;flex:1}
.fsub-section-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;margin:14px 0 6px;padding-bottom:4px;border-bottom:1px solid rgba(255,255,255,.04)}.fsub-section-label:first-child{margin-top:0}
.fsub-post-row{padding:9px 12px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:7px;margin-bottom:4px;transition:border-color .15s}.fsub-post-row:hover{border-color:rgba(255,255,255,.1)}
.fsub-post-title{display:block;color:#c8c8d4;font-size:12px;font-weight:500;text-decoration:none;line-height:1.4;margin-bottom:3px}.fsub-post-title:hover{color:#fff;text-decoration:underline}
.fsub-post-meta{font-size:10px;color:#555}
.fsub-loading,.fsub-empty{text-align:center;padding:28px;font-size:12px;color:#444;font-style:italic}
.fsub-load-btn{display:block;width:100%;margin-top:12px;text-align:center;box-sizing:border-box}
.fsub-sort-bar{display:flex;align-items:center;gap:6px;flex-wrap:wrap;margin-bottom:8px}.fsub-count-label{font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:.1em;color:#3a3a4a;flex:1;min-width:80px}
.fsub-sort-btn.active{background:rgba(40,100,180,.2) !important;color:#5ca8e6 !important;border-color:rgba(40,100,180,.3) !important}
.fsub-full-section{margin-top:14px;padding-top:14px;border-top:1px solid rgba(255,255,255,.06)}
.flog-sub-name.fsub-clickable{cursor:pointer;text-decoration:underline dotted;text-underline-offset:2px}.flog-sub-name.fsub-clickable:hover{filter:brightness(1.5)}
.fs-card-collapse{background:none;border:none;color:#3a3a4a;cursor:pointer;font-size:10px;padding:3px 6px;border-radius:4px;transition:all .12s;flex-shrink:0;line-height:1;font-family:inherit;user-select:none}.fs-card-collapse:hover{color:#aaa;background:rgba(255,255,255,.05)}
.fsub-type-bar{display:flex;gap:6px;padding:10px 20px;border-bottom:1px solid rgba(255,255,255,.06);background:rgba(255,255,255,.01)}
.fsub-type-btn{padding:4px 12px;border:1px solid rgba(255,255,255,.06);border-radius:5px;font-size:10px;font-weight:600;cursor:pointer;background:rgba(255,255,255,.02);color:#555;transition:all .12s;font-family:inherit;letter-spacing:.02em}.fsub-type-btn:hover{color:#aaa;background:rgba(255,255,255,.04)}
.fsub-type-btn.both.active{background:rgba(255,255,255,.06);color:#ccc;border-color:rgba(255,255,255,.1)}
.fsub-type-btn.posts.active{background:rgba(40,80,200,.2);color:#6aabf0;border-color:rgba(40,80,200,.3)}
.fsub-type-btn.comments.active{background:rgba(30,140,70,.18);color:#3dba6f;border-color:rgba(30,140,70,.28)}
.fsub-submission-row{background:rgba(25,55,150,.12) !important;border-color:rgba(40,80,200,.18) !important}
.fsub-comment-row{background:rgba(20,90,45,.12) !important;border-color:rgba(30,140,70,.18) !important}
.fsub-comment-body{font-size:11px;color:#b8b8cc;line-height:1.45;margin-bottom:5px}
.fsub-comment-link{display:block;font-size:10px;color:#555;text-decoration:none;margin-bottom:3px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fsub-comment-link:hover{color:#5ca8e6;text-decoration:underline}
`;document.head.appendChild(s)}
injectCSS();

/* ═══════ DEBUG FLAIR ═══════ */
function applyDbg(n,d){n.textContent=d.l;n.style.background=d.bg;n.style.color=d.c;n.style.border=`1px solid ${d.c}22`;n.style.animation=d.p?'flaggerPulse 1.5s ease-in-out infinite':'none'}
function setDbg(e,st,u){const id=getEid(e),d=DBG[st],nx=e.nextElementSibling;if(nx?.classList.contains('subreddit-flagger-debug')&&nx.getAttribute(EA)===id){nx.setAttribute('data-flagger-state',st);applyDbg(nx,d);return nx}const f=e.parentNode?.querySelector(`.subreddit-flagger-debug[${EA}="${id}"]`);if(f){f.setAttribute('data-flagger-state',st);applyDbg(f,d);return f}const n=el('span','subreddit-flagger-debug');n.setAttribute('data-flagger-user',u);n.setAttribute(EA,id);n.setAttribute('data-flagger-state',st);n.title=`u/${u} \u2014 click for log`;applyDbg(n,d);n.onclick=ev=>{ev.preventDefault();ev.stopPropagation();showLog(u)};e.after(n);return n}
function rmDbg(e){if(CFG.persistDebug)return;const id=getEid(e),nx=e.nextElementSibling;if(nx?.classList.contains('subreddit-flagger-debug')&&nx.getAttribute(EA)===id){nx.remove();return}e.parentNode?.querySelector(`.subreddit-flagger-debug[${EA}="${id}"]`)?.remove()}

/* ═══════ BADGE ═══════ */
function makeBadgeUnit(tags,ageSuffix=''){const unit=el('span','flagger-badge-unit'),lb=el('span','flagger-badge-label');lb.textContent=tags.map(t=>t.label).join(' + ')+ageSuffix;if(tags.length===1){const t=tags[0];lb.style.color=t.textColor||'#fff';applyFlairPattern(lb,t);applyFlairEffects(unit,t)}else{lb.style.background='#1e1e2c';lb.style.color='#ccc';const fx=tags.find(t=>{const s=normalizeFlairStyle(t.flairStyle);return s.glow||s.blink});if(fx)applyFlairEffects(unit,fx)}unit.appendChild(lb);if(tags.length>1){const total=tags.reduce((sum,t)=>sum+Math.max(0,t.count),0),br=el('span','flagger-badge-bar');for(const t of tags){const sg=el('span','flagger-badge-bar-seg');applyFlairPattern(sg,t);sg.style.width=total?`${(Math.max(0,t.count)/total)*100}%`:`${100/tags.length}%`;br.appendChild(sg)}unit.appendChild(br)}return unit}
function mkBadge(tags,u,detectedAge){if(!tags.length)return null;const b=el('span','flagger-badge');b.setAttribute('data-flagger-user',u);const ageSuffix=CFG.showAge&&detectedAge?` (${detectedAge.age}${detectedAge.uncertain?'?':''})`:'',combined=tags.filter(t=>!normalizeFlairStyle(t.flairStyle).separate),separate=tags.filter(t=>normalizeFlairStyle(t.flairStyle).separate);let ageUsed=false;if(combined.length){b.appendChild(makeBadgeUnit(combined,ageSuffix));ageUsed=true}for(const t of separate){b.appendChild(makeBadgeUnit([t],ageUsed?'':ageSuffix));ageUsed=true}const tp=el('div','flagger-badge-tooltip'),ds=tags.map(t=>t.description).filter(Boolean).join(' / ');if(ds)tp.appendChild(Object.assign(el('div','flagger-tt-desc'),{textContent:ds}));for(const t of tags){const r=el('div','flagger-tt-row'),sw=el('span','flagger-tt-swatch'),name=el('span','flagger-tt-name'),count=el('span','flagger-tt-count');applyFlairPattern(sw,t);name.textContent=t.label;count.textContent=`${t.count} post${t.count!==1?'s':''}`;r.appendChild(sw);r.appendChild(name);r.appendChild(count);tp.appendChild(r)}b.appendChild(tp);b.onclick=e=>{e.preventDefault();e.stopPropagation();showLog(u)};
b.addEventListener('mouseenter',()=>{const tp=b.querySelector('.flagger-badge-tooltip');if(!tp)return;const pv=tp.style.visibility,pd=tp.style.display;tp.style.visibility='hidden';tp.style.display='block';const bR=b.getBoundingClientRect(),tw=tp.offsetWidth,th=tp.offsetHeight;tp.style.display=pd;tp.style.visibility=pv;const vw=window.innerWidth;let lft=bR.left+bR.width/2-tw/2;lft=Math.max(8,Math.min(lft,vw-tw-8));const above=bR.top-th-8>=8;tp.style.position='fixed';tp.style.left=lft+'px';tp.style.top=(above?bR.top-th-8:bR.bottom+8)+'px';tp.style.bottom='auto';tp.style.transform='none';above?tp.classList.remove('tt-below'):tp.classList.add('tt-below');});
b.addEventListener('mouseleave',()=>{const tp=b.querySelector('.flagger-badge-tooltip');if(!tp)return;tp.style.position='';tp.style.left='';tp.style.top='';tp.style.bottom='';tp.style.transform='';tp.classList.remove('tt-below');});
return b}
function inject(e,tags,u,detectedAge){if(!tags.length)return;let cur=e.nextSibling;while(cur){if(cur.nodeType===1&&cur.classList?.contains('flagger-badge')&&cur.getAttribute('data-flagger-user')===u){cur.remove();break}if(cur.nodeType===1&&!cur.classList?.contains('subreddit-flagger-debug'))break;cur=cur.nextSibling}const b=mkBadge(tags,u,detectedAge);if(b)e.after(b)}

/* ═══════ TAG MATCHING ═══════ */
function computeAllKwData(texts){const kwGroupCounts={},kwDisplayHits=[];for(const g of compiledKeywordGroups){const kwHitCounts=new Map();let groupTotal=0;for(const txt of texts){let anyHit=false;for(const m of g.matchers)if(textMatcherHits(m,txt)){kwHitCounts.set(m.raw,(kwHitCounts.get(m.raw)||0)+1);anyHit=true}if(anyHit)groupTotal++}if(groupTotal>0)kwGroupCounts[g.id]=groupTotal;for(const m of g.matchers){const count=kwHitCounts.get(m.raw)||0;if(count)kwDisplayHits.push({display:m.display,count,groupLabel:g.label,groupColor:g.color,groupTextColor:g.textColor})}}return{kwGroupCounts,kwDisplayHits:kwDisplayHits.sort((a,b)=>b.count-a.count)}}
function builtInRuleHitsText(rule,text){if(!text)return false;for(const rx of rule.patterns){rx.lastIndex=0;if(rx.test(text))return true}return false}
function computeRuleGroupHits(texts,bio=''){const hits={};if(!compiledRuleGroups.length)return hits;const content=bio?[bio,...texts]:texts;for(const group of compiledRuleGroups){const matched=[];for(const rule of group.rules)if(content.some(text=>builtInRuleHitsText(rule,text)))matched.push(rule.id);if(matched.length)hits[group.id]=matched}return hits}
const _ageRuleCache=new Map(),_ageRuleObjectCache=new WeakMap();
function normalizeAgeRules(raw){const d=DEFAULT_AGE_RULES,r=raw&&typeof raw==='object'?raw:{},num=(v,lo,hi,fb)=>Math.min(hi,Math.max(lo,Number.isFinite(Number(v))?Math.round(Number(v)):fb)),arr=k=>Array.isArray(r[k])?r[k].map(String).map(s=>s.trim()).filter(Boolean):[...d[k]],required=(a,p)=>a.includes(p)?a:[...a,p];const minAge=num(r.minAge,10,99,d.minAge),maxAge=num(r.maxAge,minAge,99,d.maxAge);return{numberPattern:typeof r.numberPattern==='string'&&r.numberPattern.trim()?r.numberPattern.trim():d.numberPattern,minAge,maxAge,underageMax:num(r.underageMax,minAge,maxAge,d.underageMax),nearbyWords:num(r.nearbyWords,0,20,d.nearbyWords),strongPatterns:arr('strongPatterns'),uncertainPatterns:required(arr('uncertainPatterns'),GENDER_FIRST_AGE_PATTERN),bioPatterns:arr('bioPatterns'),bioUniquePatterns:required(arr('bioUniquePatterns'),GENDER_FIRST_AGE_PATTERN)}}
function compileAgeRules(raw){if(raw&&typeof raw==='object'&&_ageRuleObjectCache.has(raw))return _ageRuleObjectCache.get(raw);const rules=normalizeAgeRules(raw),sig=ageRulesSignature(rules);if(_ageRuleCache.has(sig)){const hit=_ageRuleCache.get(sig);if(raw&&typeof raw==='object')_ageRuleObjectCache.set(raw,hit);return hit}const compile=(name,a)=>a.map((s,i)=>{try{return new RegExp(s,'i')}catch(e){throw new Error(`${name}[${i}]: ${e.message}`)}});let numberPrefilter,numberExtractor;try{numberPrefilter=new RegExp(`(?:^|\\D)(?:${rules.numberPattern})(?:$|\\D)`,'i');numberExtractor=new RegExp(`(?:^|\\D)(${rules.numberPattern})(?=$|\\D)`,'gi')}catch(e){throw new Error(`numberPattern: ${e.message}`)}const c={rules,numberPrefilter,numberExtractor,strong:compile('strongPatterns',rules.strongPatterns),uncertain:compile('uncertainPatterns',rules.uncertainPatterns),bio:compile('bioPatterns',rules.bioPatterns),bioUnique:compile('bioUniquePatterns',rules.bioUniquePatterns)};_ageRuleCache.set(sig,c);_ageRuleObjectCache.set(rules,c);if(raw&&typeof raw==='object')_ageRuleObjectCache.set(raw,c);return c}
function ageFromMatch(m,c,uncertain,source,rule='regex'){const n=parseInt(m?.groups?.age??m?.[1],10);if(!Number.isInteger(n)||n<c.rules.minAge||n>c.rules.maxAge)return null;const matched=m[0]||String(n),start=m.index||0;return{age:n,uncertain,underage:n<=c.rules.underageMax,source,rule,matchStart:start,matchEnd:start+matched.length,matchText:matched}}
function isRejectedAgeMatch(text,r){
  if(!r)return false;
  const tokenIndex=(r.matchText||'').indexOf(String(r.age)),start=r.matchStart+Math.max(0,tokenIndex),end=start+String(r.age).length,before=text.slice(Math.max(0,start-120),start),after=text.slice(end,end+80);
  if(/\b(?:former(?:ly)?|ex|previously|used\s+to\s+be|my\s+age\s+was|(?:i|he|she|they|we|you)\s+(?:was|were)|when\s+(?:i|he|she|they|we|you)\s+(?:was|were)|back\s+when(?:\s+(?:i|he|she|they|we|you)\s+(?:was|were))?|at\s+(?:the\s+)?age\s+of)\s*(?:a\s+)?[-:]?\s*$/i.test(before))return true;
  if(/\bfor\s*$|[$€£]\s*$/i.test(before))return true;
  if(/^\s*(?:stone|stones|inches?|inch|lbs?|pounds?|kg|kilograms?|cm|centimet(?:er|re)s?|feet|foot|ft)\b/i.test(after))return true;
  if(/^\s*(?:m\s*illions?|millions?|dollars?|bucks?|usd|eur|gbp)\b/i.test(after))return true;
  return false
}
function matchAgePatterns(text,patterns,c,uncertain,source,ruleSet){for(let i=0;i<patterns.length;i++){const base=patterns[i],rx=new RegExp(base.source,base.flags.includes('g')?base.flags:base.flags+'g');let m;while((m=rx.exec(text))!==null){const r=ageFromMatch(m,c,uncertain,source,`${ruleSet}[${i}]`);if(r&&!isRejectedAgeMatch(text,r))return r;if(!m[0].length)rx.lastIndex++}}return null}
function extractAgeNumbers(text,c){const out=[];c.numberExtractor.lastIndex=0;let m;while((m=c.numberExtractor.exec(text))!==null){const n=parseInt(m[1],10);if(Number.isInteger(n)&&n>=c.rules.minAge&&n<=c.rules.maxAge)out.push(n);if(!m[0].length)c.numberExtractor.lastIndex++}return out}
function nearbyMyAge(text,c,source){for(const sm of text.matchAll(/[^.!?;\n]+/g)){const sentence=sm[0],tokens=[...sentence.matchAll(/[a-z]+|\d{2}/gi)].map((m,i)=>({v:m[0].toLowerCase(),i,start:m.index||0,end:(m.index||0)+m[0].length})),my=tokens.filter(t=>t.v==='my'),ageWord=tokens.filter(t=>t.v==='age'),nums=tokens.filter(t=>/^\d{2}$/.test(t.v)).map(t=>({...t,n:parseInt(t.v,10)})).filter(t=>t.n>=c.rules.minAge&&t.n<=c.rules.maxAge);for(const n of nums)for(const mt of my)for(const at of ageWord){const gap=Math.max(n.i,mt.i,at.i)-Math.min(n.i,mt.i,at.i)+1-3;if(gap<=c.rules.nearbyWords){if(/\b(?:not|isn['’]?t|wasn['’]?t|isnt|wasnt)\b/i.test(sentence))continue;const uncertain=/\b(?:about|around|almost|nearly|roughly|probably|maybe|guess)\b/i.test(sentence),start=(sm.index||0)+n.start,end=(sm.index||0)+n.end,r={age:n.n,uncertain,underage:n.n<=c.rules.underageMax,source,rule:'nearbyWords',matchStart:start,matchEnd:end,matchText:text.slice(start,end)};if(!isRejectedAgeMatch(text,r))return r}}}return null}
function getAgeCompiler(raw,strict=false){try{return compileAgeRules(raw)}catch(e){if(strict)throw e;return compileAgeRules(DEFAULT_AGE_RULES)}}
function hasAgeNumber(text,rawRules=CFG.ageRules){return getAgeCompiler(rawRules).numberPrefilter.test(text)}
function analyzeAge(ageCandidates,bio='',ageFlairs=[],rawRules=CFG.ageRules){
  const c=getAgeCompiler(rawRules),evidence=[];
  function add(r,text,meta={}){
    if(!r)return;
    const maxLen=Math.max(700,r.matchEnd-r.matchStart+160);let from=0,to=text.length;
    if(text.length>maxLen){from=Math.max(0,Math.min(r.matchStart-220,text.length-maxLen));to=from+maxLen}
    const pre=from?'…':'',post=to<text.length?'…':'',stored=pre+text.slice(from,to)+post,offset=pre.length-from;
    evidence.push({...r,text:stored,matchStart:r.matchStart+offset,matchEnd:r.matchEnd+offset,...meta})
  }
  if(bio&&c.numberPrefilter.test(bio)){
    let r=matchAgePatterns(bio,c.strong,c,false,'bio','strongPatterns')||nearbyMyAge(bio,c,'bio')||matchAgePatterns(bio,c.bio,c,false,'bio','bioPatterns');
    if(!r){const nums=extractAgeNumbers(bio,c);if(nums.length===1)r=matchAgePatterns(bio,c.bioUnique,c,false,'bio','bioUniquePatterns')}
    if(!r)r=matchAgePatterns(bio,c.uncertain,c,true,'bio','uncertainPatterns');add(r,bio)
  }
  for(const candidate of ageCandidates){
    const item=typeof candidate==='string'?{body:candidate}:candidate||{},text=item.body||'';if(!text)continue;
    const r=matchAgePatterns(text,c.strong,c,false,'comment','strongPatterns')||nearbyMyAge(text,c,'comment')||matchAgePatterns(text,c.uncertain,c,true,'comment','uncertainPatterns');
    add(r,text,{permalink:item.permalink||'',subreddit:item.subreddit||'',createdUtc:item.createdUtc||item.created_utc||0})
  }
  const seenFlairs=new Set(),now=Math.floor(Date.now()/1000),maxFreshAge=365*24*60*60;
  for(const item of ageFlairs){
    const raw=typeof item==='string'?item:item?.flair,flair=String(raw||'').trim(),subreddit=String(typeof item==='string'?'teenagers':item?.subreddit||'teenagers').replace(/^r\//i,'');if(!flair)continue;
    const key=`${subreddit.toLowerCase()}\n${flair.toLowerCase()}`;if(seenFlairs.has(key))continue;seenFlairs.add(key);
    const fm=flair.match(AGE_FLAIR_PATTERN),age=parseInt(fm?.[1]??fm?.[2],10);if(!fm||!Number.isInteger(age)||age<c.rules.minAge||age>c.rules.maxAge)continue;
    const createdUtc=typeof item==='string'?0:Number(item?.createdUtc||item?.created_utc)||0,freshFlair=createdUtc>0&&now-createdUtc<=maxFreshAge,label=`r/${subreddit} flair: ${flair}`,start=label.lastIndexOf(flair);
    add({age,uncertain:false,underage:age<=c.rules.underageMax,source:'subreddit flair',rule:`r/${subreddit} author flair`,matchStart:start,matchEnd:start+flair.length,matchText:flair},label,{permalink:typeof item==='string'?'':item?.permalink||'',subreddit,createdUtc,freshFlair})
  }
  const priority=e=>e.source==='subreddit flair'?(e.freshFlair?0:3):(e.uncertain?2:1);evidence.sort((a,b)=>priority(a)-priority(b));
  const selected=evidence[0]||null,onlyFlairProof=!!selected&&evidence.every(e=>e.source==='subreddit flair'),detectedAge=selected?{age:selected.age,uncertain:selected.uncertain,underage:selected.underage,source:selected.source,subreddit:selected.subreddit||'',onlyFlairProof}:null;
  return{detectedAge,evidence}
}
function detectAge(ageCandidates,bio='',rawRules=CFG.ageRules,ageFlairs=[]){return analyzeAge(ageCandidates,bio,ageFlairs,rawRules).detectedAge}
function computeTags(sc,u,bio='',kwGroupCounts={},ruleGroupHits={}){
  const scE=Object.entries(sc),rel=[];
  const exactTotals=new Map();for(const[sub,cnt]of scE)for(const gid of exactSubGroupIds.get(sub)||[])exactTotals.set(gid,(exactTotals.get(gid)||0)+cnt);
  for(const[sub,cnt]of scE)if(getGroupsForSub(sub).length)rel.push(`r/${sub}:${cnt}`);
  logU(u,rel.length?`Activity: ${rel.join(', ')}`:'No watched activity');
  const m=[];
  for(const g of CFG.groups){
    let t=exactTotals.get(g.id)||0;
    const pats=groupPatterns.get(g.id);
    if(pats)for(const rx of pats)for(const[sub,cnt]of scE){rx.lastIndex=0;if(rx.test(sub))t+=cnt}
    t+=kwGroupCounts[g.id]||0;
    const descMatchers=compiledDescGroups.get(g.id);if(descMatchers&&bio){const bioL=bio.toLowerCase();if(descMatchers.some(dm=>textMatcherHits(dm,bio,bioL)))t=Math.max(t,g.minPosts||1)}
    const matchedRules=ruleGroupHits[g.id]||[];if(matchedRules.length){t=Math.max(t,g.minPosts||1);logU(u,`Rule: ${matchedRules.map(id=>BUILTIN_RULE_MAP.get(id)?.name||id).join(', ')}`)}
    if(t>=(g.minPosts||1)){logU(u,`Match: "${g.label}" (${t})`);m.push({id:g.id,label:g.label,description:g.description||'',color:g.color,textColor:g.textColor||'#fff',flairStyle:normalizeFlairStyle(g.flairStyle),count:t})}
  }
  const uk=u.toLowerCase(),manIds=(CFG.manualUsers||{})[uk]||[];
  for(const gid of manIds){const g=CFG.groups.find(x=>x.id===gid);if(g&&!m.some(x=>x.label===g.label))m.push({id:g.id,label:g.label,description:g.description||'',color:g.color,textColor:g.textColor||'#fff',flairStyle:normalizeFlairStyle(g.flairStyle),count:0});}
  logU(u,m.length?`Complete \u2014 ${m.length} tag(s)`:'Complete \u2014 no tags');
  return m;
}
function tagsForCache(entry,u){if(tagMemo.has(entry))return tagMemo.get(entry);const tags=computeTags(entry.subCounts||{},u,entry.bio||'',entry.kwGroupCounts||{},entry.ruleGroupHits||{});tagMemo.set(entry,tags);return tags}

/* ═══════ API ═══════ */
const apiRequestQueue=[];let apiPaceTimer=null,apiLastStart=0;
function drainApiRequestQueue(){if(apiPaceTimer||!apiRequestQueue.length)return;const delay=Math.max(0,Number(CFG.requestDelayMs)||0),wait=Math.max(0,apiLastStart+delay-Date.now());apiPaceTimer=setTimeout(()=>{apiPaceTimer=null;const options=apiRequestQueue.shift();apiLastStart=Date.now();try{GM_xmlhttpRequest(options)}catch(error){options.onerror?.(error)}drainApiRequestQueue()},wait)}
function pacedApiRequest(options){apiRequestQueue.push(options);drainApiRequestQueue()}
function apiRetryDelay(response,attempt){const retryAfter=String(response?.responseHeaders||'').match(/^retry-after:\s*(\d+(?:\.\d+)?)\s*$/im),serverDelay=retryAfter?Math.ceil(Number(retryAfter[1])*1000):0,backoff=Math.min(30000,1000*(2**Math.max(0,attempt-1)));return Math.max(Math.max(0,Number(CFG.requestDelayMs)||0),serverDelay||backoff)}
function fetchHist(u){return new Promise((res,rej)=>{
  const sc={},texts=[],ageCandidates=[],ageFlairs=[],flaggedItems=new Map(),needKeywordTexts=compiledKeywordGroups.length>0||compiledRuleGroups.length>0,ageCompiler=CFG.showAge?getAgeCompiler(CFG.ageRules):null,ageFlairSubs=new Set(normalizeFlairSubreddits(CFG.ageFlairSubreddits).map(s=>s.toLowerCase()));
  let af=null,pg=0,ti=0,bio='',bioDone=false,histDone=false,bioRetries=0,pageRetries=0;
  function addEvidence(groupId,item,reason){const data=item.data||{},kind=item.kind==='t1'?'comment':'post',permalink=data.permalink||'',key=permalink||`${kind}:${data.created_utc||0}:${data.id||''}`;let entry=flaggedItems.get(key);if(!entry){const title=String(data.title||''),body=String(kind==='comment'?data.body||'':data.selftext||''),text=(kind==='post'?[title,body].filter(Boolean).join('\n'):body).slice(0,4000);entry={kind,subreddit:String(data.subreddit||''),title,body:text,permalink,createdUtc:Number(data.created_utc)||0,reasons:{}};flaggedItems.set(key,entry)}if(!entry.reasons[groupId])entry.reasons[groupId]=[];if(!entry.reasons[groupId].includes(reason))entry.reasons[groupId].push(reason)}
  function collectItemEvidence(item){const data=item.data||{},sub=String(data.subreddit||'').toLowerCase(),raw=((data.title||'')+' '+(data.selftext||'')+' '+(data.body||'')).trim(),lower=raw.toLowerCase();for(const gid of exactSubGroupIds.get(sub)||[])addEvidence(gid,item,`Subreddit: r/${sub}`);for(const[gid,patterns]of groupPatterns){for(const rx of patterns){rx.lastIndex=0;if(rx.test(sub)){addEvidence(gid,item,`Subreddit pattern: r/${sub}`);break}}}for(const group of compiledKeywordGroups){const matched=[];for(const matcher of group.matchers)if(textMatcherHits(matcher,raw,lower))matched.push(matcher.display);if(matched.length)addEvidence(group.id,item,`Keyword${matched.length===1?'':'s'}: ${matched.join(', ')}`)}for(const group of compiledRuleGroups){const matched=[];for(const rule of group.rules)if(builtInRuleHitsText(rule,raw))matched.push(rule.name);if(matched.length)addEvidence(group.id,item,`Rule${matched.length===1?'':'s'}: ${matched.join(', ')}`)}}
  function result(){const groupEvidence=[...flaggedItems.values()];if(bio){const reasons={};for(const[gid,matchers]of compiledDescGroups)if(matchers.some(m=>textMatcherHits(m,bio,bio.toLowerCase())))reasons[gid]=['Profile description'];for(const group of compiledRuleGroups){const matched=group.rules.filter(rule=>builtInRuleHitsText(rule,bio)).map(rule=>rule.name);if(matched.length)(reasons[group.id]||(reasons[group.id]=[])).push(`Rule${matched.length===1?'':'s'}: ${matched.join(', ')}`)}if(Object.keys(reasons).length)groupEvidence.unshift({kind:'bio',subreddit:'',title:'Profile description',body:bio.slice(0,4000),permalink:`/user/${encodeURIComponent(u)}/`,createdUtc:0,reasons})}return{subCounts:sc,texts,bio,ageCandidates,ageFlairs,groupEvidence}}
  function tryDone(){if(bioDone&&histDone)res(result())}
  function retryBio(response,message){if(bioRetries>=3){rej(new Error(`${message} after 3 retries; partial scan discarded`));return}bioRetries++;const wait=apiRetryDelay(response,bioRetries);logU(u,`${message}; retry ${bioRetries}/3 in ${wait}ms`);setTimeout(fetchBio,wait)}
  function fetchBio(){pacedApiRequest({method:'GET',url:`https://www.reddit.com/user/${encodeURIComponent(u)}/about.json?raw_json=1`,headers:{'User-Agent':`Reddit-Subreddit-Flagger/${VER}`},onload:rb=>{if(rb.status===429){retryBio(rb,'Profile rate limited');return}if(rb.status===200){try{const d=JSON.parse(rb.responseText);bio=(d?.data?.subreddit?.public_description||'')}catch(e){rej(new Error(`Profile parse error: ${e.message}`));return}}else if(rb.status!==403&&rb.status!==404){rej(new Error(`Profile HTTP ${rb.status}; partial scan discarded`));return}else logU(u,`Profile HTTP ${rb.status}`);bioDone=true;tryDone()},onerror:()=>retryBio(null,'Profile network error')})}fetchBio();
  function nx(){
    let url=`https://www.reddit.com/user/${encodeURIComponent(u)}/overview.json?limit=100&raw_json=1`;if(af)url+=`&after=${af}`;logU(u,`Fetching page ${pg+1}/${CFG.maxPages}`);
    pacedApiRequest({method:'GET',url,headers:{'User-Agent':`Reddit-Subreddit-Flagger/${VER}`},onload:r=>{
      if(r.status===404||r.status===403){logU(u,`HTTP ${r.status}`);if(pg>0){rej(new Error(`HTTP ${r.status} during pagination`));return}histDone=true;tryDone();return}
      if(r.status===429){if(pageRetries<3){pageRetries++;const wait=apiRetryDelay(r,pageRetries);logU(u,`Rate limited; retry ${pageRetries}/3 in ${wait}ms`);setTimeout(nx,wait);return}rej(new Error('Rate limited after 3 retries; partial scan discarded'));return}
      if(r.status!==200){logU(u,`HTTP ${r.status}`);rej(new Error(`HTTP ${r.status}`));return}
      try{
        pageRetries=0;
        const d=JSON.parse(r.responseText),ch=d?.data?.children;
        if(ch){for(const item of ch){
          const data=item.data,s=(data.subreddit||'').toLowerCase();if(s)sc[s]=(sc[s]||0)+1;
          collectItemEvidence(item);if(needKeywordTexts){const _tx=((data.title||'')+' '+(data.selftext||'')+' '+(data.body||'')).trim();if(_tx)texts.push(_tx.slice(0,4000))}
          if(ageCompiler){
            if(item.kind==='t1'&&ageCandidates.length<300){const body=data.body||'';if(ageCompiler.numberPrefilter.test(body))ageCandidates.push({body,permalink:data.permalink||'',subreddit:data.subreddit||'',createdUtc:data.created_utc||0})}
            if(ageFlairSubs.has(s)&&ageFlairs.length<100){const flair=String(data.author_flair_text||'').trim();if(flair)ageFlairs.push({flair,permalink:data.permalink||'',subreddit:data.subreddit||s,createdUtc:data.created_utc||0})}
          }
        }ti+=ch.length;logU(u,`Page ${pg+1}: ${ch.length} items`)}
        pg++;af=d?.data?.after;if(af&&pg<CFG.maxPages)nx();else{logU(u,`Done \u2014 ${ti} total`);histDone=true;tryDone()}
      }catch(e){logU(u,`Parse error: ${e.message}`);rej(e)}
    },onerror:()=>{logU(u,'Network error');rej(new Error('Network'))}})
  }
  nx()
})}

/* ═══════ DISCOVERY ═══════ */
function collectMatches(root,selector,out){if(!root)return;if(root.nodeType===1&&root.matches?.(selector))out.add(root);if(root.querySelectorAll)for(const e of root.querySelectorAll(selector))out.add(e)}
function discover(roots=[document]){const r=[],links=new Set(),selector=IS_OLD?`a.author:not([${PA}])`:`a[href*="/user/"]:not([${PA}])`;for(const root of roots)collectMatches(root,selector,links);if(IS_OLD){for(const l of links){const u=l.textContent.trim();if(u&&!SKIP.has(u)){l.setAttribute(PA,'1');r.push({username:u,element:l})}}}else{for(const l of links){const m=l.href.match(/\/user\/([^/?#]+)/);if(!m)continue;const u=m[1];if(!u||SKIP.has(u))continue;const t=l.textContent.trim().replace(/^u\//,'');if(t!==u&&t!==`u/${u}`)continue;l.setAttribute(PA,'1');r.push({username:u,element:l})}}return r}

/* ═══════ (+) BUTTONS ═══════ */
function mkAdd(s){const b=el('button','flagger-add-btn');b.textContent='+';b.title=`Add r/${s}`;b.onclick=e=>{e.preventDefault();e.stopPropagation();showMini(s)};return b}
function injectAdds(roots=[document]){const joins=new Set(),buttons=new Set();for(const root of roots){collectMatches(root,`shreddit-join-button[name]:not([${AA}])`,joins);collectMatches(root,`button:not([${AA}])`,buttons)}for(const j of joins){const s=j.getAttribute('name');if(!s)continue;j.setAttribute(AA,'1');const p=j.parentElement;if(p){p.style.display='flex';p.style.alignItems='center';p.style.gap='6px';p.style.flexShrink='0';p.appendChild(mkAdd(s))}else j.after(mkAdd(s))}for(const b of buttons){const t=b.textContent.trim();if(t!=='Join'&&t!=='Joined')continue;b.setAttribute(AA,'1');const c=b.closest('[class*="community"],[class*="subreddit"],li,div');if(!c||c.querySelector('.flagger-add-btn'))continue;const sl=c.querySelector('a[href*="/r/"]');if(!sl)continue;const sm=sl.href.match(/\/r\/([^/?#]+)/);if(!sm)continue;const w=el('span','flagger-join-wrap');b.parentNode.insertBefore(w,b);w.appendChild(b);w.appendChild(mkAdd(sm[1]))}}

/* ═══════ QUEUE ═══════ */
const pending=new Map(),inFlight=new Map();
let qR=false,qA=false;
function apply(els,st,u,tags,detectedAge){for(const e of els)setDbg(e,st,u);if(st==='complete'||st==='cached')setTimeout(()=>{for(const e of els){if(!e.isConnected)continue;rmDbg(e);inject(e,tags,u,detectedAge)}},st==='cached'?100:200)}
async function processQ(){
  if(qR){qA=true;return}qR=true;qA=false;
  while(pending.size>0){
    const w=[...pending.entries()];pending.clear();const tf=[];
    for(const[k,es]of w){if(inFlight.has(k)){inFlight.get(k).e.push(...es);for(const e of es)setDbg(e,'searching',k)}else{const c=gcu(k);if(c){if(!uKwHits.has(k))uKwHits.set(k,c.kwDisplayHits||[]);apply(es,'cached',k,tagsForCache(c,k),c.detectedAge||null)}else{inFlight.set(k,{e:es});tf.push(k);for(const e of es)setDbg(e,'searching',k)}}}
    for(let i=0;i<tf.length;i+=CFG.maxConcurrent){
      const ch=tf.slice(i,i+CFG.maxConcurrent);
      await Promise.all(ch.map(async u=>{const r=inFlight.get(u);if(!r)return;logU(u,`Starting fetch for ${r.e.length} element(s)`);try{
        const {subCounts:sc,texts,bio,ageCandidates=[],ageFlairs=[],groupEvidence=[]}=await fetchHist(u),{kwGroupCounts,kwDisplayHits}=computeAllKwData(texts),ruleGroupHits=computeRuleGroupHits(texts,bio),ageAnalysis=CFG.showAge?analyzeAge(ageCandidates,bio,ageFlairs):{detectedAge:null,evidence:[]},detectedAge=ageAnalysis.detectedAge;
        uKwHits.set(u.toLowerCase(),kwDisplayHits);if(detectedAge)logU(u,`Age: ${detectedAge.age}${detectedAge.uncertain?' (uncertain)':''} · ${detectedAge.underage?'underage':'adult'} · ${detectedAge.onlyFlairProof?`r/${detectedAge.subreddit||'configured subreddit'} flair (only evidence)`:detectedAge.source}`);
        const tags=computeTags(sc,u,bio,kwGroupCounts,ruleGroupHits);scu(u,sc,bio,kwGroupCounts,kwDisplayHits,ruleGroupHits,groupEvidence,detectedAge,ageAnalysis.evidence,CFG.showAge?AGE_SCAN_VERSION:0,CFG.showAge?ageScanSignature(CFG.ageRules,CFG.ageFlairSubreddits):'');apply(r.e,'complete',u,tags,detectedAge)
      }catch(er){logU(u,`Error: ${er.message}`);const manTags=computeTags({},u);if(manTags.length)apply(r.e,'complete',u,manTags,null);else for(const e of r.e)setDbg(e,'error',u)}inFlight.delete(u)}));
      if(i+CFG.maxConcurrent<tf.length)await new Promise(r=>setTimeout(r,CFG.requestDelayMs))
    }
    flushDisk()
  }
  qR=false;if(qA||pending.size>0){qA=false;processQ()}
}

/* ═══════ SCAN ═══════ */
function scan(roots=[document]){roots=roots.filter(root=>root===document||root.isConnected);if(!roots.length)return;const by=new Map();for(const{username:u,element:e}of discover(roots)){const k=u.toLowerCase();if(!by.has(k))by.set(k,{u,e:[]});by.get(k).e.push(e)}for(const[k,{u,e}]of by){const c=gcu(k);if(c){if(!uKwHits.has(u.toLowerCase()))uKwHits.set(u.toLowerCase(),c.kwDisplayHits||[]);apply(e,'cached',u,tagsForCache(c,u),c.detectedAge||null);continue}if(NO_FETCH.has(u)){const tags=computeTags({},u);if(tags.length)apply(e,'complete',u,tags,null);continue}if(inFlight.has(k)){inFlight.get(k).e.push(...e);for(const x of e)setDbg(x,'searching',u);continue}if(pending.has(k)){pending.get(k).push(...e);for(const x of e)setDbg(x,'pending',u);continue}pending.set(k,e);logU(u,'Queued (pending)');for(const x of e)setDbg(x,'pending',u)}if(pending.size>0)processQ();if(CFG.showAddButtons)injectAdds(roots)}
const scanRoots=new Set();let sT=null;function dScan(root=document){if(root===document){scanRoots.clear();scanRoots.add(document)}else if(!scanRoots.has(document)){for(const existing of scanRoots){if(existing.contains?.(root))return;if(root.contains?.(existing))scanRoots.delete(existing)}scanRoots.add(root)}if(sT)return;sT=setTimeout(()=>{sT=null;const roots=[...scanRoots];scanRoots.clear();if(roots.length)scan(roots)},100)}
scan();
function isOwnMutationNode(n){return n.nodeType===1&&n.matches?.('.flagger-badge,.subreddit-flagger-debug,.flagger-add-btn,.flagger-join-wrap,.flagger-overlay,.flagger-mini-overlay')}
new MutationObserver(ms=>{for(const m of ms)if(m.addedNodes.length){let queued=false;for(const n of m.addedNodes)if(n.nodeType===1&&!isOwnMutationNode(n)){dScan(n);queued=true}if(!queued&&!Array.from(m.addedNodes).every(isOwnMutationNode))dScan(m.target)}}).observe(document.body,{childList:true,subtree:true});
let lU=location.href;setInterval(()=>{if(location.href!==lU){lU=location.href;setTimeout(()=>dScan(document),300)}},1000);

/* ═══════ LOG POPUP ═══════ */
function buildKwHits(u){return uKwHits.get(u.toLowerCase())||[];}
function buildBioHighlight(bio,cdTags){const bioL=bio.toLowerCase();const ranges=[];for(const tag of cdTags){const g=CFG.groups.find(x=>x.label===tag.label);if(!g||!g.descKeywords||!g.descKeywords.length)continue;for(const kw of g.descKeywords){if(!kw)continue;if(isRxEntry(kw)){const p=parseRxEntry(kw);if(!p)continue;const fl=(p.rx.flags||'').includes('g')?p.rx.flags:(p.rx.flags||'i')+'g';const rx=new RegExp(p.rx.source,fl);let m;while((m=rx.exec(bio))!==null){if(m[0].length)ranges.push({start:m.index,end:m.index+m[0].length,groupLabel:tag.label,groupColor:tag.color,groupTextColor:tag.textColor||'#fff'});else rx.lastIndex++;}}else if(kw.includes('*')){const pat=kw.toLowerCase().replace(/[.+^${}()|[\]\\]/g,'\\$&').replace(/\*/g,'.*');const rx=new RegExp(pat,'gi');let m;while((m=rx.exec(bioL))!==null){if(m[0].length)ranges.push({start:m.index,end:m.index+m[0].length,groupLabel:tag.label,groupColor:tag.color,groupTextColor:tag.textColor||'#fff'});else rx.lastIndex++;}}else{const kwL=kw.toLowerCase(),len=kwL.length;let idx=0;while((idx=bioL.indexOf(kwL,idx))!==-1){ranges.push({start:idx,end:idx+len,groupLabel:tag.label,groupColor:tag.color,groupTextColor:tag.textColor||'#fff'});idx+=len;}}}}if(!ranges.length)return null;ranges.sort((a,b)=>a.start-b.start||(b.end-b.start)-(a.end-a.start));const merged=[];let cur=0;for(const r of ranges){if(r.start>=cur){merged.push(r);cur=r.end;}}const wrap=el('div','');wrap.style.cssText='font-size:11px;line-height:1.7;color:#aaa;word-break:break-word;padding:4px 0 6px;white-space:pre-wrap';let pos=0;for(const{start,end,groupLabel,groupColor,groupTextColor}of merged){if(pos<start)wrap.appendChild(document.createTextNode(bio.slice(pos,start)));const hl=el('span','');hl.textContent=bio.slice(start,end);hl.style.cssText=`background:${groupColor};color:${groupTextColor};border-radius:2px;padding:0 2px;cursor:default`;hl.title=groupLabel;applyDarkBorder(hl,groupColor);wrap.appendChild(hl);pos=end;}if(pos<bio.length)wrap.appendChild(document.createTextNode(bio.slice(pos)));return wrap;}
function buildAgeEvidenceSection(cd){
  if(!CFG.showAge||!cd?.detectedAge)return null;
  const detected=cd.detectedAge,evidence=Array.isArray(cd.ageEvidence)?cd.ageEvidence:[],wrap=el('div','');
  wrap.appendChild(Object.assign(el('div','flog-subs-title'),{textContent:`Age Detection · ${detected.age}${detected.uncertain?'?':''}`}));
  const note=el('div','');note.style.cssText='font-size:10px;color:#777;margin:-2px 0 7px;line-height:1.45';
  note.textContent=detected.onlyFlairProof?`Only evidence: the user's r/${detected.subreddit||'configured subreddit'} age flair indicates ${detected.age}.`:`Detected from ${detected.source==='bio'?'the profile bio':detected.source==='comment'?'comment history':`an r/${detected.subreddit||'configured subreddit'} age flair`}; ${detected.underage?'underage':'adult'} by the current rule cutoff.`;
  wrap.appendChild(note);
  const list=el('div','');list.style.cssText='display:flex;flex-direction:column;gap:5px;margin-bottom:8px';
  for(const ev of evidence){
    const row=el('div','');row.style.cssText='padding:7px 8px;background:rgba(255,255,255,.025);border:1px solid rgba(255,255,255,.05);border-radius:6px;min-width:0';
    const head=el('div','');head.style.cssText='display:flex;align-items:center;gap:6px;margin-bottom:4px;min-width:0';
    const age=el('span','flog-sub-mini');age.textContent=`(${ev.age}${ev.uncertain?'?':''})`;age.style.cssText='background:#e67e22;color:#111;font-weight:700;flex-shrink:0';head.appendChild(age);
    const source=ev.source==='bio'?'Profile bio':ev.source==='comment'?`Comment${ev.subreddit?` in r/${ev.subreddit}`:''}`:`r/${ev.subreddit||'configured subreddit'} user flair`,meta=ev.permalink?el('a',''):el('span','');meta.textContent=source;meta.style.cssText='font-size:10px;color:#777;white-space:nowrap;overflow:hidden;text-overflow:ellipsis';
    if(ev.permalink){meta.href=/^https?:/i.test(ev.permalink)?ev.permalink:`https://www.reddit.com${ev.permalink}`;meta.target='_blank';meta.rel='noopener noreferrer';meta.onclick=e=>e.stopPropagation()}
    head.appendChild(meta);if(ev.createdUtc){const tm=el('span','');tm.textContent=timeAgo(ev.createdUtc);tm.style.cssText='font-size:9px;color:#444;margin-left:auto;flex-shrink:0';head.appendChild(tm)}row.appendChild(head);
    const text=String(ev.text||''),body=el('div','');body.style.cssText='font-size:11px;line-height:1.55;color:#888;white-space:pre-wrap;word-break:break-word';let start=Math.max(0,Math.min(Number(ev.matchStart)||0,text.length)),end=Math.max(start,Math.min(Number(ev.matchEnd)||start,text.length));
    if(start>0)body.appendChild(document.createTextNode(text.slice(0,start)));if(end>start){const hl=el('span','');hl.textContent=text.slice(start,end);hl.style.cssText='background:rgba(230,126,34,.28);color:#ffd2a3;border:1px solid rgba(230,126,34,.45);border-radius:3px;padding:0 2px';hl.title=ev.rule||'Age regex match';body.appendChild(hl)}if(end<text.length)body.appendChild(document.createTextNode(text.slice(end)));row.appendChild(body);list.appendChild(row)
  }
  if(!evidence.length)list.appendChild(Object.assign(el('div','flog-empty'),{textContent:'Age found, but no cached evidence excerpt is available.'}));wrap.appendChild(list);return wrap
}
function applyDarkBorder(e,hex){try{const r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;if(0.2126*r+0.7152*g+0.0722*b<0.15)e.style.boxShadow='0 0 0 1px rgba(255,255,255,.35)';}catch{}}
function applyDarkTextColor(e,hex){try{const r=parseInt(hex.slice(1,3),16)/255,g=parseInt(hex.slice(3,5),16)/255,b=parseInt(hex.slice(5,7),16)/255;const lum=0.2126*r+0.7152*g+0.0722*b;if(lum<0.15){const a=(0.1+(1-lum/0.15)*0.3).toFixed(2);e.style.background=`rgba(255,255,255,${a})`;e.style.borderRadius='2px';e.style.padding='0 3px';}}catch{}}
function showMatchedGroupTip(pill,tip){tip.style.display='block';tip.style.visibility='hidden';tip.style.left='0';tip.style.top='0';const pr=pill.getBoundingClientRect(),tr=tip.getBoundingClientRect(),margin=8,gap=7,left=Math.max(margin,Math.min(pr.left+pr.width/2-tr.width/2,window.innerWidth-tr.width-margin)),above=pr.top-tr.height-gap>=margin,top=Math.max(margin,Math.min(above?pr.top-tr.height-gap:pr.bottom+gap,window.innerHeight-tr.height-margin));tip.style.left=`${left}px`;tip.style.top=`${top}px`;tip.style.visibility='visible'}
function hideMatchedGroupTip(tip){tip.style.display='none';tip.style.visibility='hidden'}
function buildGroupEvidenceView(cd,tag,u){const groupId=tag.id||CFG.groups.find(g=>g.label===tag.label)?.id,all=Array.isArray(cd.groupEvidence)?cd.groupEvidence:[],items=groupId?all.filter(item=>item?.reasons&&Array.isArray(item.reasons[groupId])):[],wrap=el('div','flog-group-evidence'),head=el('div','flog-evidence-head');head.appendChild(Object.assign(el('div','flog-evidence-title'),{textContent:`Flagged content · ${tag.label}`}));head.appendChild(Object.assign(el('div','flog-evidence-count'),{textContent:`${items.length} item${items.length===1?'':'s'}`}));wrap.appendChild(head);if(!items.length){wrap.appendChild(Object.assign(el('div','flog-evidence-empty'),{textContent:all.length?'No post or comment evidence was recorded for this group.':'Evidence is not available in this older cache entry. Use Flush + Re-scan to build it.'}));return wrap}items.sort((a,b)=>(b.createdUtc||0)-(a.createdUtc||0));for(const item of items){const row=el('div','flog-evidence-item'),meta=el('div','flog-evidence-meta'),kind=el('span','flog-evidence-kind');kind.textContent=item.kind==='bio'?'Profile':item.kind==='comment'?'Comment':'Post';meta.appendChild(kind);const link=el('a','flog-evidence-sub'),href=item.permalink?(item.permalink.startsWith('http')?item.permalink:`https://www.reddit.com${item.permalink}`):`https://www.reddit.com/user/${encodeURIComponent(u)}/`;link.href=href;link.target='_blank';link.rel='noopener noreferrer';link.textContent=item.subreddit?`r/${item.subreddit}`:'Open profile';link.onclick=e=>e.stopPropagation();meta.appendChild(link);if(item.createdUtc)meta.appendChild(Object.assign(el('span','flog-evidence-time'),{textContent:timeAgo(item.createdUtc)}));row.appendChild(meta);row.appendChild(Object.assign(el('div','flog-evidence-reason'),{textContent:item.reasons[groupId].join(' · ')}));row.appendChild(Object.assign(el('div','flog-evidence-text'),{textContent:item.body||item.title||'(No text available)'}));wrap.appendChild(row)}return wrap}
function showLog(u){
  document.querySelectorAll('.flagger-overlay.flog-overlay').forEach(e=>e.remove());
  const logs=getLog(u),cd=gcu(u),cdTags=cd?tagsForCache(cd,u):[],ov=el('div','flagger-overlay flog-overlay');if(cd&&!uKwHits.has(u.toLowerCase()))uKwHits.set(u.toLowerCase(),cd.kwDisplayHits||[]);
  let escLog;function rmLog(){ov.remove();document.removeEventListener('keydown',escLog)}
  ov.onclick=e=>{if(e.target===ov)rmLog()};
  const p=el('div','flog-panel'),hd=el('div','flog-header'),ti=el('span','flog-title');
  ti.innerHTML=`u/${u} <span>// profile</span>`;hd.appendChild(ti);
  const cb=el('button','fl-close');cb.textContent='\u00D7';cb.onclick=rmLog;hd.appendChild(cb);p.appendChild(hd);
  const bd=el('div','flog-body');

  if(cd){
    const sm=el('div','flog-summary');
    sm.appendChild(Object.assign(el('div','flog-summary-title'),{textContent:'Matched Groups'}));
    const tagsRow=el('div','flog-tags-row');
    const evidenceHost=el('div','');let activePill=null;
    if(!cdTags.length){tagsRow.appendChild(Object.assign(el('span','flog-no-tags'),{textContent:'No groups matched'}));}
    else for(const t of cdTags){
      const pill=el('span','flog-tag-pill');pill.tabIndex=0;pill.setAttribute('role','button');pill.title='Click to show every flagged post and comment';pill.style.color=t.textColor||'#fff';applyFlairPattern(pill,t);applyDarkBorder(pill,t.color);pill.appendChild(document.createTextNode(`${t.label} `));pill.appendChild(Object.assign(el('span','flog-tag-count'),{textContent:`${t.count} post${t.count!==1?'s':''}`}));
      const desc=dMap.get(t.label);
      let tip=null,tipTimer=null,hideTip=()=>{};if(desc){tip=el('div','flog-tag-tip');tip.textContent=desc;ov.appendChild(tip);const showTip=()=>{clearTimeout(tipTimer);showMatchedGroupTip(pill,tip)},scheduleHide=()=>{clearTimeout(tipTimer);tipTimer=setTimeout(()=>hideMatchedGroupTip(tip),120)};hideTip=()=>{clearTimeout(tipTimer);hideMatchedGroupTip(tip)};pill.addEventListener('mouseenter',showTip);pill.addEventListener('mouseleave',scheduleHide);pill.addEventListener('focus',showTip);pill.addEventListener('blur',scheduleHide);tip.addEventListener('mouseenter',()=>clearTimeout(tipTimer));tip.addEventListener('mouseleave',scheduleHide)}
      const showEvidence=()=>{hideTip();if(activePill===pill){pill.classList.remove('active');activePill=null;evidenceHost.replaceChildren();return}if(activePill)activePill.classList.remove('active');activePill=pill;pill.classList.add('active');evidenceHost.replaceChildren(buildGroupEvidenceView(cd,t,u));requestAnimationFrame(()=>evidenceHost.scrollIntoView({block:'nearest',behavior:'smooth'}))};pill.onclick=e=>{e.stopPropagation();showEvidence()};pill.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();showEvidence()}};
      tagsRow.appendChild(pill);
    }
    sm.appendChild(tagsRow);sm.appendChild(evidenceHost);

    // Subreddit breakdown with flair pills
    if(cd.subCounts&&Object.keys(cd.subCounts).length){
      sm.appendChild(Object.assign(el('div','flog-subs-title'),{textContent:'Subreddit Breakdown'}));
      const all=Object.entries(cd.subCounts);
      const ws=all.filter(([s])=>getGroupsForSub(s).length>0).sort((a,b)=>b[1]-a[1]);
      const us=all.filter(([s])=>!getGroupsForSub(s).length).sort((a,b)=>b[1]-a[1]);
      const mx=Math.max(...all.map(([,c])=>c),1);

      function sr(sub,count){
        const row=el('div','flog-sub-row');
        const name=el('span','flog-sub-name');name.textContent=`r/${sub}`;name.classList.add('fsub-clickable');name.onclick=e=>{e.stopPropagation();showSubHistory(u,sub)};
        const groups=getGroupsForSub(sub);
        if(groups.length){
          name.classList.add('watched');
          name.style.color=groups[0].color;applyDarkTextColor(name,groups[0].color);
          // Mini flair pills
          const pills=el('span','flog-sub-pills');
          if(groups.length===1){
            const mp=el('span','flog-sub-mini');mp.textContent=groups[0].label;
            applyFlairPattern(mp,groups[0]);mp.style.color=groups[0].textColor;applyDarkBorder(mp,groups[0].color);
            pills.appendChild(mp);
          }else{
            for(const g of groups){
              const mp=el('span','flog-sub-mini');mp.textContent=g.label;
              applyFlairPattern(mp,g);mp.style.color=g.textColor;applyDarkBorder(mp,g.color);
              pills.appendChild(mp);
            }
          }
          row.appendChild(name);row.appendChild(pills);
        }else{
          row.appendChild(name);
        }
        const bw=el('span','flog-sub-bar-wrap'),br=el('span','flog-sub-bar');
        br.style.background=groups.length?groups[0].color:'rgba(255,255,255,.12)';
        br.style.width=`${(count/mx)*100}%`;bw.appendChild(br);
        const ct=el('span','flog-sub-count');ct.textContent=count;
        row.appendChild(bw);row.appendChild(ct);row.appendChild(mkAdd(sub));
        return row;
      }

      for(const[s,c]of ws)sm.appendChild(sr(s,c));
      if(us.length){
        if(ws.length)sm.appendChild(el('div','flog-sub-divider'));
        const uWrap=el('div','');uWrap.style.display='none';
        for(const[s,c]of us.slice(0,20))uWrap.appendChild(sr(s,c));
        if(us.length>20)uWrap.appendChild(Object.assign(el('div','flog-meta'),{innerHTML:`<span>+${us.length-20} more</span>`}));
        const togRow=el('div','');togRow.style.cssText='cursor:pointer;color:#444;font-size:10px;user-select:none;padding:3px 0;display:flex;align-items:center;gap:4px';
        const togLbl=el('span','');togLbl.textContent=`▶ ${us.length} other subreddit${us.length!==1?'s':''}`;
        togRow.appendChild(togLbl);
        togRow.onmouseenter=()=>{togRow.style.color='#777'};togRow.onmouseleave=()=>{togRow.style.color='#444'};
        togRow.onclick=()=>{const open=uWrap.style.display!=='none';uWrap.style.display=open?'none':'';togLbl.textContent=`${open?'▶':'▼'} ${us.length} other subreddit${us.length!==1?'s':''}`};
        sm.appendChild(togRow);sm.appendChild(uWrap);
      }
    }

    const ageEvidenceSection=buildAgeEvidenceSection(cd);if(ageEvidenceSection)sm.appendChild(ageEvidenceSection);

    const kwHits=buildKwHits(u);if(kwHits.length){sm.appendChild(Object.assign(el('div','flog-subs-title'),{textContent:'Keyword Hits'}));const kwGrid=el('div','');kwGrid.style.cssText='display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:4px;margin-bottom:6px';kwHits.forEach(({display,count,groupColor,groupTextColor,groupLabel})=>{const cell=el('div','');cell.style.cssText='display:flex;align-items:center;gap:4px;padding:3px 6px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:5px;min-width:0;overflow:hidden';const kn=el('span','');kn.textContent=display;kn.style.cssText='font-size:11px;color:#888;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:1;min-width:0';const mp=el('span','flog-sub-mini');mp.textContent=groupLabel;mp.style.background=groupColor;mp.style.color=groupTextColor;mp.style.flexShrink='0';applyDarkBorder(mp,groupColor);const ct=el('span','');ct.textContent=count;ct.style.cssText='font-size:10px;color:#555;flex-shrink:0;font-variant-numeric:tabular-nums';cell.appendChild(kn);cell.appendChild(mp);cell.appendChild(ct);kwGrid.appendChild(cell);});sm.appendChild(kwGrid);}
    if(cd.bio&&cd.bio.trim()){sm.appendChild(Object.assign(el('div','flog-subs-title'),{textContent:'Profile Bio'}));const bioGrps=cdTags.filter(t=>{const g=CFG.groups.find(x=>x.label===t.label);return g&&g.descKeywords&&g.descKeywords.length;});if(bioGrps.length){const bpr=el('div','flog-tags-row');bpr.style.cssText='margin-bottom:6px;margin-top:2px;flex-wrap:wrap;gap:4px';for(const t of bioGrps){const bp=el('span','flog-sub-mini');bp.textContent=t.label;bp.style.background=t.color;bp.style.color=t.textColor||'#fff';applyDarkBorder(bp,t.color);bpr.appendChild(bp);}sm.appendChild(bpr);}const bioHL=buildBioHighlight(cd.bio,cdTags);if(bioHL){sm.appendChild(bioHL);}else{const bt=el('div','');bt.style.cssText='font-size:11px;line-height:1.7;color:#666;padding:4px 0 6px;word-break:break-word;white-space:pre-wrap';bt.textContent=cd.bio;sm.appendChild(bt);}}
    const mt=el('div','flog-meta'),tp=cd.subCounts?Object.values(cd.subCounts).reduce((a,b)=>a+b,0):'?';
    mt.innerHTML=`<span>${tp} posts scanned</span> &middot; <span>cached ${((Date.now()-cd.timestamp)/6e4).toFixed(0)}m ago</span>`;
    sm.appendChild(mt);bd.appendChild(sm);
  }

  const ls=el('div','flog-log-section');ls.appendChild(Object.assign(el('div','flog-log-title'),{textContent:'Event Log'}));
  if(!logs.length)ls.appendChild(Object.assign(el('div','flog-empty'),{textContent:'No log entries.'}));
  else for(const en of logs){const r=el('div','flog-entry');r.appendChild(Object.assign(el('span','flog-time'),{textContent:en.time}));const m=el('span','flog-msg');if(/error|fail/i.test(en.message))m.classList.add('c-err');else if(/cache hit/i.test(en.message))m.classList.add('c-cache');else if(/match|complete/i.test(en.message))m.classList.add('c-ok');else if(/fetch|page|queue|skip|in-flight|attach|start|pending/i.test(en.message))m.classList.add('c-info');m.textContent=en.message;r.appendChild(m);ls.appendChild(r)}
  bd.appendChild(ls);p.appendChild(bd);

  // Scroll to top (breakdown is at top)
  requestAnimationFrame(()=>{bd.scrollTop=0});

  const ft=el('div','flog-footer'),fb=el('button','fl-btn fl-btn-danger fl-btn-sm');fb.textContent='Flush + Re-scan';
  fb.onclick=()=>{flushUser(u);rmLog();rescan(u);flash(`Flushed u/${u}, re-scanning...`)};ft.appendChild(fb);p.appendChild(ft);
  ov.appendChild(p);document.body.appendChild(ov);
  escLog=e=>{if(e.key==='Escape')rmLog()};document.addEventListener('keydown',escLog);
}

/* ═══════ SUB HISTORY ═══════ */
function fetchActivity(u,ep,sort,maxPgs){return new Promise(res=>{const items=[];let af=null,pg=0;function nx(){let url=`https://www.reddit.com/user/${encodeURIComponent(u)}/${ep}.json?sort=${sort}&limit=100&raw_json=1`;if(af)url+=`&after=${af}`;pacedApiRequest({method:'GET',url,headers:{'User-Agent':`Reddit-Subreddit-Flagger/${VER}`},onload:r=>{if(r.status!==200){res(items);return}try{const d=JSON.parse(r.responseText),ch=d?.data?.children||[];for(const x of ch){x.data._type=ep==='submitted'?'post':'comment';items.push(x.data)}pg++;af=d?.data?.after;if(af&&pg<maxPgs)nx();else res(items)}catch{res(items)}},onerror:()=>res(items)})}nx()})}
function timeAgo(ts){const s=Math.floor(Date.now()/1000-ts);if(s<60)return`${s}s`;if(s<3600)return`${Math.floor(s/60)}m`;if(s<86400)return`${Math.floor(s/3600)}h`;if(s<2592000)return`${Math.floor(s/86400)}d`;if(s<31536000)return`${Math.floor(s/2592000)}mo`;return`${Math.floor(s/31536000)}y`}
function mkItemRow(item){const isC=item._type==='comment',row=el('div',`fsub-post-row ${isC?'fsub-comment-row':'fsub-submission-row'}`),sc=item.score>=1000?`${(item.score/1000).toFixed(1)}k`:String(item.score);if(isC){const body=el('div','fsub-comment-body');body.textContent=item.body&&item.body.length>140?item.body.slice(0,140)+'…':item.body||'[deleted]';const cl=el('a','fsub-comment-link');cl.href=`https://www.reddit.com${item.permalink}`;cl.target='_blank';cl.rel='noopener noreferrer';cl.textContent=`↩ ${item.link_title||'view comment'}`;const m=el('div','fsub-post-meta');m.textContent=`${timeAgo(item.created_utc)} · ▲ ${sc}`;row.appendChild(body);row.appendChild(cl);row.appendChild(m)}else{const a=el('a','fsub-post-title');a.href=`https://www.reddit.com${item.permalink}`;a.target='_blank';a.rel='noopener noreferrer';a.textContent=item.title;const rt=item.upvote_ratio?` · ${Math.round(item.upvote_ratio*100)}% upvoted`:'';const m=el('div','fsub-post-meta');m.textContent=`${timeAgo(item.created_utc)} · ▲ ${sc}${rt} · ${item.num_comments} comment${item.num_comments!==1?'s':''}`;row.appendChild(a);row.appendChild(m)}return row}
function showSubHistory(u,sub){
const subL=sub.toLowerCase();
const ov=el('div','flagger-overlay fsub-overlay');let escSub;function rmSub(){ov.remove();document.removeEventListener('keydown',escSub)}
ov.onclick=e=>{if(e.target===ov)rmSub()};
const pn=el('div','fsub-panel'),hd=el('div','fsub-header');
hd.appendChild(Object.assign(el('div','fsub-title'),{innerHTML:`u/${u} <span>in r/${sub}</span>`}));
const xb=el('button','fl-close');xb.textContent='×';xb.onclick=rmSub;hd.appendChild(xb);pn.appendChild(hd);
let tf='both',viewMode='initial',_allFull=null,_tp=[],_cp=[],_tc=[],_cc=[];
const ttBar=el('div','fsub-type-bar'),ttBtns={};
for(const[k,lbl]of[['both','Both'],['posts','Posts Only'],['comments','Comments Only']]){const b=el('button',`fsub-type-btn ${k}`);b.textContent=lbl;b.onclick=()=>{tf=k;Object.values(ttBtns).forEach(x=>x.classList.remove('active'));b.classList.add('active');render()};ttBtns[k]=b;ttBar.appendChild(b)}
ttBtns.both.classList.add('active');pn.appendChild(ttBar);
const bd=el('div','fsub-body');bd.appendChild(Object.assign(el('div','fsub-loading'),{textContent:'Fetching activity…'}));
pn.appendChild(bd);ov.appendChild(pn);document.body.appendChild(ov);
escSub=e=>{if(e.key==='Escape')rmSub()};document.addEventListener('keydown',escSub);
function secR(lbl,items){if(!items.length)return false;bd.appendChild(Object.assign(el('div','fsub-section-label'),{textContent:lbl}));items.forEach(x=>bd.appendChild(mkItemRow(x)));return true}
function render(){
  bd.innerHTML='';
  if(viewMode==='full'&&_allFull){
    const fi=tf==='posts'?_allFull.filter(x=>x._type==='post'):tf==='comments'?_allFull.filter(x=>x._type==='comment'):_allFull;
    if(!fi.length){bd.appendChild(Object.assign(el('div','fsub-empty'),{textContent:'No items for this filter.'}));return}
    let sk='score',sd=-1;
    const sec=el('div','fsub-full-section'),sb=el('div','fsub-sort-bar');
    sb.appendChild(Object.assign(el('span','fsub-count-label'),{textContent:`All Activity (${fi.length})`}));
    const sbtns={};
    for(const[k,lbl]of[['score','Score'],['date','Date'],['comments','Comments'],['ratio','Ratio']]){const b=el('button','fl-btn fl-btn-ghost fl-btn-sm fsub-sort-btn');b.textContent=lbl;b.dataset.lbl=lbl;b.onclick=()=>{if(sk===k){sd*=-1}else{sk=k;sd=-1}Object.values(sbtns).forEach(x=>{x.classList.remove('active');x.textContent=x.dataset.lbl});b.classList.add('active');b.textContent=`${lbl} ${sd<0?'▼':'▲'}`;rp()};sbtns[k]=b;sb.appendChild(b)}
    sbtns.score.classList.add('active');sbtns.score.textContent='Score ▼';
    sec.appendChild(sb);const list=el('div','');sec.appendChild(list);bd.appendChild(sec);
    function rp(){list.innerHTML='';[...fi].sort((a,b)=>{const[va,vb]=sk==='score'?[a.score,b.score]:sk==='date'?[a.created_utc,b.created_utc]:sk==='comments'?[a.num_comments||0,b.num_comments||0]:[a.upvote_ratio||0,b.upvote_ratio||0];return sd*(vb-va)}).forEach(p=>list.appendChild(mkItemRow(p)))}
    rp()
  }else{
    const tp=_tp.filter(x=>x.subreddit.toLowerCase()===subL).slice(0,5),cp=_cp.filter(x=>x.subreddit.toLowerCase()===subL).slice(0,5),tc=_tc.filter(x=>x.subreddit.toLowerCase()===subL).slice(0,5),cc=_cc.filter(x=>x.subreddit.toLowerCase()===subL).slice(0,5);
    let any=false;
    if(tf==='posts'||tf==='both'){any|=secR('Top Posts',tp);any|=secR('Most Controversial Posts',cp)}
    if(tf==='comments'||tf==='both'){any|=secR('Top Comments',tc);any|=secR('Most Controversial Comments',cc)}
    if(!any)bd.appendChild(Object.assign(el('div','fsub-empty'),{textContent:'No activity found. Try loading complete history.'}));
    const lb=el('button','fl-btn fl-btn-ghost fsub-load-btn');lb.textContent='Load Complete History';
    lb.onclick=()=>{lb.textContent='Fetching all pages…';lb.disabled=true;Promise.all([fetchActivity(u,'submitted','new',25),fetchActivity(u,'comments','new',25)]).then(([p,c])=>{_allFull=[...p,...c].filter(x=>x.subreddit.toLowerCase()===subL);viewMode='full';render()})};
    bd.appendChild(lb)
  }
}
Promise.all([fetchActivity(u,'submitted','top',1),fetchActivity(u,'submitted','controversial',1),fetchActivity(u,'comments','top',1),fetchActivity(u,'comments','controversial',1)]).then(([tp,cp,tc,cc])=>{_tp=tp;_cp=cp;_tc=tc;_cc=cc;render()})}

function rescan(u){const k=u.toLowerCase(),es=[];document.querySelectorAll(`[${PA}]`).forEach(e=>{const m=e.href?.match(/\/user\/([^/?#]+)/);const n=m?.[1]||e.textContent?.trim();if(n?.toLowerCase()===k)es.push(e)});document.querySelectorAll(`.flagger-badge[data-flagger-user="${CSS.escape(u)}"]`).forEach(e=>e.remove());es.forEach(e=>{const id=getEid(e);e.parentNode?.querySelector(`.subreddit-flagger-debug[${EA}="${id}"]`)?.remove()});if(!es.length)return;pending.set(k,es);for(const e of es)setDbg(e,'pending',u);processQ()}

/* ═══════ MINI CREATE ═══════ */
function showMini(sn){const ov=el('div','flagger-mini-overlay');let escMini;function rmMini(){ov.remove();document.removeEventListener('keydown',escMini)}ov.onclick=e=>{if(e.target===ov)rmMini()};const pn=el('div','flagger-mini-panel'),hr=el('div','flagger-mini-header');hr.appendChild(Object.assign(el('div','flagger-mini-title'),{textContent:'Add to Flair Group'}));hr.appendChild(Object.assign(el('div','flagger-mini-sub'),{textContent:`r/${sn}`}));pn.appendChild(hr);const bd=el('div','flagger-mini-body');if(CFG.groups.length){bd.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Add to existing group',style:'margin-bottom:8px'}));for(const g of CFG.groups){const r=el('div','');r.style.cssText='display:flex;align-items:center;gap:8px;padding:7px 10px;border-radius:6px;cursor:pointer;margin-bottom:3px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);transition:all .12s;';r.onmouseenter=()=>r.style.borderColor='rgba(255,255,255,.12)';r.onmouseleave=()=>r.style.borderColor='rgba(255,255,255,.04)';r.appendChild(Object.assign(el('span',''),{style:`width:10px;height:10px;border-radius:3px;background:${g.color};flex-shrink:0`}));const tw=el('span','');tw.style.cssText='flex:1;min-width:0;';tw.appendChild(Object.assign(el('div',''),{textContent:g.label,style:'font-size:12px;color:#bbb'}));if(g.description)tw.appendChild(Object.assign(el('div',''),{textContent:g.description,style:'font-size:9px;color:#555;margin-top:1px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis'}));r.appendChild(tw);const al=g.subreddits.some(s=>s.toLowerCase()===sn.toLowerCase());if(al){r.appendChild(Object.assign(el('span',''),{textContent:'already added',style:'font-size:9px;color:#555;text-transform:uppercase;flex-shrink:0'}));r.style.cursor='default';r.style.opacity='.5'}else r.onclick=()=>{g.subreddits.push(sn);saveCfg(CFG);ov.remove();flash(`Added r/${sn} to "${g.label}"`)};bd.appendChild(r)}bd.appendChild(Object.assign(el('div',''),{style:'height:1px;background:rgba(255,255,255,.04);margin:14px 0'}))}bd.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Create new group',style:'margin-bottom:8px'}));const r1=el('div','fs-row');r1.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'Label'}));const i1=el('input','fs-inp');i1.placeholder='e.g. Gamer';r1.appendChild(i1);bd.appendChild(r1);const rD=el('div','fs-row');rD.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'Desc'}));const iD=el('input','fs-inp');iD.placeholder='Optional description';rD.appendChild(iD);bd.appendChild(rD);const r2=el('div','fs-row');r2.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'Color'}));const cI=el('input','fs-inp-color');cI.type='color';cI.value='#3498db';r2.appendChild(cI);const ml=el('label','fs-lbl');ml.textContent='Min';ml.style.width='auto';ml.style.marginLeft='8px';r2.appendChild(ml);const mI=el('input','fs-inp fs-inp-sm');mI.type='number';mI.value='2';mI.min='1';r2.appendChild(mI);bd.appendChild(r2);pn.appendChild(bd);const ft=el('div','flagger-mini-footer');ft.appendChild(Object.assign(el('button','fl-btn fl-btn-ghost'),{textContent:'Cancel',onclick:rmMini}));const cr=el('button','fl-btn fl-btn-success');cr.textContent='Create Group';cr.onclick=()=>{CFG.groups.push({id:uid(),label:i1.value.trim()||'Untitled',description:iD.value.trim(),color:cI.value,textColor:'#ffffff',minPosts:Math.max(1,parseInt(mI.value)||2),subreddits:[sn]});saveCfg(CFG);rmMini();flash(`Created group with r/${sn}`)};ft.appendChild(cr);pn.appendChild(ft);ov.appendChild(pn);document.body.appendChild(ov);i1.focus();escMini=e=>{if(e.key==='Escape')rmMini()};document.addEventListener('keydown',escMini)}
function flash(t){const m=el('div','');m.textContent=t;m.style.cssText='position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#111119;color:#bbb;border:1px solid rgba(255,255,255,.08);padding:10px 20px;border-radius:8px;font-size:12px;font-family:-apple-system,sans-serif;z-index:1000010;box-shadow:0 8px 24px rgba(0,0,0,.5);animation:flaggerSlideUp .2s ease;';document.body.appendChild(m);setTimeout(()=>{m.style.opacity='0';m.style.transition='opacity .3s';setTimeout(()=>m.remove(),300)},2200)}

/* ═══════ SETTINGS (tabbed) ═══════ */
let sO=false;
function openS(){
if(sO){if(document.querySelector('.fs-overlay'))return;sO=false}sO=true;CFG=getCfg();let dr=structuredClone(CFG);const newSubs=new Set();
const ov=el('div','flagger-overlay fs-overlay'),pn=el('div','fs-panel');

// Header
const hd=el('div','fs-header'),tw=el('span','');
tw.appendChild(Object.assign(el('span','fs-header-title'),{textContent:'Flagger Settings'}));
tw.appendChild(Object.assign(el('span','fs-header-ver'),{textContent:`v${VER}`}));
hd.appendChild(tw);const cB=el('button','fl-close');cB.textContent='\u00D7';cB.onclick=cl;hd.appendChild(cB);pn.appendChild(hd);

// Tabs bar
const tabBar=el('div','fs-tabs');
const tabFlairs=el('div','fs-tab active');tabFlairs.textContent='Flairs';
const tabSettings=el('div','fs-tab');tabSettings.textContent='Settings';
const tabRules=el('div','fs-tab');tabRules.textContent='Rules';
const tabDocumentation=el('div','fs-tab');tabDocumentation.textContent='Documentation';
tabBar.appendChild(tabFlairs);tabBar.appendChild(tabSettings);tabBar.appendChild(tabRules);tabBar.appendChild(tabDocumentation);pn.appendChild(tabBar);

const bd=el('div','fs-body');

// ── Flairs tab content ──
const flairsContent=el('div','fs-tab-content active');
const gSec=el('div','fs-section');
gSec.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Flair Groups'}));
const gL=el('div','');

const collapsedGroups=new Set();
let closeAdvanced=null;
function openFlairStyle(g,onApply){
  if(closeAdvanced)closeAdvanced();
  const original=normalizeFlairStyle(g.flairStyle),draft={color:validHex(g.color,'#3498db'),...original},ov2=el('div','flagger-overlay fstyle-overlay'),panel=el('div','fstyle-panel');let esc2;
  function close(){ov2.remove();document.removeEventListener('keydown',esc2,true);if(closeAdvanced===close)closeAdvanced=null}closeAdvanced=close;
  const header=el('div','fs-header'),title=el('span','fs-header-title');title.textContent=`Advanced Flair · ${g.label||'Untitled'}`;header.appendChild(title);const closeB=el('button','fl-close');closeB.textContent='×';closeB.onclick=close;header.appendChild(closeB);panel.appendChild(header);
  const body=el('div','fstyle-body'),previewWrap=el('div','fstyle-preview-wrap'),preview=el('span','fstyle-preview');preview.textContent=g.label||'Flair Preview';previewWrap.appendChild(preview);body.appendChild(previewWrap);
  function refresh(){preview.style.color=g.textColor||'#fff';applyFlairVisual(preview,{color:draft.color,flairStyle:draft})}
  function colorRow(label,key,help){const row=el('div','fstyle-row'),text=el('div','fstyle-row-text');text.appendChild(Object.assign(el('div','fstyle-row-title'),{textContent:label}));text.appendChild(Object.assign(el('div','fstyle-row-sub'),{textContent:help}));const input=el('input','fs-inp-color');input.type='color';input.value=draft[key];input.oninput=()=>{draft[key]=input.value;refresh()};row.appendChild(text);row.appendChild(input);body.appendChild(row);return input}
  colorRow('Base color','color','The primary flair color');const accentInput=colorRow('Accent color','accentColor','Used by patterns and glow');
  const patternRow=el('div','fstyle-row'),patternText=el('div','fstyle-row-text');patternText.appendChild(Object.assign(el('div','fstyle-row-title'),{textContent:'Accent pattern'}));patternText.appendChild(Object.assign(el('div','fstyle-row-sub'),{textContent:'Overlay style for the accent color'}));const pattern=el('select','fs-inp fstyle-select');for(const[value,label]of[['none','Solid / none'],['diagonal','Diagonal stripes'],['caution','Caution tape'],['checker','Checkerboard'],['dots','Dots']]){const option=document.createElement('option');option.value=value;option.textContent=label;option.selected=draft.pattern===value;pattern.appendChild(option)}pattern.onchange=()=>{draft.pattern=pattern.value;refresh()};patternRow.appendChild(patternText);patternRow.appendChild(pattern);body.appendChild(patternRow);
  const toggleControls={},rangeControls={};
  function toggleRow(key,label,help,parent=body,onChange){const row=el('div','fstyle-row'),text=el('div','fstyle-row-text');text.appendChild(Object.assign(el('div','fstyle-row-title'),{textContent:label}));text.appendChild(Object.assign(el('div','fstyle-row-sub'),{textContent:help}));const toggle=el('div',`fs-toggle ${draft[key]?'on':''}`);toggleControls[key]=toggle;toggle.onclick=()=>{draft[key]=!draft[key];toggle.classList.toggle('on',draft[key]);refresh();if(onChange)onChange()};row.appendChild(text);row.appendChild(toggle);parent.appendChild(row);return row}
  function rangeRow(key,label,help,min,max,step,format,parent){const row=el('div','fstyle-row'),text=el('div','fstyle-row-text');text.appendChild(Object.assign(el('div','fstyle-row-title'),{textContent:label}));text.appendChild(Object.assign(el('div','fstyle-row-sub'),{textContent:help}));const input=el('input','fstyle-range'),value=el('span','fstyle-range-value');input.type='range';input.min=String(min);input.max=String(max);input.step=String(step);input.value=String(draft[key]);function update(){draft[key]=Number(input.value);value.textContent=format(draft[key]);refresh()}input.oninput=update;value.textContent=format(draft[key]);rangeControls[key]={input,value,format};row.appendChild(text);row.appendChild(input);row.appendChild(value);parent.appendChild(row)}
  toggleRow('separate','Separate flair','Render this group as its own pill when other groups match');
  const glowOptions=el('div','fstyle-effect-options'),blinkOptions=el('div','fstyle-effect-options');function syncEffectPanels(){glowOptions.style.display=draft.glow?'':'none';blinkOptions.style.display=draft.blink?'':'none'}
  toggleRow('glow','Glow','Add an accent-colored outer glow',body,syncEffectPanels);rangeRow('glowRadius','Glow radius','How far the glow spreads',1,24,1,v=>`${Math.round(v)}px`,glowOptions);rangeRow('glowIntensity','Glow intensity','Opacity of the accent glow',.1,1,.05,v=>`${Math.round(v*100)}%`,glowOptions);body.appendChild(glowOptions);
  toggleRow('blink','Blink','Pulse the flair to draw attention',body,syncEffectPanels);rangeRow('blinkSpeed','Cycle speed','Seconds per complete blink cycle',.3,4,.05,v=>`${v.toFixed(2)}s`,blinkOptions);rangeRow('blinkMinOpacity','Dim level','Lowest opacity reached while blinking',.05,.9,.05,v=>`${Math.round(v*100)}%`,blinkOptions);toggleRow('blinkFade','Fade in and out','Smoothly transition between bright and dim states',blinkOptions);body.appendChild(blinkOptions);syncEffectPanels();panel.appendChild(body);
  function syncEffectControls(){for(const[key,toggle]of Object.entries(toggleControls))toggle.classList.toggle('on',!!draft[key]);for(const[key,control]of Object.entries(rangeControls)){control.input.value=String(draft[key]);control.value.textContent=control.format(draft[key])}syncEffectPanels()}
  const footer=el('div','fstyle-footer'),reset=el('button','fl-btn fl-btn-ghost');reset.textContent='Reset Effects';reset.onclick=()=>{Object.assign(draft,structuredClone(DEFAULT_FLAIR_STYLE));accentInput.value=draft.accentColor;pattern.value=draft.pattern;syncEffectControls();refresh()};const cancel=el('button','fl-btn fl-btn-ghost');cancel.textContent='Cancel';cancel.onclick=close;const applyB=el('button','fl-btn fl-btn-success');applyB.textContent='Apply Style';applyB.onclick=()=>{g.color=draft.color;g.flairStyle=normalizeFlairStyle(draft);onApply();close()};footer.appendChild(reset);footer.appendChild(cancel);footer.appendChild(applyB);panel.appendChild(footer);ov2.appendChild(panel);ov2.onclick=e=>{if(e.target===ov2)close()};document.body.appendChild(ov2);refresh();esc2=e=>{if(e.key==='Escape'){e.preventDefault();e.stopImmediatePropagation();close()}};document.addEventListener('keydown',esc2,true)
}
function enhanceFlairCard(card,g){
  const sw=card.querySelector('.fs-card-swatch'),adv=card.querySelector('.fs-advanced-btn');
  if(sw&&adv){const tools=el('span','fs-color-tools');sw.parentNode.insertBefore(tools,sw);tools.appendChild(sw);tools.appendChild(adv);adv.textContent='';adv.type='button';adv.setAttribute('aria-label',adv.title||'Advanced color, pattern, and flair effects')}
  const oldDescription=card.querySelector('.fs-card-desc');if(oldDescription&&oldDescription.tagName==='INPUT'){const description=el('textarea','fs-card-desc fs-card-desc-area');description.value=oldDescription.value;description.placeholder=oldDescription.placeholder;description.rows=2;function fitDescription(){description.style.height='auto';const height=Math.max(34,Math.min(120,description.scrollHeight));description.style.height=`${height}px`;description.style.overflowY=description.scrollHeight>120?'auto':'hidden'}description.oninput=()=>{g.description=description.value;fitDescription()};oldDescription.replaceWith(description);setTimeout(fitDescription,0)}
  const body=card.lastElementChild;if(!body)return;g.rules=normalizeGroupRules(g.rules);
  const row=el('div','fs-row');row.style.alignItems='flex-start';const label=Object.assign(el('label','fs-lbl'),{textContent:'RULES ▾',title:'Click to collapse · Built-in content detectors that immediately qualify this flair group',style:'margin-top:6px;cursor:pointer;user-select:none'}),box=el('div','fs-chips'),select=el('select','fs-inp fs-rule-select');let collapsed=false;
  select.appendChild(Object.assign(document.createElement('option'),{value:'',textContent:'Add rule…'}));for(const rule of BUILTIN_RULES)select.appendChild(Object.assign(document.createElement('option'),{value:rule.id,textContent:rule.name}));
  function render(){box.querySelectorAll('.fs-chip-rule').forEach(x=>x.remove());g.rules.forEach((id,index)=>{const rule=BUILTIN_RULE_MAP.get(id);if(!rule)return;const chip=el('span','fs-chip fs-chip-rule');chip.appendChild(document.createTextNode(rule.name));const remove=el('span','fs-chip-x');remove.textContent='×';remove.dataset.i=String(index);chip.appendChild(remove);box.insertBefore(chip,select)})}
  select.onchange=()=>{if(select.value&&!g.rules.includes(select.value))g.rules.push(select.value);select.value='';render()};box.onclick=e=>{const remove=e.target.closest('.fs-chip-x');if(remove){g.rules.splice(parseInt(remove.dataset.i),1);render()}};label.onclick=()=>{collapsed=!collapsed;box.style.display=collapsed?'none':'';label.textContent=collapsed?'RULES ▸':'RULES ▾'};
  row.appendChild(label);box.appendChild(select);render();row.appendChild(box);body.appendChild(row)
}
function rG(){gL.innerHTML='';dr.groups.forEach((g,i)=>{g.color=validHex(g.color,'#3498db');g.textColor=validHex(g.textColor,'#ffffff');const card=mC(g,i);enhanceFlairCard(card,g);gL.appendChild(card)});}
function mC(g,i){const c=el('div','fs-card'),h=el('div','fs-card-head');g.flairStyle=normalizeFlairStyle(g.flairStyle);const sw=el('input','fs-card-swatch');sw.type='color';sw.value=g.color;sw.oninput=e=>{g.color=e.target.value;up()};const adv=el('button','fs-advanced-btn');adv.textContent='▶';adv.title='Advanced color, pattern, and flair effects';adv.onclick=e=>{e.preventDefault();e.stopPropagation();openFlairStyle(g,()=>{sw.value=g.color;up()})};const ni=el('input','fs-card-name');ni.value=g.label;ni.placeholder='Group label';ni.oninput=e=>{g.label=e.target.value;up()};const pv=el('span','fs-preview'),pl=el('span','fs-preview-label');function up(){pl.textContent=g.label||'Preview';pl.style.color=g.textColor||'#fff';applyFlairVisual(pl,g)}up();pv.appendChild(pl);const dl=el('button','fs-card-del');dl.textContent='\u00D7';dl.onclick=()=>{dr.groups.splice(i,1);rG()};const co=el('button','fs-card-collapse');const cb_=el('div','');if(collapsedGroups.has(g.id)){cb_.style.display='none';co.textContent='▶';co.title='Expand'}else{co.textContent='▼';co.title='Collapse'}co.onclick=e=>{e.stopPropagation();if(collapsedGroups.has(g.id)){collapsedGroups.delete(g.id);cb_.style.display='';co.textContent='▼';co.title='Collapse'}else{collapsedGroups.add(g.id);cb_.style.display='none';co.textContent='▶';co.title='Expand'}};h.appendChild(sw);h.appendChild(adv);h.appendChild(ni);h.appendChild(pv);h.appendChild(co);h.appendChild(dl);c.appendChild(h);const di=el('input','fs-card-desc');di.value=g.description||'';di.placeholder='Description (optional)';di.oninput=e=>{g.description=e.target.value};cb_.appendChild(di);const r2=el('div','fs-row');r2.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'TEXT'}));const tc=el('input','fs-inp-color');tc.type='color';tc.value=g.textColor||'#ffffff';tc.oninput=e=>{g.textColor=e.target.value;up()};r2.appendChild(tc);const mb=el('label','fs-lbl');mb.textContent='MIN';mb.style.width='auto';mb.style.marginLeft='8px';r2.appendChild(mb);const mi=el('input','fs-inp fs-inp-sm');mi.type='number';mi.value=g.minPosts||1;mi.min='1';mi.oninput=e=>{g.minPosts=parseInt(e.target.value)||1};r2.appendChild(mi);cb_.appendChild(r2);const r3=el('div','fs-row');r3.style.alignItems='flex-start';const subsLbl=Object.assign(el('label','fs-lbl'),{textContent:'SUBS ▾',title:'Click to collapse · Subreddits the user has posted in · Wildcards (*) and /regex/flags::nick supported',style:'margin-top:6px;cursor:pointer;user-select:none'});let subsColl=false;subsLbl.onclick=()=>{subsColl=!subsColl;ch.style.display=subsColl?'none':'';subsLbl.textContent=subsColl?'SUBS ▸':'SUBS ▾'};r3.appendChild(subsLbl);const ch=el('div','fs-chips'),ci=el('input','fs-chip-inp');ci.placeholder='subreddit + Enter';function rc(){ch.querySelectorAll('.fs-chip').forEach(c=>c.remove());g.subreddits.forEach((s,si)=>{const cp=el('span','fs-chip');const isRx=isRxEntry(s),isWild=!isRx&&s.includes('*');if(newSubs.has(s.toLowerCase()))cp.classList.add('fs-chip-new');else if(isWild)cp.classList.add('fs-chip-wild');if(isRx){cp.classList.add('fs-chip-rx');const p=parseRxEntry(s);cp.title=s;cp.innerHTML=`${p?p.nick:s}<span class="fs-chip-x" data-i="${si}">\u00D7</span>`;}else{cp.innerHTML=`r/${s}<span class="fs-chip-x" data-i="${si}">\u00D7</span>`;}cp.addEventListener('click',ev=>{if(ev.target.closest('.fs-chip-x'))return;ev.stopPropagation();g.subreddits.splice(si,1);ci.value=s;ci.oninput();rc();ci.focus()});cp.addEventListener('mousedown',ev=>{if(ev.button!==1)return;ev.preventDefault();g.subreddits.splice(si,1);rc();});ch.insertBefore(cp,ci)})}ci.oninput=()=>{const v=ci.value;ci.classList.toggle('fs-chip-inp-wild',!v.startsWith('/')&&v.includes('*'));ci.classList.toggle('fs-chip-inp-rx',v.startsWith('/'))};ci.onkeydown=e=>{if((e.key==='Enter'||e.key===',')&&ci.value.trim()){e.preventDefault();let v=ci.value.trim().replace(/,$/,'');if(v.startsWith('/')){if(v.includes('::')){if(!g.subreddits.includes(v)){g.subreddits.push(v);rc()}ci.value='';ci.oninput();return;}if(!/^\/.*\/[gimsuy]*$/.test(v)){ci.style.color='#d94f4f';setTimeout(()=>{ci.style.color='';ci.oninput();},800);return;}const nick=prompt('Nickname for this regex (shown on the chip):','');if(nick==null)return;const encoded=v+'::'+(nick.trim()||v);if(!g.subreddits.includes(encoded)){g.subreddits.push(encoded);rc()}ci.value='';ci.oninput();return;}v=v.replace(/^r\//,'');if(v&&!g.subreddits.some(x=>!isRxEntry(x)&&x.toLowerCase()===v.toLowerCase())){g.subreddits.push(v);rc()}ci.value='';ci.oninput();}if(e.key==='Backspace'&&!ci.value&&g.subreddits.length){g.subreddits.pop();rc()}};ch.onclick=e=>{const x=e.target.closest('.fs-chip-x');if(x){g.subreddits.splice(parseInt(x.dataset.i),1);rc()}else ci.focus()};ch.appendChild(ci);rc();r3.appendChild(ch);cb_.appendChild(r3);const r4=el('div','fs-row');r4.style.alignItems='flex-start';const keysLbl=Object.assign(el('label','fs-lbl'),{textContent:'KEYS ▾',title:'Click to collapse · Keywords matched against post titles and comment bodies · Wildcards (*) and /regex/flags::nick supported',style:'margin-top:6px;cursor:pointer;user-select:none'});let keysColl=false;keysLbl.onclick=()=>{keysColl=!keysColl;kch.style.display=keysColl?'none':'';keysLbl.textContent=keysColl?'KEYS ▸':'KEYS ▾'};r4.appendChild(keysLbl);const kch=el('div','fs-chips'),kci=el('input','fs-chip-inp');kci.placeholder='keyword + Enter';kci.oninput=()=>{const v=kci.value;kci.classList.toggle('fs-chip-inp-wild',!v.startsWith('/')&&v.includes('*'));kci.classList.toggle('fs-chip-inp-rx',v.startsWith('/'))};if(!g.keywords)g.keywords=[];function rk(){kch.querySelectorAll('.fs-chip').forEach(c=>c.remove());g.keywords.forEach((kw,ki)=>{const cp=el('span','fs-chip');const isKRx=isRxEntry(kw),isKWild=!isKRx&&kw.includes('*');if(isKRx){cp.classList.add('fs-chip-rx');const p=parseRxEntry(kw);cp.title=kw;cp.innerHTML=`${p?p.nick:kw}<span class="fs-chip-x" data-i="${ki}">\u00D7</span>`;}else{if(isKWild)cp.classList.add('fs-chip-wild');else cp.classList.add('fs-chip-kw');cp.innerHTML=`${kw}<span class="fs-chip-x" data-i="${ki}">\u00D7</span>`;}cp.addEventListener('click',ev=>{if(ev.target.closest('.fs-chip-x'))return;ev.stopPropagation();g.keywords.splice(ki,1);kci.value=kw;kci.oninput();rk();kci.focus()});cp.addEventListener('mousedown',ev=>{if(ev.button!==1)return;ev.preventDefault();g.keywords.splice(ki,1);rk()});kch.insertBefore(cp,kci)})}kci.onkeydown=e=>{if((e.key==='Enter'||e.key===',')&&kci.value.trim()){e.preventDefault();let v=kci.value.trim().replace(/,$/,'');if(v.startsWith('/')){if(v.includes('::')){if(!g.keywords.includes(v)){g.keywords.push(v);rk()}kci.value='';kci.oninput();return;}if(!/^\/.*\/[gimsuy]*$/.test(v)){kci.style.color='#d94f4f';setTimeout(()=>{kci.style.color='';kci.oninput();},800);return;}const nick=prompt('Nickname for this regex (shown on the chip):','');if(nick==null)return;const encoded=v+'::'+(nick.trim()||v);if(!g.keywords.includes(encoded)){g.keywords.push(encoded);rk()}kci.value='';kci.oninput();return;}if(v&&!g.keywords.some(x=>!isRxEntry(x)&&x.toLowerCase()===v.toLowerCase())){g.keywords.push(v);rk()}kci.value='';kci.oninput();}if(e.key==='Backspace'&&!kci.value&&g.keywords.length){g.keywords.pop();rk()}};kch.onclick=e=>{const x=e.target.closest('.fs-chip-x');if(x){g.keywords.splice(parseInt(x.dataset.i),1);rk()}else kci.focus()};kch.appendChild(kci);rk();r4.appendChild(kch);cb_.appendChild(r4);const r5=el('div','fs-row');r5.style.alignItems='flex-start';if(!g.descKeywords)g.descKeywords=[];const descLbl=Object.assign(el('label','fs-lbl'),{textContent:'DESC ▾',title:'Click to collapse · Keywords matched against the user\'s profile bio only · Wildcards (*) and /regex/flags::nick supported',style:'margin-top:6px;cursor:pointer;user-select:none'});let descColl=false;const dkch=el('div','fs-chips'),dkci=el('input','fs-chip-inp');dkci.placeholder='bio keyword + Enter';dkci.oninput=()=>{const v=dkci.value;dkci.classList.toggle('fs-chip-inp-wild',!v.startsWith('/')&&v.includes('*'));dkci.classList.toggle('fs-chip-inp-rx',v.startsWith('/'))};function rdk(){dkch.querySelectorAll('.fs-chip').forEach(c=>c.remove());g.descKeywords.forEach((kw,ki)=>{const cp=el('span','fs-chip');const isDKRx=isRxEntry(kw),isDKWild=!isDKRx&&kw.includes('*');if(isDKRx){cp.classList.add('fs-chip-rx');const p=parseRxEntry(kw);cp.title=kw;cp.innerHTML=`${p?p.nick:kw}<span class="fs-chip-x" data-i="${ki}">\u00D7</span>`;}else{if(isDKWild)cp.classList.add('fs-chip-wild');else cp.classList.add('fs-chip-kw');cp.innerHTML=`${kw}<span class="fs-chip-x" data-i="${ki}">\u00D7</span>`;}cp.addEventListener('click',ev=>{if(ev.target.closest('.fs-chip-x'))return;ev.stopPropagation();g.descKeywords.splice(ki,1);dkci.value=kw;dkci.oninput();rdk();dkci.focus()});cp.addEventListener('mousedown',ev=>{if(ev.button!==1)return;ev.preventDefault();g.descKeywords.splice(ki,1);rdk()});dkch.insertBefore(cp,dkci)})}dkci.onkeydown=e=>{if((e.key==='Enter'||e.key===',')&&dkci.value.trim()){e.preventDefault();let v=dkci.value.trim().replace(/,$/,'');if(v.startsWith('/')){if(v.includes('::')){if(!g.descKeywords.includes(v)){g.descKeywords.push(v);rdk()}dkci.value='';dkci.oninput();return;}if(!/^\/.*\/[gimsuy]*$/.test(v)){dkci.style.color='#d94f4f';setTimeout(()=>{dkci.style.color='';dkci.oninput();},800);return;}const nick=prompt('Nickname for this regex (shown on the chip):','');if(nick==null)return;const encoded=v+'::'+(nick.trim()||v);if(!g.descKeywords.includes(encoded)){g.descKeywords.push(encoded);rdk()}dkci.value='';dkci.oninput();return;}if(v&&!g.descKeywords.some(x=>!isRxEntry(x)&&x.toLowerCase()===v.toLowerCase())){g.descKeywords.push(v);rdk()}dkci.value='';dkci.oninput();}if(e.key==='Backspace'&&!dkci.value&&g.descKeywords.length){g.descKeywords.pop();rdk()}};dkch.onclick=e=>{const x=e.target.closest('.fs-chip-x');if(x){g.descKeywords.splice(parseInt(x.dataset.i),1);rdk()}else dkci.focus()};descLbl.onclick=()=>{descColl=!descColl;dkch.style.display=descColl?'none':'';descLbl.textContent=descColl?'DESC ▸':'DESC ▾'};r5.appendChild(descLbl);dkch.appendChild(dkci);rdk();r5.appendChild(dkch);cb_.appendChild(r5);c.appendChild(cb_);return c}
rG();gSec.appendChild(gL);
const bR=el('div','');bR.style.cssText='display:flex;gap:8px;margin-top:6px;';
const aB=el('button','fl-btn fl-btn-ghost');aB.textContent='+ New Group';aB.onclick=()=>{dr.groups.push({id:uid(),label:'',description:'',color:'#3498db',textColor:'#ffffff',flairStyle:structuredClone(DEFAULT_FLAIR_STYLE),minPosts:2,subreddits:[],rules:[]});rG();gL.lastElementChild?.scrollIntoView({behavior:'smooth',block:'center'})};
const rB=el('button','fl-btn fl-btn-warn fl-btn-sm');rB.textContent='Reset to Defaults';rB.onclick=()=>{if(!confirm('Replace all?'))return;dr.groups=freshDef();ackDflt();mB.textContent='Merge from Default';rG()};
const mB=el('button','fl-btn fl-btn-ghost fl-btn-sm');mB.textContent=dfltUpdated()?'(!) Merge from Default':'Merge from Default';mB.onclick=()=>{const n=mergeDflt(dr.groups,newSubs);ackDflt();mB.textContent='Merge from Default';rG();flash(n?`Merged ${n} new sub(s) from defaults`:'Already up to date')};
bR.appendChild(aB);bR.appendChild(mB);bR.appendChild(rB);gSec.appendChild(bR);
flairsContent.appendChild(gSec);

// ── Manual Users section ──
const muSec=el('div','fs-section');
muSec.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Manual User Tags'}));
muSec.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Assign flair groups to specific users (e.g. private/hidden profiles, [deleted]).',style:'margin-bottom:10px'}));
if(!dr.manualUsers)dr.manualUsers={};
const muList=el('div','');
const muSel=el('select','fs-inp');muSel.style.cssText='cursor:pointer;appearance:auto;-webkit-appearance:auto;';
function rebuildMuSel(){muSel.innerHTML='<option value="">— select group —</option>';for(const g of dr.groups){const o=document.createElement('option');o.value=g.id;o.textContent=g.label;muSel.appendChild(o)}}
function rMU(){
  rebuildMuSel();muList.innerHTML='';
  const mu=dr.manualUsers||{};
  const keys=Object.keys(mu);
  if(!keys.length){muList.appendChild(Object.assign(el('div',''),{textContent:'No manual users configured.',style:'font-size:11px;color:#444;font-style:italic;padding:6px 0'}));return}
  for(const uname of keys){
    const gids=mu[uname];
    const row=el('div','');row.style.cssText='display:flex;align-items:center;gap:8px;padding:7px 10px;background:rgba(255,255,255,.02);border:1px solid rgba(255,255,255,.04);border-radius:6px;margin-bottom:4px;';
    const unl=el('span','');unl.style.cssText='font-size:12px;color:#bbb;min-width:100px;flex-shrink:0;word-break:break-all;';unl.textContent=`u/${uname}`;row.appendChild(unl);
    const gc2=el('span','');gc2.style.cssText='display:flex;flex-wrap:wrap;gap:3px;flex:1;';
    for(const gid of gids){
      const g=dr.groups.find(x=>x.id===gid);if(!g)continue;
      const cp=el('span','fs-chip');
      const lb=el('span','');lb.style.cssText=`color:${g.textColor||'#fff'};padding:2px 6px;border-radius:3px;font-size:10px;font-weight:600`;applyFlairVisual(lb,g);lb.textContent=g.label;
      const cx=el('span','fs-chip-x');cx.textContent='×';cx.dataset.u=uname;cx.dataset.gid=gid;
      cp.appendChild(lb);cp.appendChild(cx);gc2.appendChild(cp);
    }
    gc2.addEventListener('click',e=>{const x=e.target.closest('[data-u]');if(!x)return;const un=x.dataset.u,gi=x.dataset.gid;if(!dr.manualUsers[un])return;dr.manualUsers[un]=dr.manualUsers[un].filter(id=>id!==gi);if(!dr.manualUsers[un].length)delete dr.manualUsers[un];rMU()});
    row.appendChild(gc2);
    const delB=el('button','fl-btn fl-btn-ghost fl-btn-sm');delB.textContent='×';delB.title='Remove user';delB.onclick=()=>{delete dr.manualUsers[uname];rMU()};
    row.appendChild(delB);muList.appendChild(row);
  }
}
rMU();muSec.appendChild(muList);
const muAddRow=el('div','fs-row');muAddRow.style.marginTop='10px';
muAddRow.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'User'}));
const muInp=el('input','fs-inp');muInp.placeholder='username (no u/)';muAddRow.appendChild(muInp);
muSec.appendChild(muAddRow);
const muAddRow2=el('div','fs-row');
muAddRow2.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'Group'}));
muAddRow2.appendChild(muSel);
const muAddB=el('button','fl-btn fl-btn-ghost fl-btn-sm');muAddB.style.flexShrink='0';muAddB.textContent='+ Add';
muAddB.onclick=()=>{const u2=muInp.value.trim().toLowerCase().replace(/^u\//,'');const gid=muSel.value;if(!u2||!gid){flash('Enter a username and select a group');return}if(!dr.manualUsers)dr.manualUsers={};if(!dr.manualUsers[u2])dr.manualUsers[u2]=[];if(!dr.manualUsers[u2].includes(gid))dr.manualUsers[u2].push(gid);muInp.value='';muSel.value='';rMU()};
muAddRow2.appendChild(muAddB);muSec.appendChild(muAddRow2);
flairsContent.appendChild(muSec);

// ── Settings tab content ──
const settingsContent=el('div','fs-tab-content');
const rulesContent=el('div','fs-tab-content');
const documentationContent=el('div','fs-tab-content');
function renderRulesTab(){rulesContent.innerHTML='';rulesContent.appendChild(Object.assign(el('div','fs-doc-lead'),{textContent:'Built-in rules are reusable detectors. Add one from a flair group’s RULES row; a detected match immediately satisfies that group’s MIN threshold.'}));const section=el('div','fs-section');section.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Available Rules'}));for(const rule of BUILTIN_RULES){const card=el('div','fs-rule-card'),head=el('div','fs-rule-head');head.appendChild(Object.assign(el('span','fs-rule-name'),{textContent:rule.name}));head.appendChild(Object.assign(el('span','fs-rule-built-in'),{textContent:'Built in'}));card.appendChild(head);card.appendChild(Object.assign(el('div','fs-rule-desc'),{textContent:rule.description}));const scopes=el('div','fs-rule-scopes');for(const scope of rule.scopes)scopes.appendChild(Object.assign(el('span','fs-rule-scope'),{textContent:scope}));card.appendChild(scopes);const assigned=dr.groups.filter(g=>normalizeGroupRules(g.rules).includes(rule.id)).length;card.appendChild(Object.assign(el('div','fs-rule-usage'),{textContent:`Assigned to ${assigned} flair group${assigned===1?'':'s'} · Detects 66-character Session Account IDs, contextual Session service mentions, TeleGuard mentions, and 9-character TeleGuard codes.`}));section.appendChild(card)}rulesContent.appendChild(section)}
renderRulesTab();
const docLead=el('div','fs-doc-lead');docLead.textContent='Flair groups can match subreddit activity, words in posts and comments, or a profile bio. KEYS and DESC matching is always case-insensitive, including custom regular expressions.';documentationContent.appendChild(docLead);
const docGrid=el('div','fs-doc-grid');documentationContent.appendChild(docGrid);
function docCard(title,wide=false){const card=el('section',`fs-doc-card${wide?' fs-doc-card-wide':''}`);card.appendChild(Object.assign(el('div','fs-doc-title'),{textContent:title}));docGrid.appendChild(card);return card}
function docRule(card,name,codes,text){const row=el('div','fs-doc-rule');row.appendChild(Object.assign(el('div','fs-doc-rule-name'),{textContent:name}));const body=el('div','fs-doc-rule-text');for(const code of codes)body.appendChild(Object.assign(el('code','fs-doc-code'),{textContent:code}));body.appendChild(document.createTextNode(text));row.appendChild(body);card.appendChild(row)}
const subDoc=docCard('SUBS · Subreddit rules',true);
docRule(subDoc,'Exact name',['teenagers'],' Matches only that subreddit. Enter names with or without r/; matching ignores letter case.');
docRule(subDoc,'Wildcard',['teen*','*memes','ask*girls'],' The * character matches zero or more characters. Wildcards cover the entire subreddit name, so teen* matches teen, teenagers, and teenage-style names.');
docRule(subDoc,'Regular expression',['/^teen(agers)?$/i','/^ask.*girls$/i'],' Enter /pattern/flags and press Enter. The editor asks for a nickname, which becomes the chip label. Supported JavaScript flags are g, i, m, s, u, and y.');
docRule(subDoc,'Stored regex form',['/^teen(agers)?$/i::Teen subs'],' Import/export stores ::nickname after the expression. You may also paste that complete form directly. The nickname changes only the display label, not matching.');
subDoc.appendChild(Object.assign(el('div','fs-doc-note'),{textContent:'Avoid overlapping exact, wildcard, or regex SUBS rules inside one group when counts matter. If multiple rules match the same subreddit, its activity can be counted once for each matching rule.'}));
const fieldsDoc=docCard('Rule fields');
docRule(fieldsDoc,'SUBS',[],'Counts scanned activity from exact, wildcard, and regex subreddit matches.');
docRule(fieldsDoc,'KEYS',['character ai','ai*bot','/chat.?bot/g'],'Matches post titles and comment bodies. Plain text, wildcards, and regex are always case-insensitive; * works anywhere.');
docRule(fieldsDoc,'DESC',['artist','/digital\\s+artist/g'],'Matches the profile bio only and is always case-insensitive. One matching DESC rule immediately qualifies the group, regardless of MIN.');
docRule(fieldsDoc,'RULES',['Risque Platforms'],'Runs a reusable built-in detector across the profile description, post titles, and comments. Any match immediately qualifies the group.');
const scoreDoc=docCard('MIN and scoring');
docRule(scoreDoc,'Minimum',['MIN = 3'],'The flair appears when the group score reaches this number.');
docRule(scoreDoc,'Combined score',[],'SUBS activity and matching post/comment items from KEYS are added together. Each item adds at most one KEY point per group, even when several KEY rules match it.');
docRule(scoreDoc,'Bio override',[],'A matching DESC rule raises the score to at least MIN, causing an immediate match.');
const editDoc=docCard('Editing shortcuts');
docRule(editDoc,'Add',['Enter',','],'Press Enter or comma to turn the current value into a chip.');
docRule(editDoc,'Edit',[],'Click a chip to move it back into its input.');
docRule(editDoc,'Remove',['×','middle-click','Backspace'],'Use the chip close button or middle-click it. Backspace on an empty input removes the last chip.');
const styleDoc=docCard('Flair appearance');
docRule(styleDoc,'Advanced color button',[],'Use the small inline arrow beside the base color to configure accent patterns, a separate pill, glow, and blink properties.');
docRule(styleDoc,'Breakdown display',[],'Glow and blink apply to inline flair badges and previews only. Profile and subreddit breakdowns keep the configured colors and patterns but remain static.');

// Options
const os=el('div','fs-section');os.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Options'}));
const dR=el('div','fs-opt-row'),dT=el('div','');
dT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Persist debug flairs'}));
dT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Keep status badges visible alongside final results'}));
dR.appendChild(dT);const dG=el('div',`fs-toggle ${dr.persistDebug?'on':''}`);
dG.onclick=()=>{dr.persistDebug=!dr.persistDebug;dG.classList.toggle('on',dr.persistDebug)};
dR.appendChild(dG);os.appendChild(dR);
const abR=el('div','fs-opt-row'),abT=el('div','');
abT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Show + buttons'}));
abT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Show quick-add buttons next to subreddit names while browsing'}));
abR.appendChild(abT);const abG=el('div',`fs-toggle ${dr.showAddButtons?'on':''}`);
abG.onclick=()=>{dr.showAddButtons=!dr.showAddButtons;abG.classList.toggle('on',dr.showAddButtons)};
abR.appendChild(abG);os.appendChild(abR);
const agR=el('div','fs-opt-row'),agT=el('div','');
agT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Show detected age'}));
agT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Append an age inferred from the profile bio or self-identifying comments; ? marks uncertain matches'}));
agR.appendChild(agT);const agG=el('div',`fs-toggle ${dr.showAge?'on':''}`);
agG.onclick=()=>{dr.showAge=!dr.showAge;agG.classList.toggle('on',dr.showAge)};
agR.appendChild(agG);os.appendChild(agR);
dr.ageRules=normalizeAgeRules(dr.ageRules);
dr.ageFlairSubreddits=normalizeFlairSubreddits(dr.ageFlairSubreddits);
const agD=el('details','');agD.style.cssText='margin:-2px 0 10px;padding:8px 10px;background:rgba(255,255,255,.015);border:1px solid rgba(255,255,255,.04);border-radius:6px;';
const agS=el('summary','');agS.textContent='Age detector';agS.style.cssText='cursor:pointer;color:#777;font-size:11px;font-weight:600;user-select:none;';agD.appendChild(agS);
const agFR=el('div','fs-row');agFR.style.cssText='margin-top:10px;align-items:flex-start;';agFR.appendChild(Object.assign(el('label','fs-lbl'),{textContent:'Age-flair subs',style:'margin-top:6px'}));const agFCh=el('div','fs-chips'),agF=el('input','fs-chip-inp');agF.placeholder='subreddit + Enter';
function renderAgeFlairSubs(){agFCh.querySelectorAll('.fs-chip').forEach(c=>c.remove());dr.ageFlairSubreddits.forEach((sub,i)=>{const cp=el('span','fs-chip');cp.title='Click to edit · middle-click to remove';cp.appendChild(document.createTextNode(`r/${sub}`));const x=el('span','fs-chip-x');x.textContent='×';x.dataset.i=String(i);cp.appendChild(x);cp.addEventListener('click',e=>{if(e.target.closest('.fs-chip-x'))return;e.stopPropagation();dr.ageFlairSubreddits.splice(i,1);agF.value=sub;renderAgeFlairSubs();agF.focus()});cp.addEventListener('mousedown',e=>{if(e.button!==1)return;e.preventDefault();dr.ageFlairSubreddits.splice(i,1);renderAgeFlairSubs()});agFCh.insertBefore(cp,agF)})}
function addAgeFlairSub(){let sub=agF.value.trim().replace(/,$/,'').replace(/^r\//i,'');if(!sub)return true;if(!/^[A-Za-z0-9_]+$/.test(sub)){agF.style.color='#d94f4f';setTimeout(()=>agF.style.color='',800);return false}if(!dr.ageFlairSubreddits.some(s=>s.toLowerCase()===sub.toLowerCase()))dr.ageFlairSubreddits.push(sub);agF.value='';renderAgeFlairSubs();return true}
agF.onkeydown=e=>{if((e.key==='Enter'||e.key===',')&&agF.value.trim()){e.preventDefault();addAgeFlairSub()}else if(e.key==='Backspace'&&!agF.value&&dr.ageFlairSubreddits.length){dr.ageFlairSubreddits.pop();renderAgeFlairSubs()}};agFCh.onclick=e=>{const x=e.target.closest('.fs-chip-x');if(x){dr.ageFlairSubreddits.splice(parseInt(x.dataset.i),1);renderAgeFlairSubs()}else agF.focus()};agFCh.appendChild(agF);renderAgeFlairSubs();agFR.appendChild(agFCh);agD.appendChild(agFR);
agD.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Author flairs from these subreddits are checked for forms such as 13, 13M, 13yo, F18, and M 24. A flair less than one year old gets highest priority.',style:'margin:-2px 0 8px 80px;line-height:1.45'}));
agD.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Patterns are case-insensitive. The first capture group must contain the age. nearbyWords controls loose “my … age … 16” matches.',style:'margin:9px 0 6px;line-height:1.45'}));
const agA=el('textarea','fs-ie-textarea');agA.style.cssText='height:245px;font-family:ui-monospace,SFMono-Regular,Consolas,monospace;font-size:10px;';agA.value=JSON.stringify(dr.ageRules,null,2);agD.appendChild(agA);
const agSt=el('div','fs-ie-status');agD.appendChild(agSt);
function syncAgeRules(){try{const p=JSON.parse(agA.value),n=normalizeAgeRules(p);getAgeCompiler(n,true);if(agF.value.trim()&&!addAgeFlairSub())throw new Error('Age-flair subreddits may contain only letters, numbers, and underscores');dr.ageRules=n;dr.ageFlairSubreddits=normalizeFlairSubreddits(dr.ageFlairSubreddits);renderAgeFlairSubs();agA.value=JSON.stringify(n,null,2);agSt.textContent='Age settings valid and applied to this draft';agSt.className='fs-ie-status ok';return true}catch(e){agSt.textContent=`Invalid age settings: ${e.message}`;agSt.className='fs-ie-status err';agD.open=true;return false}}
const agBR=el('div','fs-ie-row');agBR.style.marginTop='6px';
const agApply=el('button','fl-btn fl-btn-primary fl-btn-sm');agApply.textContent='Apply Rules';agApply.onclick=syncAgeRules;
const agReset=el('button','fl-btn fl-btn-ghost fl-btn-sm');agReset.textContent='Reset Age Defaults';agReset.onclick=()=>{dr.ageRules=structuredClone(DEFAULT_AGE_RULES);dr.ageFlairSubreddits=[...DEFAULT_AGE_FLAIR_SUBREDDITS];agF.value='';renderAgeFlairSubs();agA.value=JSON.stringify(dr.ageRules,null,2);agSt.textContent='Age settings reset in this draft';agSt.className='fs-ie-status ok'};
agBR.appendChild(agApply);agBR.appendChild(agReset);agD.appendChild(agBR);
const agTestR=el('div','fs-row');agTestR.style.cssText='margin-top:10px;align-items:center;';
const agTest=el('input','fs-inp');agTest.placeholder='Test wording, e.g. my current age is 16';
const agCtx=el('select','fs-inp fs-inp-sm');agCtx.style.cssText='cursor:pointer;appearance:auto;-webkit-appearance:auto;width:90px;';for(const[v,l]of[['comment','Comment'],['bio','Bio'],['flair','Flair']]){const o=document.createElement('option');o.value=v;o.textContent=l;agCtx.appendChild(o)}
const agTestB=el('button','fl-btn fl-btn-ghost fl-btn-sm');agTestB.textContent='Test';const agTestOut=el('span','fs-opt-sub');agTestOut.style.cssText='min-width:110px;text-align:right;';
agTestB.onclick=()=>{if(!syncAgeRules())return;const t=agTest.value.trim(),r=agCtx.value==='bio'?detectAge([],t,dr.ageRules):agCtx.value==='flair'?detectAge([],'',dr.ageRules,[{flair:t,subreddit:dr.ageFlairSubreddits[0],createdUtc:Math.floor(Date.now()/1000)}]):detectAge([t],'',dr.ageRules);agTestOut.textContent=r?`(${r.age}${r.uncertain?'?':''}) · ${r.underage?'underage':'adult'} · ${r.source}`:'No age match'};
agTestR.appendChild(agTest);agTestR.appendChild(agCtx);agTestR.appendChild(agTestB);agD.appendChild(agTestR);agD.appendChild(agTestOut);os.appendChild(agD);
const mpR=el('div','fs-opt-row'),mpT=el('div','');mpT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'History pages'}));mpT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'How many pages of a user\'s post history to scan'}));mpR.appendChild(mpT);const mpI=el('input','fs-inp fs-inp-sm');mpI.type='number';mpI.min='1';mpI.max='25';mpI.value=dr.maxPages;mpI.onchange=()=>{dr.maxPages=Math.min(25,Math.max(1,parseInt(mpI.value)||4))};mpR.appendChild(mpI);os.appendChild(mpR);
const cdR2=el('div','fs-opt-row'),cdT2=el('div','');cdT2.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Cache duration (hours)'}));cdT2.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'How long scan results are stored before re-fetching'}));cdR2.appendChild(cdT2);const cdI=el('input','fs-inp fs-inp-sm');cdI.type='number';cdI.min='1';cdI.value=dr.cacheDurationHours;cdI.onchange=()=>{dr.cacheDurationHours=Math.max(1,parseInt(cdI.value)||24)};cdR2.appendChild(cdI);os.appendChild(cdR2);
const mcR=el('div','fs-opt-row'),mcT=el('div','');mcT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Max concurrent requests'}));mcT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'How many users are scanned simultaneously'}));mcR.appendChild(mcT);const mcI=el('input','fs-inp fs-inp-sm');mcI.type='number';mcI.min='1';mcI.max='10';mcI.value=dr.maxConcurrent;mcI.onchange=()=>{dr.maxConcurrent=Math.max(1,parseInt(mcI.value)||2)};mcR.appendChild(mcI);os.appendChild(mcR);
const rdR=el('div','fs-opt-row'),rdT=el('div','');rdT.appendChild(Object.assign(el('div','fs-opt-text'),{textContent:'Request delay (ms)'}));rdT.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Minimum delay between all Reddit API requests, including concurrent scans'}));rdR.appendChild(rdT);const rdI=el('input','fs-inp fs-inp-sm');rdI.type='number';rdI.min='0';rdI.step='100';rdI.value=dr.requestDelayMs;rdI.onchange=()=>{dr.requestDelayMs=Math.max(0,parseInt(rdI.value)||1500)};rdR.appendChild(rdI);os.appendChild(rdR);
settingsContent.appendChild(os);

// Cache
const cs=el('div','fs-section');cs.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Cache'}));
const cR=el('div','fs-cache-row'),cI2=el('span','fs-cache-info');cI2.textContent=`${Object.keys(gc()).length} users cached`;
const fB=el('button','fl-btn fl-btn-danger fl-btn-sm');fB.textContent='Flush Cache';
fB.onclick=()=>{clearCache();uLogs.clear();uKwHits.clear();inFlight.clear();cI2.textContent='Flushed';fB.textContent='Done';fB.disabled=true;fB.style.opacity='.5'};
cR.appendChild(cI2);cR.appendChild(fB);cs.appendChild(cR);settingsContent.appendChild(cs);

// Import/Export
const ie=el('div','fs-section');ie.appendChild(Object.assign(el('div','fs-section-label'),{textContent:'Import / Export'}));
ie.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Share flair groups, all age regex rules, and age-flair subreddit chips as JSON.',style:'margin-bottom:10px'}));
const xR=el('div','fs-ie-row'),xB=el('button','fl-btn fl-btn-ghost fl-btn-sm');xB.textContent='Copy to Clipboard';
const xF=el('button','fl-btn fl-btn-ghost fl-btn-sm');xF.textContent='Download .json';const xS=el('div','fs-ie-status');
function exportConfigJson(){if(!syncAgeRules())return null;return JSON.stringify({formatVersion:3,groups:dr.groups,ageRules:normalizeAgeRules(dr.ageRules),ageFlairSubreddits:normalizeFlairSubreddits(dr.ageFlairSubreddits)},null,2)}
xB.onclick=()=>{const json=exportConfigJson();if(!json)return;navigator.clipboard.writeText(json).then(()=>{xS.textContent=`Copied full config: ${dr.groups.length} group(s) + age rules`;xS.className='fs-ie-status ok'}).catch(()=>{xS.textContent='Clipboard failed';xS.className='fs-ie-status err'})};
xF.onclick=()=>{const json=exportConfigJson();if(!json)return;const a=document.createElement('a');a.href=URL.createObjectURL(new Blob([json],{type:'application/json'}));a.download='redditority-config.json';a.click();URL.revokeObjectURL(a.href);xS.textContent='Downloaded full config';xS.className='fs-ie-status ok'};
xR.appendChild(xB);xR.appendChild(xF);ie.appendChild(xR);ie.appendChild(xS);
ie.appendChild(Object.assign(el('div','fs-opt-sub'),{textContent:'Paste JSON to import:',style:'margin-top:12px;margin-bottom:6px'}));
const iA=el('textarea','fs-ie-textarea');iA.placeholder='{\n  "groups": [...],\n  "ageRules": {...},\n  "ageFlairSubreddits": ["teenagers"]\n}';ie.appendChild(iA);
const iSt=el('div','fs-ie-status');
function pI(){
  const raw=iA.value.trim();if(!raw){iSt.textContent='Paste JSON first';iSt.className='fs-ie-status err';return null}
  try{
    const p=JSON.parse(raw),legacy=Array.isArray(p),hasGroups=legacy||Object.prototype.hasOwnProperty.call(p||{},'groups'),hasAgeRules=!legacy&&(Object.prototype.hasOwnProperty.call(p||{},'ageRules')||Object.prototype.hasOwnProperty.call(p?.ageDetection||{},'rules')),hasFlairSubs=!legacy&&(Object.prototype.hasOwnProperty.call(p||{},'ageFlairSubreddits')||Object.prototype.hasOwnProperty.call(p?.ageDetection||{},'flairSubreddits'));
    if(!hasGroups&&!hasAgeRules&&!hasFlairSubs)throw new Error('Expected groups, ageRules, or ageFlairSubreddits');
    const groupRaw=legacy?p:p.groups;if(hasGroups&&!Array.isArray(groupRaw))throw new Error('groups must be an array');
    const groups=(groupRaw||[]).map(g=>({id:uid(),label:String(g.label||'Untitled').trim(),description:String(g.description||'').trim(),color:validHex(g.color,'#3498db'),textColor:validHex(g.textColor,'#ffffff'),flairStyle:normalizeFlairStyle(g.flairStyle),minPosts:Math.max(1,parseInt(g.minPosts)||2),subreddits:Array.isArray(g.subreddits)?g.subreddits.map(s=>String(s).trim()).filter(Boolean):[],keywords:Array.isArray(g.keywords)?g.keywords.map(s=>String(s).trim()).filter(Boolean):[],descKeywords:Array.isArray(g.descKeywords)?g.descKeywords.map(s=>String(s).trim()).filter(Boolean):[],rules:normalizeGroupRules(g.rules)})).filter(g=>g.subreddits.length||g.label);
    let ageRules=null;if(hasAgeRules){const ar=Object.prototype.hasOwnProperty.call(p,'ageRules')?p.ageRules:p.ageDetection.rules;if(!ar||typeof ar!=='object'||Array.isArray(ar))throw new Error('ageRules must be an object');ageRules=normalizeAgeRules(ar);getAgeCompiler(ageRules,true)}
    let flairSubs=null;if(hasFlairSubs){const fs=Object.prototype.hasOwnProperty.call(p,'ageFlairSubreddits')?p.ageFlairSubreddits:p.ageDetection.flairSubreddits;if(!Array.isArray(fs)&&typeof fs!=='string')throw new Error('ageFlairSubreddits must be an array');flairSubs=normalizeFlairSubreddits(fs)}
    return{groups,hasGroups,ageRules,hasAgeRules,flairSubs,hasFlairSubs}
  }catch(e){iSt.textContent=`Invalid config: ${e.message}`;iSt.className='fs-ie-status err';return null}
}
function applyImportedAge(data,merge){const parts=[];if(data.hasAgeRules){dr.ageRules=data.ageRules;agA.value=JSON.stringify(dr.ageRules,null,2);parts.push('age regex rules')}if(data.hasFlairSubs){dr.ageFlairSubreddits=merge?normalizeFlairSubreddits([...dr.ageFlairSubreddits,...data.flairSubs]):data.flairSubs;agF.value='';renderAgeFlairSubs();parts.push(`${data.flairSubs.length} age-flair sub(s)`)}return parts}
const iR=el('div','fs-ie-row');iR.style.marginTop='6px';
const iM=el('button','fl-btn fl-btn-primary fl-btn-sm');iM.textContent='Merge';
const iP=el('button','fl-btn fl-btn-danger fl-btn-sm');iP.textContent='Replace All';
iM.onclick=()=>{const data=pI();if(!data)return;let added=0;if(data.hasGroups){for(const x of data.groups){if(!dr.groups.some(e=>e.label.toLowerCase()===x.label.toLowerCase()&&JSON.stringify(e.subreddits.map(s=>s.toLowerCase()).sort())===JSON.stringify(x.subreddits.map(s=>s.toLowerCase()).sort()))){dr.groups.push(x);added++}}rG()}const parts=[];if(data.hasGroups)parts.push(added?`${added} new group(s)`:'groups already present');parts.push(...applyImportedAge(data,true));iSt.textContent=`Merged ${parts.join(' + ')}`;iSt.className='fs-ie-status ok';iA.value=''};
iP.onclick=()=>{const data=pI();if(!data)return;if(data.hasGroups){dr.groups=data.groups;rG()}const parts=[];if(data.hasGroups)parts.push(`${data.groups.length} group(s)`);parts.push(...applyImportedAge(data,false));iSt.textContent=`Replaced ${parts.join(' + ')}`;iSt.className='fs-ie-status ok';iA.value=''};
iR.appendChild(iM);iR.appendChild(iP);ie.appendChild(iR);ie.appendChild(iSt);settingsContent.appendChild(ie);

// Tab switching
function switchTab(active){
  [tabFlairs,tabSettings,tabRules,tabDocumentation].forEach(t=>t.classList.remove('active'));
  [flairsContent,settingsContent,rulesContent,documentationContent].forEach(t=>t.classList.remove('active'));
  active.classList.add('active');
}
tabFlairs.onclick=()=>{switchTab(tabFlairs);flairsContent.classList.add('active')};
tabSettings.onclick=()=>{switchTab(tabSettings);settingsContent.classList.add('active')};
tabRules.onclick=()=>{renderRulesTab();switchTab(tabRules);rulesContent.classList.add('active')};
tabDocumentation.onclick=()=>{switchTab(tabDocumentation);documentationContent.classList.add('active')};

bd.appendChild(flairsContent);bd.appendChild(settingsContent);bd.appendChild(rulesContent);bd.appendChild(documentationContent);pn.appendChild(bd);

// Footer
const ft=el('div','fs-footer');ft.appendChild(Object.assign(el('span','fs-footer-hint'),{textContent:'Home or ` / ~ to toggle'}));
const fB2=el('div','fs-footer-btns');fB2.appendChild(Object.assign(el('button','fl-btn fl-btn-ghost'),{textContent:'Cancel',onclick:cl}));
const sB=el('button','fl-btn fl-btn-success');sB.textContent='Save + Apply';
sB.onclick=()=>{if(!syncAgeRules())return;dr.groups.forEach(g=>{g.label=g.label.trim()||'Untitled';g.description=(g.description||'').trim();g.color=validHex(g.color,'#3498db');g.textColor=validHex(g.textColor,'#ffffff');g.flairStyle=normalizeFlairStyle(g.flairStyle);g.minPosts=Math.max(1,g.minPosts||1);g.subreddits=g.subreddits.filter(s=>s.trim());g.keywords=(g.keywords||[]).filter(k=>k.trim());g.descKeywords=(g.descKeywords||[]).filter(k=>k.trim());g.rules=normalizeGroupRules(g.rules)});CFG=dr;saveCfg(CFG);cl();document.querySelectorAll(`[${PA}]`).forEach(e=>e.removeAttribute(PA));document.querySelectorAll('.flagger-badge,.subreddit-flagger-debug').forEach(e=>e.remove());document.querySelectorAll(`[${AA}]`).forEach(e=>e.removeAttribute(AA));document.querySelectorAll('.flagger-add-btn').forEach(e=>e.remove());inFlight.clear();pending.clear();scan()};
fB2.appendChild(sB);ft.appendChild(fB2);pn.appendChild(ft);
ov.appendChild(pn);ov.onclick=e=>{if(e.target===ov)cl()};document.body.appendChild(ov);
let escS;function cl(){if(closeAdvanced)closeAdvanced();ov.remove();sO=false;document.removeEventListener('keydown',escS)}
escS=e=>{if(e.key==='Escape'&&sO)cl()};document.addEventListener('keydown',escS);
}

function settingsShortcutTargetIsEditable(e){const path=typeof e.composedPath==='function'?e.composedPath():[e.target];return path.some(n=>{const tag=n?.tagName;return tag==='INPUT'||tag==='TEXTAREA'||tag==='SELECT'||n?.isContentEditable})}
function settingsToggleShortcut(e){const toggleKey=e.code==='Backquote'||e.key==='`'||e.key==='~'||e.code==='Home'||e.key==='Home'||e.keyCode===36;if(!toggleKey||e.ctrlKey||e.altKey||e.metaKey||e.repeat||settingsShortcutTargetIsEditable(e))return;e.preventDefault();e.stopPropagation();const overlay=document.querySelector('.fs-overlay');if(sO&&!overlay)sO=false;if(sO)overlay.querySelector('.fl-close')?.click();else openS()}
document.addEventListener('keydown',settingsToggleShortcut,true);
GM_registerMenuCommand('Flagger Settings',openS);
console.log(`[Reddit Subreddit Flagger] v${VER} \u2014 Home or backtick/tilde for settings`);
})();
