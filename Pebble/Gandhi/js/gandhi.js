



<!DOCTYPE html>
<html lang="en" class=" is-copy-enabled is-u2f-enabled">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    <meta name="viewport" content="width=1020">
    
    
    <title>slate-config-example/slate.js at master · pebble-examples/slate-config-example · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="pebble-examples/slate-config-example" name="twitter:title" /><meta content="slate-config-example - Example app demonstrating the use of the Slate CSS library." name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/8129119?v=3&amp;s=400" name="twitter:image:src" />
      <meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/8129119?v=3&amp;s=400" property="og:image" /><meta content="pebble-examples/slate-config-example" property="og:title" /><meta content="https://github.com/pebble-examples/slate-config-example" property="og:url" /><meta content="slate-config-example - Example app demonstrating the use of the Slate CSS library." property="og:description" />
      <meta name="browser-stats-url" content="https://api.github.com/_private/browser/stats">
    <meta name="browser-errors-url" content="https://api.github.com/_private/browser/errors">
    <link rel="assets" href="https://assets-cdn.github.com/">
    
    <meta name="pjax-timeout" content="1000">
    

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>

    <meta name="google-site-verification" content="KT5gs8h0wvaagLKAVWq8bbeNwnZZK1r1XQysX3xurLU">
    <meta name="google-analytics" content="UA-3769691-2">

<meta content="collector.githubapp.com" name="octolytics-host" /><meta content="github" name="octolytics-app-id" /><meta content="55E43E1C:6925:35770283:56819C2D" name="octolytics-dimension-request_id" />
<meta content="/&lt;user-name&gt;/&lt;repo-name&gt;/blob/show" data-pjax-transient="true" name="analytics-location" />
<meta content="Rails, view, blob#show" data-pjax-transient="true" name="analytics-event" />


  <meta class="js-ga-set" name="dimension1" content="Logged Out">



        <meta name="hostname" content="github.com">
    <meta name="user-login" content="">

        <meta name="expected-hostname" content="github.com">

      <link rel="mask-icon" href="https://assets-cdn.github.com/pinned-octocat.svg" color="#4078c0">
      <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">

    <meta content="5acf07bf6fee7a9610b7819eac6b1f8ace663068" name="form-nonce" />

    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github-16bf5399d85a6f926eb6af8f983ed5cf907e97b4da4a650dc11920d425826218.css" integrity="sha256-Fr9Tmdhab5Jutq+PmD7Vz5B+l7TaSmUNwRkg1CWCYhg=" media="all" rel="stylesheet" />
    <link crossorigin="anonymous" href="https://assets-cdn.github.com/assets/github2-451ab63ad67fa9af580e5d9a3b2b7de911ce2e4b2437638f26fe8cb3879e67d8.css" integrity="sha256-RRq2OtZ/qa9YDl2aOyt96RHOLkskN2OPJv6Ms4eeZ9g=" media="all" rel="stylesheet" />
    
    


    <meta http-equiv="x-pjax-version" content="be269b1951a3572820c1f935e13a2f75">

      
  <meta name="description" content="slate-config-example - Example app demonstrating the use of the Slate CSS library.">
  <meta name="go-import" content="github.com/pebble-examples/slate-config-example git https://github.com/pebble-examples/slate-config-example.git">

  <meta content="8129119" name="octolytics-dimension-user_id" /><meta content="pebble-examples" name="octolytics-dimension-user_login" /><meta content="38908431" name="octolytics-dimension-repository_id" /><meta content="pebble-examples/slate-config-example" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="38908431" name="octolytics-dimension-repository_network_root_id" /><meta content="pebble-examples/slate-config-example" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/pebble-examples/slate-config-example/commits/master.atom" rel="alternate" title="Recent Commits to slate-config-example:master" type="application/atom+xml">

  </head>


  <body class="logged_out   env-production windows vis-public page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>

    
    
    



      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" data-ga-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="btn btn-primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="btn" href="/login?return_to=%2Fpebble-examples%2Fslate-config-example%2Fblob%2Fmaster%2Fconfig%2Fjs%2Fslate.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="/pebble-examples/slate-config-example/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/pebble-examples/slate-config-example/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <label class="js-chromeless-input-container form-control">
    <div class="scope-badge">This repository</div>
    <input type="text"
      class="js-site-search-focus js-site-search-field is-clearable chromeless-input"
      data-hotkey="s"
      name="q"
      placeholder="Search"
      aria-label="Search this repository"
      data-global-scope-placeholder="Search GitHub"
      data-repo-scope-placeholder="Search"
      tabindex="1"
      autocapitalize="off">
  </label>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/pricing" data-ga-click="(Logged out) Header, go to pricing, text:pricing">Pricing</a>
          </li>
      </ul>

  </div>
</div>



    <div id="start-of-content" class="accessibility-aid"></div>

      <div id="js-flash-container">
</div>


    <div role="main" class="main-content">
        <div itemscope itemtype="http://schema.org/WebPage">
    <div id="js-repo-pjax-container" class="context-loader-container js-repo-nav-next" data-pjax-container>
      
<div class="pagehead repohead instapaper_ignore readability-menu experiment-repo-nav">
  <div class="container repohead-details-container">

    

<ul class="pagehead-actions">

  <li>
      <a href="/login?return_to=%2Fpebble-examples%2Fslate-config-example"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to watch a repository" rel="nofollow">
    <span class="octicon octicon-eye"></span>
    Watch
  </a>
  <a class="social-count" href="/pebble-examples/slate-config-example/watchers">
    5
  </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fpebble-examples%2Fslate-config-example"
    class="btn btn-sm btn-with-count tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star "></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/pebble-examples/slate-config-example/stargazers">
      5
    </a>

  </li>

  <li>
      <a href="/login?return_to=%2Fpebble-examples%2Fslate-config-example"
        class="btn btn-sm btn-with-count tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked "></span>
        Fork
      </a>

    <a href="/pebble-examples/slate-config-example/network" class="social-count">
      14
    </a>
  </li>
</ul>

    <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public ">
  <span class="octicon octicon-repo "></span>
  <span class="author"><a href="/pebble-examples" class="url fn" itemprop="url" rel="author"><span itemprop="title">pebble-examples</span></a></span><!--
--><span class="path-divider">/</span><!--
--><strong><a href="/pebble-examples/slate-config-example" data-pjax="#js-repo-pjax-container">slate-config-example</a></strong>

  <span class="page-context-loader">
    <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
  </span>

</h1>

  </div>
  <div class="container">
    
<nav class="reponav js-repo-nav js-sidenav-container-pjax js-octicon-loaders"
     role="navigation"
     data-pjax="#js-repo-pjax-container">

  <a href="/pebble-examples/slate-config-example" aria-label="Code" aria-selected="true" class="js-selected-navigation-item selected reponav-item" data-hotkey="g c" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /pebble-examples/slate-config-example">
    <span class="octicon octicon-code "></span>
    Code
</a>
    <a href="/pebble-examples/slate-config-example/issues" class="js-selected-navigation-item reponav-item" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /pebble-examples/slate-config-example/issues">
      <span class="octicon octicon-issue-opened "></span>
      Issues
      <span class="counter">0</span>
</a>
  <a href="/pebble-examples/slate-config-example/pulls" class="js-selected-navigation-item reponav-item" data-hotkey="g p" data-selected-links="repo_pulls /pebble-examples/slate-config-example/pulls">
    <span class="octicon octicon-git-pull-request "></span>
    Pull requests
    <span class="counter">1</span>
</a>

  <a href="/pebble-examples/slate-config-example/pulse" class="js-selected-navigation-item reponav-item" data-selected-links="pulse /pebble-examples/slate-config-example/pulse">
    <span class="octicon octicon-pulse "></span>
    Pulse
</a>
  <a href="/pebble-examples/slate-config-example/graphs" class="js-selected-navigation-item reponav-item" data-selected-links="repo_graphs repo_contributors /pebble-examples/slate-config-example/graphs">
    <span class="octicon octicon-graph "></span>
    Graphs
</a>

</nav>

  </div>
</div>

<div class="container new-discussion-timeline experiment-repo-nav">
  <div class="repository-content">

    

<a href="/pebble-examples/slate-config-example/blob/af1fa3bdc483c85e431d7d39e908b30462185559/config/js/slate.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:0c1d8664597feff6efaed5c30e688987 -->

<div class="file-navigation js-zeroclipboard-container">
  
<div class="select-menu js-menu-container js-select-menu left">
  <button class="btn btn-sm select-menu-button js-menu-target css-truncate" data-hotkey="w"
    title="master"
    type="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <i>Branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </button>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span aria-label="Close" class="octicon octicon-x js-menu-close" role="button"></span>
        <span class="select-menu-title">Switch branches/tags</span>
      </div>

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" data-filter-placeholder="Filter branches/tags" class="js-select-menu-tab" role="tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" data-filter-placeholder="Find a tag…" class="js-select-menu-tab" role="tab">Tags</a>
            </li>
          </ul>
        </div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches" role="menu">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <a class="select-menu-item js-navigation-item js-navigation-open selected"
               href="/pebble-examples/slate-config-example/blob/master/config/js/slate.js"
               data-name="master"
               data-skip-pjax="true"
               rel="nofollow">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <span class="select-menu-item-text css-truncate-target" title="master">
                master
              </span>
            </a>
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div>

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div>

    </div>
  </div>
</div>

  <div class="btn-group right">
    <a href="/pebble-examples/slate-config-example/find/master"
          class="js-show-file-finder btn btn-sm"
          data-pjax
          data-hotkey="t">
      Find file
    </a>
    <button aria-label="Copy file path to clipboard" class="js-zeroclipboard btn btn-sm zeroclipboard-button tooltipped tooltipped-s" data-copied-hint="Copied!" type="button">Copy path</button>
  </div>
  <div class="breadcrumb js-zeroclipboard-target">
    <span class="repo-root js-repo-root"><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pebble-examples/slate-config-example" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">slate-config-example</span></a></span></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pebble-examples/slate-config-example/tree/master/config" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">config</span></a></span><span class="separator">/</span><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/pebble-examples/slate-config-example/tree/master/config/js" class="" data-branch="master" data-pjax="true" itemscope="url"><span itemprop="title">js</span></a></span><span class="separator">/</span><strong class="final-path">slate.js</strong>
  </div>
</div>


  <div class="commit-tease">
      <span class="right">
        <a class="commit-tease-sha" href="/pebble-examples/slate-config-example/commit/c334ec9e10bb6f44cb82431f4eb53bdd7e8c0daf" data-pjax>
          c334ec9
        </a>
        <time datetime="2015-07-11T01:01:24Z" is="relative-time">Jul 10, 2015</time>
      </span>
      <div>
        <img alt="@C-D-Lewis" class="avatar" height="20" src="https://avatars3.githubusercontent.com/u/5732010?v=3&amp;s=40" width="20" />
        <a href="/C-D-Lewis" class="user-mention" rel="contributor">C-D-Lewis</a>
          <a href="/pebble-examples/slate-config-example/commit/c334ec9e10bb6f44cb82431f4eb53bdd7e8c0daf" class="message" data-pjax="true" title="Initial project files">Initial project files</a>
      </div>

    <div class="commit-tease-contributors">
      <a class="muted-link contributors-toggle" href="#blob_contributors_box" rel="facebox">
        <strong>1</strong>
         contributor
      </a>
      
    </div>

    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header" data-facebox-id="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list" data-facebox-id="facebox-description">
          <li class="facebox-user-list-item">
            <img alt="@C-D-Lewis" height="24" src="https://avatars1.githubusercontent.com/u/5732010?v=3&amp;s=48" width="24" />
            <a href="/C-D-Lewis">C-D-Lewis</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file">
  <div class="file-header">
  <div class="file-actions">

    <div class="btn-group">
      <a href="/pebble-examples/slate-config-example/raw/master/config/js/slate.js" class="btn btn-sm " id="raw-url">Raw</a>
        <a href="/pebble-examples/slate-config-example/blame/master/config/js/slate.js" class="btn btn-sm js-update-url-with-hash">Blame</a>
      <a href="/pebble-examples/slate-config-example/commits/master/config/js/slate.js" class="btn btn-sm " rel="nofollow">History</a>
    </div>

        <a class="octicon-btn tooltipped tooltipped-nw"
           href="https://windows.github.com"
           aria-label="Open this file in GitHub Desktop"
           data-ga-click="Repository, open with desktop, type:windows">
            <span class="octicon octicon-device-desktop "></span>
        </a>

        <button type="button" class="octicon-btn disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-pencil "></span>
        </button>
        <button type="button" class="octicon-btn octicon-btn-danger disabled tooltipped tooltipped-nw"
          aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan "></span>
        </button>
  </div>

  <div class="file-info">
      <span class="file-mode" title="File mode">executable file</span>
      <span class="file-info-divider"></span>
      347 lines (278 sloc)
      <span class="file-info-divider"></span>
    46.7 KB
  </div>
