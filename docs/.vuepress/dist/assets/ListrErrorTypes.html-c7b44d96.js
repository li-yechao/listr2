import{_ as e,W as r,X as a,a5 as i}from"./framework-4c9bc095.js";const t={},d=i('<h1 id="enumeration-listrerrortypes" tabindex="-1"><a class="header-anchor" href="#enumeration-listrerrortypes" aria-hidden="true">#</a> Enumeration: ListrErrorTypes</h1><p>The actual error type that is collected and to help identify where the error is triggered from.</p><h2 id="enumeration-members" tabindex="-1"><a class="header-anchor" href="#enumeration-members" aria-hidden="true">#</a> Enumeration Members</h2><h3 id="will-retry" tabindex="-1"><a class="header-anchor" href="#will-retry" aria-hidden="true">#</a> WILL_RETRY</h3><p>• <strong>WILL_RETRY</strong> = <code>&quot;WILL_RETRY&quot;</code></p><p>Task has failed and will try to retry.</p><h4 id="defined-in" tabindex="-1"><a class="header-anchor" href="#defined-in" aria-hidden="true">#</a> Defined in</h4><p>src/interfaces/listr-error.interface.ts:33</p><hr><h3 id="will-rollback" tabindex="-1"><a class="header-anchor" href="#will-rollback" aria-hidden="true">#</a> WILL_ROLLBACK</h3><p>• <strong>WILL_ROLLBACK</strong> = <code>&quot;WILL_ROLLBACK&quot;</code></p><p>Task has failed and will try to rollback.</p><h4 id="defined-in-1" tabindex="-1"><a class="header-anchor" href="#defined-in-1" aria-hidden="true">#</a> Defined in</h4><p>src/interfaces/listr-error.interface.ts:35</p><hr><h3 id="has-failed-to-rollback" tabindex="-1"><a class="header-anchor" href="#has-failed-to-rollback" aria-hidden="true">#</a> HAS_FAILED_TO_ROLLBACK</h3><p>• <strong>HAS_FAILED_TO_ROLLBACK</strong> = <code>&quot;HAS_FAILED_TO_ROLLBACK&quot;</code></p><p>Task has failed, ran the rollback action but the rollback action itself has failed.</p><h4 id="defined-in-2" tabindex="-1"><a class="header-anchor" href="#defined-in-2" aria-hidden="true">#</a> Defined in</h4><p>src/interfaces/listr-error.interface.ts:37</p><hr><h3 id="has-failed" tabindex="-1"><a class="header-anchor" href="#has-failed" aria-hidden="true">#</a> HAS_FAILED</h3><p>• <strong>HAS_FAILED</strong> = <code>&quot;HAS_FAILED&quot;</code></p><p>Task has failed.</p><h4 id="defined-in-3" tabindex="-1"><a class="header-anchor" href="#defined-in-3" aria-hidden="true">#</a> Defined in</h4><p>src/interfaces/listr-error.interface.ts:39</p><hr><h3 id="has-failed-without-error" tabindex="-1"><a class="header-anchor" href="#has-failed-without-error" aria-hidden="true">#</a> HAS_FAILED_WITHOUT_ERROR</h3><p>• <strong>HAS_FAILED_WITHOUT_ERROR</strong> = <code>&quot;HAS_FAILED_WITHOUT_ERROR&quot;</code></p><p>Task has failed, but exitOnError is set to false, so will ignore this error.</p><h4 id="defined-in-4" tabindex="-1"><a class="header-anchor" href="#defined-in-4" aria-hidden="true">#</a> Defined in</h4><p>src/interfaces/listr-error.interface.ts:41</p>',32),n=[d];function s(h,o){return r(),a("div",null,n)}const l=e(t,[["render",s],["__file","ListrErrorTypes.html.vue"]]);export{l as default};