</div>

  

  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size js-file-line-container" data-tab-size="8">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/*! Sortable 1.2.0 - MIT | git://github.com/rubaxa/Sortable.git */</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code blob-code-inner js-file-line">!function(a){&quot;use strict&quot;;&quot;function&quot;==typeof define&amp;&amp;define.amd?define(a):&quot;undefined&quot;!=typeof module&amp;&amp;&quot;undefined&quot;!=typeof module.exports?module.exports=a():&quot;undefined&quot;!=typeof Package?Sortable=a():window.Sortable=a()}(function(){&quot;use strict&quot;;function a(a,b){this.el=a,this.options=b=q({},b),a[H]=this;var d={group:Math.random(),sort:!0,disabled:!1,store:null,handle:null,scroll:!0,scrollSensitivity:30,scrollSpeed:10,draggable:/[uo]l/i.test(a.nodeName)?&quot;li&quot;:&quot;&gt;*&quot;,ghostClass:&quot;sortable-ghost&quot;,ignore:&quot;a, img&quot;,filter:null,animation:0,setData:function(a,b){a.setData(&quot;Text&quot;,b.textContent)},dropBubble:!1,dragoverBubble:!1,dataIdAttr:&quot;data-id&quot;,delay:0};for(var e in d)!(e in b)&amp;&amp;(b[e]=d[e]);var g=b.group;g&amp;&amp;&quot;object&quot;==typeof g||(g=b.group={name:g}),[&quot;pull&quot;,&quot;put&quot;].forEach(function(a){a in g||(g[a]=!0)}),b.groups=&quot; &quot;+g.name+(g.put.join?&quot; &quot;+g.put.join(&quot; &quot;):&quot;&quot;)+&quot; &quot;;for(var h in this)&quot;_&quot;===h.charAt(0)&amp;&amp;(this[h]=c(this,this[h]));f(a,&quot;mousedown&quot;,this._onTapStart),f(a,&quot;touchstart&quot;,this._onTapStart),f(a,&quot;dragover&quot;,this),f(a,&quot;dragenter&quot;,this),Q.push(this._onDragOver),b.store&amp;&amp;this.sort(b.store.get(this))}function b(a){t&amp;&amp;t.state!==a&amp;&amp;(i(t,&quot;display&quot;,a?&quot;none&quot;:&quot;&quot;),!a&amp;&amp;t.state&amp;&amp;u.insertBefore(t,r),t.state=a)}function c(a,b){var c=P.call(arguments,2);return b.bind?b.bind.apply(b,[a].concat(c)):function(){return b.apply(a,c.concat(P.call(arguments)))}}function d(a,b,c){if(a){c=c||J,b=b.split(&quot;.&quot;);var d=b.shift().toUpperCase(),e=new RegExp(&quot;\\s(&quot;+b.join(&quot;|&quot;)+&quot;)\\s&quot;,&quot;g&quot;);do if(&quot;&gt;*&quot;===d&amp;&amp;a.parentNode===c||(&quot;&quot;===d||a.nodeName.toUpperCase()==d)&amp;&amp;(!b.length||((&quot; &quot;+a.className+&quot; &quot;).match(e)||[]).length==b.length))return a;while(a!==c&amp;&amp;(a=a.parentNode))}return null}function e(a){a.dataTransfer.dropEffect=&quot;move&quot;,a.preventDefault()}function f(a,b,c){a.addEventListener(b,c,!1)}function g(a,b,c){a.removeEventListener(b,c,!1)}function h(a,b,c){if(a)if(a.classList)a.classList[c?&quot;add&quot;:&quot;remove&quot;](b);else{var d=(&quot; &quot;+a.className+&quot; &quot;).replace(G,&quot; &quot;).replace(&quot; &quot;+b+&quot; &quot;,&quot; &quot;);a.className=(d+(c?&quot; &quot;+b:&quot;&quot;)).replace(G,&quot; &quot;)}}function i(a,b,c){var d=a&amp;&amp;a.style;if(d){if(void 0===c)return J.defaultView&amp;&amp;J.defaultView.getComputedStyle?c=J.defaultView.getComputedStyle(a,&quot;&quot;):a.currentStyle&amp;&amp;(c=a.currentStyle),void 0===b?c:c[b];b in d||(b=&quot;-webkit-&quot;+b),d[b]=c+(&quot;string&quot;==typeof c?&quot;&quot;:&quot;px&quot;)}}function j(a,b,c){if(a){var d=a.getElementsByTagName(b),e=0,f=d.length;if(c)for(;f&gt;e;e++)c(d[e],e);return d}return[]}function k(a){a.draggable=!1}function l(){M=!1}function m(a,b){var c=a.lastElementChild,d=c.getBoundingClientRect();return b.clientY-(d.top+d.height)&gt;5&amp;&amp;c}function n(a){for(var b=a.tagName+a.className+a.src+a.href+a.textContent,c=b.length,d=0;c--;)d+=b.charCodeAt(c);return d.toString(36)}function o(a){for(var b=0;a&amp;&amp;(a=a.previousElementSibling);)&quot;TEMPLATE&quot;!==a.nodeName.toUpperCase()&amp;&amp;b++;return b}function p(a,b){var c,d;return function(){void 0===c&amp;&amp;(c=arguments,d=this,setTimeout(function(){1===c.length?a.call(d,c[0]):a.apply(d,c),c=void 0},b))}}function q(a,b){if(a&amp;&amp;b)for(var c in b)b.hasOwnProperty(c)&amp;&amp;(a[c]=b[c]);return a}var r,s,t,u,v,w,x,y,z,A,B,C,D,E,F={},G=/\s+/g,H=&quot;Sortable&quot;+(new Date).getTime(),I=window,J=I.document,K=I.parseInt,L=!!(&quot;draggable&quot;in J.createElement(&quot;div&quot;)),M=!1,N=function(a,b,c,d,e,f,g){var h=J.createEvent(&quot;Event&quot;),i=(a||b[H]).options,j=&quot;on&quot;+c.charAt(0).toUpperCase()+c.substr(1);h.initEvent(c,!0,!0),h.item=d||b,h.from=e||b,h.clone=t,h.oldIndex=f,h.newIndex=g,i[j]&amp;&amp;i[j].call(a,h),b.dispatchEvent(h)},O=Math.abs,P=[].slice,Q=[],R=p(function(a,b,c){if(c&amp;&amp;b.scroll){var d,e,f,g,h=b.scrollSensitivity,i=b.scrollSpeed,j=a.clientX,k=a.clientY,l=window.innerWidth,m=window.innerHeight;if(x!==c&amp;&amp;(w=b.scroll,x=c,w===!0)){w=c;do if(w.offsetWidth&lt;w.scrollWidth||w.offsetHeight&lt;w.scrollHeight)break;while(w=w.parentNode)}w&amp;&amp;(d=w,e=w.getBoundingClientRect(),f=(O(e.right-j)&lt;=h)-(O(e.left-j)&lt;=h),g=(O(e.bottom-k)&lt;=h)-(O(e.top-k)&lt;=h)),f||g||(f=(h&gt;=l-j)-(h&gt;=j),g=(h&gt;=m-k)-(h&gt;=k),(f||g)&amp;&amp;(d=I)),(F.vx!==f||F.vy!==g||F.el!==d)&amp;&amp;(F.el=d,F.vx=f,F.vy=g,clearInterval(F.pid),d&amp;&amp;(F.pid=setInterval(function(){d===I?I.scrollTo(I.pageXOffset+f*i,I.pageYOffset+g*i):(g&amp;&amp;(d.scrollTop+=g*i),f&amp;&amp;(d.scrollLeft+=f*i))},24)))}},30);return a.prototype={constructor:a,_onTapStart:function(a){var b=this,c=this.el,e=this.options,f=a.type,g=a.touches&amp;&amp;a.touches[0],h=(g||a).target,i=h,j=e.filter;if(!(&quot;mousedown&quot;===f&amp;&amp;0!==a.button||e.disabled)&amp;&amp;(h=d(h,e.draggable,c))){if(A=o(h),&quot;function&quot;==typeof j){if(j.call(this,a,h,this))return N(b,i,&quot;filter&quot;,h,c,A),void a.preventDefault()}else if(j&amp;&amp;(j=j.split(&quot;,&quot;).some(function(a){return a=d(i,a.trim(),c),a?(N(b,a,&quot;filter&quot;,h,c,A),!0):void 0})))return void a.preventDefault();(!e.handle||d(i,e.handle,c))&amp;&amp;this._prepareDragStart(a,g,h)}},_prepareDragStart:function(a,b,c){var d,e=this,g=e.el,h=e.options,i=g.ownerDocument;c&amp;&amp;!r&amp;&amp;c.parentNode===g&amp;&amp;(D=a,u=g,r=c,v=r.nextSibling,C=h.group,d=function(){e._disableDelayedDrag(),r.draggable=!0,h.ignore.split(&quot;,&quot;).forEach(function(a){j(r,a.trim(),k)}),e._triggerDragStart(b)},f(i,&quot;mouseup&quot;,e._onDrop),f(i,&quot;touchend&quot;,e._onDrop),f(i,&quot;touchcancel&quot;,e._onDrop),h.delay?(f(i,&quot;mousemove&quot;,e._disableDelayedDrag),f(i,&quot;touchmove&quot;,e._disableDelayedDrag),e._dragStartTimer=setTimeout(d,h.delay)):d())},_disableDelayedDrag:function(){var a=this.el.ownerDocument;clearTimeout(this._dragStartTimer),g(a,&quot;mousemove&quot;,this._disableDelayedDrag),g(a,&quot;touchmove&quot;,this._disableDelayedDrag)},_triggerDragStart:function(a){a?(D={target:r,clientX:a.clientX,clientY:a.clientY},this._onDragStart(D,&quot;touch&quot;)):L?(f(r,&quot;dragend&quot;,this),f(u,&quot;dragstart&quot;,this._onDragStart)):this._onDragStart(D,!0);try{J.selection?J.selection.empty():window.getSelection().removeAllRanges()}catch(b){}},_dragStarted:function(){u&amp;&amp;r&amp;&amp;(h(r,this.options.ghostClass,!0),a.active=this,N(this,u,&quot;start&quot;,r,u,A))},_emulateDragOver:function(){if(E){i(s,&quot;display&quot;,&quot;none&quot;);var a=J.elementFromPoint(E.clientX,E.clientY),b=a,c=&quot; &quot;+this.options.group.name,d=Q.length;if(b)do{if(b[H]&amp;&amp;b[H].options.groups.indexOf(c)&gt;-1){for(;d--;)Q[d]({clientX:E.clientX,clientY:E.clientY,target:a,rootEl:b});break}a=b}while(b=b.parentNode);i(s,&quot;display&quot;,&quot;&quot;)}},_onTouchMove:function(a){if(D){var b=a.touches?a.touches[0]:a,c=b.clientX-D.clientX,d=b.clientY-D.clientY,e=a.touches?&quot;translate3d(&quot;+c+&quot;px,&quot;+d+&quot;px,0)&quot;:&quot;translate(&quot;+c+&quot;px,&quot;+d+&quot;px)&quot;;E=b,i(s,&quot;webkitTransform&quot;,e),i(s,&quot;mozTransform&quot;,e),i(s,&quot;msTransform&quot;,e),i(s,&quot;transform&quot;,e),a.preventDefault()}},_onDragStart:function(a,b){var c=a.dataTransfer,d=this.options;if(this._offUpEvents(),&quot;clone&quot;==C.pull&amp;&amp;(t=r.cloneNode(!0),i(t,&quot;display&quot;,&quot;none&quot;),u.insertBefore(t,r)),b){var e,g=r.getBoundingClientRect(),h=i(r);s=r.cloneNode(!0),i(s,&quot;top&quot;,g.top-K(h.marginTop,10)),i(s,&quot;left&quot;,g.left-K(h.marginLeft,10)),i(s,&quot;width&quot;,g.width),i(s,&quot;height&quot;,g.height),i(s,&quot;opacity&quot;,&quot;0.8&quot;),i(s,&quot;position&quot;,&quot;fixed&quot;),i(s,&quot;zIndex&quot;,&quot;100000&quot;),u.appendChild(s),e=s.getBoundingClientRect(),i(s,&quot;width&quot;,2*g.width-e.width),i(s,&quot;height&quot;,2*g.height-e.height),&quot;touch&quot;===b?(f(J,&quot;touchmove&quot;,this._onTouchMove),f(J,&quot;touchend&quot;,this._onDrop),f(J,&quot;touchcancel&quot;,this._onDrop)):(f(J,&quot;mousemove&quot;,this._onTouchMove),f(J,&quot;mouseup&quot;,this._onDrop)),this._loopId=setInterval(this._emulateDragOver,150)}else c&amp;&amp;(c.effectAllowed=&quot;move&quot;,d.setData&amp;&amp;d.setData.call(this,c,r)),f(J,&quot;drop&quot;,this);setTimeout(this._dragStarted,0)},_onDragOver:function(a){var c,e,f,g=this.el,h=this.options,j=h.group,k=j.put,n=C===j,o=h.sort;if(void 0!==a.preventDefault&amp;&amp;(a.preventDefault(),!h.dragoverBubble&amp;&amp;a.stopPropagation()),C&amp;&amp;!h.disabled&amp;&amp;(n?o||(f=!u.contains(r)):C.pull&amp;&amp;k&amp;&amp;(C.name===j.name||k.indexOf&amp;&amp;~k.indexOf(C.name)))&amp;&amp;(void 0===a.rootEl||a.rootEl===this.el)){if(R(a,h,this.el),M)return;if(c=d(a.target,h.draggable,g),e=r.getBoundingClientRect(),f)return b(!0),void(t||v?u.insertBefore(r,t||v):o||u.appendChild(r));if(0===g.children.length||g.children[0]===s||g===a.target&amp;&amp;(c=m(g,a))){if(c){if(c.animated)return;q=c.getBoundingClientRect()}b(n),g.appendChild(r),this._animate(e,r),c&amp;&amp;this._animate(q,c)}else if(c&amp;&amp;!c.animated&amp;&amp;c!==r&amp;&amp;void 0!==c.parentNode[H]){y!==c&amp;&amp;(y=c,z=i(c));var p,q=c.getBoundingClientRect(),w=q.right-q.left,x=q.bottom-q.top,A=/left|right|inline/.test(z.cssFloat+z.display),B=c.offsetWidth&gt;r.offsetWidth,D=c.offsetHeight&gt;r.offsetHeight,E=(A?(a.clientX-q.left)/w:(a.clientY-q.top)/x)&gt;.5,F=c.nextElementSibling;M=!0,setTimeout(l,30),b(n),p=A?c.previousElementSibling===r&amp;&amp;!B||E&amp;&amp;B:F!==r&amp;&amp;!D||E&amp;&amp;D,p&amp;&amp;!F?g.appendChild(r):c.parentNode.insertBefore(r,p?F:c),this._animate(e,r),this._animate(q,c)}}},_animate:function(a,b){var c=this.options.animation;if(c){var d=b.getBoundingClientRect();i(b,&quot;transition&quot;,&quot;none&quot;),i(b,&quot;transform&quot;,&quot;translate3d(&quot;+(a.left-d.left)+&quot;px,&quot;+(a.top-d.top)+&quot;px,0)&quot;),b.offsetWidth,i(b,&quot;transition&quot;,&quot;all &quot;+c+&quot;ms&quot;),i(b,&quot;transform&quot;,&quot;translate3d(0,0,0)&quot;),clearTimeout(b.animated),b.animated=setTimeout(function(){i(b,&quot;transition&quot;,&quot;&quot;),i(b,&quot;transform&quot;,&quot;&quot;),b.animated=!1},c)}},_offUpEvents:function(){var a=this.el.ownerDocument;g(J,&quot;touchmove&quot;,this._onTouchMove),g(a,&quot;mouseup&quot;,this._onDrop),g(a,&quot;touchend&quot;,this._onDrop),g(a,&quot;touchcancel&quot;,this._onDrop)},_onDrop:function(b){var c=this.el,d=this.options;clearInterval(this._loopId),clearInterval(F.pid),clearTimeout(this.dragStartTimer),g(J,&quot;drop&quot;,this),g(J,&quot;mousemove&quot;,this._onTouchMove),g(c,&quot;dragstart&quot;,this._onDragStart),this._offUpEvents(),b&amp;&amp;(b.preventDefault(),!d.dropBubble&amp;&amp;b.stopPropagation(),s&amp;&amp;s.parentNode.removeChild(s),r&amp;&amp;(g(r,&quot;dragend&quot;,this),k(r),h(r,this.options.ghostClass,!1),u!==r.parentNode?(B=o(r),N(null,r.parentNode,&quot;sort&quot;,r,u,A,B),N(this,u,&quot;sort&quot;,r,u,A,B),N(null,r.parentNode,&quot;add&quot;,r,u,A,B),N(this,u,&quot;remove&quot;,r,u,A,B)):(t&amp;&amp;t.parentNode.removeChild(t),r.nextSibling!==v&amp;&amp;(B=o(r),N(this,u,&quot;update&quot;,r,u,A,B),N(this,u,&quot;sort&quot;,r,u,A,B))),a.active&amp;&amp;N(this,u,&quot;end&quot;,r,u,A,B)),u=r=s=v=t=w=x=D=E=y=z=C=a.active=null,this.save())},handleEvent:function(a){var b=a.type;&quot;dragover&quot;===b||&quot;dragenter&quot;===b?r&amp;&amp;(this._onDragOver(a),e(a)):(&quot;drop&quot;===b||&quot;dragend&quot;===b)&amp;&amp;this._onDrop(a)},toArray:function(){for(var a,b=[],c=this.el.children,e=0,f=c.length,g=this.options;f&gt;e;e++)a=c[e],d(a,g.draggable,this.el)&amp;&amp;b.push(a.getAttribute(g.dataIdAttr)||n(a));return b},sort:function(a){var b={},c=this.el;this.toArray().forEach(function(a,e){var f=c.children[e];d(f,this.options.draggable,c)&amp;&amp;(b[a]=f)},this),a.forEach(function(a){b[a]&amp;&amp;(c.removeChild(b[a]),c.appendChild(b[a]))})},save:function(){var a=this.options.store;a&amp;&amp;a.set(this)},closest:function(a,b){return d(a,b||this.options.draggable,this.el)},option:function(a,b){var c=this.options;return void 0===b?c[a]:void(c[a]=b)},destroy:function(){var a=this.el;a[H]=null,g(a,&quot;mousedown&quot;,this._onTapStart),g(a,&quot;touchstart&quot;,this._onTapStart),g(a,&quot;dragover&quot;,this),g(a,&quot;dragenter&quot;,this),Array.prototype.forEach.call(a.querySelectorAll(&quot;[draggable]&quot;),function(a){a.removeAttribute(&quot;draggable&quot;)}),Q.splice(Q.indexOf(this._onDragOver),1),this._onDrop(),this.el=a=null}},a.utils={on:f,off:g,css:i,find:j,bind:c,is:function(a,b){return!!d(a,b,a)},extend:q,throttle:p,closest:d,toggleClass:h,index:o},a.version=&quot;1.2.0&quot;,a.create=function(b,c){return new a(b,c)},a});</td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code blob-code-inner js-file-line"><span class="pl-c">/* Zepto v1.1.6 - zepto event ajax form ie - zeptojs.com/license */</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code blob-code-inner js-file-line">var Zepto=function(){function L(t){return null==t?String(t):j[S.call(t)]||&quot;object&quot;}function Z(t){return&quot;function&quot;==L(t)}function _(t){return null!=t&amp;&amp;t==t.window}function $(t){return null!=t&amp;&amp;t.nodeType==t.DOCUMENT_NODE}function D(t){return&quot;object&quot;==L(t)}function M(t){return D(t)&amp;&amp;!_(t)&amp;&amp;Object.getPrototypeOf(t)==Object.prototype}function R(t){return&quot;number&quot;==typeof t.length}function k(t){return s.call(t,function(t){return null!=t})}function z(t){return t.length&gt;0?n.fn.concat.apply([],t):t}function F(t){return t.replace(/::/g,&quot;/&quot;).replace(/([A-Z]+)([A-Z][a-z])/g,&quot;$1_$2&quot;).replace(/([a-z\d])([A-Z])/g,&quot;$1_$2&quot;).replace(/_/g,&quot;-&quot;).toLowerCase()}function q(t){return t in f?f[t]:f[t]=new RegExp(&quot;(^|\\s)&quot;+t+&quot;(\\s|$)&quot;)}function H(t,e){return&quot;number&quot;!=typeof e||c[F(t)]?e:e+&quot;px&quot;}function I(t){var e,n;return u[t]||(e=a.createElement(t),a.body.appendChild(e),n=getComputedStyle(e,&quot;&quot;).getPropertyValue(&quot;display&quot;),e.parentNode.removeChild(e),&quot;none&quot;==n&amp;&amp;(n=&quot;block&quot;),u[t]=n),u[t]}function V(t){return&quot;children&quot;in t?o.call(t.children):n.map(t.childNodes,function(t){return 1==t.nodeType?t:void 0})}function B(n,i,r){for(e in i)r&amp;&amp;(M(i[e])||A(i[e]))?(M(i[e])&amp;&amp;!M(n[e])&amp;&amp;(n[e]={}),A(i[e])&amp;&amp;!A(n[e])&amp;&amp;(n[e]=[]),B(n[e],i[e],r)):i[e]!==t&amp;&amp;(n[e]=i[e])}function U(t,e){return null==e?n(t):n(t).filter(e)}function J(t,e,n,i){return Z(e)?e.call(t,n,i):e}function X(t,e,n){null==n?t.removeAttribute(e):t.setAttribute(e,n)}function W(e,n){var i=e.className||&quot;&quot;,r=i&amp;&amp;i.baseVal!==t;return n===t?r?i.baseVal:i:void(r?i.baseVal=n:e.className=n)}function Y(t){try{return t?&quot;true&quot;==t||(&quot;false&quot;==t?!1:&quot;null&quot;==t?null:+t+&quot;&quot;==t?+t:/^[\[\{]/.test(t)?n.parseJSON(t):t):t}catch(e){return t}}function G(t,e){e(t);for(var n=0,i=t.childNodes.length;i&gt;n;n++)G(t.childNodes[n],e)}var t,e,n,i,C,N,r=[],o=r.slice,s=r.filter,a=window.document,u={},f={},c={&quot;column-count&quot;:1,columns:1,&quot;font-weight&quot;:1,&quot;line-height&quot;:1,opacity:1,&quot;z-index&quot;:1,zoom:1},l=/^\s*&lt;(\w+|!)[^&gt;]*&gt;/,h=/^&lt;(\w+)\s*\/?&gt;(?:&lt;\/\1&gt;|)$/,p=/&lt;(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^&gt;]*)\/&gt;/gi,d=/^(?:body|html)$/i,m=/([A-Z])/g,g=[&quot;val&quot;,&quot;css&quot;,&quot;html&quot;,&quot;text&quot;,&quot;data&quot;,&quot;width&quot;,&quot;height&quot;,&quot;offset&quot;],v=[&quot;after&quot;,&quot;prepend&quot;,&quot;before&quot;,&quot;append&quot;],y=a.createElement(&quot;table&quot;),x=a.createElement(&quot;tr&quot;),b={tr:a.createElement(&quot;tbody&quot;),tbody:y,thead:y,tfoot:y,td:x,th:x,&quot;*&quot;:a.createElement(&quot;div&quot;)},w=/complete|loaded|interactive/,E=/^[\w-]*$/,j={},S=j.toString,T={},O=a.createElement(&quot;div&quot;),P={tabindex:&quot;tabIndex&quot;,readonly:&quot;readOnly&quot;,&quot;for&quot;:&quot;htmlFor&quot;,&quot;class&quot;:&quot;className&quot;,maxlength:&quot;maxLength&quot;,cellspacing:&quot;cellSpacing&quot;,cellpadding:&quot;cellPadding&quot;,rowspan:&quot;rowSpan&quot;,colspan:&quot;colSpan&quot;,usemap:&quot;useMap&quot;,frameborder:&quot;frameBorder&quot;,contenteditable:&quot;contentEditable&quot;},A=Array.isArray||function(t){return t instanceof Array};return T.matches=function(t,e){if(!e||!t||1!==t.nodeType)return!1;var n=t.webkitMatchesSelector||t.mozMatchesSelector||t.oMatchesSelector||t.matchesSelector;if(n)return n.call(t,e);var i,r=t.parentNode,o=!r;return o&amp;&amp;(r=O).appendChild(t),i=~T.qsa(r,e).indexOf(t),o&amp;&amp;O.removeChild(t),i},C=function(t){return t.replace(/-+(.)?/g,function(t,e){return e?e.toUpperCase():&quot;&quot;})},N=function(t){return s.call(t,function(e,n){return t.indexOf(e)==n})},T.fragment=function(e,i,r){var s,u,f;return h.test(e)&amp;&amp;(s=n(a.createElement(RegExp.$1))),s||(e.replace&amp;&amp;(e=e.replace(p,&quot;&lt;$1&gt;&lt;/$2&gt;&quot;)),i===t&amp;&amp;(i=l.test(e)&amp;&amp;RegExp.$1),i in b||(i=&quot;*&quot;),f=b[i],f.innerHTML=&quot;&quot;+e,s=n.each(o.call(f.childNodes),function(){f.removeChild(this)})),M(r)&amp;&amp;(u=n(s),n.each(r,function(t,e){g.indexOf(t)&gt;-1?u[t](e):u.attr(t,e)})),s},T.Z=function(t,e){return t=t||[],t.__proto__=n.fn,t.selector=e||&quot;&quot;,t},T.isZ=function(t){return t instanceof T.Z},T.init=function(e,i){var r;if(!e)return T.Z();if(&quot;string&quot;==typeof e)if(e=e.trim(),&quot;&lt;&quot;==e[0]&amp;&amp;l.test(e))r=T.fragment(e,RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}else{if(Z(e))return n(a).ready(e);if(T.isZ(e))return e;if(A(e))r=k(e);else if(D(e))r=[e],e=null;else if(l.test(e))r=T.fragment(e.trim(),RegExp.$1,i),e=null;else{if(i!==t)return n(i).find(e);r=T.qsa(a,e)}}return T.Z(r,e)},n=function(t,e){return T.init(t,e)},n.extend=function(t){var e,n=o.call(arguments,1);return&quot;boolean&quot;==typeof t&amp;&amp;(e=t,t=n.shift()),n.forEach(function(n){B(t,n,e)}),t},T.qsa=function(t,e){var n,i=&quot;#&quot;==e[0],r=!i&amp;&amp;&quot;.&quot;==e[0],s=i||r?e.slice(1):e,a=E.test(s);return $(t)&amp;&amp;a&amp;&amp;i?(n=t.getElementById(s))?[n]:[]:1!==t.nodeType&amp;&amp;9!==t.nodeType?[]:o.call(a&amp;&amp;!i?r?t.getElementsByClassName(s):t.getElementsByTagName(e):t.querySelectorAll(e))},n.contains=a.documentElement.contains?function(t,e){return t!==e&amp;&amp;t.contains(e)}:function(t,e){for(;e&amp;&amp;(e=e.parentNode);)if(e===t)return!0;return!1},n.type=L,n.isFunction=Z,n.isWindow=_,n.isArray=A,n.isPlainObject=M,n.isEmptyObject=function(t){var e;for(e in t)return!1;return!0},n.inArray=function(t,e,n){return r.indexOf.call(e,t,n)},n.camelCase=C,n.trim=function(t){return null==t?&quot;&quot;:String.prototype.trim.call(t)},n.uuid=0,n.support={},n.expr={},n.map=function(t,e){var n,r,o,i=[];if(R(t))for(r=0;r&lt;t.length;r++)n=e(t[r],r),null!=n&amp;&amp;i.push(n);else for(o in t)n=e(t[o],o),null!=n&amp;&amp;i.push(n);return z(i)},n.each=function(t,e){var n,i;if(R(t)){for(n=0;n&lt;t.length;n++)if(e.call(t[n],n,t[n])===!1)return t}else for(i in t)if(e.call(t[i],i,t[i])===!1)return t;return t},n.grep=function(t,e){return s.call(t,e)},window.JSON&amp;&amp;(n.parseJSON=JSON.parse),n.each(&quot;Boolean Number String Function Array Date RegExp Object Error&quot;.split(&quot; &quot;),function(t,e){j[&quot;[object &quot;+e+&quot;]&quot;]=e.toLowerCase()}),n.fn={forEach:r.forEach,reduce:r.reduce,push:r.push,sort:r.sort,indexOf:r.indexOf,concat:r.concat,map:function(t){return n(n.map(this,function(e,n){return t.call(e,n,e)}))},slice:function(){return n(o.apply(this,arguments))},ready:function(t){return w.test(a.readyState)&amp;&amp;a.body?t(n):a.addEventListener(&quot;DOMContentLoaded&quot;,function(){t(n)},!1),this},get:function(e){return e===t?o.call(this):this[e&gt;=0?e:e+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){null!=this.parentNode&amp;&amp;this.parentNode.removeChild(this)})},each:function(t){return r.every.call(this,function(e,n){return t.call(e,n,e)!==!1}),this},filter:function(t){return Z(t)?this.not(this.not(t)):n(s.call(this,function(e){return T.matches(e,t)}))},add:function(t,e){return n(N(this.concat(n(t,e))))},is:function(t){return this.length&gt;0&amp;&amp;T.matches(this[0],t)},not:function(e){var i=[];if(Z(e)&amp;&amp;e.call!==t)this.each(function(t){e.call(this,t)||i.push(this)});else{var r=&quot;string&quot;==typeof e?this.filter(e):R(e)&amp;&amp;Z(e.item)?o.call(e):n(e);this.forEach(function(t){r.indexOf(t)&lt;0&amp;&amp;i.push(t)})}return n(i)},has:function(t){return this.filter(function(){return D(t)?n.contains(this,t):n(this).find(t).size()})},eq:function(t){return-1===t?this.slice(t):this.slice(t,+t+1)},first:function(){var t=this[0];return t&amp;&amp;!D(t)?t:n(t)},last:function(){var t=this[this.length-1];return t&amp;&amp;!D(t)?t:n(t)},find:function(t){var e,i=this;return e=t?&quot;object&quot;==typeof t?n(t).filter(function(){var t=this;return r.some.call(i,function(e){return n.contains(e,t)})}):1==this.length?n(T.qsa(this[0],t)):this.map(function(){return T.qsa(this,t)}):n()},closest:function(t,e){var i=this[0],r=!1;for(&quot;object&quot;==typeof t&amp;&amp;(r=n(t));i&amp;&amp;!(r?r.indexOf(i)&gt;=0:T.matches(i,t));)i=i!==e&amp;&amp;!$(i)&amp;&amp;i.parentNode;return n(i)},parents:function(t){for(var e=[],i=this;i.length&gt;0;)i=n.map(i,function(t){return(t=t.parentNode)&amp;&amp;!$(t)&amp;&amp;e.indexOf(t)&lt;0?(e.push(t),t):void 0});return U(e,t)},parent:function(t){return U(N(this.pluck(&quot;parentNode&quot;)),t)},children:function(t){return U(this.map(function(){return V(this)}),t)},contents:function(){return this.map(function(){return o.call(this.childNodes)})},siblings:function(t){return U(this.map(function(t,e){return s.call(V(e.parentNode),function(t){return t!==e})}),t)},empty:function(){return this.each(function(){this.innerHTML=&quot;&quot;})},pluck:function(t){return n.map(this,function(e){return e[t]})},show:function(){return this.each(function(){&quot;none&quot;==this.style.display&amp;&amp;(this.style.display=&quot;&quot;),&quot;none&quot;==getComputedStyle(this,&quot;&quot;).getPropertyValue(&quot;display&quot;)&amp;&amp;(this.style.display=I(this.nodeName))})},replaceWith:function(t){return this.before(t).remove()},wrap:function(t){var e=Z(t);if(this[0]&amp;&amp;!e)var i=n(t).get(0),r=i.parentNode||this.length&gt;1;return this.each(function(o){n(this).wrapAll(e?t.call(this,o):r?i.cloneNode(!0):i)})},wrapAll:function(t){if(this[0]){n(this[0]).before(t=n(t));for(var e;(e=t.children()).length;)t=e.first();n(t).append(this)}return this},wrapInner:function(t){var e=Z(t);return this.each(function(i){var r=n(this),o=r.contents(),s=e?t.call(this,i):t;o.length?o.wrapAll(s):r.append(s)})},unwrap:function(){return this.parent().each(function(){n(this).replaceWith(n(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css(&quot;display&quot;,&quot;none&quot;)},toggle:function(e){return this.each(function(){var i=n(this);(e===t?&quot;none&quot;==i.css(&quot;display&quot;):e)?i.show():i.hide()})},prev:function(t){return n(this.pluck(&quot;previousElementSibling&quot;)).filter(t||&quot;*&quot;)},next:function(t){return n(this.pluck(&quot;nextElementSibling&quot;)).filter(t||&quot;*&quot;)},html:function(t){return 0 in arguments?this.each(function(e){var i=this.innerHTML;n(this).empty().append(J(this,t,e,i))}):0 in this?this[0].innerHTML:null},text:function(t){return 0 in arguments?this.each(function(e){var n=J(this,t,e,this.textContent);this.textContent=null==n?&quot;&quot;:&quot;&quot;+n}):0 in this?this[0].textContent:null},attr:function(n,i){var r;return&quot;string&quot;!=typeof n||1 in arguments?this.each(function(t){if(1===this.nodeType)if(D(n))for(e in n)X(this,e,n[e]);else X(this,n,J(this,i,t,this.getAttribute(n)))}):this.length&amp;&amp;1===this[0].nodeType?!(r=this[0].getAttribute(n))&amp;&amp;n in this[0]?this[0][n]:r:t},removeAttr:function(t){return this.each(function(){1===this.nodeType&amp;&amp;t.split(&quot; &quot;).forEach(function(t){X(this,t)},this)})},prop:function(t,e){return t=P[t]||t,1 in arguments?this.each(function(n){this[t]=J(this,e,n,this[t])}):this[0]&amp;&amp;this[0][t]},data:function(e,n){var i=&quot;data-&quot;+e.replace(m,&quot;-$1&quot;).toLowerCase(),r=1 in arguments?this.attr(i,n):this.attr(i);return null!==r?Y(r):t},val:function(t){return 0 in arguments?this.each(function(e){this.value=J(this,t,e,this.value)}):this[0]&amp;&amp;(this[0].multiple?n(this[0]).find(&quot;option&quot;).filter(function(){return this.selected}).pluck(&quot;value&quot;):this[0].value)},offset:function(t){if(t)return this.each(function(e){var i=n(this),r=J(this,t,e,i.offset()),o=i.offsetParent().offset(),s={top:r.top-o.top,left:r.left-o.left};&quot;static&quot;==i.css(&quot;position&quot;)&amp;&amp;(s.position=&quot;relative&quot;),i.css(s)});if(!this.length)return null;var e=this[0].getBoundingClientRect();return{left:e.left+window.pageXOffset,top:e.top+window.pageYOffset,width:Math.round(e.width),height:Math.round(e.height)}},css:function(t,i){if(arguments.length&lt;2){var r,o=this[0];if(!o)return;if(r=getComputedStyle(o,&quot;&quot;),&quot;string&quot;==typeof t)return o.style[C(t)]||r.getPropertyValue(t);if(A(t)){var s={};return n.each(t,function(t,e){s[e]=o.style[C(e)]||r.getPropertyValue(e)}),s}}var a=&quot;&quot;;if(&quot;string&quot;==L(t))i||0===i?a=F(t)+&quot;:&quot;+H(t,i):this.each(function(){this.style.removeProperty(F(t))});else for(e in t)t[e]||0===t[e]?a+=F(e)+&quot;:&quot;+H(e,t[e])+&quot;;&quot;:this.each(function(){this.style.removeProperty(F(e))});return this.each(function(){this.style.cssText+=&quot;;&quot;+a})},index:function(t){return t?this.indexOf(n(t)[0]):this.parent().children().indexOf(this[0])},hasClass:function(t){return t?r.some.call(this,function(t){return this.test(W(t))},q(t)):!1},addClass:function(t){return t?this.each(function(e){if(&quot;className&quot;in this){i=[];var r=W(this),o=J(this,t,e,r);o.split(/\s+/g).forEach(function(t){n(this).hasClass(t)||i.push(t)},this),i.length&amp;&amp;W(this,r+(r?&quot; &quot;:&quot;&quot;)+i.join(&quot; &quot;))}}):this},removeClass:function(e){return this.each(function(n){if(&quot;className&quot;in this){if(e===t)return W(this,&quot;&quot;);i=W(this),J(this,e,n,i).split(/\s+/g).forEach(function(t){i=i.replace(q(t),&quot; &quot;)}),W(this,i.trim())}})},toggleClass:function(e,i){return e?this.each(function(r){var o=n(this),s=J(this,e,r,W(this));s.split(/\s+/g).forEach(function(e){(i===t?!o.hasClass(e):i)?o.addClass(e):o.removeClass(e)})}):this},scrollTop:function(e){if(this.length){var n=&quot;scrollTop&quot;in this[0];return e===t?n?this[0].scrollTop:this[0].pageYOffset:this.each(n?function(){this.scrollTop=e}:function(){this.scrollTo(this.scrollX,e)})}},scrollLeft:function(e){if(this.length){var n=&quot;scrollLeft&quot;in this[0];return e===t?n?this[0].scrollLeft:this[0].pageXOffset:this.each(n?function(){this.scrollLeft=e}:function(){this.scrollTo(e,this.scrollY)})}},position:function(){if(this.length){var t=this[0],e=this.offsetParent(),i=this.offset(),r=d.test(e[0].nodeName)?{top:0,left:0}:e.offset();return i.top-=parseFloat(n(t).css(&quot;margin-top&quot;))||0,i.left-=parseFloat(n(t).css(&quot;margin-left&quot;))||0,r.top+=parseFloat(n(e[0]).css(&quot;border-top-width&quot;))||0,r.left+=parseFloat(n(e[0]).css(&quot;border-left-width&quot;))||0,{top:i.top-r.top,left:i.left-r.left}}},offsetParent:function(){return this.map(function(){for(var t=this.offsetParent||a.body;t&amp;&amp;!d.test(t.nodeName)&amp;&amp;&quot;static&quot;==n(t).css(&quot;position&quot;);)t=t.offsetParent;return t})}},n.fn.detach=n.fn.remove,[&quot;width&quot;,&quot;height&quot;].forEach(function(e){var i=e.replace(/./,function(t){return t[0].toUpperCase()});n.fn[e]=function(r){var o,s=this[0];return r===t?_(s)?s[&quot;inner&quot;+i]:$(s)?s.documentElement[&quot;scroll&quot;+i]:(o=this.offset())&amp;&amp;o[e]:this.each(function(t){s=n(this),s.css(e,J(this,r,t,s[e]()))})}}),v.forEach(function(t,e){var i=e%2;n.fn[t]=function(){var t,o,r=n.map(arguments,function(e){return t=L(e),&quot;object&quot;==t||&quot;array&quot;==t||null==e?e:T.fragment(e)}),s=this.length&gt;1;return r.length&lt;1?this:this.each(function(t,u){o=i?u:u.parentNode,u=0==e?u.nextSibling:1==e?u.firstChild:2==e?u:null;var f=n.contains(a.documentElement,o);r.forEach(function(t){if(s)t=t.cloneNode(!0);else if(!o)return n(t).remove();o.insertBefore(t,u),f&amp;&amp;G(t,function(t){null==t.nodeName||&quot;SCRIPT&quot;!==t.nodeName.toUpperCase()||t.type&amp;&amp;&quot;text/javascript&quot;!==t.type||t.src||window.eval.call(window,t.innerHTML)})})})},n.fn[i?t+&quot;To&quot;:&quot;insert&quot;+(e?&quot;Before&quot;:&quot;After&quot;)]=function(e){return n(e)[t](this),this}}),T.Z.prototype=n.fn,T.uniq=N,T.deserializeValue=Y,n.zepto=T,n}();window.Zepto=Zepto,void 0===window.$&amp;&amp;(window.$=Zepto),function(t){function l(t){return t._zid||(t._zid=e++)}function h(t,e,n,i){if(e=p(e),e.ns)var r=d(e.ns);return(s[l(t)]||[]).filter(function(t){return!(!t||e.e&amp;&amp;t.e!=e.e||e.ns&amp;&amp;!r.test(t.ns)||n&amp;&amp;l(t.fn)!==l(n)||i&amp;&amp;t.sel!=i)})}function p(t){var e=(&quot;&quot;+t).split(&quot;.&quot;);return{e:e[0],ns:e.slice(1).sort().join(&quot; &quot;)}}function d(t){return new RegExp(&quot;(?:^| )&quot;+t.replace(&quot; &quot;,&quot; .* ?&quot;)+&quot;(?: |$)&quot;)}function m(t,e){return t.del&amp;&amp;!u&amp;&amp;t.e in f||!!e}function g(t){return c[t]||u&amp;&amp;f[t]||t}function v(e,i,r,o,a,u,f){var h=l(e),d=s[h]||(s[h]=[]);i.split(/\s/).forEach(function(i){if(&quot;ready&quot;==i)return t(document).ready(r);var s=p(i);s.fn=r,s.sel=a,s.e in c&amp;&amp;(r=function(e){var n=e.relatedTarget;return!n||n!==this&amp;&amp;!t.contains(this,n)?s.fn.apply(this,arguments):void 0}),s.del=u;var l=u||r;s.proxy=function(t){if(t=j(t),!t.isImmediatePropagationStopped()){t.data=o;var i=l.apply(e,t._args==n?[t]:[t].concat(t._args));return i===!1&amp;&amp;(t.preventDefault(),t.stopPropagation()),i}},s.i=d.length,d.push(s),&quot;addEventListener&quot;in e&amp;&amp;e.addEventListener(g(s.e),s.proxy,m(s,f))})}function y(t,e,n,i,r){var o=l(t);(e||&quot;&quot;).split(/\s/).forEach(function(e){h(t,e,n,i).forEach(function(e){delete s[o][e.i],&quot;removeEventListener&quot;in t&amp;&amp;t.removeEventListener(g(e.e),e.proxy,m(e,r))})})}function j(e,i){return(i||!e.isDefaultPrevented)&amp;&amp;(i||(i=e),t.each(E,function(t,n){var r=i[t];e[t]=function(){return this[n]=x,r&amp;&amp;r.apply(i,arguments)},e[n]=b}),(i.defaultPrevented!==n?i.defaultPrevented:&quot;returnValue&quot;in i?i.returnValue===!1:i.getPreventDefault&amp;&amp;i.getPreventDefault())&amp;&amp;(e.isDefaultPrevented=x)),e}function S(t){var e,i={originalEvent:t};for(e in t)w.test(e)||t[e]===n||(i[e]=t[e]);return j(i,t)}var n,e=1,i=Array.prototype.slice,r=t.isFunction,o=function(t){return&quot;string&quot;==typeof t},s={},a={},u=&quot;onfocusin&quot;in window,f={focus:&quot;focusin&quot;,blur:&quot;focusout&quot;},c={mouseenter:&quot;mouseover&quot;,mouseleave:&quot;mouseout&quot;};a.click=a.mousedown=a.mouseup=a.mousemove=&quot;MouseEvents&quot;,t.event={add:v,remove:y},t.proxy=function(e,n){var s=2 in arguments&amp;&amp;i.call(arguments,2);if(r(e)){var a=function(){return e.apply(n,s?s.concat(i.call(arguments)):arguments)};return a._zid=l(e),a}if(o(n))return s?(s.unshift(e[n],e),t.proxy.apply(null,s)):t.proxy(e[n],e);throw new TypeError(&quot;expected function&quot;)},t.fn.bind=function(t,e,n){return this.on(t,e,n)},t.fn.unbind=function(t,e){return this.off(t,e)},t.fn.one=function(t,e,n,i){return this.on(t,e,n,i,1)};var x=function(){return!0},b=function(){return!1},w=/^([A-Z]|returnValue$|layer[XY]$)/,E={preventDefault:&quot;isDefaultPrevented&quot;,stopImmediatePropagation:&quot;isImmediatePropagationStopped&quot;,stopPropagation:&quot;isPropagationStopped&quot;};t.fn.delegate=function(t,e,n){return this.on(e,t,n)},t.fn.undelegate=function(t,e,n){return this.off(e,t,n)},t.fn.live=function(e,n){return t(document.body).delegate(this.selector,e,n),this},t.fn.die=function(e,n){return t(document.body).undelegate(this.selector,e,n),this},t.fn.on=function(e,s,a,u,f){var c,l,h=this;return e&amp;&amp;!o(e)?(t.each(e,function(t,e){h.on(t,s,a,e,f)}),h):(o(s)||r(u)||u===!1||(u=a,a=s,s=n),(r(a)||a===!1)&amp;&amp;(u=a,a=n),u===!1&amp;&amp;(u=b),h.each(function(n,r){f&amp;&amp;(c=function(t){return y(r,t.type,u),u.apply(this,arguments)}),s&amp;&amp;(l=function(e){var n,o=t(e.target).closest(s,r).get(0);return o&amp;&amp;o!==r?(n=t.extend(S(e),{currentTarget:o,liveFired:r}),(c||u).apply(o,[n].concat(i.call(arguments,1)))):void 0}),v(r,e,u,a,s,l||c)}))},t.fn.off=function(e,i,s){var a=this;return e&amp;&amp;!o(e)?(t.each(e,function(t,e){a.off(t,i,e)}),a):(o(i)||r(s)||s===!1||(s=i,i=n),s===!1&amp;&amp;(s=b),a.each(function(){y(this,e,s,i)}))},t.fn.trigger=function(e,n){return e=o(e)||t.isPlainObject(e)?t.Event(e):j(e),e._args=n,this.each(function(){e.type in f&amp;&amp;&quot;function&quot;==typeof this[e.type]?this[e.type]():&quot;dispatchEvent&quot;in this?this.dispatchEvent(e):t(this).triggerHandler(e,n)})},t.fn.triggerHandler=function(e,n){var i,r;return this.each(function(s,a){i=S(o(e)?t.Event(e):e),i._args=n,i.target=a,t.each(h(a,e.type||e),function(t,e){return r=e.proxy(i),i.isImmediatePropagationStopped()?!1:void 0})}),r},&quot;focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error&quot;.split(&quot; &quot;).forEach(function(e){t.fn[e]=function(t){return 0 in arguments?this.bind(e,t):this.trigger(e)}}),t.Event=function(t,e){o(t)||(e=t,t=e.type);var n=document.createEvent(a[t]||&quot;Events&quot;),i=!0;if(e)for(var r in e)&quot;bubbles&quot;==r?i=!!e[r]:n[r]=e[r];return n.initEvent(t,i,!0),j(n)}}(Zepto),function(t){function h(e,n,i){var r=t.Event(n);return t(e).trigger(r,i),!r.isDefaultPrevented()}function p(t,e,i,r){return t.global?h(e||n,i,r):void 0}function d(e){e.global&amp;&amp;0===t.active++&amp;&amp;p(e,null,&quot;ajaxStart&quot;)}function m(e){e.global&amp;&amp;!--t.active&amp;&amp;p(e,null,&quot;ajaxStop&quot;)}function g(t,e){var n=e.context;return e.beforeSend.call(n,t,e)===!1||p(e,n,&quot;ajaxBeforeSend&quot;,[t,e])===!1?!1:void p(e,n,&quot;ajaxSend&quot;,[t,e])}function v(t,e,n,i){var r=n.context,o=&quot;success&quot;;n.success.call(r,t,o,e),i&amp;&amp;i.resolveWith(r,[t,o,e]),p(n,r,&quot;ajaxSuccess&quot;,[e,n,t]),x(o,e,n)}function y(t,e,n,i,r){var o=i.context;i.error.call(o,n,e,t),r&amp;&amp;r.rejectWith(o,[n,e,t]),p(i,o,&quot;ajaxError&quot;,[n,i,t||e]),x(e,n,i)}function x(t,e,n){var i=n.context;n.complete.call(i,e,t),p(n,i,&quot;ajaxComplete&quot;,[e,n]),m(n)}function b(){}function w(t){return t&amp;&amp;(t=t.split(&quot;;&quot;,2)[0]),t&amp;&amp;(t==f?&quot;html&quot;:t==u?&quot;json&quot;:s.test(t)?&quot;script&quot;:a.test(t)&amp;&amp;&quot;xml&quot;)||&quot;text&quot;}function E(t,e){return&quot;&quot;==e?t:(t+&quot;&amp;&quot;+e).replace(/[&amp;?]{1,2}/,&quot;?&quot;)}function j(e){e.processData&amp;&amp;e.data&amp;&amp;&quot;string&quot;!=t.type(e.data)&amp;&amp;(e.data=t.param(e.data,e.traditional)),!e.data||e.type&amp;&amp;&quot;GET&quot;!=e.type.toUpperCase()||(e.url=E(e.url,e.data),e.data=void 0)}function S(e,n,i,r){return t.isFunction(n)&amp;&amp;(r=i,i=n,n=void 0),t.isFunction(i)||(r=i,i=void 0),{url:e,data:n,success:i,dataType:r}}function C(e,n,i,r){var o,s=t.isArray(n),a=t.isPlainObject(n);t.each(n,function(n,u){o=t.type(u),r&amp;&amp;(n=i?r:r+&quot;[&quot;+(a||&quot;object&quot;==o||&quot;array&quot;==o?n:&quot;&quot;)+&quot;]&quot;),!r&amp;&amp;s?e.add(u.name,u.value):&quot;array&quot;==o||!i&amp;&amp;&quot;object&quot;==o?C(e,u,i,n):e.add(n,u)})}var i,r,e=0,n=window.document,o=/&lt;script\b[^&lt;]*(?:(?!&lt;\/script&gt;)&lt;[^&lt;]*)*&lt;\/script&gt;/gi,s=/^(?:text|application)\/javascript/i,a=/^(?:text|application)\/xml/i,u=&quot;application/json&quot;,f=&quot;text/html&quot;,c=/^\s*$/,l=n.createElement(&quot;a&quot;);l.href=window.location.href,t.active=0,t.ajaxJSONP=function(i,r){if(!(&quot;type&quot;in i))return t.ajax(i);var f,h,o=i.jsonpCallback,s=(t.isFunction(o)?o():o)||&quot;jsonp&quot;+ ++e,a=n.createElement(&quot;script&quot;),u=window[s],c=function(e){t(a).triggerHandler(&quot;error&quot;,e||&quot;abort&quot;)},l={abort:c};return r&amp;&amp;r.promise(l),t(a).on(&quot;load error&quot;,function(e,n){clearTimeout(h),t(a).off().remove(),&quot;error&quot;!=e.type&amp;&amp;f?v(f[0],l,i,r):y(null,n||&quot;error&quot;,l,i,r),window[s]=u,f&amp;&amp;t.isFunction(u)&amp;&amp;u(f[0]),u=f=void 0}),g(l,i)===!1?(c(&quot;abort&quot;),l):(window[s]=function(){f=arguments},a.src=i.url.replace(/\?(.+)=\?/,&quot;?$1=&quot;+s),n.head.appendChild(a),i.timeout&gt;0&amp;&amp;(h=setTimeout(function(){c(&quot;timeout&quot;)},i.timeout)),l)},t.ajaxSettings={type:&quot;GET&quot;,beforeSend:b,success:b,error:b,complete:b,context:null,global:!0,xhr:function(){return new window.XMLHttpRequest},accepts:{script:&quot;text/javascript, application/javascript, application/x-javascript&quot;,json:u,xml:&quot;application/xml, text/xml&quot;,html:f,text:&quot;text/plain&quot;},crossDomain:!1,timeout:0,processData:!0,cache:!0},t.ajax=function(e){var a,o=t.extend({},e||{}),s=t.Deferred&amp;&amp;t.Deferred();for(i in t.ajaxSettings)void 0===o[i]&amp;&amp;(o[i]=t.ajaxSettings[i]);d(o),o.crossDomain||(a=n.createElement(&quot;a&quot;),a.href=o.url,a.href=a.href,o.crossDomain=l.protocol+&quot;//&quot;+l.host!=a.protocol+&quot;//&quot;+a.host),o.url||(o.url=window.location.toString()),j(o);var u=o.dataType,f=/\?.+=\?/.test(o.url);if(f&amp;&amp;(u=&quot;jsonp&quot;),o.cache!==!1&amp;&amp;(e&amp;&amp;e.cache===!0||&quot;script&quot;!=u&amp;&amp;&quot;jsonp&quot;!=u)||(o.url=E(o.url,&quot;_=&quot;+Date.now())),&quot;jsonp&quot;==u)return f||(o.url=E(o.url,o.jsonp?o.jsonp+&quot;=?&quot;:o.jsonp===!1?&quot;&quot;:&quot;callback=?&quot;)),t.ajaxJSONP(o,s);var C,h=o.accepts[u],p={},m=function(t,e){p[t.toLowerCase()]=[t,e]},x=/^([\w-]+:)\/\//.test(o.url)?RegExp.$1:window.location.protocol,S=o.xhr(),T=S.setRequestHeader;if(s&amp;&amp;s.promise(S),o.crossDomain||m(&quot;X-Requested-With&quot;,&quot;XMLHttpRequest&quot;),m(&quot;Accept&quot;,h||&quot;*/*&quot;),(h=o.mimeType||h)&amp;&amp;(h.indexOf(&quot;,&quot;)&gt;-1&amp;&amp;(h=h.split(&quot;,&quot;,2)[0]),S.overrideMimeType&amp;&amp;S.overrideMimeType(h)),(o.contentType||o.contentType!==!1&amp;&amp;o.data&amp;&amp;&quot;GET&quot;!=o.type.toUpperCase())&amp;&amp;m(&quot;Content-Type&quot;,o.contentType||&quot;application/x-www-form-urlencoded&quot;),o.headers)for(r in o.headers)m(r,o.headers[r]);if(S.setRequestHeader=m,S.onreadystatechange=function(){if(4==S.readyState){S.onreadystatechange=b,clearTimeout(C);var e,n=!1;if(S.status&gt;=200&amp;&amp;S.status&lt;300||304==S.status||0==S.status&amp;&amp;&quot;file:&quot;==x){u=u||w(o.mimeType||S.getResponseHeader(&quot;content-type&quot;)),e=S.responseText;try{&quot;script&quot;==u?(1,eval)(e):&quot;xml&quot;==u?e=S.responseXML:&quot;json&quot;==u&amp;&amp;(e=c.test(e)?null:t.parseJSON(e))}catch(i){n=i}n?y(n,&quot;parsererror&quot;,S,o,s):v(e,S,o,s)}else y(S.statusText||null,S.status?&quot;error&quot;:&quot;abort&quot;,S,o,s)}},g(S,o)===!1)return S.abort(),y(null,&quot;abort&quot;,S,o,s),S;if(o.xhrFields)for(r in o.xhrFields)S[r]=o.xhrFields[r];var N=&quot;async&quot;in o?o.async:!0;S.open(o.type,o.url,N,o.username,o.password);for(r in p)T.apply(S,p[r]);return o.timeout&gt;0&amp;&amp;(C=setTimeout(function(){S.onreadystatechange=b,S.abort(),y(null,&quot;timeout&quot;,S,o,s)},o.timeout)),S.send(o.data?o.data:null),S},t.get=function(){return t.ajax(S.apply(null,arguments))},t.post=function(){var e=S.apply(null,arguments);return e.type=&quot;POST&quot;,t.ajax(e)},t.getJSON=function(){var e=S.apply(null,arguments);return e.dataType=&quot;json&quot;,t.ajax(e)},t.fn.load=function(e,n,i){if(!this.length)return this;var a,r=this,s=e.split(/\s/),u=S(e,n,i),f=u.success;return s.length&gt;1&amp;&amp;(u.url=s[0],a=s[1]),u.success=function(e){r.html(a?t(&quot;&lt;div&gt;&quot;).html(e.replace(o,&quot;&quot;)).find(a):e),f&amp;&amp;f.apply(r,arguments)},t.ajax(u),this};var T=encodeURIComponent;t.param=function(e,n){var i=[];return i.add=function(e,n){t.isFunction(n)&amp;&amp;(n=n()),null==n&amp;&amp;(n=&quot;&quot;),this.push(T(e)+&quot;=&quot;+T(n))},C(i,e,n),i.join(&quot;&amp;&quot;).replace(/%20/g,&quot;+&quot;)}}(Zepto),function(t){t.fn.serializeArray=function(){var e,n,i=[],r=function(t){return t.forEach?t.forEach(r):void i.push({name:e,value:t})};return this[0]&amp;&amp;t.each(this[0].elements,function(i,o){n=o.type,e=o.name,e&amp;&amp;&quot;fieldset&quot;!=o.nodeName.toLowerCase()&amp;&amp;!o.disabled&amp;&amp;&quot;submit&quot;!=n&amp;&amp;&quot;reset&quot;!=n&amp;&amp;&quot;button&quot;!=n&amp;&amp;&quot;file&quot;!=n&amp;&amp;(&quot;radio&quot;!=n&amp;&amp;&quot;checkbox&quot;!=n||o.checked)&amp;&amp;r(t(o).val())}),i},t.fn.serialize=function(){var t=[];return this.serializeArray().forEach(function(e){t.push(encodeURIComponent(e.name)+&quot;=&quot;+encodeURIComponent(e.value))}),t.join(&quot;&amp;&quot;)},t.fn.submit=function(e){if(0 in arguments)this.bind(&quot;submit&quot;,e);else if(this.length){var n=t.Event(&quot;submit&quot;);this.eq(0).trigger(n),n.isDefaultPrevented()||this.get(0).submit()}return this}}(Zepto),function(t){&quot;__proto__&quot;in{}||t.extend(t.zepto,{Z:function(e,n){return e=e||[],t.extend(e,t.fn),e.selector=n||&quot;&quot;,e.__Z=!0,e},isZ:function(e){return&quot;array&quot;===t.type(e)&amp;&amp;&quot;__Z&quot;in e}});try{getComputedStyle(void 0)}catch(e){var n=getComputedStyle;window.getComputedStyle=function(t){try{return n(t)}catch(e){return null}}}}(Zepto);</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code blob-code-inner js-file-line"><span class="pl-s"><span class="pl-pds">&#39;</span>use strict<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code blob-code-inner js-file-line">(<span class="pl-k">function</span>(<span class="pl-smi">$</span>, <span class="pl-smi">Sortable</span>) {</td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code blob-code-inner js-file-line">  <span class="pl-k">var</span> <span class="pl-c1">ENUMS</span> <span class="pl-k">=</span> {</td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code blob-code-inner js-file-line">    COLOR <span class="pl-k">:</span> {</td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code blob-code-inner js-file-line">      EMPTY<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>transparent<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code blob-code-inner js-file-line">  }</td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code blob-code-inner js-file-line">  <span class="pl-smi">$</span>.<span class="pl-en">extend</span>(<span class="pl-smi">$</span>.<span class="pl-smi">fn</span>, {</td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemToggle</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $checkbox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> item <span class="pl-k">=</span> <span class="pl-smi">$checkbox</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedCheckbox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-toggle-wrapper&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code blob-code-inner js-file-line">                                 <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-toggle&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code blob-code-inner js-file-line">                                   <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-toggle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code blob-code-inner js-file-line">                                   <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-toggle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code blob-code-inner js-file-line">                                   <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-toggle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code blob-code-inner js-file-line">                                 <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code blob-code-inner js-file-line">                               <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">item</span>.<span class="pl-en">append</span>($injectedCheckbox);</td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemCheckbox</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $checkbox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> item <span class="pl-k">=</span> <span class="pl-smi">$checkbox</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedCheckbox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-checkbox&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">item</span>.<span class="pl-en">append</span>($injectedCheckbox);</td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemSelect</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $select <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $item <span class="pl-k">=</span> <span class="pl-smi">$select</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-en">append</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;select-triangle&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemDate</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $date <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $item <span class="pl-k">=</span> <span class="pl-smi">$date</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedDate <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-date&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateDate</span>();</td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-en">append</span>($injectedDate);</td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$date</span>.<span class="pl-en">change</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">updateDate</span>();</td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">updateDate</span>() {</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$injectedDate</span>.<span class="pl-c1">text</span>(<span class="pl-smi">$date</span>.<span class="pl-en">val</span>());</td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemTime</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $time <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $item <span class="pl-k">=</span> <span class="pl-smi">$time</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedTime <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-time&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">updateTime</span>();</td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-en">append</span>($injectedTime);</td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$time</span>.<span class="pl-en">change</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">updateTime</span>();</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">function</span> <span class="pl-en">updateTime</span>() {</td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$injectedTime</span>.<span class="pl-c1">text</span>(<span class="pl-smi">$time</span>.<span class="pl-en">val</span>());</td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemRadio</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $radio <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $item  <span class="pl-k">=</span> <span class="pl-smi">$radio</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedRadio <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-radio&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-en">append</span>($injectedRadio);</td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemColor</span><span class="pl-k">:</span> <span class="pl-k">function</span>(<span class="pl-smi">options</span>){</td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> options <span class="pl-k">=</span> <span class="pl-smi">$</span>.<span class="pl-en">extend</span>({}, {</td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code blob-code-inner js-file-line">        sunny<span class="pl-k">:</span> <span class="pl-c1">false</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code blob-code-inner js-file-line">      }, options <span class="pl-k">||</span> {});</td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> layout <span class="pl-k">=</span> [</td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code blob-code-inner js-file-line">        [<span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#55FF00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AAFF55<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#FFFF55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFFFAA<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    ],</td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code blob-code-inner js-file-line">        [<span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#AAFFAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#55FF55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00FF00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AAFF00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFFF00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFAA55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFAAAA<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    ],</td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code blob-code-inner js-file-line">        [<span class="pl-s"><span class="pl-pds">&#39;</span>#55FFAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00FF55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00AA00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#55AA00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AAAA55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AAAA00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFAA00<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF5500<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF5555<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code blob-code-inner js-file-line">        [<span class="pl-s"><span class="pl-pds">&#39;</span>#AAFFFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00FFAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00AA55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#55AA55<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#005500<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#555500<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA5500<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF0000<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF0055<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code blob-code-inner js-file-line">        [<span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#55AAAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00AAAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#005555<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFFFFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#000000<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA5555<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA0000<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    ],</td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code blob-code-inner js-file-line">        [<span class="pl-s"><span class="pl-pds">&#39;</span>#55FFFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00FFFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#00AAFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#0055AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AAAAAA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#555555<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#550000<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA0055<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF55AA<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code blob-code-inner js-file-line">        [<span class="pl-s"><span class="pl-pds">&#39;</span>#55AAFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#0055FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#0000FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#0000AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#000055<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#550055<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA00AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF00AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FFAAFF<span class="pl-pds">&#39;</span></span>],</td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code blob-code-inner js-file-line">        [<span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#5555AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#5555FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#5500FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#5500AA<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA00FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF00FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#FF55FF<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    ],</td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code blob-code-inner js-file-line">        [<span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    , <span class="pl-s"><span class="pl-pds">&#39;</span>#AAAAFF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA55FF<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#AA55AA<span class="pl-pds">&#39;</span></span>, <span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    , <span class="pl-c1">false</span>    ],</td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code blob-code-inner js-file-line">      ];</td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code blob-code-inner js-file-line">      <span class="pl-k">var</span> mappingSunny <span class="pl-k">=</span> {<span class="pl-s"><span class="pl-pds">&#39;</span>000000<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>000000<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>000055<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>001e41<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>0000aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>004387<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>0000ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>0068ca<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>005500<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2b4a2c<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>005555<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>27514f<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>0055aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>16638d<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>0055ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>007dce<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>00aa00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>5e9860<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>00aa55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>5c9b72<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>00aaaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>57a5a2<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>00aaff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4cb4db<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>00ff00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>8ee391<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>00ff55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>8ee69e<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>00ffaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>8aebc0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>00ffff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>84f5f1<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>550000<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4a161b<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>550055<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>482748<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>5500aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>40488a<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>5500ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>2f6bcc<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>555500<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>564e36<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>555555<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>545454<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>5555aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4f6790<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>5555ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>4180d0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>55aa00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>759a64<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>55aa55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>759d76<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>55aaaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>71a6a4<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>55aaff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>69b5dd<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>55ff00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9ee594<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>55ff55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9de7a0<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>55ffaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9becc2<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>55ffff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>95f6f2<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aa0000<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>99353f<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aa0055<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>983e5a<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aa00aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>955694<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aa00ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>8f74d2<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aa5500<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9d5b4d<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aa5555<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9d6064<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aa55aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9a7099<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aa55ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>9587d5<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aaaa00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>afa072<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aaaa55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>aea382<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aaaaaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ababab<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ffffff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ffffff<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aaaaff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>a7bae2<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aaff00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>c9e89d<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aaff55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>c9eaa7<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>aaffaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>c7f0c8<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>aaffff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>c3f9f7<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff0000<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e35462<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff0055<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e25874<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>ff00aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e16aa3<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff00ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>de83dc<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff5500<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e66e6b<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>ff5555<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e6727c<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff55aa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e37fa7<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ff55ff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>e194df<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>ffaa00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>f1aa86<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ffaa55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>f1ad93<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ffaaaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>efb5b8<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>ffaaff<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ecc3eb<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ffff00<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>ffeeab<span class="pl-pds">&#39;</span></span>,<span class="pl-s"><span class="pl-pds">&#39;</span>ffff55<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fff1b5<span class="pl-pds">&#39;</span></span>,</td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code blob-code-inner js-file-line">                          <span class="pl-s"><span class="pl-pds">&#39;</span>ffffaa<span class="pl-pds">&#39;</span></span><span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>fff6d3<span class="pl-pds">&#39;</span></span>};</td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $color <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $item <span class="pl-k">=</span> <span class="pl-smi">$color</span>.<span class="pl-c1">parent</span>();</td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> grid <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> itemWidth <span class="pl-k">=</span> <span class="pl-c1">100</span> <span class="pl-k">/</span> layout[<span class="pl-c1">0</span>].<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> itemHeight <span class="pl-k">=</span> <span class="pl-c1">100</span> <span class="pl-k">/</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> boxHeight <span class="pl-k">=</span> itemWidth <span class="pl-k">*</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span>;</td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">for</span>(<span class="pl-k">var</span> i <span class="pl-k">=</span> <span class="pl-c1">0</span>; i <span class="pl-k">&lt;</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span>; i<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">for</span>(<span class="pl-k">var</span> j <span class="pl-k">=</span> <span class="pl-c1">0</span>; j <span class="pl-k">&lt;</span> layout[i].<span class="pl-c1">length</span>; j<span class="pl-k">++</span>) {</td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> color <span class="pl-k">=</span> layout[i][j] <span class="pl-k">||</span> <span class="pl-smi">ENUMS</span>.<span class="pl-c1">COLOR</span>.<span class="pl-c1">EMPTY</span>;</td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> selectable <span class="pl-k">=</span> (color <span class="pl-k">!==</span> <span class="pl-smi">ENUMS</span>.<span class="pl-c1">COLOR</span>.<span class="pl-c1">EMPTY</span> <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> selectable<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> roundedTL <span class="pl-k">=</span> (i <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> j <span class="pl-k">===</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> i <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">-</span> <span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i <span class="pl-k">-</span><span class="pl-c1">1</span>][j]</td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> rounded-tl<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> roundedTR <span class="pl-k">=</span> i <span class="pl-k">===</span> <span class="pl-c1">0</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">+</span> <span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">+</span> <span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i <span class="pl-k">-</span><span class="pl-c1">1</span>][j]</td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> rounded-tr <span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> roundedBL <span class="pl-k">=</span> (i <span class="pl-k">===</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> j <span class="pl-k">===</span> <span class="pl-c1">0</span>)</td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> i <span class="pl-k">===</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">-</span> <span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">-</span> <span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i <span class="pl-k">+</span> <span class="pl-c1">1</span>][j]</td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> rounded-bl<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> roundedBR <span class="pl-k">=</span> i <span class="pl-k">===</span> <span class="pl-smi">layout</span>.<span class="pl-c1">length</span> <span class="pl-k">-</span> <span class="pl-c1">1</span> <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">+</span> <span class="pl-c1">1</span>]</td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code blob-code-inner js-file-line">                <span class="pl-k">||</span> <span class="pl-k">!</span>layout[i][j <span class="pl-k">+</span> <span class="pl-c1">1</span>] <span class="pl-k">&amp;&amp;</span> <span class="pl-k">!</span>layout[i <span class="pl-k">+</span> <span class="pl-c1">1</span>][j]</td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code blob-code-inner js-file-line">                    <span class="pl-k">?</span> <span class="pl-s"><span class="pl-pds">&#39;</span> rounded-br<span class="pl-pds">&#39;</span></span> <span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span>(<span class="pl-smi">options</span>.<span class="pl-smi">sunny</span> <span class="pl-k">&amp;&amp;</span> color <span class="pl-k">!==</span> <span class="pl-smi">ENUMS</span>.<span class="pl-c1">COLOR</span>.<span class="pl-c1">EMPTY</span>) {</td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code blob-code-inner js-file-line">              color <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> mappingSunny[<span class="pl-smi">color</span>.<span class="pl-c1">replace</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span><span class="pl-pds">&#39;</span></span>).<span class="pl-c1">toLowerCase</span>()];</td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code blob-code-inner js-file-line">            grid <span class="pl-k">+=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;i <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>class=&quot;color-box <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> selectable <span class="pl-k">+</span> roundedTL <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code blob-code-inner js-file-line">                      roundedTR <span class="pl-k">+</span> roundedBL <span class="pl-k">+</span> roundedBR <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>data-value=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">color</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>#<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>0x<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>style=&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>width:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> itemWidth <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>height:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> itemHeight <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%; <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code blob-code-inner js-file-line">                <span class="pl-s"><span class="pl-pds">&#39;</span>background:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> color <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>;&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/i&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code blob-code-inner js-file-line">        }</td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $injectedColor <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-styled-color&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;span class=&quot;value&quot; style=&quot;background:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> <span class="pl-smi">$color</span>.<span class="pl-en">val</span>().<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>0x<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>) <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&quot;&gt;&lt;/span&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div <span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>style=&quot;padding-bottom:<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> boxHeight <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>%&quot;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code blob-code-inner js-file-line">              <span class="pl-s"><span class="pl-pds">&#39;</span>class=&quot;color-box-wrap&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;color-box-container&quot;&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code blob-code-inner js-file-line">                grid <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code blob-code-inner js-file-line">            <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code blob-code-inner js-file-line">          <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code blob-code-inner js-file-line">        <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-en">append</span>($injectedColor);</td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $valueDisplay <span class="pl-k">=</span> <span class="pl-smi">$injectedColor</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.value<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$color</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$item</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.color-box-wrap<span class="pl-pds">&#39;</span></span>).<span class="pl-en">toggleClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$item</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.color-box.selectable<span class="pl-pds">&#39;</span></span>).<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>click<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>(<span class="pl-smi">ev</span>) {</td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">ev</span>.<span class="pl-en">preventDefault</span>();</td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> value <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">data</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>value<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$color</span>.<span class="pl-en">val</span>(value);</td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$valueDisplay</span>.<span class="pl-en">css</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>background-color<span class="pl-pds">&#39;</span></span>, <span class="pl-smi">value</span>.<span class="pl-c1">replace</span>(<span class="pl-sr"><span class="pl-pds">/</span><span class="pl-k">^</span>0x<span class="pl-pds">/</span></span>, <span class="pl-s"><span class="pl-pds">&#39;</span>#<span class="pl-pds">&#39;</span></span>));</td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$item</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.color-box-wrap<span class="pl-pds">&#39;</span></span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>show<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code blob-code-inner js-file-line">        })</td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">tab</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $tab <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$tab</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $current <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-smi">$current</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>a[name=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>]<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">removeClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$current</span>.<span class="pl-en">addClass</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>active<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemSlider</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $slider <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> name <span class="pl-k">=</span> <span class="pl-smi">$slider</span>.<span class="pl-en">attr</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>name<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $input <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input[name=<span class="pl-pds">&#39;</span></span> <span class="pl-k">+</span> name <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>][class=item-input]<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$slider</span>.<span class="pl-en">on</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>, <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $current <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$input</span>.<span class="pl-en">val</span>(<span class="pl-smi">$current</span>.<span class="pl-en">val</span>());</td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$input</span>.<span class="pl-en">change</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $current <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$slider</span>.<span class="pl-en">val</span>(<span class="pl-smi">$current</span>.<span class="pl-en">val</span>());</td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemDraggableList</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $handlebar <span class="pl-k">=</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-draggable-handle&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-draggable-handle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-draggable-handle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-draggable-handle-bar&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code blob-code-inner js-file-line">                      <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>;</td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code blob-code-inner js-file-line">        <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>).<span class="pl-en">append</span>($handlebar);</td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">Sortable</span>.<span class="pl-en">create</span>(<span class="pl-v">this</span>, {</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code blob-code-inner js-file-line">          handle<span class="pl-k">:</span> <span class="pl-s"><span class="pl-pds">&#39;</span>.item-draggable-handle<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code blob-code-inner js-file-line">    },</td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">itemDynamicList</span><span class="pl-k">:</span> <span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code blob-code-inner js-file-line">      <span class="pl-v">this</span>.<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $list <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-v">this</span>);</td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$list</span>.<span class="pl-en">children</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>label<span class="pl-pds">&#39;</span></span>).<span class="pl-en">each</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $deleteButton <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;delete-item&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$deleteButton</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>().<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code blob-code-inner js-file-line">          <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-en">append</span>($deleteButton);</td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code blob-code-inner js-file-line">        <span class="pl-k">var</span> $addButton <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item add-item&quot;&gt;Add one more...&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$list</span>.<span class="pl-en">append</span>($addButton);</td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code blob-code-inner js-file-line">        <span class="pl-smi">$addButton</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $inbox <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;item-input-wrapper&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code blob-code-inner js-file-line">                          <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;input class=&quot;item-input&quot; type=&quot;text&quot; name=&quot;focus-box&quot;&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code blob-code-inner js-file-line">                        <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code blob-code-inner js-file-line">                      <span class="pl-k">+</span> <span class="pl-s"><span class="pl-pds">&#39;</span>&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$inbox</span>.<span class="pl-c1">insertBefore</span>(<span class="pl-smi">$list</span>.<span class="pl-en">children</span>().<span class="pl-en">last</span>());</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">var</span> $input <span class="pl-k">=</span> <span class="pl-smi">$inbox</span>.<span class="pl-c1">find</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>input<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$input</span>.<span class="pl-c1">focus</span>();</td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$input</span>.<span class="pl-en">keypress</span>(<span class="pl-k">function</span>(<span class="pl-smi">e</span>) {</td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> key <span class="pl-k">=</span> <span class="pl-smi">e</span>.<span class="pl-smi">which</span>;</td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">if</span> (key <span class="pl-k">===</span> <span class="pl-c1">13</span>) {</td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">stopEditing</span>($input, $inbox);</td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code blob-code-inner js-file-line">            }</td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code blob-code-inner js-file-line">          <span class="pl-smi">$input</span>.<span class="pl-en">focusout</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code blob-code-inner js-file-line">            <span class="pl-en">stopEditing</span>($input, $inbox);</td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code blob-code-inner js-file-line">          });</td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code blob-code-inner js-file-line">          <span class="pl-k">function</span> <span class="pl-en">stopEditing</span>(<span class="pl-smi">input</span>, <span class="pl-smi">inbox</span>) {</td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> text <span class="pl-k">=</span> <span class="pl-smi">input</span>.<span class="pl-en">val</span>();</td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">inbox</span>.<span class="pl-c1">text</span>(text);</td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code blob-code-inner js-file-line">            <span class="pl-k">var</span> deletebutton <span class="pl-k">=</span> <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>&lt;div class=&quot;delete-item&quot;&gt;&lt;/div&gt;<span class="pl-pds">&#39;</span></span>);</td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">deletebutton</span>.<span class="pl-c1">click</span>(<span class="pl-k">function</span>(){</td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code blob-code-inner js-file-line">              <span class="pl-en">$</span>(<span class="pl-v">this</span>).<span class="pl-c1">parent</span>().<span class="pl-en">remove</span>();</td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code blob-code-inner js-file-line">            });</td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code blob-code-inner js-file-line">            <span class="pl-smi">inbox</span>.<span class="pl-en">append</span>(deletebutton);</td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code blob-code-inner js-file-line">          }</td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code blob-code-inner js-file-line">        });</td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code blob-code-inner js-file-line">      });</td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code blob-code-inner js-file-line">    }</td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code blob-code-inner js-file-line">
</td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code blob-code-inner js-file-line">  <span class="pl-en">$</span>(<span class="pl-k">function</span>() {</td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-toggle<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemToggle</span>();</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-checkbox<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemCheckbox</span>();</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-select<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemSelect</span>();</td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-date<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemDate</span>();</td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-time<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemTime</span>();</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-radio<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemRadio</span>();</td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-color-normal<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemColor</span>({sunny<span class="pl-k">:</span> <span class="pl-c1">false</span>});</td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-color-sunny<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemColor</span>({sunny<span class="pl-k">:</span> <span class="pl-c1">true</span>});</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.tab-button<span class="pl-pds">&#39;</span></span>).<span class="pl-en">tab</span>();</td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-slider<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemSlider</span>();</td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-draggable-list<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemDraggableList</span>();</td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code blob-code-inner js-file-line">    <span class="pl-en">$</span>(<span class="pl-s"><span class="pl-pds">&#39;</span>.item-dynamic-list<span class="pl-pds">&#39;</span></span>).<span class="pl-en">itemDynamicList</span>();</td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code blob-code-inner js-file-line">  });</td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code blob-code-inner js-file-line">}(Zepto, Sortable));</td>
      </tr>
</table>

  </div>

</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <!-- </textarea> --><!-- '"` --><form accept-charset="UTF-8" action="" class="js-jump-to-line-form" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" aria-label="Jump to line" autofocus>
    <button type="submit" class="btn">Go</button>
</form></div>

  </div>
  <div class="modal-backdrop"></div>
</div>

    </div>
  </div>

    </div>

        <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
        <li><a href="https://status.github.com/" data-ga-click="Footer, go to status, text:status">Status</a></li>
      <li><a href="https://developer.github.com" data-ga-click="Footer, go to api, text:api">API</a></li>
      <li><a href="https://training.github.com" data-ga-click="Footer, go to training, text:training">Training</a></li>
      <li><a href="https://shop.github.com" data-ga-click="Footer, go to shop, text:shop">Shop</a></li>
        <li><a href="https://github.com/blog" data-ga-click="Footer, go to blog, text:blog">Blog</a></li>
        <li><a href="https://github.com/about" data-ga-click="Footer, go to about, text:about">About</a></li>
        <li><a href="https://github.com/pricing" data-ga-click="Footer, go to pricing, text:pricing">Pricing</a></li>

    </ul>

    <a href="https://github.com" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github " title="GitHub "></span>
</a>
    <ul class="site-footer-links">
      <li>&copy; 2015 <span title="0.04394s from github-fe140-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="https://github.com/site/terms" data-ga-click="Footer, go to terms, text:terms">Terms</a></li>
        <li><a href="https://github.com/site/privacy" data-ga-click="Footer, go to privacy, text:privacy">Privacy</a></li>
        <li><a href="https://github.com/security" data-ga-click="Footer, go to security, text:security">Security</a></li>
        <li><a href="https://github.com/contact" data-ga-click="Footer, go to contact, text:contact">Contact</a></li>
        <li><a href="https://help.github.com" data-ga-click="Footer, go to help, text:help">Help</a></li>
    </ul>
  </div>
</div>



    
    
    

    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <button type="button" class="flash-close js-flash-close js-ajax-error-dismiss" aria-label="Dismiss error">
        <span class="octicon octicon-x"></span>
      </button>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" integrity="sha256-7460qJ7p88i3YTMH/liaj1cFgX987ie+xRzl6WMjSr8=" src="https://assets-cdn.github.com/assets/frameworks-ef8eb4a89ee9f3c8b7613307fe589a8f5705817f7cee27bec51ce5e963234abf.js"></script>
      <script async="async" crossorigin="anonymous" integrity="sha256-S2uOfRHrt7zoUSbTtBMMgAQfKubV1u+JAajAw/fLgNI=" src="https://assets-cdn.github.com/assets/github-4b6b8e7d11ebb7bce85126d3b4130c80041f2ae6d5d6ef8901a8c0c3f7cb80d2.js"></script>
      
      
      
    <div class="js-stale-session-flash stale-session-flash flash flash-warn flash-banner hidden">
      <span class="octicon octicon-alert"></span>
      <span class="signed-in-tab-flash">You signed in with another tab or window. <a href="">Reload</a> to refresh your session.</span>
      <span class="signed-out-tab-flash">You signed out in another tab or window. <a href="">Reload</a> to refresh your session.</span>
    </div>
  </body>
</html>

