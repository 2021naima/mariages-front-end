
import React, { useState, useEffect } from 'react';



export default function Landing() {
      return (
        
       
                <div>
                  <div id="app-apps-download-banner" className="branch-banner-placeholder branchBannerPlaceholder" />
                  <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
                  <header className="layoutHeader">
                    <span className="layoutHeader__hamburger app-header-menu-toggle">
                      <i className="svgIcon svgIcon__list-menu "><svg viewBox="0 0 18 20"><path d="M14.17 15.42a.5.5 0 01.09.992l-.09.008H1a.5.5 0 01-.09-.992L1 15.42h13.17zm2.927-5.76a.5.5 0 01.09.991l-.09.008H1a.5.5 0 01-.09-.991L1 9.659h16.097zm0-5.66a.5.5 0 01.09.992l-.09.008H1a.5.5 0 01-.09-.992L1 4h16.097z" fillRule="nonzero" /></svg></i></span>
                    <a className="layoutHeader__logoAnchor app-analytics-event-click" href="https://www.mariages.net/">
                      <img src="https://www.mariages.net/assets/img/logos/gen_logoHeader.svg" alt="Mariage" width={204} height={37} />
                    </a>
                    <nav className="layoutHeader__nav app-header-nav">
                      <ul className="layoutNavMenu app-header-list">
                        <li className="layoutNavMenu__header">
                          <i className="svgIcon svgIcon__close layoutNavMenu__itemClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>      </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--my_wedding ">
                          <a href="https://www.mariages.net/wedding-planner" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="tools">
                            Mon&nbsp;mariage              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/wedding-planner">
                                  Mon mariage  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabMyWedding">
                                <div className="layoutNavMenuTabMyWeddingList">
                                  <a className="layoutNavMenuTabMyWedding__title" href="https://www.mariages.net/wedding-planner">
                                    Mon planificateur      </a>
                                  <ul className="layoutNavMenuTabMyWeddingList__content ">
                                    <li className="layoutNavMenuTabMyWeddingList__item layoutNavMenuTabMyWeddingList__item--viewAll">
                                      <a href="https://www.mariages.net/wedding-planner">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/retro-planning-mariage">
                                        <i className="svgIcon svgIcon__checklist layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 21 27"><path d="M13.78 3.375h2.47a.5.5 0 01.5.5v.965h3.062c.634 0 1.15.514 1.15 1.148v19.796c0 .635-.516 1.149-1.15 1.149H1.87c-.635 0-1.15-.514-1.15-1.149V5.988c0-.634.515-1.148 1.15-1.148h3.056v-.965a.5.5 0 01.5-.5h2.47a2.96 2.96 0 015.884 0zm-.971.428a.502.502 0 01-.01-.1c0-1.08-.878-1.957-1.96-1.957-1.083 0-1.96.876-1.96 1.957a.504.504 0 01-.005.072.502.502 0 01-.49.6H5.927v2.057h9.823V4.375h-2.447a.5.5 0 01-.494-.572zM16.75 5.84v1.092a.5.5 0 01-.5.5H5.427a.5.5 0 01-.5-.5V5.84H1.871a.149.149 0 00-.15.148v19.796c0 .082.067.149.15.149h17.94c.083 0 .15-.067.15-.149V5.988a.149.149 0 00-.15-.148h-3.06zm-6.425 7.373a.5.5 0 010-1h6.534a.5.5 0 110 1h-6.534zm0 8.518a.5.5 0 110-1h6.534a.5.5 0 110 1h-6.534zm0-4.259a.5.5 0 110-1h6.534a.5.5 0 110 1h-6.534zm-3.943.532a1.264 1.264 0 11-.001-2.527 1.264 1.264 0 010 2.527zm0 4.93a1.264 1.264 0 11-.001-2.528 1.264 1.264 0 010 2.528zM5.265 10.899l.876.879 2.234-2.232a.5.5 0 11.707.708l-2.588 2.585a.5.5 0 01-.707 0l-1.23-1.234a.5.5 0 01.708-.706z" fillRule="nonzero" /></svg></i>                        Tâches                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/liste-invites-mariage">
                                        <i className="svgIcon svgIcon__guests layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 55 36"><path d="M49.93 20.617a16.189 16.189 0 014.952 10.326c0 .189.008.676.033 2.008.024 1.349.032 1.837.032 2.049a.947.947 0 01-.947.947H1A.947.947 0 01.053 35c0-1.498.076-4.415.173-5.08.815-5.651 4.405-10.397 9.392-12.49a9.807 9.807 0 01-.749-.922 11.37 11.37 0 01-1.245-2.242 8.798 8.798 0 01-.369-1.027C5.111 6.106 8.811.053 14.975.053h1.13V.08c5.694.445 9.004 6.303 6.966 13.14-.063.225-.188.591-.385 1.053a11.558 11.558 0 01-1.26 2.238c-.234.323-.481.626-.741.908 2.583 1.067 4.795 2.844 6.448 5.093a15.198 15.198 0 011.938-2.13c.172-5.141.79-9.36 2.217-13.528C32.058 2.898 35.689.05 40 .05V.048c4.459 0 8.189 3.045 8.777 7.192l.017.104c.738 3.13 1.015 6 1.09 9.857.011.55.017 1 .029 1.974.007.686.012 1.077.018 1.442zm-1.914-1.555c-.01-.877-.016-1.307-.026-1.824a71.7 71.7 0 00-.107-2.855 11.458 11.458 0 01-1.321 2.195c-.306.4-.633.771-.981 1.109.857.387 1.671.848 2.435 1.375zM46.933 7.708a39.867 39.867 0 00-.23-.913 14.124 14.124 0 01-3.236 2.577c-3.37 1.93-6.946 2.04-10.254 1.075-.071-.02-.14-.041-.209-.062.082.792.253 1.579.512 2.351a9.582 9.582 0 001.428 2.69c1.264 1.657 2.915 2.627 5.056 2.627 2.14 0 3.792-.97 5.056-2.625a9.576 9.576 0 001.11-1.874c.17-.38.274-.667.329-.85.54-1.604.69-3.307.438-4.996zM33.846 5.35l.03.013c-.273.659-.522 1.316-.75 1.975-.013.069-.024.139-.034.208-.046.278-.081.556-.105.835.229.085.482.168.756.248 2.857.833 5.92.74 8.783-.9 1.19-.682 2.308-1.62 3.343-2.84C44.632 3.1 42.469 1.944 40 1.944v.002c-2.67 0-4.982 1.353-6.154 3.404zm-2.812 13.52a15.576 15.576 0 013.043-1.533c-.222-.24-.435-.493-.639-.76-.94-1.23-1.49-2.455-1.729-3.27-.02-.06-.04-.12-.058-.179-.308 1.806-.505 3.698-.617 5.742zm-9.508-11.88c-.894 1.056-1.85 1.916-2.86 2.588-3.257 2.167-6.731 2.252-9.942 1.104a13.654 13.654 0 01-.095-.034c.087.67.235 1.363.448 2.073a9.498 9.498 0 001.33 2.682c1.179 1.64 2.725 2.595 4.742 2.595h.009c1.997 0 3.544-.956 4.733-2.598a9.686 9.686 0 001.36-2.704c.627-2.106.679-4.059.275-5.706zm-.811-2.028c-1.101-1.87-2.982-3.014-5.313-3.014h-.427c-3.623 0-6.167 2.708-6.42 6.623.242.111.512.222.806.327 2.697.964 5.563.893 8.256-.898 1.096-.729 2.133-1.732 3.098-3.038zm-4.74 14.93l1.254 1.51c.224.27.28.64.148.965l-1.15 2.806.714 1.07c.071.107.12.228.143.355l.9 4.922a.947.947 0 01-.16.721l-1.294 1.813h11.882c-.023-1.508-.093-3.552-.162-4.016-.811-5.195-4.258-9.473-8.937-11.114a.947.947 0 01-.254-.135 7.053 7.053 0 01-2.963 1.049v.055h-.121zm-2.347-.146a7.031 7.031 0 01-2.36-.934.951.951 0 01-.178.084C6.343 20.548 2.863 24.913 2.1 30.193c-.063.431-.124 2.391-.146 3.86h10.89l-1.3-1.811a.947.947 0 01-.157-.743l1.013-4.923a.947.947 0 01.14-.334l.713-1.07-1.15-2.806a.947.947 0 01.148-.965l1.376-1.656zm16.68 14.308h22.731c-.004-.277-.01-.625-.019-1.063-.025-1.369-.033-1.84-.027-1.948-.024-.225-.05-.448-.08-.663-.732-5.247-4.255-9.625-9.113-11.37-1.11.605-2.375.938-3.8.938-1.608 0-3.012-.425-4.22-1.186l-.437.14a13.506 13.506 0 00-7.083 5.295l-.025.036a16.658 16.658 0 011.888 5.52c.087.581.16 2.715.185 4.3zM14.74 23.803l.668-1.629-.668-.803-.667.803.667 1.63zm-.52 3.336l-.893 4.336 1.36 1.897 1.362-1.906-.793-4.336-.516-.773-.52.782z" fillRule="nonzero" /></svg></i>                        Invités                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/plan-tables-mariage">
                                        <i className="svgIcon svgIcon__tables layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 54 56"><path d="M6.287 17.12a3.683 3.683 0 01-.017-.017l-5.12-5.12a3.635 3.635 0 010-5.138l5.12-5.12a3.633 3.633 0 015.14 0l5.12 5.12c.031.03.06.062.09.093a23.365 23.365 0 0120.796.018c.035-.038.07-.075.107-.111l5.118-5.12a3.634 3.634 0 015.14 0l5.12 5.12a3.635 3.635 0 010 5.138l-5.12 5.12a3.669 3.669 0 01-.05.05 23.36 23.36 0 01-.125 21.545c.057.063.14.154.175.19l5.12 5.118a3.634 3.634 0 010 5.138l-5.12 5.12a3.636 3.636 0 01-5.14 0l-5.117-5.118a3.63 3.63 0 01-.33-.379 23.366 23.366 0 01-20.35.018 3.655 3.655 0 01-.315.36l-5.12 5.12a3.635 3.635 0 01-5.139 0l-5.119-5.12a3.633 3.633 0 010-5.139l5.12-5.119c.048-.048.098-.095.148-.14a23.356 23.356 0 01-.132-21.628zm8.516-9.174L9.995 3.14a1.633 1.633 0 00-2.31 0l-5.12 5.12a1.635 1.635 0 000 2.31l4.754 4.753a23.385 23.385 0 013.205-3.994 23.362 23.362 0 014.28-3.383zm31.898 7.408l4.785-4.785a1.635 1.635 0 000-2.31l-5.12-5.12a1.634 1.634 0 00-2.311 0L39.23 7.967a23.364 23.364 0 014.247 3.363 23.382 23.382 0 013.224 4.025zM7.467 40.52l-4.902 4.902a1.633 1.633 0 000 2.31l5.12 5.119a1.634 1.634 0 002.31 0l5.042-5.041a23.348 23.348 0 01-4.513-3.526 23.4 23.4 0 01-3.057-3.764zm31.529 7.27l5.059 5.061a1.635 1.635 0 002.312 0l5.119-5.12a1.634 1.634 0 000-2.31l-4.933-4.931a23.397 23.397 0 01-3.076 3.794 23.35 23.35 0 01-4.481 3.507zM11.938 12.745c-8.32 8.319-8.32 21.806 0 30.125 8.318 8.318 21.806 8.318 30.124 0 8.318-8.319 8.318-21.806 0-30.125-8.318-8.318-21.806-8.318-30.124 0z" fillRule="nonzero" /></svg></i>                        Tables                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/budget-mariage">
                                        <i className="svgIcon svgIcon__budget layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 24 24"><path d="M6.957 18.25l1.397 1.396a.5.5 0 01-.708.708L6.25 18.957l-1.396 1.397a.5.5 0 01-.708-.708l1.397-1.396-1.397-1.396a.5.5 0 01.708-.708l1.396 1.397 1.396-1.397a.5.5 0 01.708.708L6.957 18.25zM6.5 6h2a.5.5 0 110 1h-2v2a.5.5 0 11-1 0V7h-2a.5.5 0 010-1h2V4a.5.5 0 011 0v2zm6-5v11H23V2.172C23 1.525 22.475 1 21.828 1H12.5zm-1 0H2.172C1.525 1 1 1.525 1 2.172V12h10.5V1zm1 22h9.328c.647 0 1.172-.525 1.172-1.172V13H12.5v10zm-1 0V13H1v8.828C1 22.475 1.525 23 2.172 23H11.5zM2.172 0h19.656C23.028 0 24 .972 24 2.172v19.656c0 1.2-.972 2.172-2.172 2.172H2.172C.972 24 0 23.028 0 21.828V2.172C0 .972.972 0 2.172 0zM15.5 7a.5.5 0 110-1h5a.5.5 0 110 1h-5zm0 10a.5.5 0 110-1h5a.5.5 0 110 1h-5zm0 3a.5.5 0 110-1h5a.5.5 0 110 1h-5z" fillRule="nonzero" /></svg></i>                        Budget                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/mes-prestataires-mariage">
                                        <i className="svgIcon svgIcon__vendors layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 26 26"><path d="M21.589 16.913V3.087a1.243 1.243 0 00-1.243-1.243H3.796v22.312h16.55a1.243 1.243 0 001.243-1.243v-6zm1-.5H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.19a2.243 2.243 0 01-2.243 2.243H2.743A2.243 2.243 0 01.5 22.913V3.087A2.243 2.243 0 012.743.844h17.603a2.243 2.243 0 012.243 2.243v.392H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.16H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.154zm0 1v3.31H24.5v-3.31h-1.911zm0-3.155H24.5v-3.31h-1.911v3.31zm0-9.779v3.31H24.5v-3.31h-1.911zM2.796 24.156V1.844h-.053c-.687 0-1.243.557-1.243 1.243v19.826a1.243 1.243 0 001.243 1.243h.053zM7.476 6.89a.5.5 0 01.5-.5h9.182a.5.5 0 01.5.5v4.482a.5.5 0 01-.5.5H7.976a.5.5 0 01-.5-.5V6.89zm1 3.982h8.182V7.39H8.476v3.482z" fillRule="nonzero" /></svg></i>                        Prestataires                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/mes-robes-mariee">
                                        <i className="svgIcon svgIcon__dresses layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 44 51"><path d="M32.581 9.03l-4.377 11.382c.467.33.982.723 1.533 1.178a32.947 32.947 0 014.802 4.908c3.656 4.6 6.109 10.095 6.797 16.5.193 1.794.41 2.785.843 4.128-.023-.073.286.874.376 1.164.154.492.286.955.415 1.465L43.284 51H.715l.303-1.238c.119-.484.242-.929.385-1.405.056-.183.111-.363.184-.594.09-.28.136-.43.175-.552.444-1.42.663-2.425.853-4.213.689-6.407 3.149-11.904 6.816-16.504a32.979 32.979 0 014.814-4.906c.553-.455 1.07-.847 1.538-1.178L11.24 8.533l-2.599-6.12L14.01.753l1.712 5.248.133-.001c2.266 0 4.669 1.377 6.116 3.499 1.377-2.164 3.615-3.437 6.199-3.469l.103.001L30.014.758l5.412 1.653-2.845 6.62zm-1.964-.465l-.813-.318a9.433 9.433 0 00-.287-.104 8.51 8.51 0 00-1.339-.113c-2.41.03-4.393 1.522-5.234 4.062l-.953 2.88-.946-2.882c-.736-2.241-2.88-3.89-4.832-4.073h-.846a8.145 8.145 0 00-.756.087c-.11.035-.241.082-.398.141l-.818.325 4.84 12.65-.714.432c-.088.054-.269.171-.53.353-.442.31-.939.686-1.475 1.127a30.99 30.99 0 00-4.521 4.608c-3.442 4.318-5.746 9.465-6.39 15.47-.206 1.926-.453 3.059-.935 4.598l-.175.557-.177.57c-.004.014 12.45.036 37.364.065-.122-.389-.426-1.323-.407-1.26-.473-1.47-.72-2.593-.928-4.528-.645-6.006-2.942-11.152-6.373-15.47a30.958 30.958 0 00-4.51-4.61 23.891 23.891 0 00-1.472-1.127c-.26-.182-.44-.3-.527-.353l-.713-.435 4.865-12.652zM13.502 6.376l.211-.078-.995-3.052-1.37.424 1.294 3.047c.41-.163.8-.318.86-.34zm19.205-2.704l-1.407-.43-1.009 3.053c.07.025.142.051.217.08.062.023.466.182.888.347l1.311-3.05z" fillRule="nonzero" /></svg></i>                        Robes                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/website/index.php?actionReferrer=8">
                                        <i className="svgIcon svgIcon__website layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 63 50"><path d="M62.194 16.79V43.4c0 3.52-2.838 6.38-6.35 6.388H6.572c-3.514 0-6.36-2.862-6.36-6.388V16.79c0-.058.003-.115.011-.17V7C.24 3.49 3.068.648 6.572.63H55.85c3.497.017 6.326 2.86 6.343 6.37v9.79zm-2.388-1.193V7.009c-.012-2.201-1.782-3.98-3.961-3.99H6.577c-2.185.01-3.956 1.79-3.967 3.987v8.59h57.196zM2.598 17.985V43.4c0 2.21 1.78 4 3.973 4h49.271c2.19-.005 3.964-1.793 3.964-4V17.985H2.598zm51.447-6.856a1.964 1.964 0 01-1.96-1.969c0-1.088.878-1.97 1.96-1.97 1.082 0 1.96.882 1.96 1.97s-.878 1.97-1.96 1.97zm-6.404 0a1.964 1.964 0 01-1.96-1.969c0-1.088.878-1.97 1.96-1.97 1.082 0 1.959.882 1.959 1.97s-.877 1.97-1.96 1.97zm-6.417 0a1.964 1.964 0 01-1.959-1.969c0-1.088.877-1.97 1.96-1.97 1.082 0 1.959.882 1.959 1.97s-.877 1.97-1.96 1.97zm-18 16.726c.02.131.02.264 0 .394l-2.632 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.139-.778l-1.396-4.062-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.311c-.02-.13-.02-.263 0-.394a1.23 1.23 0 01.808-1.145c.135-.042.276-.063.417-.061.503.008.95.326 1.126.8l1.408 4.025 1.274-4.025c.172-.479.62-.802 1.126-.812h.098c.498.02.934.341 1.102.812l1.409 4.025 1.408-4.025a1.225 1.225 0 011.126-.8c.141 0 .282.02.417.061.499.164.839.63.844 1.157zm14.29 0c.02.131.02.264 0 .394l-2.559 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.138-.778l-1.409-4.05-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.31c-.019-.131-.019-.264 0-.395a1.23 1.23 0 01.808-1.144c.135-.043.276-.064.417-.062.503.009.95.326 1.126.8l1.408 4.025 1.396-4.025c.17-.475.613-.797 1.115-.812h.085c.498.02.934.341 1.102.812l1.409 4.025 1.408-4.025a1.225 1.225 0 011.126-.8c.141 0 .282.02.417.062.432.213.7.66.685 1.144zm14.302 0c.02.131.02.264 0 .394l-2.559 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.138-.778l-1.409-4.05-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.31c-.019-.131-.019-.264 0-.395a1.23 1.23 0 01.808-1.144c.135-.043.276-.064.417-.062.503.009.95.326 1.126.8l1.408 4.025 1.396-4.025c.173-.479.62-.802 1.127-.812h.086c.497.02.933.341 1.102.812l1.408 4.025 1.408-4.025a1.225 1.225 0 011.127-.8c.14 0 .28.02.416.062.428.216.69.663.673 1.144z" fillRule="nonzero" /></svg></i>                        Site de mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabMyWeddingList__item">
                                      <a href="https://www.mariages.net/tirageausort">
                                        <i className="svgIcon svgIcon__contest layoutNavMenuTabMyWeddingList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M4.03 4a.5.5 0 01.5-.5h22.94a.5.5 0 01.5.5A3.03 3.03 0 0031 7.03a.5.5 0 01.5.5v15.293a.5.5 0 01-.5.5 3.03 3.03 0 00-3.03 3.03.5.5 0 01-.5.5H4.53a.5.5 0 01-.5-.5A3.03 3.03 0 001 23.323a.5.5 0 01-.5-.5V7.53a.5.5 0 01.5-.5A3.03 3.03 0 004.03 4zm.969.5A4.031 4.031 0 011.5 7.999v14.355a4.031 4.031 0 013.499 3.499H27a4.032 4.032 0 013.499-3.499V8A4.031 4.031 0 0127.001 4.5H5z" /><path fillRule="evenodd" clipRule="evenodd" d="M15.857 13.167c-.407-.451-.968-.743-1.621-.65-1.017.143-1.736 1.04-1.736 2.124 0 .324.086.642.227.946.266.575.745 1.14 1.333 1.68a12.049 12.049 0 001.432 1.125.67.67 0 00.73 0l.13-.088a12.049 12.049 0 001.302-1.036c.588-.54 1.067-1.106 1.334-1.681.14-.304.226-.622.226-.946 0-1.085-.719-1.98-1.735-2.124-.654-.093-1.215.199-1.622.65zm-.454 1.113c-.272-.59-.69-.821-1.027-.773-.47.066-.876.492-.876 1.134 0 .146.039.32.134.525.187.404.558.865 1.103 1.366a11.092 11.092 0 001.12.898 11.746 11.746 0 001.12-.898c.546-.501.916-.962 1.103-1.366.096-.205.134-.379.134-.525 0-.642-.405-1.068-.875-1.134-.337-.048-.756.184-1.028.773a.5.5 0 01-.908 0z" /><path fillRule="evenodd" clipRule="evenodd" d="M4.5 10.478a3.5 3.5 0 013.5-3.5h16a3.5 3.5 0 013.5 3.5v10a3.5 3.5 0 01-3.5 3.5H8a3.5 3.5 0 01-3.5-3.5v-10zm3.5-2.5a2.5 2.5 0 00-2.5 2.5v10a2.5 2.5 0 002.5 2.5h16a2.5 2.5 0 002.5-2.5v-10a2.5 2.5 0 00-2.5-2.5H8z" /><path fillRule="evenodd" clipRule="evenodd" d="M7.47 7.03a.5.5 0 01.5.5v15.293a.5.5 0 11-1 0V7.53a.5.5 0 01.5-.5zM24.53 7.03a.5.5 0 01.5.5v15.293a.5.5 0 11-1 0V7.53a.5.5 0 01.5-.5z" /></svg></i>                         Tirage au sort                  </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabMyWeddingBanners">
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/app-mariage">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Téléchargez l'application</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Organisez votre mariage où et quand vous voulez</span>
                                    </div>
                                    <img data-src="https://www.mariages.net/assets/img/logos/square-icon.svg" className="lazyload layoutNavMenuBannerBox__icon" alt="Icône de l'application" width={60} height={60} />
                                  </div>
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/album-mariage-wedshoots">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <a className="layoutNavMenuBannerBox__title" href="https://www.mariages.net/album-mariage-wedshoots">Wedshoots</a>
                                      <span className="layoutNavMenuBannerBox__subtitle">Toutes les photos prises par vos invités dans un album</span>
                                    </div>
                                    <img data-src="https://www.mariages.net/assets/img/wedshoots/ico_wedshoots.svg" className="lazyload layoutNavMenuBannerBox__icon" alt="Icône de Wedshoots" width={60} height={60} />
                                  </div>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--venues ">
                          <a href="https://www.mariages.net/reception" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="venues">
                            Réception              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/reception">
                                  Réception  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabVenues">
                                <div className="layoutNavMenuTabVenues__categories">
                                  <div className="layoutNavMenuTabVenuesList">
                                    <a className="layoutNavMenuTabVenues__title" href="https://www.mariages.net/reception">
                                      Réception          </a>
                                    <ul className="layoutNavMenuTabVenuesList__content">
                                      <li className="layoutNavMenuTabVenuesList__item layoutNavMenuTabVenuesList__item--viewAll">
                                        <a href="https://www.mariages.net/reception">Voir plus </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/domaine-mariage">
                                          Domaine mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/auberge-mariage">
                                          Auberge mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/hotel-mariage">
                                          Hôtel mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/restaurant-mariage">
                                          Restaurant mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/traiteur-mariage">
                                          Traiteur mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/salle-mariage">
                                          Salle mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/chateau-mariage">
                                          Château mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/mariages-a-la-plage">
                                          Mariages à la plage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item">
                                        <a href="https://www.mariages.net/bateau-mariage">
                                          Bateau mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVenuesList__item layoutNavMenuTabVenuesList__item--highlight">
                                        <a href="https://www.mariages.net/promotions/reception">
                                          Promotions                      </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="layoutNavMenuTabVenuesBanners">
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/destination-wedding">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Destination Weddings</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Mariez-vous dans le pays de vos rêves.</span>
                                    </div>
                                    <img className="svgIcon svgIcon__plane_destination layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/plane_destination.svg" aria-hidden alt="illustration plane destination" width={56} height={56}  />  </div>
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/tirageausort">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Gagnez 4.000€</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Participez à la 101ème édition du tirage au sort de Mariages.net</span>
                                    </div>
                                    <img className="svgIcon svgIcon__stars layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/stars.svg" aria-hidden alt="illustration stars" width={56} height={56}  />  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--vendors ">
                          <a href="https://www.mariages.net/prestataires" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="vendors">
                            Prestataires              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/prestataires">
                                  Prestataires  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabVendors">
                                <div className="layoutNavMenuTabVendors__content">
                                  <div className="layoutNavMenuTabVendorsList">
                                    <a className="layoutNavMenuTabVendors__title" href="https://www.mariages.net/prestataires">
                                      Commencez à rechercher vos prestataires          </a>
                                    <ul className="layoutNavMenuTabVendorsList__content">
                                      <li className="layoutNavMenuTabVendorsList__item layoutNavMenuTabVendorsList__item--viewAll">
                                        <a href="https://www.mariages.net/prestataires">Voir plus </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categPhoto layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M4.619 5.832c0-.697.568-1.265 1.265-1.265h3.595c.697 0 1.265.568 1.265 1.265v.915h18.738c.774 0 1.38.606 1.38 1.38V25.91c0 .774-.606 1.38-1.38 1.38H2.518c-.774 0-1.38-.606-1.38-1.38V8.128c0-.774.606-1.38 1.38-1.38h2.1v-.915zm1 .915h4.125v-.915a.267.267 0 00-.265-.265H5.884a.267.267 0 00-.265.265v.915zm-3.48 8.037v11.127c0 .222.158.38.379.38h26.964c.221 0 .38-.158.38-.38V14.784h-6.728a7.461 7.461 0 11-14.23 0H2.138zm7.164-1H2.138V8.127c0-.222.159-.38.38-.38h26.964c.221 0 .38.158.38.38v5.657h-7.127a7.461 7.461 0 00-6.716-4.207 7.462 7.462 0 00-6.716 4.207zm12.618.62a6.462 6.462 0 00-12.363 2.634 6.461 6.461 0 1012.428-2.483.495.495 0 01-.065-.15zm1.362-4.824a.5.5 0 01.5-.5h3.94a.5.5 0 01.5.5v2.256a.5.5 0 01-.5.5h-3.94a.5.5 0 01-.5-.5V9.58zm1 .5v1.256h2.94V10.08h-2.94zm-8.264 4.016a2.942 2.942 0 100 5.885 2.942 2.942 0 000-5.885zm-3.942 2.942a3.942 3.942 0 117.884 0 3.942 3.942 0 01-7.884 0z" /></svg></i>                        <a href="https://www.mariages.net/photo-mariage">
                                          Photo mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categVideo layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M6.266 3.357C3.715 3.357 1.643 5.434 1.643 8s2.072 4.643 4.623 4.643S10.889 10.565 10.889 8c0-2.566-2.072-4.643-4.623-4.643zM.643 8c0-3.114 2.516-5.643 5.623-5.643S11.889 4.886 11.889 8s-2.516 5.643-5.623 5.643S.643 11.114.643 8zm16.894-.529a2.58 2.58 0 00-2.574 2.586 2.58 2.58 0 002.574 2.586 2.58 2.58 0 002.574-2.586 2.58 2.58 0 00-2.574-2.586zm-3.574 2.586a3.58 3.58 0 013.574-3.586 3.58 3.58 0 013.574 3.586 3.58 3.58 0 01-3.574 3.586 3.58 3.58 0 01-3.574-3.586zM3.193 15.7a.53.53 0 00-.526.529v11.314a.53.53 0 00.525.528h18.444a.53.53 0 00.524-.528v-3.686-3.52-4.108a.53.53 0 00-.524-.529H3.192zm19.967 3.875v-3.346a1.53 1.53 0 00-1.524-1.529H3.192a1.53 1.53 0 00-1.525 1.529v11.314c0 .84.684 1.528 1.525 1.528h18.444a1.53 1.53 0 001.524-1.528v-2.947l6.558 2.744c.376.157.796.16 1.139-.068.342-.229.5-.618.5-1.026v-8.318c0-.408-.158-.797-.5-1.026-.342-.229-.762-.226-1.138-.069l-6.559 2.742zm0 1.084v2.854l6.944 2.904c.143.06.196.024.197.023.001 0 .056-.036.056-.194v-8.318c0-.158-.054-.194-.056-.195-.002 0-.054-.037-.197.023l-6.944 2.902zM5.81 19.314a.5.5 0 01.5-.5h12.92a.5.5 0 110 1H6.31a.5.5 0 01-.5-.5z" /></svg></i>                        <a href="https://www.mariages.net/video-mariage">
                                          Vidéo mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categMusic layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M6.952 23.173a3.5 3.5 0 00-.008 7 3.641 3.641 0 003.508-3.508v-3.492h-3.5zm-4.5 3.5a4.5 4.5 0 014.5-4.5h4a.5.5 0 01.5.5v4.017a4.641 4.641 0 01-4.483 4.483h-.017a4.5 4.5 0 01-4.5-4.5zM21.619 17.84a3.5 3.5 0 00-.008 7 3.641 3.641 0 003.508-3.509V17.84h-3.5zm-4.5 3.5a4.5 4.5 0 014.5-4.5h4a.5.5 0 01.5.5v4.017a4.641 4.641 0 01-4.483 4.483h-.017a4.5 4.5 0 01-4.5-4.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M24.752 1.969a.833.833 0 00-.782-.081l-12 4.91a.834.834 0 00-.518.771v15.104a.5.5 0 11-1 0V7.57c0-.745.45-1.416 1.139-1.698l12-4.91a1.833 1.833 0 012.528 1.706v.001l-.5-.002h.5v14.68a.5.5 0 01-1 0V2.664a.833.833 0 00-.367-.695z" /><path fillRule="evenodd" clipRule="evenodd" d="M26.082 5.15a.5.5 0 01-.274.653l-14.666 6a.5.5 0 01-.379-.926l14.667-6a.5.5 0 01.652.274z" /></svg></i>                        <a href="https://www.mariages.net/musique-mariage">
                                          Musique mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categRental layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M3.993 11.653c3.087-3.47 7.37-5.296 12.35-5.296h4.72c1.116 0 2.022.907 2.022 2.022 0 .05-.009.458-.244.886a1.818 1.818 0 01-.98.837l1.423 2.848h5.509A3.21 3.21 0 0132 16.157v4.125a3.21 3.21 0 01-3.207 3.207h-1.32v-.049a3.5 3.5 0 01-6.94.05h-8.067a3.5 3.5 0 01-6.932 0H2.367A2.437 2.437 0 01.05 20.565l.002-.009.065-.308.063-.288v-.003l.001-.002c.39-1.816 1.138-5.3 3.812-8.303zM5.537 22.49a3.5 3.5 0 016.926 0h8.074a3.5 3.5 0 016.936.07v-.07h1.32A2.21 2.21 0 0031 20.282v-4.125a2.21 2.21 0 00-2.207-2.207h-10.37V9.248h2.64a.836.836 0 00.073-.004c.518-.044.727-.275.829-.46.105-.193.118-.383.12-.405 0-.003 0-.003 0 0 0-.563-.46-1.022-1.023-1.022h-4.719c-4.721 0-8.722 1.722-11.603 4.961-2.487 2.793-3.194 6.046-3.582 7.853v.003l-.064.288-.063.297a1.437 1.437 0 001.355 1.73h3.151zm16.629-9.54l-1.35-2.7h-1.393v2.7h2.743zM16 9.442V14H5.9l.723-.829c2.036-2.333 4.869-3.227 8.822-3.668L16 9.441zM8.215 13H15v-2.437c-3.014.382-5.167 1.062-6.785 2.437zm-4.463 7.384a5.85 5.85 0 0110.491 0 .5.5 0 11-.896.444 4.85 4.85 0 00-8.699 0 .5.5 0 11-.896-.444zM9 20.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm15 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" /></svg></i>                        <a href="https://www.mariages.net/voiture-mariage">
                                          Voiture mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categTransport layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M7.721 24.652a.5.5 0 01.5-.5H20.26a.5.5 0 010 1H8.22a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M.5 9.522A3.022 3.022 0 013.522 6.5h19.246a5.062 5.062 0 014.527 2.798l2.589 5.177a5.84 5.84 0 01.616 2.612v6.304a1.76 1.76 0 01-1.76 1.761h-4.13a.5.5 0 110-1h4.13c.42 0 .76-.34.76-.76v-6.305a4.84 4.84 0 00-.51-2.165L26.4 9.745l.432-.216-.431.216A4.062 4.062 0 0022.768 7.5H3.522A2.022 2.022 0 001.5 9.522v13.87c0 .42.34.76.76.76h1.608a.5.5 0 110 1H2.261A1.76 1.76 0 01.5 23.392V9.521z" /><path fillRule="evenodd" clipRule="evenodd" d="M22.435 21.37a2.022 2.022 0 100 4.043 2.022 2.022 0 000-4.043zm-3.022 2.021a3.022 3.022 0 116.044 0 3.022 3.022 0 01-6.044 0zM6.043 21.37a2.022 2.022 0 100 4.043 2.022 2.022 0 000-4.043zM3.022 23.39a3.022 3.022 0 116.043 0 3.022 3.022 0 01-6.043 0zM.5 9.522a.5.5 0 01.5-.5h25.848a.5.5 0 110 1H1a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M.5 17.087a.5.5 0 01.5-.5h21.435a7.213 7.213 0 014.742 1.784l3.152 2.752a.5.5 0 11-.658.754l-3.152-2.753a6.213 6.213 0 00-4.084-1.537H1a.5.5 0 01-.5-.5zM8.565 9.022a.5.5 0 01.5.5v3.782c0 .42.34.761.761.761H29.37a.5.5 0 110 1H9.826a1.76 1.76 0 01-1.76-1.76V9.521a.5.5 0 01.5-.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M14.87 9.022a.5.5 0 01.5.5v5.043a.5.5 0 11-1 0V9.522a.5.5 0 01.5-.5zM22.435 9.022a.5.5 0 01.5.5v5.043a.5.5 0 01-1 0V9.522a.5.5 0 01.5-.5z" /></svg></i>                        <a href="https://www.mariages.net/bus-mariage">
                                          Bus mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categFlower layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M16.077.776a.5.5 0 01.678 0 15.546 15.546 0 013.052 3.886 8.846 8.846 0 014.997-1.543.5.5 0 01.5.5v6.423c-.052 4.72-3.771 8.587-8.439 8.822v6.802a9.827 9.827 0 011.62-2.134c2.026-2.077 4.742-3.034 7.4-2.928a.5.5 0 01.48.48c.107 2.664-.905 5.372-2.815 7.388a10.084 10.084 0 01-6.87 2.885h-.517c-2.505 0-4.956-.96-6.87-2.873-2.078-2.025-3.034-4.742-2.928-7.4a.5.5 0 01.49-.48c2.65-.053 5.363.901 7.387 2.926a9.544 9.544 0 011.623 2.169v-6.84c-4.62-.286-8.286-4.132-8.338-8.817V3.62a.5.5 0 01.5-.5c1.859 0 3.58.565 5.004 1.532A15.547 15.547 0 0116.077.776zM12.738 5.67a.498.498 0 00.324.254 7.864 7.864 0 012.854 6.084.5.5 0 101 0A7.868 7.868 0 0119.8 5.915a.503.503 0 00.277-.218 7.856 7.856 0 014.226-1.562v5.9c-.048 4.273-3.482 7.754-7.73 7.839a.498.498 0 00-.412-.003c-4.204-.134-7.587-3.595-7.635-7.837v-5.9a7.855 7.855 0 014.212 1.536zm6.266-.391a14.536 14.536 0 00-2.588-3.445 14.538 14.538 0 00-2.582 3.433 8.865 8.865 0 012.584 3.79 8.91 8.91 0 012.586-3.778zm6.368 16.318a8.734 8.734 0 00-6.172 2.635l-.005.005c-1.198 1.198-2.008 2.678-2.34 4.248a.5.5 0 01-.976.014c-.385-1.59-1.152-3.071-2.344-4.262-1.694-1.694-3.933-2.561-6.177-2.63a8.732 8.732 0 002.635 6.163l.004.005c1.725 1.724 3.922 2.582 6.166 2.582h.5a9.083 9.083 0 006.168-2.58c1.61-1.703 2.507-3.947 2.541-6.18z" /></svg></i>                        <a href="https://www.mariages.net/fleurs-mariage">
                                          Fleurs mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categInvite layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M7.934 12.043a.5.5 0 01-.129.695L3.5 15.698v11.606c0 .66.535 1.196 1.196 1.196h22.608c.66 0 1.196-.535 1.196-1.196V15.698l-4.305-2.96a.5.5 0 11.567-.824l4.521 3.109a.5.5 0 01.217.412v11.87a2.196 2.196 0 01-2.196 2.195H4.696A2.196 2.196 0 012.5 27.304v-11.87a.5.5 0 01.217-.411l4.521-3.109a.5.5 0 01.696.129z" /><path fillRule="evenodd" clipRule="evenodd" d="M11.731 20.697a.5.5 0 01.313-.11h7.912a.5.5 0 01.313.11l5.652 4.521a.5.5 0 11-.625.781l-5.515-4.412H12.22l-5.515 4.412a.5.5 0 11-.625-.78l5.652-4.523zM29.416 15.157a.5.5 0 01-.139.694l-6.782 4.521a.5.5 0 01-.555-.831l6.783-4.522a.5.5 0 01.693.138zM2.584 15.157a.5.5 0 01.693-.138l6.783 4.522a.5.5 0 01-.555.831l-6.782-4.521a.5.5 0 01-.139-.694z" /><path fillRule="evenodd" clipRule="evenodd" d="M7.022 4.13c0-.9.73-1.63 1.63-1.63h14.696c.9 0 1.63.73 1.63 1.63v14.32a.5.5 0 11-1 0V4.13a.63.63 0 00-.63-.63H8.652a.63.63 0 00-.63.63v14.32a.5.5 0 11-1 0V4.13z" /><path fillRule="evenodd" clipRule="evenodd" d="M11.5 9.21c0-1.448 1.073-2.71 2.5-2.71.767 0 1.393.508 1.774.903.082.085.158.17.226.251.068-.08.144-.166.226-.251.382-.395 1.007-.903 1.774-.903 1.427 0 2.5 1.262 2.5 2.71 0 .643-.207 1.24-.559 1.71a.5.5 0 01-.097.127l-.025.024c-.11.126-.232.242-.363.344l-3.112 2.948a.5.5 0 01-.688 0l-3.112-2.948a2.594 2.594 0 01-.363-.344l-.025-.024a.5.5 0 01-.097-.128 2.846 2.846 0 01-.559-1.708zm1.41 1.175l.014.016c.075.089.159.167.248.235a.506.506 0 01.041.035L16 13.311l2.787-2.64a.506.506 0 01.041-.035 1.583 1.583 0 00.276-.269c.243-.3.396-.705.396-1.156 0-.993-.718-1.711-1.5-1.711-.337 0-.711.242-1.054.597a4.24 4.24 0 00-.511.65l-.005.009L16 8.5l-.43.257-.005-.01a2.718 2.718 0 00-.128-.19 4.24 4.24 0 00-.383-.46C14.711 7.742 14.337 7.5 14 7.5c-.783 0-1.5.718-1.5 1.71a1.838 1.838 0 00.41 1.175zM16 8.5l-.43.257s.001 0 0 0a.5.5 0 00.86-.001" /></svg></i>                        <a href="https://www.mariages.net/faire-part-mariage">
                                          Faire part mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsList__item">
                                        <i className="svgIcon svgIcon__categGift layoutNavMenuTabVendorsList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M8.877 5.157c0-2.232 1.78-4.019 3.982-4.019a3.97 3.97 0 012.679 1.048 3.977 3.977 0 012.69-1.048c2.203 0 3.983 1.787 3.983 4.019a4.019 4.019 0 01-1.452 3.108h8.78a.5.5 0 01.5.5v6.752a.5.5 0 01-.5.5h-1.288v14.345a.5.5 0 01-.5.5h-8.476a.501.501 0 01-.218 0H3.427a.5.5 0 01-.5-.5V16.017H1.637a.5.5 0 01-.5-.5V8.765a.5.5 0 01.5-.5h8.705a4.037 4.037 0 01-1.466-3.108zm2.635 4.108H2.138v5.752h9.374V9.265zm-.045 6.752h-7.54v13.845h7.54V16.017zm1 13.845h6.199V16.017h-6.2v13.845zm.045-14.845V9.16c.114.01.23.015.348.015h5.368c.148 0 .294-.008.438-.023v5.865h-6.154zm7.154 1v13.845h7.585V16.017h-7.585zm0-1h9.373V9.265h-9.373v5.752zM12.86 2.138c-1.644 0-2.983 1.333-2.983 3.019 0 1.653 1.342 3.018 2.982 3.018h5.37c1.643 0 2.982-1.332 2.982-3.018 0-1.686-1.34-3.019-2.983-3.019-.932 0-1.77.436-2.295 1.084a.5.5 0 01-.768.011c-.57-.665-1.38-1.095-2.305-1.095z" /></svg></i>                        <a href="https://www.mariages.net/cadeaux-invites-mariage">
                                          Cadeaux invités mariage                      </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabVendorsListOthers">
                                    <p className="layoutNavMenuTabVendorsListOthers__subtitle">Autres catégories</p>
                                    <ul className="layoutNavMenuTabVendorsListOthers__container">
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/decoration-mariage">
                                          Décoration mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/chapiteau-mariage">
                                          Chapiteau mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/animation-mariage">
                                          Animation mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/liste-de-mariage">
                                          Liste de mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/organisation-mariage">
                                          Organisation mariage                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/lune-de-miel">
                                          Lune de miel                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/wedding-cake">
                                          Wedding cake                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/food-truck">
                                          Food Truck                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/officiants">
                                          Officiants                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__item">
                                        <a href="https://www.mariages.net/vin-et-spiritueux">
                                          Vin et Spiritueux                      </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsListOthers__deals">
                                        <a href="https://www.mariages.net/promotions/prestataires">
                                          Promotions                      </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                                <div className="layoutNavMenuTabVendorsBanners">
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/destination-wedding">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Destination Weddings</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Mariez-vous dans le pays de vos rêves.</span>
                                    </div>
                                    <img className="svgIcon svgIcon__plane_destination layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/plane_destination.svg" aria-hidden alt="illustration plane destination" width={56} height={56} />  </div>
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/tirageausort">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Gagnez 4.000€</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Participez à la 101ème édition du tirage au sort de Mariages.net</span>
                                    </div>
                                    <img className="svgIcon svgIcon__stars layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/stars.svg" aria-hidden alt="illustration stars" width={56} height={56}  />  </div>
                                </div>
                                <div className="layoutNavMenuTabVendorsOtherTabs">
                                  <div className="layoutNavMenuTabVendorsBride">
                                    <p className="layoutNavMenuTabVendorsOtherTabs__subtitle">Mariée</p>
                                    <ul className="layoutNavMenuTabVendorsOtherTabsList">
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/robe-de-mariee">
                                          Robe de mariée                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/accessoires-mariage">
                                          Accessoires mariage                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/bijoux-mariage">
                                          Bijoux mariage                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/esthetique-coiffure-mariage">
                                          Esthétique coiffure mariage                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/robe-de-cocktail">
                                          Robe de cocktail                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item layoutNavMenuTabVendorsOtherTabsList__item--deals">
                                        <a href="https://www.mariages.net/promotions/mariee">
                                          Promotions                          </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabVendorsGrooms">
                                    <p className="layoutNavMenuTabVendorsOtherTabs__subtitle">Marié</p>
                                    <ul className="layoutNavMenuTabVendorsOtherTabsList">
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/costumes-mariage">
                                          Costumes mariage                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/accessoires-marie">
                                          Accessoires marié                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                        <a href="https://www.mariages.net/soins-beaute">
                                          Soins beauté                              </a>
                                      </li>
                                      <li className="layoutNavMenuTabVendorsOtherTabsList__item layoutNavMenuTabVendorsOtherTabsList__item--deals">
                                        <a href="https://www.mariages.net/promotions/marie">
                                          Promotions                          </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--brides ">
                          <a href="https://www.mariages.net/mariee" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1}>
                            Mariée              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/mariee">
                                  Mariée  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabBridesGrooms">
                                <div className="layoutNavMenuTabBridesGroomsList">
                                  <a className="layoutNavMenuTabBridesGrooms__title" href="https://www.mariages.net/mariee">
                                    Mariée      </a>
                                  <ul className="layoutNavMenuTabBridesGroomsList__content">
                                    <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--viewAll">
                                      <a href="https://www.mariages.net/mariee">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/robe-de-mariee">
                                        Robe de mariée                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/accessoires-mariage">
                                        Accessoires mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/bijoux-mariage">
                                        Bijoux mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/esthetique-coiffure-mariage">
                                        Esthétique coiffure mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/robe-de-cocktail">
                                        Robe de cocktail                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--highlight">
                                      <a href="https://www.mariages.net/promotions/mariee">
                                        Promotions              </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabBridesGroomsBanner">
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/robes-mariee">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Catalogue de robes</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Choisissez la vôtre et trouvez la boutique la plus proche.</span>
                                    </div>
                                    <img className="svgIcon svgIcon__dress layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/dress.svg" aria-hidden alt="illustration dress" width={56} height={56} />  </div>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--grooms ">
                          <a href="https://www.mariages.net/marie" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click" data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1}>
                            Marié              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/marie">
                                  Marié  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabBridesGrooms">
                                <div className="layoutNavMenuTabBridesGroomsList">
                                  <a className="layoutNavMenuTabBridesGrooms__title" href="https://www.mariages.net/marie">
                                    Marié      </a>
                                  <ul className="layoutNavMenuTabBridesGroomsList__content">
                                    <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--viewAll">
                                      <a href="https://www.mariages.net/marie">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/costumes-mariage">
                                        Costumes mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/accessoires-marie">
                                        Accessoires marié                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item">
                                      <a href="https://www.mariages.net/soins-beaute">
                                        Soins beauté                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--highlight">
                                      <a href="https://www.mariages.net/promotions/marie">
                                        Promotions              </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabBridesGroomsBanner">
                                  <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/costumes-marie">
                                    <div className="layoutNavMenuBannerBox__content">
                                      <p className="layoutNavMenuBannerBox__title">Catalogue de costumes</p>
                                      <span className="layoutNavMenuBannerBox__subtitle">Choisissez la vôtre et trouvez la boutique la plus proche.</span>
                                    </div>
                                    <img className="svgIcon svgIcon__bowtie_blue layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/bowtie_blue.svg" aria-hidden alt="illustration bowtie blue" width={56} height={56}  />  </div>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--dresses ">
                          <a href="https://www.mariages.net/robes-mariee" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="dresses">
                            Robes              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/robes-mariee">
                                  Robes  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabDresses">
                                <div className="layoutNavMenuTabDressesList">
                                  <a className="layoutNavMenuTabDresses__title" href="https://www.mariages.net/robes-mariee">
                                    Les dernières tendances de la mode nuptiale      </a>
                                  <ul className="layoutNavMenuTabDressesList__content">
                                    <li className="layoutNavMenuTabDressesList__item layoutNavMenuTabDressesList__item--viewAll">
                                      <a href="https://www.mariages.net/robes-mariee">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/robes-mariee" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__bride-dress layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><g clipPath="url(#clip0)" fillRule="evenodd" clipRule="evenodd"><path d="M11.163 2.677a7.448 7.448 0 012.04-.283c.647 0 1.407.213 2.05.62.352.224.681.515.938.874.737-.994 1.95-1.494 2.932-1.494.718 0 1.404.102 2.039.283a.5.5 0 01.335.646l-2.408 6.892c.214.106.508.26.86.461a19.103 19.103 0 012.793 1.963c2.091 1.772 4.387 4.522 5.083 8.387.588 3.265 1.329 5.265 1.908 6.436.29.585.538.963.707 1.188a2.956 2.956 0 00.232.274l.005.005a.5.5 0 01-.192.853l-.02.005a.506.506 0 01-.056.013 85.157 85.157 0 01-28.141.058l-.35-.057a.5.5 0 01-.25-.867l.005-.005c.007-.007.02-.02.04-.043.041-.043.106-.117.19-.23.17-.225.419-.603.708-1.188.58-1.172 1.32-3.172 1.909-6.437.696-3.866 2.991-6.615 5.082-8.387a19.094 19.094 0 012.795-1.963c.343-.197.631-.348.843-.453l-2.412-6.905a.5.5 0 01.335-.646zm3.071 7.364a.5.5 0 01-.028.817l-.063.04-.005.002-.014.008a.494.494 0 01-.09.05l-.004.002-.013.006a14.691 14.691 0 00-1.122.582 18.097 18.097 0 00-2.646 1.86c-1.987 1.682-4.104 4.242-4.745 7.8-.602 3.337-1.367 5.43-1.996 6.703-.217.438-.418.78-.59 1.04a84.154 84.154 0 0026.51-.003 9.612 9.612 0 01-.591-1.043c-.63-1.272-1.395-3.365-1.996-6.702-.641-3.558-2.759-6.118-4.745-7.8a18.1 18.1 0 00-2.646-1.86 14.744 14.744 0 00-1.065-.556 4.231 4.231 0 00-.057-.026l-.014-.006h-.002a.506.506 0 01-.091-.051l-.016-.01c-.012-.008-.043-.025-.074-.046a.5.5 0 01-.045-.793l2.285-6.54a6.48 6.48 0 00-1.248-.121c-.926 0-2.125.633-2.485 1.79a.5.5 0 01-.967-.048c-.11-.537-.47-.97-.954-1.277-.49-.31-1.064-.465-1.514-.465-.432 0-.85.043-1.249.12l2.28 6.527z" /><path d="M11.901.02a.5.5 0 01.61.31l.866 2.394a.5.5 0 01-.665.63.655.655 0 00-.102-.003c-.17.006-.518.056-1.142.278a.5.5 0 01-.635-.292l-.84-2.199A.5.5 0 0110.32.48L11.9.02zm.293 2.373l-.464-1.282-.61.177.477 1.247a5.27 5.27 0 01.597-.142zM19.799.33a.5.5 0 01.61-.31l1.581.46a.5.5 0 01.328.658l-.842 2.199a.5.5 0 01-.634.292c-.625-.222-.973-.272-1.142-.278a.655.655 0 00-.102.003.5.5 0 01-.665-.63L19.799.33zm.317 2.063c.169.029.366.074.596.142l.477-1.247-.61-.177-.463 1.282zM15.65 10.404a.5.5 0 01-.171.685h-.001l-.257-.429.258.43h-.002l-.015.01a4.677 4.677 0 00-.322.232c-.22.17-.52.432-.839.787a6.693 6.693 0 00-1.614 3.269.5.5 0 01-.983-.182 7.695 7.695 0 011.853-3.754c.364-.406.71-.707.966-.908a5.647 5.647 0 01.403-.289l.026-.016.008-.005.003-.002h.001l.257.428-.257-.428a.5.5 0 01.687.172zM16.608 10.404a.5.5 0 01.686-.173l-.256.43.256-.43.002.001.003.002.008.005.026.016.091.06c.077.052.184.128.312.229.257.2.602.502.966.908a7.694 7.694 0 011.853 3.754.5.5 0 01-.983.182 6.695 6.695 0 00-1.614-3.269 6.626 6.626 0 00-.838-.788 4.671 4.671 0 00-.323-.231l-.014-.01-.003-.001a.5.5 0 01-.172-.685z" /><path d="M13.307 8.9c1.91-.661 3.909-.78 5.752-.054a.5.5 0 01.29.627l-.364 1.063a.5.5 0 01-.497.557h-4.651a.5.5 0 01-.495-.573L13 9.538a.5.5 0 01.308-.637zm.945 1.193h3.828l.162-.473c-1.302-.396-2.71-.34-4.13.073l.14.4z" /></g><defs><clipPath id="clip0"><path d="M0 0h32v32H0z" /></clipPath></defs></svg></i>                        Mariée                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/costumes-marie" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__suit layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M12.288.094c.06-.01.123-.01.187.003l1.522.313c1.4.286 2.842.283 4.24-.01L19.68.098a.5.5 0 01.534.238c.059.043.147.102.275.176.348.2.98.501 2.073.862 1.39.458 2.293.873 2.912 1.233a6.082 6.082 0 011.175.872.5.5 0 01.144.233l4.687 16.585a.5.5 0 01-.316.608l-4.258 1.49a.5.5 0 01-.64-.317l-2.434-7.465.323 10.548a.5.5 0 01-.239.442l-.261-.426.261.426-.002.001-.003.002-.009.005a1.337 1.337 0 01-.12.066c-.079.04-.194.096-.347.162-.307.13-.767.3-1.4.468-1.266.336-3.223.664-6.036.664l-.033-.001c-2.795-.003-4.742-.33-6.003-.664a10.323 10.323 0 01-1.4-.468 5.237 5.237 0 01-.467-.228l-.009-.005-.003-.002h-.001s-.001-.001.26-.427l-.261.426a.5.5 0 01-.239-.442l.323-10.548-2.434 7.465a.5.5 0 01-.64.317l-4.258-1.49a.5.5 0 01-.316-.608L5.206 3.711a.5.5 0 01.165-.252c.223-.203.546-.499 1.154-.853.62-.36 1.522-.775 2.912-1.233 1.094-.36 1.725-.662 2.073-.862a2.576 2.576 0 00.367-.25V.258c.002-.001.002-.002 0 .001l-.006.007-.004.004-.002.003-.001.001a.446.446 0 01.013-.015m.127 1.12c-.333.192-.837.435-1.593.713l2.96 5.766a.5.5 0 01.003.448l-.525 1.075 2.65 2.11v-.5L12.005 1.38zM15.5 12.771l-3.588-2.856a.5.5 0 01-.138-.611l.592-1.211-2.91-5.671c-1.174.402-1.926.756-2.428 1.048a6.4 6.4 0 00-.234.143A20.399 20.399 0 018.02 5.85c.692 1.48 1.388 3.467 1.252 5.324l-.219 7.16.685.195c.729.19 1.474.316 2.225.378l1.126.09a.5.5 0 01.46.499v2.402a.5.5 0 01-.508.5l-.976-.015a11.418 11.418 0 01-2.69-.368l-.43-.113-.091 2.972.102.045c.262.112.676.266 1.264.421 1.102.292 2.816.591 5.28.627V12.771zm1 13.196c2.464-.036 4.178-.334 5.28-.627a9.35 9.35 0 001.366-.466l-.09-2.98-.462.12c-.879.23-1.781.353-2.689.368l-.977.015a.5.5 0 01-.508-.5v-2.402a.5.5 0 01.46-.498l1.126-.091a13.03 13.03 0 002.225-.378l.715-.203-.219-7.17a.502.502 0 01.02-.153c-.083-1.808.592-3.718 1.263-5.152a20.408 20.408 0 011.217-2.222 6.344 6.344 0 00-.255-.157c-.503-.292-1.256-.647-2.433-1.05l-2.91 5.671.591 1.212a.5.5 0 01-.137.61L16.5 12.768v13.2zm0-14.478l2.646-2.106-.526-1.077a.5.5 0 01.004-.448l2.96-5.766c-.735-.271-1.232-.508-1.564-.697l-3.52 9.6v.494zm2.473-10.221L16 9.442 13.013 1.23l.783.16c1.534.315 3.114.31 4.646-.01l.531-.111zm6.968 3.104a19.35 19.35 0 00-1.025 1.901c-.673 1.44-1.28 3.235-1.162 4.83.001.016.002.03.001.045l3.304 10.134 3.332-1.166-4.45-15.744zM22.93 19.37l-.442.125c-.787.206-1.591.342-2.402.408l-.667.054v1.434l.468-.008a10.415 10.415 0 002.454-.336l.633-.165-.044-1.512zM8.995 20.881l.633.165c.8.21 1.624.322 2.453.337l.468.007v-1.434l-.667-.054a14.043 14.043 0 01-2.402-.408l-.01-.002-.431-.123-.044 1.512zm-.716-9.84c.098-1.58-.501-3.348-1.166-4.768A19.402 19.402 0 006.068 4.34L1.61 20.115l3.332 1.166 3.338-10.24z" /></svg></i>                        Marié                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/robes-soiree" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__dress layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M21.406 17.62a7.923 7.923 0 00-.362-1.893l.948-.316c.208.622.353 1.352.41 2.133.116 1.358-.03 3.172-.393 5.1a35.717 35.717 0 01-1.624 5.797c-.212.562-.822.647-1.22.433a11.047 11.047 0 01-1.923-1.15 12.54 12.54 0 01-1.607-1.407l.727-.687c.443.47.944.892 1.482 1.296l.003.002c.515.392 1.082.72 1.662 1.002a34.836 34.836 0 001.518-5.472c.354-1.88.484-3.597.38-4.832l-.001-.006z" /><path fillRule="evenodd" clipRule="evenodd" d="M19.386 1a15.361 15.361 0 01.2 1.428c.057.456.085.91.112 1.345l.021.338-.296.148c-.658.33-1.273.65-1.857 1.022-.464.3-.882.589-1.242.897l-.326.28-.325-.28a11.57 11.57 0 00-1.242-.897 15.41 15.41 0 00-1.842-1.015l-.313-.143.022-.35c.027-.43.055-.88.111-1.33.027-.488.098-.95.191-1.415h-.91a15.6 15.6 0 00-.329 1.798c-.081.65-.135 1.27-.162 1.917v.01c-.104 1.716.253 2.686.63 3.684l.005.011c.304.803.635 1.675.635 2.953 0 .892-.378 1.675-.748 2.44l-.022.047c-.488.974-1.007 2.095-1.164 3.768-.105 1.235.026 2.952.38 4.83v.006c.317 1.788.863 3.71 1.518 5.466a12.182 12.182 0 003.212-2.31c-.002 0 .005-.007.018-.023a38.209 38.209 0 002.688-3.593c.68-1.034 1.35-2.183 1.851-3.316.49-1.11.8-2.17.815-3.075-.233-.752-.564-1.438-.953-2.113l-.007-.012c-.347-.64-.723-1.36-.723-2.087 0-1.258.348-2.125.672-2.933l.026-.067c.407-1.03.788-1.998.71-3.711v-.002c-.008-.21-.02-.427-.033-.647a25.059 25.059 0 01-.05-1.302c-.076-.6-.175-1.174-.318-1.767h-.955zM18.37.859c0-.47.389-.859.858-.859h1.215c.41 0 .72.277.833.618l.006.018.005.019c.17.685.285 1.34.37 2.018l.003.031v.031c0 .407.023.813.047 1.238a48.042 48.042 0 01.036.701l-.5.02.5-.02s0-.001 0 0c.087 1.927-.358 3.055-.78 4.122V8.8l-.017.04c-.325.811-.61 1.526-.61 2.589 0 .43.23.923.598 1.605l-.003-.006-.433.25.44-.238-.004-.006c.425.737.802 1.517 1.064 2.391l.021.07v.074c0 1.122-.374 2.357-.901 3.55-.53 1.202-1.234 2.401-1.93 3.462-1.389 2.112-2.79 3.728-2.835 3.773a13.147 13.147 0 01-3.588 2.555l-.01.004-.008.004a.987.987 0 01-.622.056.806.806 0 01-.568-.505c-.699-1.846-1.287-3.889-1.624-5.8-.363-1.928-.509-3.742-.393-5.1v-.004c.174-1.856.758-3.108 1.264-4.12.396-.82.666-1.405.666-2.043 0-1.089-.274-1.816-.575-2.61-.395-1.044-.81-2.17-.694-4.094.028-.676.085-1.323.169-1.996v-.003c.084-.64.196-1.318.367-1.976a.859.859 0 01.847-.694h1.305l.035.005c.535.076.756.587.7.98l-.002.016-.004.016c-.107.511-.185.98-.21 1.468l-.001.018-.003.018c-.039.315-.064.632-.085.956.574.281 1.125.598 1.652.934l.003.002c.353.228.7.463 1.025.714.325-.251.673-.486 1.026-.714l.003-.002a19.53 19.53 0 011.653-.925 16.675 16.675 0 00-.087-.965v-.007l-.008-.066c-.053-.481-.106-.954-.204-1.398l-.012-.054V.86z" /></svg></i>                        Soirée                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/bijoux" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__diamond layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M7.87 2.708a.5.5 0 01.406-.208h15.448a.5.5 0 01.406.208l6.276 8.738a.5.5 0 11-.812.583L23.467 3.5H8.532l-6.126 8.53a.5.5 0 01-.812-.584L7.87 2.708z" /><path fillRule="evenodd" clipRule="evenodd" d="M1.546 11.528a.5.5 0 01.454-.29h28a.5.5 0 01.38.824l-14 16.453a.5.5 0 01-.76 0l-14-16.453a.5.5 0 01-.074-.534zm1.536.71L16 27.42l12.918-15.182H3.082z" /><path fillRule="evenodd" clipRule="evenodd" d="M10.285 11.443a.5.5 0 01.405-.205h10.62a.5.5 0 01.476.653l-5.31 16.454a.5.5 0 01-.952 0l-5.31-16.454a.5.5 0 01.071-.448zm1.091.795L16 26.563l4.624-14.325h-9.248z" /><path fillRule="evenodd" clipRule="evenodd" d="M10.19 11.738a.5.5 0 01.5-.5h10.62a.5.5 0 010 1H10.69a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M8.143 2.518a.5.5 0 01.615.349l2.414 8.737a.5.5 0 11-.964.267L7.794 3.133a.5.5 0 01.349-.615zM23.857 2.518a.5.5 0 01.349.615l-2.413 8.738a.5.5 0 11-.964-.267l2.413-8.737a.5.5 0 01.615-.349z" /><path fillRule="evenodd" clipRule="evenodd" d="M1.5 11.738a.5.5 0 01.5-.5h28a.5.5 0 010 1H2a.5.5 0 01-.5-.5z" /><path fillRule="evenodd" clipRule="evenodd" d="M16.023 2.584a.5.5 0 01.427.24l5.31 8.738a.5.5 0 11-.854.52l-4.883-8.035-4.883 8.034a.5.5 0 01-.855-.52l5.31-8.737a.5.5 0 01.428-.24z" /></svg></i>                        Bijoux                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/chaussures" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__shoe layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M2.087 13.618a.5.5 0 01.695-.13c.357.244.632.694.855 1.178.233.505.448 1.135.646 1.834.396 1.399.74 3.13 1.023 4.804a110.436 110.436 0 01.843 6.096H8.4V14.5a.5.5 0 111 0v13.4a.5.5 0 01-.5.5H5.7a.5.5 0 01-.497-.45l-.004-.034-.011-.106-.044-.402a115.57 115.57 0 00-.825-5.937c-.28-1.663-.617-3.351-.999-4.699-.19-.674-.389-1.25-.591-1.688-.212-.46-.393-.69-.511-.771a.5.5 0 01-.13-.695z" /><path fillRule="evenodd" clipRule="evenodd" d="M4.517 4.15L8.81 6.146l.013.006c.665.333 1.237.787 1.692 1.47l.005.008 7.598 11.895c.163.244.415.495.658.658.2.133.497.216.823.216h3.8c.313 0 .695.139.924.253.274.137.524.388.703.567l.027.026.03.034 4.5 5.4a.5.5 0 01.11.239.283.283 0 01.003.007l.002.005c.011.022.035.068.053.118a.711.711 0 01.048.251.71.71 0 01-.047.25c-.02.051-.043.097-.054.12l-.002.004-.002.004a.591.591 0 01-.103.268.66.66 0 01-.177.17l-.043.027-.002.001a.849.849 0 00-.02.013l.004-.003a.852.852 0 01-.643.246H19c-.707 0-1.395-.234-1.957-.571a4.534 4.534 0 01-1.472-1.472l-.003-.006-6.1-10.5a.541.541 0 01-.015-.027c-.24-.479-.647-.817-1.11-1.095-.438-.263-.95-.429-1.443-.429H2.5a.5.5 0 01-.5-.5v-8c0-.322.149-.617.237-.793l.016-.03.015-.03c.088-.18.255-.518.608-.694l.03-.016C3.084 4.15 3.379 4 3.7 4h.024c.188 0 .488 0 .793.15zm-.44.897C3.996 5.007 3.912 5 3.7 5c-.059 0-.147.033-.376.147-.007.003-.024.013-.055.056-.035.05-.068.114-.122.22-.114.23-.147.318-.147.377v7.5h3.9c.707 0 1.395.234 1.957.571.534.32 1.121.777 1.483 1.49l6.09 10.485c.259.428.699.868 1.127 1.125.438.263.95.429 1.443.429h9.697a.886.886 0 01.046-.037.48.48 0 01.025-.063.907.907 0 01-.029-.072l-4.409-5.29c-.21-.21-.345-.336-.454-.39-.171-.087-.39-.148-.476-.148h-3.8c-.474 0-.977-.117-1.377-.384a3.54 3.54 0 01-.939-.939l-.005-.008L9.68 8.173c-.343-.513-.769-.857-1.298-1.123L4.089 5.053l-.013-.006z" /></svg></i>                        Chaussures                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/lingerie" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__bra layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M16.956 10.878l-.73.366-.677-.376.486-.874.215.12.259-.13.447.894z" /><path fillRule="evenodd" clipRule="evenodd" d="M8.72 5.874a.5.5 0 01.527-.318c2.566.313 4.314 1.469 5.422 2.547a9.069 9.069 0 011.202 1.438c.129.192.223.35.286.46l.054.093.012.02a.5.5 0 01.06.473c-.548 1.412-1.523 2.237-2.63 2.574-1.09.331-2.27.18-3.242-.273-1.919-.894-2.296-2.758-2.24-4.238.028-.749.165-1.44.293-1.94a9.694 9.694 0 01.249-.817l.005-.013.001-.004v-.002l.468.178-.467-.178zm.81.733c-.03.1-.063.218-.097.351a8.385 8.385 0 00-.263 1.73c-.05 1.327.292 2.654 1.663 3.294.783.364 1.708.472 2.528.222.75-.228 1.45-.764 1.898-1.76a8.076 8.076 0 00-1.288-1.625c-.924-.899-2.354-1.867-4.44-2.212zm5.933 3.446z" /><path fillRule="evenodd" clipRule="evenodd" d="M8.566 7.202a.5.5 0 01.658.258.592.592 0 00.557.344c.208 0 .38-.09.475-.209a.5.5 0 01.886.377.552.552 0 00.484.603l.012.001c.141.022.294-.028.433-.151a.5.5 0 01.832.373v.05a.498.498 0 01-.016.126.546.546 0 00.356.675c.195.043.34.008.457-.073a.5.5 0 01.68.717.526.526 0 00.101.725c.147.099.312.121.413.093a.5.5 0 11.263.965c-.441.12-.914-.004-1.26-.246a1.555 1.555 0 01-.618-1.167 1.797 1.797 0 01-.29-.046 1.517 1.517 0 01-1.06-1.053 1.575 1.575 0 01-1.627-.842 1.689 1.689 0 01-.521.082 1.591 1.591 0 01-1.473-.943.5.5 0 01.258-.659zM9.57.903a.5.5 0 01.462.536L9.685 6.04a.5.5 0 01-.997-.075l.347-4.601A.5.5 0 019.57.903zM9.356 11.275a.5.5 0 01.645.29l2.004 5.295a.711.711 0 01.006.018l.004.012c.048.142.109.326.14.542.171 1.091-.174 2.19-.814 3.024v.002l-1.18 1.56.263.083a9.328 9.328 0 014.748 3.335c.134.163.263.344.365.497.191.274.352.57.485.86l.64 1.304a.5.5 0 11-.898.44l-.643-1.31-.007-.014a4.492 4.492 0 00-.4-.712l-.006-.009a5.23 5.23 0 00-.332-.45 8.327 8.327 0 00-4.247-2.986l-.004-.001-.94-.297a.5.5 0 01-.249-.778l1.61-2.13c.498-.649.745-1.478.62-2.266v-.007a2.086 2.086 0 00-.1-.373l-2-5.285a.5.5 0 01.29-.644z" /><path fillRule="evenodd" clipRule="evenodd" d="M9.708 21.875a.5.5 0 01.058.705l-.693.816a.487.487 0 01-.027.03c-.048.048-.092.213.056.364.086.088.357.255.934-.103a.5.5 0 01.742.278l.096.312c.002.003.006.01.02.016a.07.07 0 00.052.002l.438-.195a.5.5 0 01.701.419l.025.33a.14.14 0 00.07.108c.046.03.1.038.154.02l.27-.098a.5.5 0 01.664.546l-.04.257.325-.13a.5.5 0 01.67.586l-.104.418a.94.94 0 01.831.518l.246.466.014.03c.026.06.088.127.231.17a.597.597 0 01.022.007l.218.076a.498.498 0 01.858.163c.2.6-.397 1.026-.884.886a.528.528 0 01-.028-.008l-.485-.17c-.343-.106-.666-.33-.838-.7l-.23-.438h-.038c-.015 0-.03 0-.046-.002-.418-.038-.856-.38-.89-.866a.993.993 0 01-.848-.702 1.176 1.176 0 01-1.06-.722 1.062 1.062 0 01-1.172-.466c-.65.222-1.239.094-1.633-.308-.435-.445-.567-1.233-.065-1.754l.682-.803a.5.5 0 01.704-.058zM23.805 5.874l-.468.178c.468-.178.467-.179.468-.178v.002l.002.004.005.013a3.93 3.93 0 01.074.215c.047.145.11.35.174.602.129.5.266 1.191.294 1.94.055 1.48-.321 3.344-2.24 4.238-.973.452-2.152.604-3.242.273-1.108-.337-2.082-1.162-2.63-2.574a.5.5 0 01.06-.473l.011-.02.054-.094c.063-.109.158-.267.286-.459.257-.383.65-.9 1.202-1.438 1.108-1.078 2.857-2.234 5.422-2.547a.5.5 0 01.527.318zm-6.744 4.179zm5.933-3.446c-2.087.345-3.517 1.313-4.441 2.213a8.08 8.08 0 00-1.288 1.625c.45.995 1.148 1.53 1.898 1.759.82.25 1.745.142 2.529-.222 1.37-.64 1.712-1.967 1.662-3.295a8.388 8.388 0 00-.36-2.08z" /><path fillRule="evenodd" clipRule="evenodd" d="M23.959 7.202a.5.5 0 01.257.659c-.258.59-.841.943-1.472.943-.178 0-.354-.028-.521-.082a1.575 1.575 0 01-1.627.842 1.517 1.517 0 01-1.08 1.057 1.8 1.8 0 01-.27.042 1.555 1.555 0 01-.619 1.167c-.346.242-.819.367-1.26.246a.5.5 0 01.264-.965c.1.028.265.006.412-.093a.526.526 0 00.1-.725.5.5 0 01.682-.717c.116.081.26.116.456.073a.546.546 0 00.357-.675.498.498 0 01-.017-.126v-.05a.5.5 0 01.833-.373c.139.123.291.173.433.151l.01-.001c.31-.04.522-.322.485-.603a.5.5 0 01.886-.377.608.608 0 00.476.209c.26 0 .468-.142.556-.344a.5.5 0 01.659-.258zM22.954.903a.5.5 0 01.536.46l.346 4.602a.5.5 0 11-.997.075l-.346-4.601a.5.5 0 01.46-.536zM23.168 11.275a.5.5 0 01.29.644l-2 5.285a2.087 2.087 0 00-.1.373v.007c-.125.788.123 1.617.62 2.265l.002.003 1.608 2.128a.5.5 0 01-.248.778l-.945.298a8.203 8.203 0 00-3.078 1.725l-.011.01a7.43 7.43 0 00-1.175 1.274 5.23 5.23 0 00-.315.427l-.006.01a4.487 4.487 0 00-.4.711l-.006.014-.643 1.31a.5.5 0 01-.898-.44l.64-1.304c.132-.29.293-.586.484-.86.102-.153.232-.336.367-.498.384-.51.801-.982 1.302-1.404a9.205 9.205 0 013.445-1.93l.262-.083-1.179-1.56v-.002c-.64-.835-.986-1.933-.815-3.024.032-.216.093-.4.14-.542l.004-.012a.711.711 0 01.007-.018l2.004-5.295a.5.5 0 01.644-.29z" /><path fillRule="evenodd" clipRule="evenodd" d="M22.816 21.875a.5.5 0 01.705.058l.681.803c.502.521.37 1.309-.065 1.754-.394.402-.983.53-1.632.308-.25.415-.767.596-1.226.45a1.177 1.177 0 01-1.056.713.993.993 0 01-.848.703c-.034.486-.473.827-.89.865a.489.489 0 01-.046.002h-.038l-.23.438c-.172.371-.495.595-.838.7l-.485.17a.5.5 0 01-.33-.944l.494-.173a.539.539 0 01.022-.007c.143-.043.204-.11.23-.17l.015-.03.246-.466a.94.94 0 01.83-.518l-.104-.418a.5.5 0 01.67-.585l.325.13-.04-.258a.5.5 0 01.666-.546l.269.098c.053.018.108.01.154-.02a.14.14 0 00.07-.107v-.01l.025-.32a.5.5 0 01.704-.419l.485.219a.07.07 0 00.051-.002c.014-.006.019-.013.02-.016l.096-.312a.5.5 0 01.742-.278c.577.358.849.19.935.103.147-.15.104-.316.056-.364a.463.463 0 01-.028-.03l-.693-.816a.5.5 0 01.058-.705z" /></svg></i>                        Lingerie                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabDressesList__item">
                                      <a href="https://www.mariages.net/accessoires" className="layoutNavMenuTabDressesList__Link">
                                        <i className="svgIcon svgIcon__handbag layoutNavMenuTabDressesList__itemIcon"><svg viewBox="0 0 32 32"><path fillRule="evenodd" clipRule="evenodd" d="M6.801 10.867c-2.367 0-4.301 1.928-4.301 4.276v5.682c0 2.348 1.934 4.275 4.301 4.275H25.2c2.367 0 4.301-1.927 4.301-4.275v-5.682c0-2.348-1.934-4.276-4.301-4.276H6.8zM1.5 15.143c0-2.905 2.387-5.276 5.301-5.276H25.2c2.914 0 5.301 2.37 5.301 5.276v5.682c0 2.905-2.387 5.275-5.301 5.275H6.8c-2.914 0-5.301-2.37-5.301-5.275v-5.682z" /><path fillRule="evenodd" clipRule="evenodd" d="M1.575 18.228a.5.5 0 01.603-.37l12.868 3.076c.658.157 1.343.16 2.003.01l12.828-2.935a.5.5 0 11.223.974L17.272 21.92c-.81.185-1.65.18-2.458-.012L1.945 18.83a.5.5 0 01-.37-.603z" /><path fillRule="evenodd" clipRule="evenodd" d="M11.59 14.42a.957.957 0 011.345-.875l2.843 1.257c.76.336.758 1.41 0 1.746l-2.843 1.257a.958.958 0 01-1.345-.873v-2.513zm1 .066l2.69 1.19-2.69 1.189v-2.379z" /><path fillRule="evenodd" clipRule="evenodd" d="M19.41 14.486l-2.69 1.19 2.69 1.189v-2.38zm-2.986 1.605l.203-.457-.203.457zm2.641-2.546a.958.958 0 011.345.874v2.513a.958.958 0 01-1.345.874h-.001l-2.842-1.257c-.757-.336-.76-1.411 0-1.747l2.842-1.256h.001zM16 2.5c-3.024 0-5.471 2.438-5.471 5.438v2.388a.5.5 0 01-1 0V7.938C9.529 4.38 12.429 1.5 16 1.5c3.572 0 6.471 2.88 6.471 6.438v2.432a.5.5 0 11-1 0V7.938c0-3-2.446-5.438-5.47-5.438z" /><path fillRule="evenodd" clipRule="evenodd" d="M12.062 6.16c-.989.686-1.533 1.583-1.533 2.515v1.663a.5.5 0 01-1 0V8.675c0-1.353.791-2.524 1.964-3.337 1.174-.813 2.77-1.3 4.507-1.3 1.738 0 3.333.487 4.507 1.3 1.173.813 1.964 1.984 1.964 3.337v1.695a.5.5 0 11-1 0V8.675c0-.932-.544-1.83-1.533-2.515C18.95 5.477 17.56 5.038 16 5.038s-2.95.439-3.938 1.122z" /></svg></i>                        Accessoires                  </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabDressesFeatured">
                                  <p className="layoutNavMenuTabDresses__subtitle">Marques sélectionnées</p>
                                  <div className="layoutNavMenuTabDressesFeatured__content">
                                    <a href="https://www.mariages.net/robes-mariee/cymbeline--d90">
                                      <figure className="layoutNavMenuTabDressesFeaturedItem">
                                        <img data-src="https://cdn0.mariages.net/cat/robes-mariee/cymbeline/ianis--mfvr489009.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Cymbeline" width={290} height={406} />
                                        <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">Cymbeline</figcaption>
                                      </figure>
                                    </a>
                                    <a href="https://www.mariages.net/robes-mariee/creations-bochet--d364">
                                      <figure className="layoutNavMenuTabDressesFeaturedItem">
                                        <img data-src="https://cdn0.mariages.net/cat/robes-mariee/creations-bochet/solaire--mfvr648381.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Créations Bochet" width={290} height={406} />
                                        <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">Créations Bochet</figcaption>
                                      </figure>
                                    </a>
                                    <a href="https://www.mariages.net/robes-mariee/adore-by-justin-alexander--d1049">
                                      <figure className="layoutNavMenuTabDressesFeaturedItem">
                                        <img data-src="https://cdn0.mariages.net/cat/robes-mariee/adore-by-justin-alexander/lana--mfvr767943.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Adore by Justin Alexander" width={290} height={406} />
                                        <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">Adore by Justin Alexander</figcaption>
                                      </figure>
                                    </a>
                                    <a href="https://www.mariages.net/robes-mariee/sincerity-bridal--d399">
                                      <figure className="layoutNavMenuTabDressesFeaturedItem">
                                        <img data-src="https://cdn0.mariages.net/cat/robes-mariee/sincerity-bridal/44296--mfvr768039.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Sincerity Bridal" width={290} height={406} />
                                        <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">Sincerity Bridal</figcaption>
                                      </figure>
                                    </a>
                                    <a href="https://www.mariages.net/robes-mariee/eglantine-creations--d234">
                                      <figure className="layoutNavMenuTabDressesFeaturedItem">
                                        <img data-src="https://cdn0.mariages.net/cat/robes-mariee/eglantine-creations/ananas--mfvr711155.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Eglantine Créations" width={290} height={406} />
                                        <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">Eglantine Créations</figcaption>
                                      </figure>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--articles ">
                          <a href="https://www.mariages.net/articles" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="ideas">
                            Idées              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://www.mariages.net/articles">
                                  Idées Mariage  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabArticles">
                                <div className="layoutNavMenuTabArticlesList">
                                  <a className="layoutNavMenuTabArticles__title" href="https://www.mariages.net/articles">
                                    Toutes les inspirations et les conseils pour votre mariage      </a>
                                  <ul className="layoutNavMenuTabArticlesList__content">
                                    <li className="layoutNavMenuTabArticlesList__item layoutNavMenuTabArticlesList__item--viewAll">
                                      <a href="https://www.mariages.net/articles">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/avant-le-mariage--t1">
                                        Avant le mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/la-ceremonie-de-mariage--t2">
                                        La cérémonie de mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/la-reception--t3">
                                        La réception                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/les-prestataires-de-mariage--t4">
                                        Les prestataires de mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/mode-nuptiale--t5">
                                        Mode nuptiale                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/beaute-et-sante--t6">
                                        Beauté et Santé                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/lune-de-miel--t7">
                                        Lune de miel                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/apres-le-mariage--t8">
                                        Après le mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/fait-maison--t56">
                                        Fait Maison                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabArticlesList__item">
                                      <a href="https://www.mariages.net/articles/instants-de-mariage--t57">
                                        Instants de mariage                  </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabArticlesBanners">
                                  <div className="layoutNavMenuTabArticlesBannersItem app-header-menu-banner app-link" data-href="https://www.mariages.net/reportages-mariage">
                                    <figure className="layoutNavMenuTabArticlesBannersItem__figure">
                                      <img data-src="https://www.mariages.net/assets/img/components/header/tabs/realweddings_banner.jpg" data-srcset="https://www.mariages.net/assets/img/components/header/tabs/realweddings_banner@2x.jpg 2x" className="lazyload layoutNavMenuTabArticlesBannersItem__image" alt="Vrais mariages" width={304} height={90} />
                                      <figcaption className="layoutNavMenuTabArticlesBannersItem__content">
                                        <a href="https://www.mariages.net/reportages-mariage" title="Vrais mariages" className="layoutNavMenuTabArticlesBannersItem__title">Vrais mariages</a>
                                        <p className="layoutNavMenuTabArticlesBannersItem__description">
                                          Chaque mariage est unique et il y a une belle histoire derrière chacun d'eux.          </p>
                                      </figcaption>
                                    </figure>
                                  </div>
                                  <div className="layoutNavMenuTabArticlesBannersItem app-header-menu-banner app-link" data-href="https://www.mariages.net/lune-miel">
                                    <figure className="layoutNavMenuTabArticlesBannersItem__figure">
                                      <img data-src="https://www.mariages.net/assets/img/components/header/tabs/honeymoons_banner.jpg" data-srcset="https://www.mariages.net/assets/img/components/header/tabs/honeymoons_banner@2x.jpg 2x" className="lazyload layoutNavMenuTabArticlesBannersItem__image" alt="Lune de miel" width={304} height={90} />
                                      <figcaption className="layoutNavMenuTabArticlesBannersItem__content">
                                        <a href="https://www.mariages.net/lune-miel" title="Lune de miel" className="layoutNavMenuTabArticlesBannersItem__title">Lune de miel</a>
                                        <p className="layoutNavMenuTabArticlesBannersItem__description">
                                          Trouvez la destination de vos rêves pour votre lune de miel.          </p>
                                      </figcaption>
                                    </figure>
                                  </div>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--invitations ">
                          <a href="https://faire-part.mariages.net" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click " data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="paper">
                            Faire-part              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://faire-part.mariages.net">Faire-part</a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabInvitation">
                                <div className="layoutNavMenuTabInvitationList">
                                  <span className="layoutNavMenuTabInvitation__title">
                                    Acheter par catégorie      </span>
                                  <ul className="layoutNavMenuTabInvitationList__content">
                                    <li className="layoutNavMenuTabInvitationList__item">
                                      <a href="https://faire-part.mariages.net/faire-part" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Faire-part de mariage">
                                        Faire-part de mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabInvitationList__item">
                                      <a href="https://faire-part.mariages.net/save-the-date-carte" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Save the date">
                                        Save the date                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabInvitationList__item">
                                      <a href="https://faire-part.mariages.net/livres-d-or" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Livre d'or">
                                        Livre d'or                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabInvitationList__item">
                                      <a href="https://faire-part.mariages.net/cartes-de-remerciements" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Cartes de remerciements">
                                        Cartes de remerciements                  </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__item app-header-menu-item-openSection layoutNavMenu__item--community ">
                          <a href="https://communaute.mariages.net/" className="layoutNavMenu__anchor app-header-menu-itemAnchor app-analytics-track-event-click" data-tracking-section="header" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="community">
                            Communauté              </a>
                          <i className="svgIcon svgIcon__angleRightBlood layoutNavMenu__anchorArrow"><svg viewBox="0 0 582 998"><path d="M0 83c0 8.7 3.3 16.3 10 23l393 393L10 892c-6.7 6.7-10 14.3-10 23s3.3 16.3 10 23l50 50c6.7 6.7 14.3 10 23 10s16.3-3.3 23-10l466-466c6.7-6.7 10-14.3 10-23s-3.3-16.3-10-23L106 10C99.3 3.3 91.7 0 83 0S66.7 3.3 60 10L10 60C3.3 66.7 0 74.3 0 83z" /></svg></i>
                          <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                            <div className="layoutNavMenuTab__layout">
                              <div className="layoutNavMenuTab__header">
                                <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection"><svg viewBox="0 0 582 998"><path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" /></svg></i>    <a className="layoutNavMenuTab__title" href="https://communaute.mariages.net/">
                                  Communauté  </a>
                                <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i></div>
                              <div className="layoutNavMenuTabCommunity">
                                <div className="layoutNavMenuTabCommunityList">
                                  <a className="layoutNavMenuTabCommunity__title" href="https://communaute.mariages.net/">
                                    Groupes par thème      </a>
                                  <ul className="layoutNavMenuTabCommunityList__content">
                                    <li className="layoutNavMenuTabCommunityList__item layoutNavMenuTabCommunityList__item--viewAll">
                                      <a href="https://communaute.mariages.net/">Voir plus </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/organisation-du-mariage">
                                        Organisation du mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/decoration">
                                        Décoration                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/mode-nuptiale">
                                        Mode nuptiale                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/avant-le-mariage">
                                        Avant le mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/mariages-net">
                                        Mariages.net                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/beaute">
                                        Beauté                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/ceremonie-de-mariage">
                                        Cérémonie de mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/banquets">
                                        Banquets                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/apres-le-mariage">
                                        Après le mariage                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/lune-de-miel">
                                        Lune de miel                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/vivre-ensemble">
                                        Vivre ensemble                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/maman">
                                        Maman                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/mariages-celebres">
                                        Mariages célèbres                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/tirage-au-sort">
                                        Tirage au sort                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/aide">
                                        Aide technique                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute/jeux-et-tests">
                                        Jeux et tests                  </a>
                                    </li>
                                    <li className="layoutNavMenuTabCommunityList__item">
                                      <a href="https://communaute.mariages.net/communaute-departement">
                                        Groupes par département                  </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="layoutNavMenuTabCommunityLast">
                                  <p className="layoutNavMenuTabCommunityLast__subtitle app-header-menu-community app-link" role="link" tabIndex={0} data-href="https://communaute.mariages.net/">Découvrez les nouveautés</p>
                                  <ul className="layoutNavMenuTabCommunityLast__list">
                                    <li>
                                      <a href="https://communaute.mariages.net/">
                                        Posts                  </a>
                                    </li>
                                    <li>
                                      <a href="https://communaute.mariages.net/photos">
                                        Photos                  </a>
                                    </li>
                                    <li>
                                      <a href="https://communaute.mariages.net/videos">
                                        Vidéos                  </a>
                                    </li>
                                    <li>
                                      <a href="https://communaute.mariages.net/membres">
                                        Membres                  </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>  </div>
                          </div>
                        </li>
                        <li className="layoutNavMenu__itemFooter layoutNavMenu__itemFooter--bordered">
                          <a className="layoutNavMenu__anchorFooter" href="https://www.mariages.net/tirageausort">
                            <i className="svgIcon svgIcon__celebrate "><svg viewBox="0 0 18 18"><path d="M10.288 7.712c1.759 1.76 2.559 3.892 1.569 4.882a1.383 1.383 0 01-.358.259l-9.306 4.971a1.49 1.49 0 01-2.017-2.017l4.97-9.306c.067-.131.153-.251.26-.358.99-.99 3.122-.19 4.882 1.57zm-5.07.75l-4.172 7.81a.504.504 0 00.682.683l7.81-4.174c-.832-.318-1.739-.931-2.563-1.756-.825-.825-1.439-1.731-1.756-2.564zm.885-1.621l-.048.057-.004.008-.038.069c-.26.583.357 2.05 1.66 3.353 1.418 1.418 3.032 2.023 3.486 1.569.455-.455-.15-2.069-1.569-3.487C8.172 6.99 6.558 6.386 6.103 6.84zm8.419 2.976c.34 0 .622.25.67.578l.008.1c0 .34-.25.622-.578.67l-.1.008a.678.678 0 01-.67-.578l-.008-.1c0-.374.304-.678.678-.678zm3.333-1.006a.493.493 0 11-.697.698 3.181 3.181 0 00-4.494 0 .493.493 0 01-.696-.698 4.167 4.167 0 015.887 0zm-6.292-3.432c.367 0 .665.29.678.654v.024c0 .34-.25.622-.578.67l-.1.008a.678.678 0 01-.67-.578l-.008-.1c0-.375.304-.678.678-.678zm4.994-.173a.493.493 0 01-.23.588l-.082.035-2.596.864a.493.493 0 01-.393-.9l.082-.036 2.596-.864a.493.493 0 01.623.313zM9.177.144a4.163 4.163 0 010 5.89.493.493 0 01-.697-.698 3.177 3.177 0 000-4.494.493.493 0 11.697-.698zm3.608 1.288c.23.077.365.306.332.537l-.02.087-.866 2.597a.493.493 0 01-.956-.226l.02-.086.866-2.597a.493.493 0 01.624-.312zM6.015 3.16c.34 0 .622.251.67.578l.008.1c0 .34-.25.623-.578.671l-.1.008a.678.678 0 01-.67-.578l-.008-.1c0-.375.304-.679.678-.679zm8.877-.74a.678.678 0 01.092 1.35l-.092.007a.678.678 0 01-.678-.678v-.01c0-.365.303-.668.678-.668z" /></svg></i>                    Tirage au sort de 4.000€              </a>
                        </li>
                        <li className="layoutNavMenu__itemFooter">
                          <a className="layoutNavMenu__anchorFooter" rel="nofollow" href="https://wedshootsapp.onelink.me/2833772549?pid=WP-iOS-FR&s=fr&c=WP-FR-MOBILE&af_dp=wedshoots%3A%2F%2F&durl=wedshoots%3A%2F%2F">WedShoots</a>
                        </li>
                        <li className="layoutNavMenu__itemFooter">
                          <a className="layoutNavMenu__anchorFooter" rel="nofollow" href="https://mariagesnet.onelink.me/nNt8?pid=WP-iOS-FR&s=fr&c=WP-FR-MOBILE&af_dp=mariagesnet%3A%2F%2F">Téléchargez l'application</a>
                        </li>
                        <li className="layoutNavMenu__itemFooter layoutNavMenu__itemFooter--bordered">
                          <a className="layoutNavMenu__anchorFooter" href="https://www.mariages.net/emp-Acceso.php" rel="nofollow">
                            Accès entreprises          </a>
                        </li>
                      </ul>
                    </nav>
                    <div className="layoutHeader__overlay app-header-menu-toggle app-header-menu-overlay" />
                    <div className="layoutHeader__authArea app-header-auth-area">
                      <a href="https://www.mariages.net/users-login.php" className="layoutHeader__authNoLoggedAreaMobile" title="Accès utilisateurs">
                        <i className="svgIcon svgIcon__user "><svg viewBox="0 0 47 53"><path d="M31.722 29.786C40.49 32.99 46.78 42.236 46.78 51.962v1H.846v-1c0-9.615 6.156-18.77 14.774-22.069-2.971-1.686-5.407-4.324-6.774-7.691-3.236-7.981.75-17.009 8.891-20.172 8.13-3.154 17.343.736 20.575 8.698 2.915 7.181-.03 15.22-6.59 19.058zm-12.16 1.698l-2.469.006c-7.922 2.633-13.8 10.765-14.222 19.472h41.885c-.423-8.744-6.343-16.9-14.309-19.501l-2.786.006a16.09 16.09 0 01-8.099.017zm-1.1-27.59c-7.11 2.762-10.576 10.617-7.763 17.556 2.82 6.944 10.88 10.347 17.998 7.582 7.107-2.761 10.575-10.62 7.762-17.551C33.64 4.537 25.579 1.133 18.46 3.895z" fillRule="nonzero" /></svg></i>  </a>
                      <div className="layoutHeader__authNoLoggedArea app-header-auth-area">
                        <a className="layoutHeader__vendorAuth" rel="nofollow" href="https://www.mariages.net/emp-Acceso.php">
                          <i className="svgIcon svgIcon__briefcase layoutHeader__vendorAuthIcon"><svg viewBox="0 0 48 41"><path d="M44.3 27.917h.933V13.925c0-1.46-1.199-2.86-3.057-3.625H5.825c-1.859.766-3.058 2.164-3.058 3.625v13.992h14.866V24.39a1 1 0 011-1h10.734a1 1 0 011 1v3.527H44.3zm-2.133 2h-11.8v.51a1 1 0 01-1 1H18.633a1 1 0 01-1-1v-.51h-11.8v8.564h36.334v-8.564zM14.567 8.3v-.51c0-3.797 2.855-7.035 6.533-7.035h5.8c3.68 0 6.533 3.236 6.533 7.036V8.3h8.935a1 1 0 01.358.066c2.655 1.02 4.507 3.115 4.507 5.559v14.992a1 1 0 01-1 1h-2.066v9.564a1 1 0 01-1 1H4.833a1 1 0 01-1-1v-9.564H1.767a1 1 0 01-1-1V13.925c0-2.445 1.852-4.54 4.509-5.559a1 1 0 01.358-.066h8.933zm13.8 21.126V25.39h-8.734v4.036h8.734zm3.066-21.635c0-2.747-2.018-5.036-4.533-5.036h-5.8c-2.513 0-4.533 2.29-4.533 5.036V8.3h14.866v-.51z" fillRule="nonzero" /></svg></i>    Accès Entreprises</a>
                        <ul className="layoutNavMenuAuth">
                          <li className="layoutNavMenuAuth__item">
                            <a href="https://www.mariages.net/users-login.php" className="layoutNavMenuAuth__anchor">Connexion</a>
                          </li>
                          <li className="layoutNavMenuAuth__item">
                            <a href="https://www.mariages.net/users-signup.php" className="layoutNavMenuAuth__anchor">Inscription</a>
                          </li>
                        </ul>  </div>
                    </div>
                  </header>
                  <main id="layoutMain" className="layoutMain">
                    <article className="home">
                      <style dangerouslySetInnerHTML={{__html: "\n.homeHeading__background:before { background-image: url(https://cdn0.mariages.net/home/33/original/1400/jpg/fotoHome_633.webp);}\n" }} />
                      <header className="app-heading homeHeading">
                        <div className="homeHeading__background">
                          <span className="homeHeading__imageAuthor">Capture</span>
                        </div>
                        <div className="homeHeading__content">
                          <h1 className="homeHeading__title">Tout pour organiser votre mariage</h1>
                          <p className="homeHeading__subtitle">Plus de 48.000 prestataires pour faire votre choix !</p>
                          <div className="homeHeading__searcherFields app-searcher-tracking">
                            <form className="searcherOpenModal app-searcher-modal" method="get" role="search" action="https://www.mariages.net/busc.php">
                              <input type="hidden" name="id_grupo" defaultValue />
                              <input type="hidden" name="id_sector" defaultValue />
                              <input type="hidden" name="id_region" defaultValue />
                              <input type="hidden" name="id_provincia" defaultValue />
                              <input type="hidden" name="id_poblacion" defaultValue />
                              <input type="hidden" name="id_geozona" defaultValue />
                              <input type="hidden" name="geoloc" defaultValue={0} />
                              <input type="hidden" name="latitude" />
                              <input type="hidden" name="longitude" />
                              <i className="svgIcon svgIcon__search searcherOpenModal__icon"><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i>    <div className="searcherOpenModal__inputsContainer app-searcher-inputs-container">
                                <div className="searcherOpenModal__category app-filter-searcher-input">
                                  <input type="hidden" name="txtStrSearch" defaultValue data-last-value />
                                  <span className="searcherOpenModal__input searcherOpenModal__input--placeholder app-searcher-category-input-tracking" data-last-value>Que cherchez-vous ?</span>
                                </div>
                                <div className="searcherOpenModal__location app-searcher-location-input">
                                  <input type="hidden" name="txtLocSearch" data-last-value defaultValue />
                                  <span className="searcherOpenModal__input searcherOpenModal__input--placeholder app-searcher-location-input-tracking" data-last-value>Où ?</span>
                                </div>
                              </div>
                            </form>
                            <form className="searcher app-searcher" method="get" role="search" action="https://www.mariages.net/busc.php">
                              <input type="hidden" name="id_grupo" defaultValue />
                              <input type="hidden" name="id_sector" defaultValue />
                              <input type="hidden" name="id_region" defaultValue />
                              <input type="hidden" name="id_provincia" defaultValue />
                              <input type="hidden" name="id_poblacion" defaultValue />
                              <input type="hidden" name="id_geozona" defaultValue />
                              <input type="hidden" name="geoloc" defaultValue={0} />
                              <input type="hidden" name="latitude" />
                              <input type="hidden" name="longitude" />
                              <div className="searcher__category app-filter-searcher-field" data-bound-classes=",.searcher__category">
                                <i className="svgIcon svgIcon__search searcher__categoryIcon"><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i>        <input className="searcher__input app-filter-searcher-input app-searcher-category-input-tracking" type="text" defaultValue name="txtStrSearch" data-last-value data-placeholder-default="Que cherchez-vous ?" data-placeholder-focused="Que cherchez-vous ?" aria-label="Que cherchez-vous ?" placeholder="Que cherchez-vous ?" autoComplete="off" />
                                <span data-href="https://www.mariages.net/busc.php" className="searcher__categoryReset app-searcher-reset-category">
                                  <i className="svgIcon svgIcon__close searcher__categoryResetIcon"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>          </span>
                                <div className="searcher__placeholder app-filter-searcher-list" />
                              </div>
                              <div className="searcher__location">
                                <span className="searcher__locationFixedText">à</span>
                                <input className="searcher__input app-searcher-location-input app-searcher-location-input-tracking" type="text" data-last-value data-placeholder-default="(Ex: Paris)" placeholder="(Ex: Paris)" data-placeholder-focused="Où ?" aria-label="Où ?" defaultValue name="txtLocSearch" autoComplete="off" />
                                <span data-href="https://www.mariages.net/busc.php?isClearGeo=1" className="searcher__locationReset app-searcher-reset-location">
                                  <i className="svgIcon svgIcon__close searcher__locationResetIcon"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>          </span>
                                <div className="searcher__placeholder app-searcher-location-placeholder" />
                              </div>
                              <button type="submit" className="searcher__submit app-searcher-submit-tracking">
                                Rechercher      </button>
                            </form>
                          </div>
                          <div className="homeHeading__searcherButton">
                            <div className="app-searcher-category" data-action="https://www.mariages.net/busc.php">
                              <button className="button button--primary app-searcher-category-button app-searcher-category-tracking"><i className="svgIcon svgIcon__search "><svg viewBox="0 0 74 77"><path d="M49.35 48.835l23.262 23.328a2.316 2.316 0 11-3.28 3.27L45.865 51.901a28.534 28.534 0 01-17.13 5.683C12.867 57.584.014 44.7.014 28.8.014 12.896 12.865.015 28.735.015 44.593.015 57.446 12.9 57.446 28.8a28.728 28.728 0 01-8.097 20.035zM52.813 28.8c0-13.345-10.782-24.153-24.079-24.153-13.31 0-24.089 10.805-24.089 24.153 0 13.344 10.782 24.152 24.09 24.152 13.294 0 24.078-10.811 24.078-24.152z" fillRule="nonzero" /></svg></i> Rechercher des prestataires</button>
                            </div>
                          </div>
                        </div>
                      </header>
                      <section className="homeToolsCards">
                        <div className="homeToolsCards__heading app-tool-cards-tile app-start-now-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-login" data-track-v={0} data-track-ni={0}>
                          <div className="homeToolsCards__title">Planifiez votre mariage idéal</div>
                          <a href="/users-login.php" className="homeToolsCards__link app-tool-cards-tile-link">
                            Commencez maintenant<i className="svgIcon svgIcon__angleRight homeToolsCards__arrowIcon"><svg viewBox="0 0 9 16"><path d="M1.344.137l7.432 7.43a.502.502 0 01.232.381v.02a.499.499 0 01-.233.465l-7.431 7.43a.5.5 0 01-.707-.707L7.792 8 .637.844a.5.5 0 01.707-.707z" fillRule="nonzero" /></svg></i>      </a>
                        </div>
                        <div className="homeToolsCards__cardList">
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__search homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/search.svg" aria-hidden alt="illustration search" width={56} height={56}  />                
                            <a href="https://www.mariages.net/reception" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-vendors" data-track-v={0} data-track-ni={0}>
                              Réception              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__envelope homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/envelope.svg" aria-hidden alt="illustration envelope" width={56} height={56} />
                    
                                            <a href="https://faire-part.mariages.net" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-wedding_paper" data-track-v={0} data-track-ni={0}>
                              Faire-part              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__websites homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/websites.svg" aria-hidden alt="illustration websites" width={56} height={56}  />   
                            <a href="https://www.mariages.net/site-web-mariage" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-WWS" data-track-v={0} data-track-ni={0}>
                              Site de mariage              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__notebook homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/notebook.svg" aria-hidden alt="illustration notebook" width={56} height={56}  />               
                             <a href="https://www.mariages.net/wedding-planner" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-tools-main" data-track-v={0} data-track-ni={0}>
                              Planificateur              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__lightbulb homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/lightbulb.svg" aria-hidden alt="illustration lightbulb" width={56} height={56}  />                
                            <a href="https://www.mariages.net/articles" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-ideas" data-track-v={0} data-track-ni={0}>
                              Idées              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__dress homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/dress.svg" aria-hidden alt="illustration dress" width={56} height={56}  />                
                            <a href="https://www.mariages.net/robes-mariee" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-dresses" data-track-v={0} data-track-ni={0}>
                              Robes              </a>
                          </div>
                        </div>
                        <div className="homeToolsCards__extraLink">
                          <a href="https://www.mariages.net/tirageausort" className="app-prize-link-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-contest" data-track-v={0} data-track-ni={0}>
                            Gagnez 4.000 € pour votre mariage&nbsp;!                <img className="svgIcon svgIcon__confetti homeToolsCards__extraLinkIcon" src="https://cdn1.mariages.net/assets/svg/original/illustration/confetti.svg" aria-hidden alt="illustration confetti" width={56} height={56}  />     
                                 </a>
                        </div>
                      </section>
                      <section className="homeChoiceAwards">
                        <div className="homeChoiceAwards__heading">
                          <img src="https://cdn1.mariages.net/img/badges/2022/badge-weddingawards_fr_FR_small.jpg" srcSet="https://cdn1.mariages.net/img/badges/2022/badge-weddingawards_fr_FR_small.jpg 1x, https://cdn1.mariages.net/img/badges/2022/badge-weddingawards_fr_FR_small@2x.jpg 2x" alt="" className="homeChoiceAwards__image" />
                          <div>
                            <h2 className="homeChoiceAwards__title">Wedding Awards</h2>
                            <p>Découvrez les gagnants dans votre région</p>
                          </div>
                        </div>
                        <div className="homeFeaturedVendors__sliderContainer app-choice-awards-slider app-choice-awards-ajax" data-id-vendors="126649,190837,122739,134158,177661,155586,196197,153426,139004">
                          <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container homeChoiceAwards__slider" dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={0} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={1} data-overall-position={1} data-vendor-id={18831} data-storefront-id={1555} data-ec-name="Les Collines Iduki" data-cliente={1} data-id-directory-score={22235086} data-vendor-info="{&quot;vendorId&quot;:18831,&quot;price&quot;:&quot;3,500.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;La Bastide-Clairence&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Route de la c\u00f4te&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64240&quot;}}" id="vendorTile18831" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/8831/3_2/320/jpg/266_3_18831.webp 320w,
          https://cdn0.mariages.net/vendor/8831/3_2/640/jpg/266_3_18831.webp 640w,
          https://cdn0.mariages.net/vendor/8831/3_2/960/jpg/266_3_18831.webp 960w,
          https://cdn0.mariages.net/vendor/8831/3_2/1280/jpg/266_3_18831.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/8831/3_2/320/jpg/266_3_18831.jpeg 320w,
          https://cdn0.mariages.net/vendor/8831/3_2/640/jpg/266_3_18831.jpeg 640w,
          https://cdn0.mariages.net/vendor/8831/3_2/960/jpg/266_3_18831.jpeg 960w,
          https://cdn0.mariages.net/vendor/8831/3_2/1280/jpg/266_3_18831.jpeg 1280w" src="https://cdn0.mariages.net/vendor/8831/3_2/960/jpg/266_3_18831.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Les Collines Iduki" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={18831} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/les-collines-iduki--e18831">Les Collines Iduki</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 24 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(24)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>La Bastide-Clairence, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   3.500€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            65 - 200                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={1555} data-vendor-id={18831} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;18831&quot;,&quot;dimension16&quot;:&quot;1555&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={1} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={2} data-overall-position={2} data-vendor-id={125139} data-storefront-id={165527} data-ec-name="Music’Univers" data-cliente={1} data-id-directory-score={22236778} data-vendor-info="{&quot;vendorId&quot;:125139,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Lasseube&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Rue de l'\u00c9glise&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64290&quot;}}" id="vendorTile125139" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.webp 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.webp 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.webp 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.jpeg 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.jpeg 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.jpeg 1280w" src="https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Music’Univers" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={125139} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/music-univers--e125139">Music’Univers</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.5 sur 5, 19 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.5                      </span>(19)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Lasseube, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   990€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={165527} data-vendor-id={125139} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;125139&quot;,&quot;dimension16&quot;:&quot;165527&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={2} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={3} data-overall-position={3} data-vendor-id={194721} data-storefront-id={247509} data-ec-name="Olivier Peyre" data-cliente={1} data-id-directory-score={22240566} data-vendor-info="{&quot;vendorId&quot;:194721,&quot;price&quot;:&quot;1,090.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Urcuit&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Photo mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;403, Chemin Mendy&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64990&quot;}}" id="vendorTile194721" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Olivier Peyre" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={194721} data-id-sector={21} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/photo-mariage/olivier-peyre--e194721">Olivier Peyre</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 13 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(13)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Urcuit, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.090€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={247509} data-vendor-id={194721} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;194721&quot;,&quot;dimension16&quot;:&quot;247509&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={3} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={4} data-overall-position={4} data-vendor-id={182847} data-storefront-id={233259} data-ec-name="Say Yes" data-cliente={1} data-id-directory-score={22240012} data-vendor-info="{&quot;vendorId&quot;:182847,&quot;price&quot;:&quot;530.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arthez-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Route d'Artix&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64370&quot;}}" id="vendorTile182847" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/2847/3_2/320/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 320w,
          https://cdn0.mariages.net/vendor/2847/3_2/640/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 640w,
          https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 960w,
          https://cdn0.mariages.net/vendor/2847/3_2/1280/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/2847/3_2/320/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 320w,
          https://cdn0.mariages.net/vendor/2847/3_2/640/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 640w,
          https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 960w,
          https://cdn0.mariages.net/vendor/2847/3_2/1280/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 1280w" src="https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Say Yes" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={182847} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/say-yes--e182847">Say Yes</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 16 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(16)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Arthez-de-Béarn, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                1 promotion                                                                    <span className="vendorTileFooter__discount">-5%
                                              <span className="srOnly">Réduction</span>
                                            </span>
                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   530€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={233259} data-vendor-id={182847} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;182847&quot;,&quot;dimension16&quot;:&quot;233259&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>            <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={4} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={5} data-overall-position={5} data-vendor-id={126649} data-storefront-id={167188} data-ec-name="Délices en Cuisine" data-cliente={1} data-id-directory-score={22246160} data-vendor-info="{&quot;vendorId&quot;:126649,&quot;price&quot;:&quot;58.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Rue des Chasseurs&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile126649" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.webp 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.webp 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.webp 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.webp 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.webp 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.webp 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Délices en Cuisine" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 1280w" src="https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={126649} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/delices-en-cuisine--e126649" tabIndex={-1}>Délices en Cuisine</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.6 sur 5, 45 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.6                      </span>(45)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Pau, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   58€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            80 - 500                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={167188} data-vendor-id={126649} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;126649&quot;,&quot;dimension16&quot;:&quot;167188&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={5} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={6} data-overall-position={6} data-vendor-id={190837} data-storefront-id={242877} data-ec-name="La cuisine de Lucien" data-cliente={1} data-id-directory-score={22246593} data-vendor-info="{&quot;vendorId&quot;:190837,&quot;price&quot;:&quot;50.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Orthez&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;347, chemin de Bellegarde&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64300&quot;}}" id="vendorTile190837" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="La cuisine de Lucien" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 1280w" src="https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={190837} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/la-cuisine-de-lucien--e190837" tabIndex={-1}>La cuisine de Lucien</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.9 sur 5, 43 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.9                      </span>(43)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Orthez, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   50€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            40 - 500                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={242877} data-vendor-id={190837} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;190837&quot;,&quot;dimension16&quot;:&quot;242877&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={6} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={7} data-overall-position={7} data-vendor-id={122739} data-storefront-id={163049} data-ec-name="Sébastien Ceresuela" data-cliente={1} data-id-directory-score={22236684} data-vendor-info="{&quot;vendorId&quot;:122739,&quot;price&quot;:&quot;1,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;15, Boulevard Des Couettes&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile122739" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/2739/3_2/320/jpg/150_3_122739_v2.webp 320w,
          https://cdn0.mariages.net/vendor/2739/3_2/640/jpg/150_3_122739_v2.webp 640w,
          https://cdn0.mariages.net/vendor/2739/3_2/960/jpg/150_3_122739_v2.webp 960w,
          https://cdn0.mariages.net/vendor/2739/3_2/1280/jpg/150_3_122739_v2.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/2739/3_2/320/jpg/150_3_122739_v2.jpeg 320w,
          https://cdn0.mariages.net/vendor/2739/3_2/640/jpg/150_3_122739_v2.jpeg 640w,
          https://cdn0.mariages.net/vendor/2739/3_2/960/jpg/150_3_122739_v2.jpeg 960w,
          https://cdn0.mariages.net/vendor/2739/3_2/1280/jpg/150_3_122739_v2.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/2739/3_2/960/jpg/150_3_122739_v2.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Sébastien Ceresuela" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={122739} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/sebastien-ceresuela--e122739" tabIndex={-1}>Sébastien Ceresuela</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 38 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(38)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Pau, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.200€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={163049} data-vendor-id={122739} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;122739&quot;,&quot;dimension16&quot;:&quot;163049&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={7} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={8} data-overall-position={8} data-vendor-id={134158} data-storefront-id={175292} data-ec-name="DML Traiteur" data-cliente={1} data-id-directory-score={22246223} data-vendor-info="{&quot;vendorId&quot;:134158,&quot;price&quot;:&quot;45.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Poey-de-Lescar&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;3, rue Principale&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64230&quot;}}" id="vendorTile134158" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/4158/3_2/320/jpg/1497_3_134158.webp 320w,
          https://cdn0.mariages.net/vendor/4158/3_2/640/jpg/1497_3_134158.webp 640w,
          https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.webp 960w,
          https://cdn0.mariages.net/vendor/4158/3_2/1280/jpg/1497_3_134158.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/4158/3_2/320/jpg/1497_3_134158.jpeg 320w,
          https://cdn0.mariages.net/vendor/4158/3_2/640/jpg/1497_3_134158.jpeg 640w,
          https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.jpeg 960w,
          https://cdn0.mariages.net/vendor/4158/3_2/1280/jpg/1497_3_134158.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="DML Traiteur" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={134158} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/dml-traiteur--e134158" tabIndex={-1}>DML Traiteur</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 88 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(88)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Poey-de-Lescar, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                2 promotions                                                                    <span className="vendorTileFooter__discount">-5%
                                              <span className="srOnly">Réduction</span>
                                            </span>
                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   45€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            50 - 500                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={175292} data-vendor-id={134158} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;134158&quot;,&quot;dimension16&quot;:&quot;175292&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={8} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={9} data-overall-position={9} data-vendor-id={177661} data-storefront-id={226645} data-ec-name="ADquat Traiteur" data-cliente={1} data-id-directory-score={22246524} data-vendor-info="{&quot;vendorId&quot;:177661,&quot;price&quot;:&quot;50.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Pau&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile177661" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7661/3_2/320/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.webp 320w,
          https://cdn0.mariages.net/vendor/7661/3_2/640/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.webp 640w,
          https://cdn0.mariages.net/vendor/7661/3_2/960/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.webp 960w,
          https://cdn0.mariages.net/vendor/7661/3_2/1280/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7661/3_2/320/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.jpeg 320w,
          https://cdn0.mariages.net/vendor/7661/3_2/640/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.jpeg 640w,
          https://cdn0.mariages.net/vendor/7661/3_2/960/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.jpeg 960w,
          https://cdn0.mariages.net/vendor/7661/3_2/1280/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7661/3_2/960/jpg/les-fraicheurs-de-lete-2-melon-menthe-sake_3_177661.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="ADquat Traiteur" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={177661} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/adquat-traiteur--e177661" tabIndex={-1}>ADquat Traiteur</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 31 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(31)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Pau, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   50€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            40 - 300                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={226645} data-vendor-id={177661} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;177661&quot;,&quot;dimension16&quot;:&quot;226645&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={9} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={10} data-overall-position={10} data-vendor-id={155586} data-storefront-id={199468} data-ec-name="GLX Évènementiel" data-cliente={1} data-id-directory-score={22238708} data-vendor-info="{&quot;vendorId&quot;:155586,&quot;price&quot;:&quot;1,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Bardos&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;219 route d'or\u00e8gue&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64520&quot;}}" id="vendorTile155586" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/5586/3_2/320/jpg/20180708-041424_3_155586.webp 320w,
          https://cdn0.mariages.net/vendor/5586/3_2/640/jpg/20180708-041424_3_155586.webp 640w,
          https://cdn0.mariages.net/vendor/5586/3_2/960/jpg/20180708-041424_3_155586.webp 960w,
          https://cdn0.mariages.net/vendor/5586/3_2/1280/jpg/20180708-041424_3_155586.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/5586/3_2/320/jpg/20180708-041424_3_155586.jpeg 320w,
          https://cdn0.mariages.net/vendor/5586/3_2/640/jpg/20180708-041424_3_155586.jpeg 640w,
          https://cdn0.mariages.net/vendor/5586/3_2/960/jpg/20180708-041424_3_155586.jpeg 960w,
          https://cdn0.mariages.net/vendor/5586/3_2/1280/jpg/20180708-041424_3_155586.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/5586/3_2/960/jpg/20180708-041424_3_155586.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="GLX Évènementiel" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={155586} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/glx-evenementiel--e155586" tabIndex={-1}>GLX Évènementiel</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 38 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(38)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Bardos, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                1 promotion                                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.200€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={199468} data-vendor-id={155586} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;155586&quot;,&quot;dimension16&quot;:&quot;199468&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={10} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={11} data-overall-position={11} data-vendor-id={196197} data-storefront-id={249313} data-ec-name="Christophe Simon" data-cliente={1} data-id-directory-score={22246618} data-vendor-info="{&quot;vendorId&quot;:196197,&quot;price&quot;:&quot;40.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arthez-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Chemin Dous Milhoucas&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64370&quot;}}" id="vendorTile196197" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.webp 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.webp 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.webp 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.jpeg 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.jpeg 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Christophe Simon" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={196197} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/christophe-simon--e196197" tabIndex={-1}>Christophe Simon</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 15 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(15)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Arthez-de-Béarn, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   40€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            10 - 500                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={249313} data-vendor-id={196197} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;196197&quot;,&quot;dimension16&quot;:&quot;249313&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={11} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={12} data-overall-position={12} data-vendor-id={153426} data-storefront-id={196830} data-ec-name="Pascal Discomobile" data-cliente={1} data-id-directory-score={22238614} data-vendor-info="{&quot;vendorId&quot;:153426,&quot;price&quot;:&quot;890.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;12, Rue Alfred Leblanc&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile153426" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/3426/3_2/320/jpg/p1010323_3_153426-1562091959.webp 320w,
          https://cdn0.mariages.net/vendor/3426/3_2/640/jpg/p1010323_3_153426-1562091959.webp 640w,
          https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.webp 960w,
          https://cdn0.mariages.net/vendor/3426/3_2/1280/jpg/p1010323_3_153426-1562091959.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/3426/3_2/320/jpg/p1010323_3_153426-1562091959.jpeg 320w,
          https://cdn0.mariages.net/vendor/3426/3_2/640/jpg/p1010323_3_153426-1562091959.jpeg 640w,
          https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.jpeg 960w,
          https://cdn0.mariages.net/vendor/3426/3_2/1280/jpg/p1010323_3_153426-1562091959.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Pascal Discomobile" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={153426} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/pascal-discomobile--e153426" tabIndex={-1}>Pascal Discomobile</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.7 sur 5, 31 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.7                      </span>(31)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Pau, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                5 promotions                                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   890€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={196830} data-vendor-id={153426} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;153426&quot;,&quot;dimension16&quot;:&quot;196830&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={12} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={13} data-overall-position={13} data-vendor-id={139004} data-storefront-id={180472} data-ec-name="Stéphane Noël" data-cliente={1} data-id-directory-score={22246280} data-vendor-info="{&quot;vendorId&quot;:139004,&quot;price&quot;:&quot;59.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Bardos&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Impasse Larrabure&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64520&quot;}}" id="vendorTile139004" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/9004/3_2/320/jpeg/image_3_139004_v6.webp 320w,
          https://cdn0.mariages.net/vendor/9004/3_2/640/jpeg/image_3_139004_v6.webp 640w,
          https://cdn0.mariages.net/vendor/9004/3_2/960/jpeg/image_3_139004_v6.webp 960w,
          https://cdn0.mariages.net/vendor/9004/3_2/1280/jpeg/image_3_139004_v6.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/9004/3_2/320/jpeg/image_3_139004_v6.jpeg 320w,
          https://cdn0.mariages.net/vendor/9004/3_2/640/jpeg/image_3_139004_v6.jpeg 640w,
          https://cdn0.mariages.net/vendor/9004/3_2/960/jpeg/image_3_139004_v6.jpeg 960w,
          https://cdn0.mariages.net/vendor/9004/3_2/1280/jpeg/image_3_139004_v6.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/9004/3_2/960/jpeg/image_3_139004_v6.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Stéphane Noël" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={139004} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/stephane-noel--e139004" tabIndex={-1}>Stéphane Noël</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 56 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(56)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Bardos, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   59€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            80 - 200                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={180472} data-vendor-id={139004} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;139004&quot;,&quot;dimension16&quot;:&quot;180472&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li></ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                          </div>
                        </div>
                        <div className="homeChoiceAwards__button app-choice-awards-view-all-tracking">
                          <a href="https://www.mariages.net/wedding-awards" className="button button--tertiary" title="Découvrir tous les gagnants">Découvrir tous les gagnants<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i></a>
                        </div>  </section>
                      <section className="homeFeaturedVendors">
                        <h2 className="homeFeaturedVendors__title">Entreprises sélectionnées</h2>
                        <div className="homeFeaturedVendors__sliderContainer app-home-featured-vendors-slider app-home-featured-vendors-ajax" data-id-vendors="150610,10619,174949,15946,156926,22068,128737,200593,147759,15952,7808,187153,178977">
                          <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev" aria-disabled="false"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container homeFeaturedVendors__slider" dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={0} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={1} data-overall-position={1} data-vendor-id={272219} data-storefront-id={337457} data-ec-name="Domaine de Landrevie" data-cliente={1} data-id-directory-score={22245728} data-vendor-info="{&quot;vendorId&quot;:272219,&quot;price&quot;:&quot;3,500.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Saint-Geyrac&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;185, Route de Landrevie&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24330&quot;}}" id="vendorTile272219" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/2219/3_2/320/jpg/dpp-97_3_272219-165661043040659.webp 320w,
          https://cdn0.mariages.net/vendor/2219/3_2/640/jpg/dpp-97_3_272219-165661043040659.webp 640w,
          https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.webp 960w,
          https://cdn0.mariages.net/vendor/2219/3_2/1280/jpg/dpp-97_3_272219-165661043040659.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/2219/3_2/320/jpg/dpp-97_3_272219-165661043040659.jpeg 320w,
          https://cdn0.mariages.net/vendor/2219/3_2/640/jpg/dpp-97_3_272219-165661043040659.jpeg 640w,
          https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.jpeg 960w,
          https://cdn0.mariages.net/vendor/2219/3_2/1280/jpg/dpp-97_3_272219-165661043040659.jpeg 1280w" src="https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de Landrevie" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={272219} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/domaine-de-landrevie--e272219" tabIndex={-1}>Domaine de Landrevie</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot" />Saint-Geyrac, Dordogne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                1 promotion                                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   3.500€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            40 - 120                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={337457} data-vendor-id={272219} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;272219&quot;,&quot;dimension16&quot;:&quot;337457&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={1} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={2} data-overall-position={2} data-vendor-id={7570} data-storefront-id={503} data-ec-name="Domaine de Montplaisir" data-cliente={1} data-id-directory-score={22234965} data-vendor-info="{&quot;vendorId&quot;:7570,&quot;price&quot;:&quot;3,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Condat-sur-Trincou&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Montplaisir&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24530&quot;}}" id="vendorTile7570" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/7570/3_2/320/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 320w,
          https://cdn0.mariages.net/vendor/7570/3_2/640/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 640w,
          https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 960w,
          https://cdn0.mariages.net/vendor/7570/3_2/1280/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/7570/3_2/320/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 320w,
          https://cdn0.mariages.net/vendor/7570/3_2/640/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 640w,
          https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 960w,
          https://cdn0.mariages.net/vendor/7570/3_2/1280/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 1280w" src="https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de Montplaisir" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={7570} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/domaine-de-montplaisir--e7570" tabIndex={-1}>Domaine de Montplaisir</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.9 sur 5, 26 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.9                      </span>(26)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Condat-sur-Trincou, Dordogne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   3.200€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            40 - 250                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={503} data-vendor-id={7570} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;7570&quot;,&quot;dimension16&quot;:&quot;503&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={2} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={3} data-overall-position={3} data-vendor-id={134546} data-storefront-id={175718} data-ec-name="Urtubien Borda" data-cliente={1} data-id-directory-score={22237392} data-vendor-info="{&quot;vendorId&quot;:134546,&quot;price&quot;:&quot;1.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Urrugne&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Salle mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;290,  Chemin Inzola&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64122&quot;}}" id="vendorTile134546" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/4546/3_2/320/png/pour-les-grands-moments.webp 320w,
          https://cdn0.mariages.net/vendor/4546/3_2/640/png/pour-les-grands-moments.webp 640w,
          https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.webp 960w,
          https://cdn0.mariages.net/vendor/4546/3_2/1280/png/pour-les-grands-moments.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/4546/3_2/320/png/pour-les-grands-moments.jpeg 320w,
          https://cdn0.mariages.net/vendor/4546/3_2/640/png/pour-les-grands-moments.jpeg 640w,
          https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.jpeg 960w,
          https://cdn0.mariages.net/vendor/4546/3_2/1280/png/pour-les-grands-moments.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Urtubien Borda" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={134546} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/salle-mariage/urtubien-borda--e134546" tabIndex={-1}>Urtubien Borda</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.7 sur 5, 20 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.7                      </span>(20)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Urrugne, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            50 - 170                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={175718} data-vendor-id={134546} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;134546&quot;,&quot;dimension16&quot;:&quot;175718&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={3} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={4} data-overall-position={4} data-vendor-id={118687} data-storefront-id={158835} data-ec-name="Hôtel Du Parc" data-cliente={1} data-id-directory-score={22236548} data-vendor-info="{&quot;vendorId&quot;:118687,&quot;price&quot;:&quot;60.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Salies-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Boulevard Saint Guily&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64270&quot;}}" id="vendorTile118687" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/8687/3_2/320/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 320w,
          https://cdn0.mariages.net/vendor/8687/3_2/640/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 640w,
          https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 960w,
          https://cdn0.mariages.net/vendor/8687/3_2/1280/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/8687/3_2/320/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 320w,
          https://cdn0.mariages.net/vendor/8687/3_2/640/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 640w,
          https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 960w,
          https://cdn0.mariages.net/vendor/8687/3_2/1280/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 1280w" src="https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Hôtel Du Parc" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={118687} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/hotel-du-parc--e118687">Hôtel Du Parc</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.8 sur 5, 7 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.8                      </span>(7)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Salies-de-Béarn, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__menus-price vendorTile__icon"><svg viewBox="0 0 18 13"><path d="M9 0a1.603 1.603 0 011.413 2.36 7.153 7.153 0 015.721 6.517h1.373a.493.493 0 01.088.978l-.088.008h-.477l-.893 1.34c-.335.504-.88.822-1.477.872l-.164.007H3.504a1.973 1.973 0 01-1.545-.746l-.096-.133-.894-1.34H.493a.493.493 0 01-.485-.405L0 9.37c0-.242.174-.444.405-.485l.088-.008h1.373a7.154 7.154 0 015.721-6.518A1.603 1.603 0 019 0zm6.845 9.863H2.155l.528.793c.16.24.416.397.698.432l.123.008h10.992c.289 0 .56-.126.746-.342l.075-.098.528-.793zM9 3.205a6.165 6.165 0 00-6.145 5.672h12.29A6.165 6.165 0 009 3.205zm0 .863a.493.493 0 110 .987 4.29 4.29 0 00-2.073.53.493.493 0 01-.475-.864 5.276 5.276 0 012.549-.653zM9 .986A.616.616 0 109 2.22.616.616 0 009 .986z" /></svg></i>                                                        À partir de   60€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            30 - 130                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={158835} data-vendor-id={118687} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;118687&quot;,&quot;dimension16&quot;:&quot;158835&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>            <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={4} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={5} data-overall-position={5} data-vendor-id={150610} data-storefront-id={193518} data-ec-name="Château La Grave Bechade" data-cliente={1} data-id-directory-score={22238482} data-vendor-info="{&quot;vendorId&quot;:150610,&quot;price&quot;:&quot;1,500.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Baleyssagues&quot;,&quot;region&quot;:&quot;Lot-et-Garonne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Lieu-dit La Grave&quot;,&quot;city&quot;:&quot;Lot-et-Garonne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;47120&quot;}}" id="vendorTile150610" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.webp 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.webp 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.webp 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.webp 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.webp 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.webp 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.jpeg 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.jpeg 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château La Grave Bechade" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.jpeg 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.jpeg 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.jpeg 1280w" src="https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={150610} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-la-grave-bechade--e150610">Château La Grave Bechade</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.7 sur 5, 7 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.7                      </span>(7)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Baleyssagues, Lot-et-Garonne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.500€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            10 - 130                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={193518} data-vendor-id={150610} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;150610&quot;,&quot;dimension16&quot;:&quot;193518&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={5} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={6} data-overall-position={6} data-vendor-id={10619} data-storefront-id={66928} data-ec-name="Château de Lantic" data-cliente={1} data-id-directory-score={22235785} data-vendor-info="{&quot;vendorId&quot;:10619,&quot;price&quot;:&quot;2,600.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Martillac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;10, Route de Lartigue&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33650&quot;}}" id="vendorTile10619" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château de Lantic" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 1280w" src="https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={10619} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-de-lantic--e10619">Château de Lantic</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.0 sur 5, 29 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.0                      </span>(29)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Martillac, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.600€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            70 - 180                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={66928} data-vendor-id={10619} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;10619&quot;,&quot;dimension16&quot;:&quot;66928&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={6} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={7} data-overall-position={7} data-vendor-id={174949} data-storefront-id={223111} data-ec-name="Le Caillavet" data-cliente={1} data-id-directory-score={22239633} data-vendor-info="{&quot;vendorId&quot;:174949,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Saint-Aubin-de-M\u00e9doc&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Route de Lacanau&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33160&quot;}}" id="vendorTile174949" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.webp 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.webp 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.webp 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.webp 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.webp 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.webp 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.jpeg 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.jpeg 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Le Caillavet" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.jpeg 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.jpeg 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={174949} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/le-caillavet--e174949">Le Caillavet</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.8 sur 5, 13 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.8                      </span>(13)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Saint-Aubin-de-Médoc, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.000€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            60 - 180                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={223111} data-vendor-id={174949} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;174949&quot;,&quot;dimension16&quot;:&quot;223111&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={7} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={8} data-overall-position={8} data-vendor-id={15946} data-storefront-id={67080} data-ec-name="Château d'Aubiac en Gascogne" data-cliente={1} data-id-directory-score={22235810} data-vendor-info="{&quot;vendorId&quot;:15946,&quot;price&quot;:&quot;2,400.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Aubiac&quot;,&quot;region&quot;:&quot;Lot-et-Garonne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Ch\u00e2teau d'Aubiac&quot;,&quot;city&quot;:&quot;Lot-et-Garonne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;47310&quot;}}" id="vendorTile15946" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.webp 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.webp 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.webp 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.webp 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.webp 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.webp 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.jpeg 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.jpeg 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château d'Aubiac en Gascogne" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.jpeg 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.jpeg 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.jpeg 1280w" src="https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={15946} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-daubiac-en-gascogne--e15946" tabIndex={-1}>Château d'Aubiac en Gascogne</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.6 sur 5, 31 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.6                      </span>(31)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Aubiac, Lot-et-Garonne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.400€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            20 - 200                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={67080} data-vendor-id={15946} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;15946&quot;,&quot;dimension16&quot;:&quot;67080&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={8} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={9} data-overall-position={9} data-vendor-id={156926} data-storefront-id={201102} data-ec-name="Théâtre de la Nature d'Arcangues" data-cliente={1} data-id-directory-score={22238769} data-vendor-info="{&quot;vendorId&quot;:156926,&quot;price&quot;:&quot;1,800.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arcangues&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Salle mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Le Bourg&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64200&quot;}}" id="vendorTile156926" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.webp 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.webp 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.webp 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.webp 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.webp 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.webp 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.jpeg 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.jpeg 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Théâtre de la Nature d'Arcangues" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.jpeg 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.jpeg 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.jpeg 1280w" src="https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={156926} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/salle-mariage/theatre-de-la-nature-darcangues--e156926" tabIndex={-1}>Théâtre de la Nature d'Arcangues</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.6 sur 5, 5 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.6                      </span>(5)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Arcangues, Pyrénées-Atlantiques</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.800€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            50 - 500                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={201102} data-vendor-id={156926} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;156926&quot;,&quot;dimension16&quot;:&quot;201102&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={9} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={10} data-overall-position={10} data-vendor-id={22068} data-storefront-id={36094} data-ec-name="Kreativ Events" data-cliente={1} data-id-directory-score={22235397} data-vendor-info="{&quot;vendorId&quot;:22068,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Barsac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;51, Rue du Onze Novembre 1918&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33720&quot;}}" id="vendorTile22068" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/2068/3_2/320/jpg/20170617-155138_3_22068.webp 320w,
          https://cdn0.mariages.net/vendor/2068/3_2/640/jpg/20170617-155138_3_22068.webp 640w,
          https://cdn0.mariages.net/vendor/2068/3_2/960/jpg/20170617-155138_3_22068.webp 960w,
          https://cdn0.mariages.net/vendor/2068/3_2/1280/jpg/20170617-155138_3_22068.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/2068/3_2/320/jpg/20170617-155138_3_22068.jpeg 320w,
          https://cdn0.mariages.net/vendor/2068/3_2/640/jpg/20170617-155138_3_22068.jpeg 640w,
          https://cdn0.mariages.net/vendor/2068/3_2/960/jpg/20170617-155138_3_22068.jpeg 960w,
          https://cdn0.mariages.net/vendor/2068/3_2/1280/jpg/20170617-155138_3_22068.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/2068/3_2/960/jpg/20170617-155138_3_22068.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Kreativ Events" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={22068} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/kreativ-events--e22068" tabIndex={-1}>Kreativ Events</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.9 sur 5, 40 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.9                      </span>(40)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Barsac, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                2 promotions                                                                    <span className="vendorTileFooter__discount">-10%
                                              <span className="srOnly">Réduction</span>
                                            </span>
                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   990€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={36094} data-vendor-id={22068} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;22068&quot;,&quot;dimension16&quot;:&quot;36094&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={10} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={11} data-overall-position={11} data-vendor-id={128737} data-storefront-id={169479} data-ec-name="Photo Breje" data-cliente={1} data-id-directory-score={22236991} data-vendor-info="{&quot;vendorId&quot;:128737,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Dax&quot;,&quot;region&quot;:&quot;Landes&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Photo mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;12, Rue des Boutons d'Or&quot;,&quot;city&quot;:&quot;Landes&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;40100&quot;}}" id="vendorTile128737" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/8737/3_2/320/jpg/d71-0713_3_128737-165052669088477.webp 320w,
          https://cdn0.mariages.net/vendor/8737/3_2/640/jpg/d71-0713_3_128737-165052669088477.webp 640w,
          https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.webp 960w,
          https://cdn0.mariages.net/vendor/8737/3_2/1280/jpg/d71-0713_3_128737-165052669088477.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/8737/3_2/320/jpg/d71-0713_3_128737-165052669088477.jpeg 320w,
          https://cdn0.mariages.net/vendor/8737/3_2/640/jpg/d71-0713_3_128737-165052669088477.jpeg 640w,
          https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.jpeg 960w,
          https://cdn0.mariages.net/vendor/8737/3_2/1280/jpg/d71-0713_3_128737-165052669088477.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Photo Breje" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={128737} data-id-sector={21} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/photo-mariage/photo-breje--e128737" tabIndex={-1}>Photo Breje</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 9 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(9)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Dax, Landes</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                1 promotion                                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   990€                      </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={169479} data-vendor-id={128737} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;128737&quot;,&quot;dimension16&quot;:&quot;169479&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={11} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={12} data-overall-position={12} data-vendor-id={200593} data-storefront-id={254737} data-ec-name="Château Haut Breton Larigaudière" data-cliente={1} data-id-directory-score={22246992} data-vendor-info="{&quot;vendorId&quot;:200593,&quot;price&quot;:&quot;1,700.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Soussans&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;3, Rue des Anciens Combattants&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33460&quot;}}" id="vendorTile200593" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/0593/3_2/320/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.webp 320w,
          https://cdn0.mariages.net/vendor/0593/3_2/640/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.webp 640w,
          https://cdn0.mariages.net/vendor/0593/3_2/960/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.webp 960w,
          https://cdn0.mariages.net/vendor/0593/3_2/1280/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/0593/3_2/320/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.jpeg 320w,
          https://cdn0.mariages.net/vendor/0593/3_2/640/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.jpeg 640w,
          https://cdn0.mariages.net/vendor/0593/3_2/960/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.jpeg 960w,
          https://cdn0.mariages.net/vendor/0593/3_2/1280/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/0593/3_2/960/jpg/chteau-haut-breton-larigaudiere_3_200593-157841231658225.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château Haut Breton Larigaudière" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={200593} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-haut-breton-larigaudiere--e200593" tabIndex={-1}>Château Haut Breton Larigaudière</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot" />Soussans, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__deals">
                                          <span className="vendorTileFooter__dealsContent ">
                                            <i className="svgIcon svgIcon__promosTag vendorTile__icon"><svg viewBox="0 0 33 33"><path d="M.81 19.941a2.764 2.764 0 01.015-3.924L16.295.792A2.77 2.77 0 0118.232 0h12.004A2.764 2.764 0 0133 2.765v12.003c0 .726-.285 1.423-.794 1.938l-15.22 15.469a2.766 2.766 0 01-3.927.015L.81 19.941zm1.414-1.414l12.25 12.249c.3.3.788.298 1.086-.004l15.222-15.47a.759.759 0 00.218-.534V2.765A.765.765 0 0030.236 2H18.232c-.2 0-.393.08-.536.22L2.228 17.441a.764.764 0 00-.004 1.085v.001zM19 9.999A4 4 0 1127 10a4 4 0 11-8 0v-.001zm2 0V10a2 2 0 104 .001 2 2 0 00-4-.002z" fillRule="nonzero" /></svg></i>                                1 promotion                                                          </span>
                                        </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   1.700€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            1 - 150                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={254737} data-vendor-id={200593} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;200593&quot;,&quot;dimension16&quot;:&quot;254737&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={12} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={13} data-overall-position={13} data-vendor-id={147759} data-storefront-id={190304} data-ec-name="Domaine de la Fauconnie *****" data-cliente={1} data-id-directory-score={22238252} data-vendor-info="{&quot;vendorId&quot;:147759,&quot;price&quot;:&quot;5,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Campsegret&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Domaine de la Fauconnie&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24140&quot;}}" id="vendorTile147759" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.webp 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.webp 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.webp 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.jpeg 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.jpeg 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de la Fauconnie *****" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={147759} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/domaine-de-la-fauconnie--e147759" tabIndex={-1}>Domaine de la Fauconnie *****</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 44 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(44)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Campsegret, Dordogne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   5.000€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            80 - 200                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={190304} data-vendor-id={147759} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;147759&quot;,&quot;dimension16&quot;:&quot;190304&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={13} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={14} data-overall-position={14} data-vendor-id={15952} data-storefront-id={67083} data-ec-name="Château d'Agassac" data-cliente={1} data-id-directory-score={22235811} data-vendor-info="{&quot;vendorId&quot;:15952,&quot;price&quot;:&quot;2,835.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Ludon-M\u00e9doc&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;15, Rue du Ch\u00e2teau d\u2019Agassac&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33290&quot;}}" id="vendorTile15952" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/5952/3_2/320/jpg/t30-151346_3_15952.webp 320w,
          https://cdn0.mariages.net/vendor/5952/3_2/640/jpg/t30-151346_3_15952.webp 640w,
          https://cdn0.mariages.net/vendor/5952/3_2/960/jpg/t30-151346_3_15952.webp 960w,
          https://cdn0.mariages.net/vendor/5952/3_2/1280/jpg/t30-151346_3_15952.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/5952/3_2/320/jpg/t30-151346_3_15952.jpeg 320w,
          https://cdn0.mariages.net/vendor/5952/3_2/640/jpg/t30-151346_3_15952.jpeg 640w,
          https://cdn0.mariages.net/vendor/5952/3_2/960/jpg/t30-151346_3_15952.jpeg 960w,
          https://cdn0.mariages.net/vendor/5952/3_2/1280/jpg/t30-151346_3_15952.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/5952/3_2/960/jpg/t30-151346_3_15952.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château d'Agassac" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={15952} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-dagassac--e15952" tabIndex={-1}>Château d'Agassac</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.2 sur 5, 9 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.2                      </span>(9)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Ludon-Médoc, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.835€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            30 - 250                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={67083} data-vendor-id={15952} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;15952&quot;,&quot;dimension16&quot;:&quot;67083&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={14} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={15} data-overall-position={15} data-vendor-id={7808} data-storefront-id={539} data-ec-name="Les Jardins du Manoir d'Eyrignac" data-cliente={1} data-id-directory-score={22234975} data-vendor-info="{&quot;vendorId&quot;:7808,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Salignac-Eyvigues&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Les jardins du Manoir d'Eyrignac&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24590&quot;}}" id="vendorTile7808" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7808/3_2/320/jpg/2013-08-31-21-35-14_3_7808.webp 320w,
          https://cdn0.mariages.net/vendor/7808/3_2/640/jpg/2013-08-31-21-35-14_3_7808.webp 640w,
          https://cdn0.mariages.net/vendor/7808/3_2/960/jpg/2013-08-31-21-35-14_3_7808.webp 960w,
          https://cdn0.mariages.net/vendor/7808/3_2/1280/jpg/2013-08-31-21-35-14_3_7808.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7808/3_2/320/jpg/2013-08-31-21-35-14_3_7808.jpeg 320w,
          https://cdn0.mariages.net/vendor/7808/3_2/640/jpg/2013-08-31-21-35-14_3_7808.jpeg 640w,
          https://cdn0.mariages.net/vendor/7808/3_2/960/jpg/2013-08-31-21-35-14_3_7808.jpeg 960w,
          https://cdn0.mariages.net/vendor/7808/3_2/1280/jpg/2013-08-31-21-35-14_3_7808.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7808/3_2/960/jpg/2013-08-31-21-35-14_3_7808.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Les Jardins du Manoir d'Eyrignac" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={7808} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/les-jardins-du-manoir-deyrignac--e7808" tabIndex={-1}>Les Jardins du Manoir d'Eyrignac</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.8 sur 5, 39 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.8                      </span>(39)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Salignac-Eyvigues, Dordogne</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.000€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            50 - 400                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={539} data-vendor-id={7808} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;7808&quot;,&quot;dimension16&quot;:&quot;539&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={15} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={16} data-overall-position={16} data-vendor-id={187153} data-storefront-id={238547} data-ec-name="L'Airial des Monges" data-cliente={1} data-id-directory-score={22240207} data-vendor-info="{&quot;vendorId&quot;:187153,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Marions&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Les Monges&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33690&quot;}}" id="vendorTile187153" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7153/3_2/320/jpg/img-2467_3_187153-1559719580.webp 320w,
          https://cdn0.mariages.net/vendor/7153/3_2/640/jpg/img-2467_3_187153-1559719580.webp 640w,
          https://cdn0.mariages.net/vendor/7153/3_2/960/jpg/img-2467_3_187153-1559719580.webp 960w,
          https://cdn0.mariages.net/vendor/7153/3_2/1280/jpg/img-2467_3_187153-1559719580.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7153/3_2/320/jpg/img-2467_3_187153-1559719580.jpeg 320w,
          https://cdn0.mariages.net/vendor/7153/3_2/640/jpg/img-2467_3_187153-1559719580.jpeg 640w,
          https://cdn0.mariages.net/vendor/7153/3_2/960/jpg/img-2467_3_187153-1559719580.jpeg 960w,
          https://cdn0.mariages.net/vendor/7153/3_2/1280/jpg/img-2467_3_187153-1559719580.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7153/3_2/960/jpg/img-2467_3_187153-1559719580.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="L'Airial des Monges" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={187153} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/lairial-des-monges--e187153" tabIndex={-1}>L'Airial des Monges</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 4.9 sur 5, 4 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>4.9                      </span>(4)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Marions, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.000€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            25 - 120                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={238547} data-vendor-id={187153} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;187153&quot;,&quot;dimension16&quot;:&quot;238547&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={16} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={17} data-overall-position={17} data-vendor-id={178977} data-storefront-id={228597} data-ec-name="Château de Camarsac" data-cliente={1} data-id-directory-score={22246532} data-vendor-info="{&quot;vendorId&quot;:178977,&quot;price&quot;:&quot;2,300.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Camarsac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;30, Route de Bergerac&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33750&quot;}}" id="vendorTile178977" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.webp 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.webp 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.webp 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.jpeg 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.jpeg 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château de Camarsac" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={178977} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__tour3D multimedia__icon"><svg viewBox="0 0 36 36"><g fillRule="evenodd"><path d="M9.611 21.557a3.101 3.101 0 01-2.174-.902l-.875 1.13a3.914 3.914 0 003.108 1.28c1.888 0 3.098-.992 3.098-2.33a1.975 1.975 0 00-1.839-1.905 1.976 1.976 0 001.721-1.815c0-1.319-1.13-2.153-2.95-2.153a3.92 3.92 0 00-3.01 1.26l.836 1.062a2.829 2.829 0 011.967-.823c.826 0 1.465.316 1.465.991s-.58.843-1.455.843H8.52v1.528h.984c1.101 0 1.583.287 1.583.912s-.52.922-1.475.922M16.9 19.206c.756 0 1.464.357 1.464 1.191a1.27 1.27 0 01-1.374 1.164c-.01 0-.02-.002-.032-.004a1.589 1.589 0 01-1.593-1.606c.373-.47.937-.744 1.534-.745m.433-2.845a2.074 2.074 0 011.564.624l.757-1.299a3.54 3.54 0 00-2.32-.824c-2.332 0-3.67 1.706-3.67 4.107 0 2.232.984 4.096 3.393 4.096a2.768 2.768 0 003.01-2.727c.03-1.392-1.063-2.544-2.442-2.576a2.982 2.982 0 00-.233.006 2.57 2.57 0 00-2.026.993.947.947 0 010-.169 2.077 2.077 0 011.91-2.228l.057-.003M22.535 18.96c0-1.47.423-2.6 1.554-2.6 1.132 0 1.545 1.13 1.545 2.6 0 1.466-.423 2.597-1.545 2.597-1.121 0-1.554-1.14-1.554-2.598m4.81 0c0-2.053-.984-4.096-3.256-4.096s-3.255 2.043-3.255 4.096.983 4.105 3.255 4.105 3.256-2.063 3.256-4.105M28.731 16.638a.693.693 0 01.67-.704.71.71 0 01.697.704.68.68 0 01-.687.675h-.01a.662.662 0 01-.67-.655v-.02zm2.43 0c0-.975-.784-1.766-1.75-1.766a1.758 1.758 0 00-1.752 1.764v.002a1.76 1.76 0 001.752 1.765c.966 0 1.75-.79 1.75-1.765z" /><path d="M29.704 31.172A17.362 17.362 0 0118 35.697c-9.667 0-17.5-7.9-17.5-17.64 0-2.685.597-5.288 1.73-7.656a1 1 0 111.804.864A15.69 15.69 0 002.5 18.057c0 8.64 6.942 15.64 15.5 15.64 3.621 0 7.042-1.259 9.768-3.495l-1.767.068a1 1 0 11-.077-1.998l4.669-.18a1 1 0 011.038.963l.176 5.003a1 1 0 01-2 .07l-.103-2.956zM6.474 4.785A17.358 17.358 0 0118 .42c9.667 0 17.5 7.899 17.5 17.638 0 2.648-.58 5.216-1.682 7.557a1 1 0 01-1.81-.852 15.698 15.698 0 001.492-6.705C33.5 9.42 26.558 2.42 18 2.42a15.349 15.349 0 00-9.604 3.363l1.79-.085a1 1 0 11.094 1.998l-4.667.22a1 1 0 01-1.046-.955l-.22-5a1 1 0 011.999-.088l.128 2.913z" fillRule="nonzero" /></g></svg></i>              </span>
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-de-camarsac--e178977" tabIndex={-1}>Château de Camarsac</a>
                                    </div>
                                    <div className="vendorTile__subtitle link-marker">
                                      <div className="vendorTile__contentRating" aria-label="Note globale 5.0 sur 5, 9 avis">
                                        <span className="vendorTile__rating">
                                          <i className="svgIcon svgIcon__star vendorTile__icon"><svg viewBox="0 0 32 30"><path d="M10.9 9.6s-6.1.7-10.1 1.1c-.4 0-.7.3-.8.6-.1.4 0 .7.3 1C3.3 15 7.8 19 7.8 19s-1.2 5.9-2.1 9.8c-.1.4.1.7.4 1 .3.2.7.2 1 .1 3.5-2 8.8-4.9 8.8-4.9s5.3 3 8.8 4.9c.3.2.7.2 1-.1.3-.2.4-.6.4-1C25.3 24.9 24 19 24 19s4.5-4 7.5-6.7c.3-.2.4-.6.3-1-.1-.4-.4-.6-.8-.6-4-.4-10.1-1.1-10.1-1.1S18.4 4.1 16.7.5c-.2-.3-.5-.6-.9-.6s-.7.2-.9.6c-1.4 3.7-4 9.1-4 9.1" fillRule="evenodd" clipRule="evenodd" /></svg></i>5.0                      </span>(9)
                                      </div>
                                      <span className="vendorTile__location"><span className="vendorTile__locationDot">&nbsp;·&nbsp;</span>Camarsac, Gironde</span>
                                    </div>
                                    <div className="vendorTileFooter  vendorTileFooter--mosaic">
                                      <div className="vendorTileFooter__content">
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__pricing vendorTile__icon"><svg viewBox="0 0 47 42"><path d="M31.336 4.949c0 3.075-6.897 4.917-15.591 4.917C7.05 9.866.15 8.024.15 4.949.151 1.875 7.054.032 15.745.032c8.691 0 15.591 1.843 15.591 4.917zm-2 0c0-.41-1.24-1.195-3.545-1.81-2.626-.702-6.215-1.107-10.046-1.107-3.83 0-7.42.405-10.047 1.106-2.306.616-3.547 1.402-3.547 1.81 0 .411 1.24 1.196 3.547 1.812 2.627.701 6.216 1.106 10.047 1.106 3.831 0 7.42-.405 10.046-1.106 2.306-.615 3.545-1.4 3.545-1.811zm0 0a1 1 0 012 0v5.483c0 3.164-6.874 4.917-15.591 4.917C7.025 15.35.15 13.596.15 10.432V4.95a1 1 0 112 0v5.483c0 .47 1.273 1.262 3.664 1.871 2.614.667 6.186 1.046 9.93 1.046 3.742 0 7.314-.38 9.928-1.046 2.39-.61 3.663-1.4 3.663-1.87V4.948zM15.512 31.754C6.908 31.723.152 29.972.152 26.837V15.941v-5.554a1 1 0 112 0v5.508c.044.472 1.314 1.246 3.663 1.846 2.615.667 6.187 1.046 9.93 1.046 3.741 0 7.313-.38 9.928-1.046 2.371-.605 3.643-1.39 3.663-1.86v-.011-5.482a1 1 0 012 0v10.75c8.583.032 15.36 1.87 15.36 4.916V37.02c0 3.164-6.873 4.917-15.593 4.917-8.717 0-15.59-1.753-15.59-4.917v-5.267zm0-2V26.27c-5.787-.02-10.738-.82-13.36-2.294v2.861c0 .47 1.274 1.26 3.664 1.87 2.56.653 6.04 1.031 9.696 1.047zm2 1.04v.743c0 .47 1.274 1.26 3.663 1.87 2.615.667 6.187 1.047 9.928 1.047 3.743 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.903c-2.66 1.495-7.717 2.337-13.594 2.337-5.874 0-10.93-.842-13.59-2.338v2.064a1.018 1.018 0 010 .096zm11.824-9.63v-2.671c-2.657 1.494-7.705 2.294-13.591 2.294-5.887 0-10.936-.8-13.593-2.294v2.861c0 .469 1.274 1.26 3.664 1.87 2.614.667 6.186 1.047 9.928 1.047.207 0 .42-.003.657-.007 1.945-1.812 6.888-2.92 12.935-3.1zm.811 1.982a1.004 1.004 0 01-.157.003c-3.407.07-6.562.461-8.932 1.094-1.807.483-2.96 1.07-3.374 1.498-.04.072-.088.138-.143.197a.28.28 0 00-.029.116c0 .41 1.24 1.195 3.546 1.81 2.627.702 6.216 1.107 10.045 1.107 3.832 0 7.422-.405 10.048-1.107 2.306-.615 3.546-1.4 3.546-1.81 0-.41-1.24-1.195-3.546-1.81-2.626-.702-6.216-1.107-10.048-1.107-.32 0-.64.003-.956.009zm14.55 11.013c-2.657 1.495-7.706 2.295-13.594 2.295-5.886 0-10.935-.8-13.59-2.295v2.862c0 .47 1.272 1.26 3.662 1.87 2.614.667 6.186 1.047 9.928 1.047 3.744 0 7.316-.38 9.93-1.047 2.39-.61 3.664-1.4 3.664-1.87v-2.862z" fillRule="nonzero" /></svg></i>                                                        À partir de   2.300€                      </div>
                                        <div className="vendorTileFooter__info">
                                          <i className="svgIcon svgIcon__guests-simple vendorTile__icon"><svg viewBox="0 0 32 23"><path fillRule="evenodd" clipRule="evenodd" d="M16 15.46A9.412 9.412 0 000 22.18c0 .414.336.75.75.75h30.5a.75.75 0 00.75-.75 9.412 9.412 0 00-16-6.721zm-.163 2.104c.048.089.094.179.14.27l.023-.036a7.866 7.866 0 011.289 3.634H1.535a7.913 7.913 0 0114.302-3.868zm2.957 3.867a9.362 9.362 0 00-1.808-4.837 7.913 7.913 0 0113.479 4.838H18.794zM15.192 6.04a5.868 5.868 0 10-11.737 0 5.868 5.868 0 0011.737 0zm-10.237 0a4.369 4.369 0 118.737 0 4.369 4.369 0 01-8.737 0zM22.5.17a5.868 5.868 0 110 11.737A5.868 5.868 0 0122.5.17zm0 1.5a4.369 4.369 0 100 8.737 4.369 4.369 0 000-8.737z" /></svg></i>                            10 - 170                            <div className="srOnly">
                                            Invités                          </div>
                                        </div>
                                      </div>
                                      <div className>
                                        <button type="button" className=" hidden app-ua-track-event app-vendor-tile-lead app-catalog-lead-btn" data-storefront-id={228597} data-vendor-id={178977} data-frm-insert={3} data-section="showPhone" data-track-c="LeadTracking" data-track-a="a-step1" data-track-l="d-desktop+s-img" data-track-v={1} data-track-ni={0} data-track-cds="{&quot;dimension15&quot;:&quot;178977&quot;,&quot;dimension16&quot;:&quot;228597&quot;,&quot;dimension17&quot;:&quot;3&quot;}">
                                          Nous contacter  </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li></ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next" aria-disabled="false"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                          </div>
                        </div>
                        <nav className="vendorCategories app-home-featured-tags">
                          <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container " dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={0} data-visualized-slide="false">
                                <a href="https://www.mariages.net/reception" className="button button--tertiary">
                                  Réception</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={1} data-visualized-slide="false">
                                <a href="https://www.mariages.net/photo-mariage" className="button button--tertiary">
                                  Photo mariage</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={2} data-visualized-slide="false">
                                <a href="https://www.mariages.net/musique-mariage" className="button button--tertiary">
                                  Musique mariage</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={3} data-visualized-slide="false">
                                <a href="https://www.mariages.net/esthetique-coiffure-mariage" className="button button--tertiary">
                                  Esthétique coiffure mariage</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={4} data-visualized-slide="false">
                                <a href="https://www.mariages.net/voiture-mariage" className="button button--tertiary">
                                  Voiture mariage</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={5} data-visualized-slide="false">
                                <a href="https://www.mariages.net/animation-mariage" className="button button--tertiary">
                                  Animation mariage</a>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item vendorCategories__sliderItem" data-id={6} data-visualized-slide="false">
                                <a href="https://www.mariages.net/decoration-mariage" className="button button--tertiary">
                                  Décoration mariage</a>
                              </li>          </ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                          </div>
                        </nav>
                      </section>
                      <section className="homeRealWeddings app-real-weddings-couples-slider">
                        <h2 className="homeRealWeddings__title">Vrais mariages</h2>
                        <p className="homeRealWeddings__description">Inspirez-vous des mariages d'autres couples et s'ils vous plaisent contactez les prestataires qui les ont organisés.</p>
                        <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label="Vrais mariages Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container realWeddingsCouples__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item realWeddingsCouples__slide" data-id={0} data-visualized-slide="false" aria-hidden="false">
                              <div className="realWeddingsCouplesTile app-rw-couples-tile" data-href="https://www.mariages.net/reportages-mariage/remy-charlotte--rw51619" data-rw-id={51619} aria-label="Charlotte & Rémy, 59 photos" role="link" tabIndex={0}>
                                <figure className="realWeddingsCouplesTile__gallery">
                                  <div className="realWeddingsCouplesTile__image">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456597.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456597.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456597.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456597.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456597.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456597.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Charlotte et Rémy" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456597.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456597.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.jpeg 1280w" src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 1" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 2" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 3" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg" />
                                      </picture>
                                    </div>
                                  </figcaption>
                                </figure>
                                <div className="realWeddingsCouplesTile__body">
                                  <span className="realWeddingsCouplesTile__title link">Charlotte &amp; Rémy</span>
                                  <div className="realWeddingsCouplesTile__info">
                                    59 photos · Salies-de-Béarn, Pyrénées-Atlantiques      </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item realWeddingsCouples__slide" data-id={1} data-visualized-slide="false" aria-hidden="false">
                              <div className="realWeddingsCouplesTile app-rw-couples-tile" data-href="https://www.mariages.net/reportages-mariage/julien-sylvie--rw53197" data-rw-id={53197} aria-label="Sylvie & Julien, 33 photos" role="link" tabIndex={0}>
                                <figure className="realWeddingsCouplesTile__gallery">
                                  <div className="realWeddingsCouplesTile__image">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529505.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529505.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529505.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529505.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529505.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529505.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Sylvie et Julien" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529505.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529505.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.jpeg 1280w" src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 1" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 2" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 3" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg" />
                                      </picture>
                                    </div>
                                  </figcaption>
                                </figure>
                                <div className="realWeddingsCouplesTile__body">
                                  <span className="realWeddingsCouplesTile__title link">Sylvie &amp; Julien</span>
                                  <div className="realWeddingsCouplesTile__info">
                                    33 photos · Loubieng, Pyrénées-Atlantiques      </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item realWeddingsCouples__slide" data-id={2} data-visualized-slide="false" aria-hidden="false">
                              <div className="realWeddingsCouplesTile app-rw-couples-tile" data-href="https://www.mariages.net/reportages-mariage/marie-antoine--rw46549" data-rw-id={46549} aria-label="Antoine & Marie, 16 photos" role="link" tabIndex={0}>
                                <figure className="realWeddingsCouplesTile__gallery">
                                  <div className="realWeddingsCouplesTile__image">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216075.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216075.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216075.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216075.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216075.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216075.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Antoine et Marie" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216075.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216075.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.jpeg 1280w" src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 1" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 2" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 3" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg" />
                                      </picture>
                                    </div>
                                  </figcaption>
                                </figure>
                                <div className="realWeddingsCouplesTile__body">
                                  <span className="realWeddingsCouplesTile__title link">Antoine &amp; Marie</span>
                                  <div className="realWeddingsCouplesTile__info">
                                    16 photos · Bizanos, Pyrénées-Atlantiques      </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item realWeddingsCouples__slide" data-id={3} data-visualized-slide="false" aria-hidden="false">
                              <div className="realWeddingsCouplesTile app-rw-couples-tile" data-href="https://www.mariages.net/reportages-mariage/stephane-elodie--rw44443" data-rw-id={44443} aria-label="Élodie & Stéphane, 16 photos" role="link" tabIndex={0}>
                                <figure className="realWeddingsCouplesTile__gallery">
                                  <div className="realWeddingsCouplesTile__image">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117043.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117043.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117043.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117043.webp 640w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.webp 960w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117043.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117043.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Élodie et Stéphane" width={640} height={427} className=" ls-is-cached lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117043.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117043.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.jpeg 1280w" src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 1" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 2" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.webp 640w" sizes="(min-width: 768px) 93px, 0px" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.webp 640w" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 3" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg 640w" src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg" />
                                      </picture>
                                    </div>
                                  </figcaption>
                                </figure>
                                <div className="realWeddingsCouplesTile__body">
                                  <span className="realWeddingsCouplesTile__title link">Élodie &amp; Stéphane</span>
                                  <div className="realWeddingsCouplesTile__info">
                                    16 photos · Pau, Pyrénées-Atlantiques      </div>
                                </div>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="homeRealWeddings__footer">
                          <a className="button button--tertiary" href="https://www.mariages.net/reportages-mariage">
                            Voir plus de mariages<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i>      </a>
                        </div>
                      </section>
                      <section className="homeInspiration">
                        <h2 className="homeInspiration__title">Idées et conseils</h2>
                        <p className="homeInspiration__description">Trouvez encore plus d'inspiration dans nos articles et suivez les conseils de nos rédactrices expertes en mariage.</p>
                        <div className="scrollSnap app-scroll-snap-wrapper homeCategories scrollSnap--fullBleed" role="region" aria-label=" Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container homeCategories__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={0} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1@2x.jpg 2x" className=" lazyloaded" alt="Avant le mariage" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/avant-le-mariage--t1" className="app-article-category-item-link">
                                    Avant le mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={1} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2@2x.jpg 2x" className=" lazyloaded" alt="La cérémonie de mariage" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/la-ceremonie-de-mariage--t2" className="app-article-category-item-link">
                                    La cérémonie de mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={2} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3@2x.jpg 2x" className=" lazyloaded" alt="La réception" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/la-reception--t3" className="app-article-category-item-link">
                                    La réception      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={3} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4@2x.jpg 2x" className=" lazyloaded" alt="Les prestataires de mariage" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/les-prestataires-de-mariage--t4" className="app-article-category-item-link">
                                    Les prestataires de mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={4} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5@2x.jpg 2x" className=" lazyloaded" alt="Mode nuptiale" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/mode-nuptiale--t5" className="app-article-category-item-link">
                                    Mode nuptiale      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={5} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6@2x.jpg 2x" className=" lazyloaded" alt="Beauté et Santé" width={160} height={160} srcSet="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6@2x.jpg 2x" src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6.jpg" />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/beaute-et-sante--t6" className="app-article-category-item-link">
                                    Beauté et Santé      </a>
                                </div>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="scrollSnap app-scroll-snap-wrapper homeArticles scrollSnap--fullBleed" role="region" aria-label=" Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container homeArticles__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item homeArticles__slide" data-id={0} data-visualized-slide="false">
                              <div className="homeArticlesTile app-featured-article-tile">
                                <div className="homeArticlesTile__image">
                                  <picture>
                                    <source type="image/webp" data-srcset="https://cdn0.mariages.net/article/1696/3_2/320/jpg/46961-fr-portada-editorial-1.webp 320w,
          https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.webp 640w,
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/article/1696/3_2/320/jpg/46961-fr-portada-editorial-1.webp 320w,
          https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.webp 640w,
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.webp 960w" />
                                    <img data-srcset="https://cdn0.mariages.net/article/1696/3_2/320/jpg/46961-fr-portada-editorial-1.jpeg 320w,
          https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg 640w,
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.jpeg 960w" data-src="https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Les 10 faire-part dont les mariés raffolent !" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/article/1696/3_2/320/jpg/46961-fr-portada-editorial-1.jpeg 320w,
          https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg 640w,
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.jpeg 960w" src="https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg" />
                                  </picture>
                                </div>
                                <div className="homeArticlesTile__preTitle">
                                  Les invitations de mariage  </div>
                                <div className="homeArticlesTile__title">
                                  <a href="https://www.mariages.net/articles/modele-faire-part-mariage--c10553" className="app-featured-article-tile-link">
                                    Les 10 faire-part dont les mariés raffolent !      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeArticles__slide" data-id={1} data-visualized-slide="false">
                              <div className="homeArticlesTile app-featured-article-tile">
                                <div className="homeArticlesTile__image">
                                  <picture>
                                    <source type="image/webp" data-srcset="https://cdn0.mariages.net/article-vendor/9731/3_2/320/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 320w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 640w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/article-vendor/9731/3_2/320/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 320w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 640w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 960w" />
                                    <img data-srcset="https://cdn0.mariages.net/article-vendor/9731/3_2/320/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 320w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 640w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 960w" data-src="https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Lune de miel 2022-2023 : cap sur 16 destinations de rêve !" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/article-vendor/9731/3_2/320/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 320w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 640w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 960w" src="https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg" />
                                  </picture>
                                </div>
                                <div className="homeArticlesTile__preTitle">
                                  Destinations de la lune de miel  </div>
                                <div className="homeArticlesTile__title">
                                  <a href="https://www.mariages.net/articles/destinations-lune-de-miel-2022-2023--c10551" className="app-featured-article-tile-link">
                                    Lune de miel 2022-2023 : cap sur 16 destinations de rêve !      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeArticles__slide" data-id={2} data-visualized-slide="false">
                              <div className="homeArticlesTile app-featured-article-tile">
                                <div className="homeArticlesTile__image">
                                  <picture>
                                    <source type="image/webp" data-srcset="https://cdn0.mariages.net/article/5756/3_2/320/jpg/46575-fotojet-41.webp 320w,
          https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.webp 640w,
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/article/5756/3_2/320/jpg/46575-fotojet-41.webp 320w,
          https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.webp 640w,
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.webp 960w" />
                                    <img data-srcset="https://cdn0.mariages.net/article/5756/3_2/320/jpg/46575-fotojet-41.jpeg 320w,
          https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg 640w,
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.jpeg 960w" data-src="https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Mariage d’été : voici les 8 robes du moment à piquer aux influenceuses !" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/article/5756/3_2/320/jpg/46575-fotojet-41.jpeg 320w,
          https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg 640w,
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.jpeg 960w" src="https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg" />
                                  </picture>
                                </div>
                                <div className="homeArticlesTile__preTitle">
                                  Les invités du mariage  </div>
                                <div className="homeArticlesTile__title">
                                  <a href="https://www.mariages.net/articles/mariage-ete-robe-invitee-influenceuse--c10529" className="app-featured-article-tile-link">
                                    Mariage d’été : voici les 8 robes du moment à piquer aux influenceuses !      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeArticles__slide" data-id={3} data-visualized-slide="false">
                              <div className="homeArticlesTile app-featured-article-tile">
                                <div className="homeArticlesTile__image">
                                  <picture>
                                    <source type="image/webp" data-srcset="https://cdn0.mariages.net/article/9661/3_2/320/jpg/41669-vicky-rose-ok.webp 320w,
          https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.webp 640w,
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/article/9661/3_2/320/jpg/41669-vicky-rose-ok.webp 320w,
          https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.webp 640w,
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.webp 960w" />
                                    <img data-srcset="https://cdn0.mariages.net/article/9661/3_2/320/jpg/41669-vicky-rose-ok.jpeg 320w,
          https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg 640w,
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.jpeg 960w" data-src="https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Robes de soirée roses : 75 modèles à tomber pour un mariage en 2022" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/article/9661/3_2/320/jpg/41669-vicky-rose-ok.jpeg 320w,
          https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg 640w,
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.jpeg 960w" src="https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg" />
                                  </picture>
                                </div>
                                <div className="homeArticlesTile__preTitle">
                                  Les invités du mariage  </div>
                                <div className="homeArticlesTile__title">
                                  <a href="https://www.mariages.net/articles/robe-de-soiree-rose--c10315" className="app-featured-article-tile-link">
                                    Robes de soirée roses : 75 modèles à tomber pour un mariage en 2022      </a>
                                </div>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="homeInspiration__footer">
                          <a className="button button--tertiary" href="https://www.mariages.net/articles">
                            Voir tous les articles<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i>      </a>
                        </div>
                      </section>
                      <section className="homeDiscussions">
                        <h2 className="homeDiscussions__title">Communauté</h2>
                        <p className="homeDiscussions__subtitle">Posez vos questions et obtenez de l'aide de la part d'autres couples qui vont se marier.</p>
                        <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed" role="region" aria-label=" Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container homeDiscussions__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item homeDiscussions__slide" data-id={0} data-visualized-slide="false">
                              <div className="homeDiscussionsTile app-discussion-tile">
                                <div className="homeDiscussionsTile__box app-discussion-tile">
                                  <h3 className="homeDiscussionsTile__title"><a href="https://communaute.mariages.net/forum/vos-conseils-et-recommandations--t635131" className="app-discussion-tile-link">Vos conseils et recommandations</a></h3>
                                  <p className="homeDiscussionsTile__description">Alors, j'épouse mon mari. Conseils, avis, j'écoute attentivement, et je suis très reconnaissante d'avance pour tout<span className="app-common-ellipsis">...</span></p>
                                </div>
                                <div className="homeDiscussionsTile__author">
                                  <div className="homeDiscussionsTile__avatar">
                                    <picture className="avatar__img">
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/user/9904/1_1/80/jpg/gu_6304099.webp?r=86195 80w" sizes="56px" />
                                      <img data-srcset="https://cdn0.mariages.net/user/9904/1_1/80/jpg/gu_6304099.jpeg?r=86195 80w" data-src="https://cdn0.mariages.net/user/9904/1_1/80/jpg/gu_6304099.jpeg?r=86195" sizes="56px" alt="Malina" width={80} height={80} className="lazyload" />
                                    </picture>
                                  </div>
                                  <div className="homeDiscussionsTile__caption">
                                    <p>Malina</p>
                                    <span>Aujourd'hui à 15:52</span>
                                  </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDiscussions__slide" data-id={1} data-visualized-slide="false">
                              <div className="homeDiscussionsTile app-discussion-tile">
                                <div className="homeDiscussionsTile__box app-discussion-tile">
                                  <h3 className="homeDiscussionsTile__title"><a href="https://communaute.mariages.net/forum/probleme-de-d-j--t635119" className="app-discussion-tile-link">Problème de D.j</a></h3>
                                  <p className="homeDiscussionsTile__description">Bonjour à toutes et à tous, Voilà je ne sais plus vers qui me tourner alors je demande conseil. Mon conjoint et moi,<span className="app-common-ellipsis">...</span></p>
                                </div>
                                <div className="homeDiscussionsTile__author">
                                  <div className="homeDiscussionsTile__avatar">
                                    <picture className="avatar__img">
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/user/7624/1_1/80/jpg/gu_2954267.webp?r=39394 80w" sizes="56px" />
                                      <img data-srcset="https://cdn0.mariages.net/user/7624/1_1/80/jpg/gu_2954267.jpeg?r=39394 80w" data-src="https://cdn0.mariages.net/user/7624/1_1/80/jpg/gu_2954267.jpeg?r=39394" sizes="56px" alt="Océane" width={80} height={80} className="lazyload" />
                                    </picture>
                                  </div>
                                  <div className="homeDiscussionsTile__caption">
                                    <p>Océane</p>
                                    <span>Aujourd'hui à 12:18</span>
                                  </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDiscussions__slide" data-id={2} data-visualized-slide="false">
                              <div className="homeDiscussionsTile app-discussion-tile">
                                <div className="homeDiscussionsTile__box app-discussion-tile">
                                  <h3 className="homeDiscussionsTile__title"><a href="https://communaute.mariages.net/forum/pluie--t635117" className="app-discussion-tile-link">Pluie 😭</a></h3>
                                  <p className="homeDiscussionsTile__description">Hello hello, j’ai besoin de vidé mon sac 🥺 Après deux ans de préparatifs, de date annulé et repoussé à cause du Covid<span className="app-common-ellipsis">...</span></p>
                                </div>
                                <div className="homeDiscussionsTile__author">
                                  <div className="homeDiscussionsTile__avatar">
                                    <picture className="avatar__img">
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/user/3120/1_1/80/jpg/gu_3050213.webp?r=29505 80w" sizes="56px" />
                                      <img data-srcset="https://cdn0.mariages.net/user/3120/1_1/80/jpg/gu_3050213.jpeg?r=29505 80w" data-src="https://cdn0.mariages.net/user/3120/1_1/80/jpg/gu_3050213.jpeg?r=29505" sizes="56px" alt="Laura" width={80} height={80} className="lazyload" />
                                    </picture>
                                  </div>
                                  <div className="homeDiscussionsTile__caption">
                                    <p>Laura</p>
                                    <span>Aujourd'hui à 11:53</span>
                                  </div>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDiscussions__slide" data-id={3} data-visualized-slide="false">
                              <div className="homeDiscussionsTile app-discussion-tile">
                                <div className="homeDiscussionsTile__box app-discussion-tile">
                                  <h3 className="homeDiscussionsTile__title"><a href="https://communaute.mariages.net/forum/vendre-ses-decorations-post-mariage--t635109" className="app-discussion-tile-link">Vendre ses décorations post-mariage</a></h3>
                                  <p className="homeDiscussionsTile__description">Bonjour à toutes, Avez-vous réussi à revendre vos décorations de mariage une fois le grand jour passé ? Si oui, par quel<span className="app-common-ellipsis">...</span></p>
                                </div>
                                <div className="homeDiscussionsTile__author">
                                  <div className="homeDiscussionsTile__avatar">
                                    <picture className="avatar__img">
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/user/2646/1_1/80/jpg/gu_4476462.webp?r=90853 80w" sizes="56px" />
                                      <img data-srcset="https://cdn0.mariages.net/user/2646/1_1/80/jpg/gu_4476462.jpeg?r=90853 80w" data-src="https://cdn0.mariages.net/user/2646/1_1/80/jpg/gu_4476462.jpeg?r=90853" sizes="56px" alt="Calandra" width={80} height={80} className="lazyload" />
                                    </picture>
                                  </div>
                                  <div className="homeDiscussionsTile__caption">
                                    <p>Calandra</p>
                                    <span>Aujourd'hui à 10:25</span>
                                  </div>
                                </div>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="homeDiscussions__footer">
                          <a href="https://communaute.mariages.net/" className="button button--tertiary" title="Voir tous les posts">Voir tous les posts<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i></a>
                        </div>
                      </section>
                      <section className="websitesComponent app-website-show-track app-websites">
                        <h2 className="websitesComponent__title">Créez votre site de mariage</h2>
                        <p className="websitesComponent__subtitle">Choisissez un thème et personnalisez-le à votre goût !</p>
                        <div className="websitesComponent__cardContainer scrollSnap scrollSnap--fullBleed">
                          <div className="websitesComponent__sliderContainer scrollSnap__container" dir="ltr">
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={0} data-id={149} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/tangerine_dream/default.min.css" data-family="decoration" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=149&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/tangerine_dream_md.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/tangerine_dream_md@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Tangerine Dream" />
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/tangerine_dream.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/tangerine_dream@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Tangerine Dream" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={1} data-id={183} data-option="setTemplate" data-id-layout={2} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=183&layoutId=2&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--horizontal">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/183_thumb_split_layout_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/183_thumb_split_layout_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Rustic Laurel" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/183_thumb_mobile_split_layout.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/183_thumb_mobile_split_layout@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Rustic Laurel" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={2} data-id={211} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=211&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/211_thumb_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/211_thumb_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Rose Band" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/211_thumb_mobile.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/211_thumb_mobile@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Rose Band" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={3} data-id={185} data-option="setTemplate" data-id-layout={2} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=185&layoutId=2&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--horizontal">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/185_thumb_split_layout_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/185_thumb_split_layout_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Modern Brush" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/185_thumb_mobile_split_layout.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/185_thumb_mobile_split_layout@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Modern Brush" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={4} data-id={207} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=207&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/207_thumb_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/207_thumb_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Bold Botanical" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/207_thumb_mobile.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/207_thumb_mobile@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Bold Botanical" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={5} data-id={213} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/dynamicBlock.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=213&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/213_thumb_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/213_thumb_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Romantic Calligraphy" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/213_thumb_mobile.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/213_thumb_mobile@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Romantic Calligraphy" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={6} data-id={217} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={1} data-href="https://www.mariages.net/tools/website-wizard?templateId=217&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/217_thumb_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/217_thumb_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Peony" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/217_thumb_mobile.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/217_thumb_mobile@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Peony" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={7} data-id={95} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/the_ocean/default.min.css" data-family="decoration" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=95&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/the_ocean_md.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/the_ocean_md@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème The ocean" />
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/the_ocean.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/the_ocean@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème The ocean" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={8} data-id={113} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/carrera/default.min.css" data-family="decoration" data-premium={1} data-href="https://www.mariages.net/tools/website-wizard?templateId=113&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/carrera_md.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/carrera_md@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Carrera" />
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/carrera.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/carrera@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Carrera" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={9} data-id={105} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/waves/default.min.css" data-family="decoration" data-premium={1} data-href="https://www.mariages.net/tools/website-wizard?templateId=105&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/waves_md.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/waves_md@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Waves" />
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/waves.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/waves@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Waves" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={10} data-id={203} data-option="setTemplate" data-id-layout={2} data-custom-layout="TOP" data-css-class="all_designs/dynamicOverlay.min.css" data-family="dynamic" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=203&layoutId=2&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--horizontal">
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/203_thumb_split_layout_md.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/203_thumb_split_layout_md@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Confetti Glamour" />
                                <img data-src="https://cdn0.mariages.net/website/fotos/templates/203_thumb_mobile_split_layout.jpg?v=2a797" data-srcset="https://cdn0.mariages.net/website/fotos/templates/203_thumb_mobile_split_layout@2x.jpg?v=2a797 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Confetti Glamour" />
                              </div>
                            </div>
                            <div className="websitesComponent__sliderItem scrollSnap__item app-websites-tile app-websites-link" data-index={11} data-id={121} data-option="setTemplate" data-id-layout={1} data-custom-layout="TOP" data-css-class="all_designs/etched_circles/default.min.css" data-family="decoration" data-premium={0} data-href="https://www.mariages.net/tools/website-wizard?templateId=121&layoutId=1&actionReferrer=101">
                              <div className="websitesComponent__cardItem websitesComponent__cardItem--vertical">
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/etched_circles_md.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/etched_circles_md@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--desktopThumb" alt="Thème Etched Circles" />
                                <img data-src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/etched_circles.jpg" data-srcset="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/etched_circles@2x.jpg 2x" className="lazyload websitesComponent__image websitesComponent__image--mobileThumb" alt="Thème Etched Circles" />
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="websitesComponent__footer">
                          <button data-href="https://www.mariages.net/tools/website-wizard?actionReferrer=6" className="button button--tertiary app-websites-link">
                            Voir plus de thèmes            <i className="svgIcon svgIcon__arrowShortRight websitesComponent__arrowIcon"><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i>      </button>
                        </div>
                      </section>
                      <section className="homePaper app-paper-show-track" data-track-c="Paper" data-track-a="a-show" data-track-l="d-desktop+s-home-block+o-home" data-track-v={1} data-track-ni={1}>
                        <h2 className="homePaper__title">Faire-part et papeterie de mariage</h2>
                        <p className="homePaper__subtitle">Choisissez parmi des centaines d'options et consultez notre boutique en ligne pour les faire-part, les Save the Date et toute la papeterie pour votre grand jour.</p>
                        <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed" role="region" aria-label=" Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container homePaper__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item homePaper__slide app-paper-tile" data-id={0} data-visualized-slide="false"><div className="homePaperTile app-paper-item-click-track" data-track-c="Paper" data-track-a="a-click" data-track-l="d-desktop+s-home-block+o-home+dt-save_the_dates" data-track-v={1} data-track-ni={0}>
                                <div className="homePaperTile__content">
                                  <img alt="Save the date" src="https://cdn1.mariages.net/assets/img/paper/promotion/WSD-Painted-Eucalyptus.jpeg" />
                                </div>
                                <h3 className="homePaperTile__title">
                                  <a className="app-paper-tile-link" href="https://faire-part.mariages.net/save-the-date-carte">
                                    Save the date      </a>
                                </h3>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homePaper__slide app-paper-tile" data-id={1} data-visualized-slide="false"><div className="homePaperTile app-paper-item-click-track" data-track-c="Paper" data-track-a="a-click" data-track-l="d-desktop+s-home-block+o-home+dt-invitations" data-track-v={1} data-track-ni={0}>
                                <div className="homePaperTile__content">
                                  <img alt="Faire-part" src="https://cdn1.mariages.net/assets/img/paper/promotion/WIN-Painted-Eucalyptus.jpeg" />
                                </div>
                                <h3 className="homePaperTile__title">
                                  <a className="app-paper-tile-link" href="https://faire-part.mariages.net/faire-part">
                                    Faire-part      </a>
                                </h3>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homePaper__slide app-paper-tile" data-id={2} data-visualized-slide="false"><div className="homePaperTile app-paper-item-click-track" data-track-c="Paper" data-track-a="a-click" data-track-l="d-desktop+s-home-block+o-home+dt-menu" data-track-v={1} data-track-ni={0}>
                                <div className="homePaperTile__content">
                                  <img alt="Menus" src="https://cdn1.mariages.net/assets/img/paper/promotion/WPR-Painted-Eucalyptus.jpeg" />
                                </div>
                                <h3 className="homePaperTile__title">
                                  <a className="app-paper-tile-link" href="https://faire-part.mariages.net/menu">
                                    Menus      </a>
                                </h3>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homePaper__slide app-paper-tile" data-id={3} data-visualized-slide="false"><div className="homePaperTile app-paper-item-click-track" data-track-c="Paper" data-track-a="a-click" data-track-l="d-desktop+s-home-block+o-home+dt-guest_book" data-track-v={1} data-track-ni={0}>
                                <div className="homePaperTile__content">
                                  <img alt="Livre d'or" src="https://cdn1.mariages.net/assets/img/paper/promotion/WTY-Painted-Eucalyptus.jpeg" />
                                </div>
                                <h3 className="homePaperTile__title">
                                  <a className="app-paper-tile-link" href="https://faire-part.mariages.net/livres-d-or">
                                    Livre d'or      </a>
                                </h3>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="homePaper__footer">
                          <a href="https://faire-part.mariages.net" title="Voir plus" className="button button--tertiary app-paper-view-more-click-track" data-track-c="Paper" data-track-a="a-click" data-track-l="d-desktop+s-home-block+o-home+dt-wedding_paper" data-track-v={1} data-track-ni={0}>
                            Voir plus<i className="svgIcon svgIcon__arrowShortRight homePaper__footerIcon"><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i>      </a>
                        </div>
                      </section>
                      <section className="homeDresses">
                        <div className="homeDresses__content">
                          <span className="homeDresses__preTitle">Vous n'avez pas encore trouvé votre robe idéale ?</span>
                          <h2 className="homeDresses__title">Catalogue de robes</h2>
                          <p className="homeDresses__description">Découvrez les dernières tendances des meilleurs créateurs de robes de mariée, costumes de marié, accessoires et bien plus encore. Feuilletez notre catalogue en ligne !</p>
                          <ul className="homeDresses__listCategories">
                            <li>
                              <a href="https://www.mariages.net/robes-mariee">Robes de Mariée</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/costumes-marie">Costumes de Marié</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/robes-soiree">Robes de Soirée</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/bijoux">Bijoux</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/chaussures">Chaussures</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/lingerie">Lingerie</a>
                            </li>
                            <li>
                              <a href="https://www.mariages.net/accessoires">Accessoires</a>
                            </li>
                          </ul>
                          <div className="homeDresses__button">
                            <a href="https://www.mariages.net/robes-mariee" className="button button--tertiary">Voir catalogue<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i></a>
                          </div>
                        </div>
                        <div className="homeDresses__contentSlider app-dresses-slider">
                          <div className="scrollSnap app-scroll-snap-wrapper homeDressesDesigners scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container homeDressesDesigners__slider" dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={0} data-visualized-slide="false" aria-hidden="false">
                                <div className="homeDressesTile app-dresses-tile">
                                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/cymbeline/ianis--mfvr489009.jpg" className="lazyload homeDressesTile__image" alt="Robes de mariée Cymbeline" width={290} height={406} />
                                  <div className="homeDressesTile__footer">
                                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/cymbeline--d90">
                                      Cymbeline      </a>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={1} data-visualized-slide="false" aria-hidden="false">
                                <div className="homeDressesTile app-dresses-tile">
                                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/creations-bochet/solaire--mfvr648381.jpg" className="lazyload homeDressesTile__image" alt="Robes de mariée Créations Bochet" width={290} height={406} />
                                  <div className="homeDressesTile__footer">
                                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/creations-bochet--d364">
                                      Créations Bochet      </a>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={2} data-visualized-slide="false" aria-hidden="false">
                                <div className="homeDressesTile app-dresses-tile">
                                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/adore-by-justin-alexander/lana--mfvr767943.jpg" className="lazyload homeDressesTile__image" alt="Robes de mariée Adore by Justin Alexander" width={290} height={406} />
                                  <div className="homeDressesTile__footer">
                                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/adore-by-justin-alexander--d1049">
                                      Adore by Justin Alexander      </a>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={3} data-visualized-slide="false" aria-hidden="false">
                                <div className="homeDressesTile app-dresses-tile">
                                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/sincerity-bridal/44296--mfvr768039.jpg" className="lazyload homeDressesTile__image" alt="Robes de mariée Sincerity Bridal" width={290} height={406} />
                                  <div className="homeDressesTile__footer">
                                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/sincerity-bridal--d399">
                                      Sincerity Bridal      </a>
                                  </div>
                                </div>
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeDressesDesigners__slide" data-id={4} data-visualized-slide="false" aria-hidden="true">
                                <div className="homeDressesTile app-dresses-tile">
                                  <img data-src="https://cdn0.mariages.net/cat/robes-mariee/eglantine-creations/ananas--mfvr711155.jpg" className="lazyload homeDressesTile__image" alt="Robes de mariée Eglantine Créations" width={290} height={406} />
                                  <div className="homeDressesTile__footer">
                                    <a className="homeDressesTile__link app-dresses-tile-link" href="https://www.mariages.net/robes-mariee/eglantine-creations--d234" tabIndex={-1}>
                                      Eglantine Créations      </a>
                                  </div>
                                </div>
                              </li>          </ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                          </div>
                        </div>
                      </section>
                      <section className="homeDestinationWeddings app-destination-weddings-slider">
                        <h2 className="homeDestinationWeddings__title">Organisez votre mariage dans le pays de vos rêves</h2>
                        <p className="homeDestinationWeddings__text">Amusez-vous en organisant votre mariage dans un pays étranger et trouvez tout ce dont vous avez besoin pour votre mariage en un seul clic.</p>
                        <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                          <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev hidden disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                          <ul className="scrollSnap__container app-scroll-snap-container homeDestinationWeddings__slider" dir="ltr">
                            <li className="scrollSnap__item app-scroll-snap-item homeDestinationWeddings__slide" data-id={0} data-visualized-slide="false">
                              <div className="homeDestinationWeddingsTile app-destination-weddings-link" data-href="https://www.mariages.net/busc.php?destCountry=13">
                                <img data-src="https://cdn1.mariages.net/assets/img/destination-weddings/widget-full-color/13.jpg" className="lazyload homeDestinationWeddingsTile__image" alt="Brésil" width={196} height={288} />
                                <span className="homeDestinationWeddingsTile__caption">Brésil</span>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDestinationWeddings__slide" data-id={1} data-visualized-slide="false">
                              <div className="homeDestinationWeddingsTile app-destination-weddings-link" data-href="https://www.mariages.net/busc.php?destCountry=1">
                                <img data-src="https://cdn1.mariages.net/assets/img/destination-weddings/widget-full-color/1.jpg" className="lazyload homeDestinationWeddingsTile__image" alt="Espagne" width={196} height={288} />
                                <span className="homeDestinationWeddingsTile__caption">Espagne</span>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDestinationWeddings__slide" data-id={2} data-visualized-slide="false">
                              <div className="homeDestinationWeddingsTile app-destination-weddings-link" data-href="https://www.mariages.net/busc.php?destCountry=2">
                                <img data-src="https://cdn1.mariages.net/assets/img/destination-weddings/widget-full-color/2.jpg" className="lazyload homeDestinationWeddingsTile__image" alt="Italie" width={196} height={288} />
                                <span className="homeDestinationWeddingsTile__caption">Italie</span>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDestinationWeddings__slide" data-id={3} data-visualized-slide="false">
                              <div className="homeDestinationWeddingsTile app-destination-weddings-link" data-href="https://www.mariages.net/busc.php?destCountry=5">
                                <img data-src="https://cdn1.mariages.net/assets/img/destination-weddings/widget-full-color/5.jpg" className="lazyload homeDestinationWeddingsTile__image" alt="Mexique" width={196} height={288} />
                                <span className="homeDestinationWeddingsTile__caption">Mexique</span>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeDestinationWeddings__slide" data-id={4} data-visualized-slide="false">
                              <div className="homeDestinationWeddingsTile app-destination-weddings-link" data-href="https://www.mariages.net/busc.php?destCountry=6">
                                <img data-src="https://cdn1.mariages.net/assets/img/destination-weddings/widget-full-color/6.jpg" className="lazyload homeDestinationWeddingsTile__image" alt="Portugal " width={196} height={288} />
                                <span className="homeDestinationWeddingsTile__caption">Portugal </span>
                              </div>
                            </li>          </ul>
                          <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next hidden"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                        </div>
                        <div className="homeDestinationWeddings__footer">
                          <button className="button button--tertiary app-destination-weddings-link" data-href="https://www.mariages.net/destination-wedding">
                            Voir toutes les destinations                <i className="svgIcon svgIcon__arrowShortRight homeDestinationWeddings__footerIconButton"><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i>          </button>
                        </div>
                      </section>
                      <section className="linkingCategoriesComplete">
                        <h3 className="linkingCategoriesComplete__title">Entreprises spécialisées dans les mariages par secteur</h3>
                        <nav>
                          <ul>
                            <li className="linkingCategoriesComplete__parentCategory"><a href="https://www.mariages.net/reception">Réception</a></li>
                            <li>
                              <ul>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/domaine-mariage">Domaine mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/auberge-mariage">Auberge mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/hotel-mariage">Hôtel mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/restaurant-mariage">Restaurant mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/traiteur-mariage">Traiteur mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/salle-mariage">Salle mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/chateau-mariage">Château mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/mariages-a-la-plage">Mariages à la plage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/bateau-mariage">Bateau mariage</a>
                                </li>
                              </ul>
                            </li>
                            <li className="linkingCategoriesComplete__parentCategory"><a href="https://www.mariages.net/prestataires">Prestataires</a></li>
                            <li>
                              <ul>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/faire-part-mariage">Faire part mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/cadeaux-invites-mariage">Cadeaux invités mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/photo-mariage">Photo mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/video-mariage">Vidéo mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/musique-mariage">Musique mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/voiture-mariage">Voiture mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/bus-mariage">Bus mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/decoration-mariage">Décoration mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/chapiteau-mariage">Chapiteau mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/animation-mariage">Animation mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/fleurs-mariage">Fleurs mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/liste-de-mariage">Liste de mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/organisation-mariage">Organisation mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/lune-de-miel">Lune de miel</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/wedding-cake">Wedding cake</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/food-truck">Food Truck</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/officiants">Officiants</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/musique-mariage/dj-mariage">DJ mariage</a>
                                </li>
                              </ul>
                            </li>
                            <li className="linkingCategoriesComplete__parentCategory"><a href="https://www.mariages.net/mariee">Mariée</a></li>
                            <li>
                              <ul>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/robe-de-mariee">Robe de mariée</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/accessoires-mariage">Accessoires mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/bijoux-mariage">Bijoux mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/esthetique-coiffure-mariage">Esthétique coiffure mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/robe-de-cocktail">Robe de cocktail</a>
                                </li>
                              </ul>
                            </li>
                            <li className="linkingCategoriesComplete__parentCategory"><a href="https://www.mariages.net/marie">Marié</a></li>
                            <li>
                              <ul>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/costumes-mariage">Costumes mariage</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/accessoires-marie">Accessoires marié</a>
                                </li>
                                <li className="linkingCategoriesComplete__category">
                                  <a href="https://www.mariages.net/soins-beaute">Soins beauté</a>
                                </li>
                              </ul>
                            </li>
                          </ul>
                        </nav>
                      </section>
                      <section className="homeLinkingLocationAdm1 app-linking-location-adm1">
                        <h3 className="homeLinkingLocationAdm1__title">Entreprises spécialisées dans les réceptions par département</h3>
                        <ul className="homeLinkingLocationAdm1__list">
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/ile-de-france">Île-de-France</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/seine-et-marne">Réception Seine-et-Marne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/paris">Réception Paris</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/yvelines">Réception Yvelines</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/val-doise">Réception Val-d'Oise</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/essonne">Réception Essonne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/val-de-marne">Réception Val-de-Marne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/hauts-de-seine">Réception Hauts-de-Seine</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/seine-saint-denis">Réception Seine-Saint-Denis</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/provence-alpes-cote-dazur">Provence - Alpes - Côte d'Azur</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/bouches-du-rhone">Réception Bouches-du-Rhône</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/var">Réception Var</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/alpes-maritimes">Réception Alpes-Maritimes</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/vaucluse">Réception Vaucluse</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/alpes-de-haute-provence">Réception Alpes-de-Haute-Provence</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/hautes-alpes">Réception Hautes-Alpes</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/rhone-alpes">Rhône - Alpes</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/rhone">Réception Rhône</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/isere">Réception Isère</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/haute-savoie">Réception Haute-Savoie</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/drome">Réception Drôme</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/loire">Réception Loire</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/ain">Réception Ain</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/savoie">Réception Savoie</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/ardeche">Réception Ardèche</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/aquitaine">Aquitaine</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/gironde">Réception Gironde</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/dordogne">Réception Dordogne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/pyrenees-atlantiques">Réception Pyrénées-Atlantiques</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/lot-et-garonne">Réception Lot-et-Garonne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/landes">Réception Landes</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/pays-de-la-loire">Pays de la Loire</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/loire-atlantique">Réception Loire Atlantique</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/maine-et-loire">Réception Maine et Loire</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/vendee">Réception Vendée</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/sarthe">Réception Sarthe</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/mayenne">Réception Mayenne</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/languedoc-roussillon">Languedoc - Roussillon</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/herault">Réception Hérault</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/gard">Réception Gard</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/aude">Réception Aude</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/pyrenees-orientales">Réception Pyrénées-Orientales</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/lozere">Réception Lozère</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/midi-pyrenees">Midi - Pyrénées</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/haute-garonne">Réception Haute-Garonne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/tarn">Réception Tarn</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/tarn-et-garonne">Réception Tarn-et-Garonne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/gers">Réception Gers</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/aveyron">Réception Aveyron</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/lot">Réception Lot</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/hautes-pyrenees">Réception Hautes-Pyrénées</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/ariege">Réception Ariège</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/bretagne">Bretagne</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/ille-et-vilaine">Réception Ille et Vilaine</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/finistere">Réception Finistère</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/morbihan">Réception Morbihan</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/cotes-darmor">Réception Côtes d'Armor</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/centre">Centre</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/indre-et-loire">Réception Indre-et-Loire</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/loiret">Réception Loiret</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/eure-et-loir">Réception Eure-et-Loir</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/loir-et-cher">Réception Loir-et-Cher</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/cher">Réception Cher</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/indre">Réception Indre</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/belgique">Belgique</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/hainaut">Réception Hainaut</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/brabant-wallon">Réception Brabant wallon</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/brabant-flamand">Réception Brabant flamand</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/liege">Réception Liège</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/bruxelles-capitale">Réception Bruxelles - Capitale</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/nord-pas-de-calais">Nord-Pas-de-Calais</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/nord">Réception Nord</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/pas-de-calais">Réception Pas-de-Calais</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/suisse">Suisse</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/geneve">Réception Genève</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/vaud">Réception Vaud</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/valais">Réception Valais</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/neuchatel">Réception Neuchâtel</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/bourgogne">Bourgogne</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/cote-dor">Réception Côte d'Or</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/yonne">Réception Yonne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/saone-et-loire">Réception Saône et Loire</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/nievre">Réception Nièvre</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/poitou-charentes">Poitou - Charentes</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/charente-maritime">Réception Charente Maritime</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/vienne">Réception Vienne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/charente">Réception Charente</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/deux-sevres">Réception Deux-Sèvres</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/picardie">Picardie</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/oise">Réception Oise</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/somme">Réception Somme</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/aisne">Réception Aisne</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/alsace">Alsace</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/bas-rhin">Réception Bas Rhin</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/haut-rhin">Réception Haut Rhin</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/haute-normandie">Haute - Normandie</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/seine-maritime">Réception Seine-Maritime</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/eure">Réception Eure</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/lorraine">Lorraine</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/meurthe-et-moselle">Réception Meurthe-et-Moselle</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/moselle">Réception Moselle</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/vosges">Réception Vosges</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/meuse">Réception Meuse</a></li>
                            </ul>
                          </li>
                          <li className="homeLinkingLocationAdm1__section app-linking-location-adm1-item">
                            <div className="homeLinkingLocationAdm1__subTitle app-linking-location-adm1-item-toggle-trigger">
                              <a href="https://www.mariages.net/reception/basse-normandie">Basse - Normandie</a>
                              <span className="homeLinkingLocationAdm1__sectionIcon">
                                <i className="svgIcon svgIcon__angleDown "><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>                  </span>
                            </div>
                            <ul className="homeLinkingLocationAdm1__content">
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/calvados">Réception Calvados</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/orne">Réception Orne</a></li>
                              <li className="homeLinkingLocationAdm1__item"><a href="https://www.mariages.net/reception/manche">Réception Manche</a></li>
                            </ul>
                          </li>
                        </ul>
                      </section>
                    </article>
                  </main>
                  <footer className="layoutFooter">
                    <div className="linkingFooter">
                      <section className="corporativeLinks">
                        <div className="linkingFooter__title">Informations</div>
                        <ul>
                          <li><a rel="nofollow" href="https://www.mariages.net/contactar.php">
                              Contact</a>          </li>
                          <li><a rel="nofollow" href="https://www.mariages.net/mentions-legales.php">
                              Mentions légales</a>          </li>
                          <li><a rel="nofollow" href="https://www.mariages.net/legal/privacy.php">
                              Politique de confidentialité</a>          </li>
                          <li><a rel="nofollow" href="https://www.mariages.net/legal/cookies.php">
                              Politique de cookies</a>          </li>
                          <li><span className="ot-sdk-show-settings">Ne pas vendre mes données personnelles</span>          </li>
                          <li><a rel="nofollow" href="https://www.mariages.net/emp-Acceso.php">
                              Inscription entreprises</a>          </li>
                          <li><a href="https://www.mariages.net/aboutus/aboutus.php">
                              Qui sommes-nous ?</a>          </li>
                          <li><a href="https://www.mariages.net/articles/equipe-editoriale">
                              Équipe Éditoriale</a>          </li>
                          <li><a rel="nofollow" target="_blank" href="https://www.theknotww.com/careers/">
                              Careers</a>          </li>
                          <li><a rel="nofollow" href="https://www.mariages.net/wedding-awards">
                              Wedding Awards 2022</a>          </li>
                          <li><a href="https://www.mariages.net/site-web-mariage">
                              Site de mariage</a>          </li>
                        </ul>
                      </section>
                      <section className="appsLinks">
                        <div className="linkingFooter__title">Téléchargez l'application</div>
                        <div className="appsLinks__description ">
                          <img src="https://www.mariages.net/assets/img/dropdown/app.png" srcSet="https://www.mariages.net/assets/img/dropdown/app@2x.png 2x" className="appsLinks__imago" alt="App icon" width={48} height={48} loading="lazy" />
                          Organisez votre mariage où et quand vous voulez      </div>
                        <ul className="appsLinks__list">
                          <li className="app-store-badge-ios">
                            <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/id606938005?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr" title="App Store">
                              <img src="https://www.mariages.net/assets/img/footer/appstore.png" srcSet="https://www.mariages.net/assets/img/footer/appstore@2x.png 2x" alt="App Store" width={140} height={42} loading="lazy" />
                            </a>
                          </li>
                          <li className="app-store-badge-android">
                            <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS" title="Google Play">
                              <img src="https://www.mariages.net/assets/img/footer/googleplay.png" srcSet="https://www.mariages.net/assets/img/footer/googleplay@2x.png 2x" alt="Google Play" width={140} height={42} loading="lazy" />
                            </a>
                          </li>
                        </ul>
                      </section>
                      <section className="socialLinks">
                        <div className="linkingFooter__title">Suivez-nous sur</div>
                        <ul className="socialLinks__list">
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://www.facebook.com/mariagesnet" title="Facebook" target="_blank">
                              <i className="svgIcon svgIcon__facebook "><svg viewBox="0 0 1792 1792"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z" /></svg></i>                  </a>
                          </li>
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://twitter.com/mariagesnet" title="Twitter" target="_blank">
                              <i className="svgIcon svgIcon__twitter "><svg viewBox="0 0 502 408"><path d="M501.625 48.375c-18.477 8.203-38.281 13.71-59.102 16.21 21.25-12.733 37.579-32.89 45.235-56.874a206.477 206.477 0 01-65.313 24.922c-18.75-20-45.468-32.461-75.039-32.461-56.797 0-102.851 46.016-102.851 102.812 0 8.047.937 15.899 2.695 23.438C161.781 122.125 86.04 81.188 35.297 18.96 26.43 34.195 21.39 51.85 21.39 70.68c0 35.664 18.125 67.148 45.742 85.625-16.875-.547-32.735-5.196-46.602-12.89v1.288c0 49.844 35.469 91.367 82.461 100.86-8.594 2.343-17.695 3.593-27.07 3.593-6.64 0-13.086-.625-19.375-1.875 13.125 40.82 51.094 70.625 96.055 71.446-35.157 27.578-79.493 43.984-127.696 43.984-8.32 0-16.484-.469-24.492-1.445 45.469 29.218 99.531 46.21 157.617 46.21 189.14 0 292.578-156.68 292.578-292.538 0-4.454-.117-8.946-.273-13.32 20.078-14.493 37.5-32.618 51.289-53.243z" fillRule="nonzero" /></svg></i>                  </a>
                          </li>
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://pinterest.com/mariagesnet" title="Pinterest" target="_blank">
                              <i className="svgIcon svgIcon__pinterest "><svg viewBox="0 0 1792 1792"><path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" /></svg></i>                  </a>
                          </li>
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://instagram.com/mariagesnet" title="Instagram" target="_blank">
                              <i className="svgIcon svgIcon__instagram "><svg viewBox="0 0 1792 1792"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" /></svg></i>                  </a>
                          </li>
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://www.youtube.com/user/mariagesdotnet/featured" title="Youtube" target="_blank">
                              <i className="svgIcon svgIcon__youtube-filled "><svg viewBox="0 0 17 12"><path d="M16.293 2.731v6.324a2.384 2.384 0 01-2.383 2.385H2.73A2.384 2.384 0 01.347 9.055V2.73A2.384 2.384 0 012.73.347h11.18a2.384 2.384 0 012.383 2.384zM6.587 8.624l4.693-3.001L6.587 2.62v6.004z" fillRule="evenodd" /></svg></i>                  </a>
                          </li>
                          <li>
                            <a className="socialLinks__item" rel="nofollow noopener noreferrer" href="https://www.tiktok.com/@mariages.net" title="Tiktok" target="_blank">
                              <i className="svgIcon svgIcon__tiktok-logo "><svg viewBox="0 0 18 18"><path d="M17.806 4.507A4.546 4.546 0 0113.254 0h-2.94v8.03l-.003 4.4a2.66 2.66 0 01-2.814 2.655 2.65 2.65 0 01-1.217-.374 2.66 2.66 0 01-1.3-2.241 2.662 2.662 0 013.504-2.565V6.921a5.784 5.784 0 00-.848-.062 5.636 5.636 0 00-4.234 1.894 5.513 5.513 0 00-1.391 3.326 5.506 5.506 0 001.64 4.29A5.637 5.637 0 007.636 18c.287-.001.57-.022.848-.063a5.618 5.618 0 003.138-1.57 5.503 5.503 0 001.65-3.915l-.015-6.57a7.43 7.43 0 004.557 1.549V4.506h-.008z" /></svg></i>                  </a>
                          </li>
                        </ul>
                      </section>
                      <section className="countrySelector">
                        <div className="linkingFooter__title">Sélectionnez un pays</div>
                        <div className="countrySelector__wrapper">
                          <ul style={{display: 'none'}}>
                            <li><strong>Amérique</strong></li>
                            <li><a href="https://www.bodas.com.mx" title="Bodas México" hrefLang="es-mx">Mexique</a></li>
                            <li><a href="https://www.matrimonios.cl" title="Matrimonios Chile" hrefLang="es-cl">Chili</a></li>
                            <li><a href="https://www.casamientos.com.ar" title="Casamientos Argentina" hrefLang="es-ar">Argentine</a></li>
                            <li><a href="https://www.casamentos.com.br" title="Casamentos Brasil" hrefLang="pt-br">Brésil</a></li>
                            <li><a href="https://www.matrimonio.com.co" title="Matrimonio Colombia" hrefLang="es-co">Colombie</a></li>
                            <li><a href="https://www.matrimonio.com.pe" title="Matrimonio Perú" hrefLang="es-pe">Pérou</a></li>
                            <li><a href="https://www.casamiento.com.uy" title="Casamiento Uruguay" hrefLang="es-uy">Uruguay</a></li>
                            <li><a href="https://www.weddingwire.ca" title="Wedding Canada" hrefLang="en-ca">Canada</a></li>
                            <li><a href="https://www.weddingwire.com" title="Wedding" hrefLang="en-us">États-Unis</a></li>
                            <li><strong>Europe</strong></li>
                            <li><a href="https://www.bodas.net" title="Bodas" hrefLang="es">Espagne</a></li>
                            <li><a href="https://www.matrimonio.com" title="Matrimonio" hrefLang="it">Italie</a></li>
                            <li><a href="https://www.hitched.co.uk" title="Wedding United Kingdom" hrefLang="en-gb">Royaume-Uni</a></li>
                            <li><a href="https://www.hitched.ie" title="Wedding Ireland" hrefLang="en-ie">Irlande</a></li>
                            <li><a href="https://www.casamentos.pt" title="Casamentos" hrefLang="pt">Portugal </a></li>
                            <li><strong>Asie</strong></li>
                            <li><a href="https://www.weddingwire.in" title="Wedding India" hrefLang="en-in">Inde</a></li>
                          </ul>
                          <div className="app-footer-country-selector-toggle countrySelector__dropdown">
                            <img src="https://www.mariages.net/assets/img/flags/country-selector/fr.png" width={18} height={12} className="countrySelector__flag" alt="France" loading="lazy" />
                            France            <i className="svgIcon svgIcon__angleDown countrySelector__icon"><svg viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg></i>      </div>
                        </div>
                      </section>
                      <section className="copyrightFooter">
                        <img src="https://www.mariages.net/assets/img/footer/tkww_logo_KO.png" srcSet="https://www.mariages.net/assets/img/footer/tkww_logo_KO_2x.png 2x" alt="ww logo" width={140} height={48} loading="lazy" />
                        <p>© 2022 Mariages.net</p>
                      </section>
                    </div>
                  </footer>
                  <div id="app-chat-container" className="pusher-container pusher-mobile   "><div id="app-bot-bot" data-fromtype="bot" data-fromid="bot" data-idconversation="null" data-id-question={1} data-id-flow="null" data-id-categ="null" data-id-sector="null" className="app-chat-container-top">
                      <div className="chat-launcher app-chat-launcher">
                        <div className="chat-launcher-button ">
                          <img className="app-chat-avatar" src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="" />
                          <span className="app-chat-num-messages chat-message-count dnone">1</span>
                        </div>
                        <div className="chat-launcher-preview">
                          <div className="app-conversation-summary">Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de mariage ?</div>
                        </div>
                      </div>
                      <div className="chat-conversation app-chat-conversation" data-initconversation={0}>
                        <div className="chat-header">
                          <div className="app-controls-menu chat-controls chat-controls-left">
                            <div className>
                            </div>
                          </div>
                          <span className="app-chat-name chat-name">Sara</span>
                          <div className="chat-controls chat-controls-left">
                            <span className="chat-control-btn app-chat-refresh">
                              <i className="icon icon-refresh-chat" />
                            </span>
                          </div>
                          <div className="chat-controls chat-controls-right">
                            <span className="chat-control-btn app-chat-min">
                              <span className="chat-ui chat-min" />
                            </span>
                          </div>
                        </div>
                        <div className="app-chat-history chat-history">
                          <div className="app-chat-conversations chat-messages" />
                        </div>
                        <div className="app-mobile-nel-scrollfix chat-messages chat-messages--chatbot app-scroll-calculate">
                          <div className="app-conversation-parts chat-messages__inner "><div className="chat-message-welcome">
                              <p className="title">Conseillère Mariages.net</p>
                              <p>Je tiens à vous aider à choisir le prestataire le mieux adapté au mariage de vos rêves. Un service gratuit pour que vous embauchiez toujours les meilleurs professionnels de votre région. Demandez-nous conseil !</p>
                              <div className="chat-legal">
                                <a className="app-pusher-link" href="https://www.mariages.net/mentions-legales.php#concierge">Conditions d'utilisation</a><a className="app-pusher-link ml10" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a>
                              </div>
                            </div><div className="chat__separator"><span>11/08/2022</span></div><div className="app-income-message message-income">
                              <div className="chat-message message-income">
                                <div className="chat-message-avatar">
                                  <img src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="Sara" />
                                </div>
                                <div className="chat-message-globe">
                                  Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous aider dans vos préparatifs de mariage ?
                                  <div className="chat__timestamp">17:54</div>
                                </div>
                              </div>
                              <div className="app-chat-reply-template"><div className="app-chat-qr-container chatQuickReply"><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">Oui</span><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">Non, merci</span></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="composer-container chat-message-send app-chat-message-send">
                          <div className="app-chat-writing-alert">Sara est en train d'écrire...</div>
                          <form method="POST" className="app-chat-form-chatbot" data-type="anonymous" data-id="7db8def1-9d68-e7a4-000e-4927f648b112-1658313550819" data-message-type="null">
                            <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                              <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                              <div className="chat-submit"> <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled"><i className="icon icon-send" /></span></div>
                            </div>
                          </form>
                        </div>
                      </div></div></div>
                  <div id="survicate-box"><div className="sv-box-child" /></div><div id="onetrust-consent-sdk"><div className="onetrust-pc-dark-filter ot-hide ot-fade-in" /><div id="onetrust-pc-sdk" className="otPcCenter ot-hide ot-fade-in" aria-modal="true" role="alertdialog" lang="fr-FR" aria-label="Ne pas vendre mes données personnelles">{/* Close Button */}<div className="ot-pc-header">{/* Logo Tag */}<div className="ot-pc-logo" role="img" aria-label="Logo de la société" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/4708a190-b1e8-4c46-8bde-12838e4eaa32/006bd2e8-872d-4227-861d-cf26c0f64c1c/fc7601b1-1544-4023-8371-18b980ec8c87/logo_tkww.png")', backgroundPosition: 'left'}} /><button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Fermer" /></div>{/* Close Button */}<div id="ot-pc-content" className="ot-pc-scrollbar"><h2 id="ot-pc-title">Ne pas vendre mes données personnelles</h2><div id="ot-pc-desc">Lorsque vous visitez notre site Web, nous stockons des cookies sur votre navigateur pour collecter des informations. Ces informations collectées peuvent être liées à vous, à vos préférences ou à votre appareil, et sont principalement utilisées pour faire fonctionner le site comme vous le souhaitez et pour fournir une expérience Web plus personnalisée. Toutefois, vous pouvez choisir de ne pas autoriser certains types de cookies, ce qui peut avoir un impact sur votre expérience du site et des services que nous offrons. Cliquez sur les différents titres de catégories pour en savoir plus et modifier nos paramètres par défaut selon vos préférences. Vous ne pouvez pas vous désinscrire de nos Cookies Strictement Nécessaires internes lorsqu'ils sont déployés afin d'assurer le bon fonctionnement de notre site Web (tels que pour afficher le bandeau des cookies, pour vous connecter à votre compte, pour rediriger votre session lorsque vous quittez votre compte, etc.) Pour plus d'Informations sur les cookies internes et de tiers utilisés, veuillez consulter le lien suivant.
                          <br /><a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Pour en savoir plus sur la protection de votre vie privée, s'ouvre dans un nouvel onglet">Plus d’informations</a></div><button id="accept-recommended-btn-handler">Tout autoriser</button><section className="ot-sdk-row ot-cat-grp"><h3 id="ot-category-title">Gérer les préférences de consentement</h3><div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001" />{/* Accordion header */}<div className="ot-acc-hdr ot-always-active-group"><div className="ot-plus-minus"><span /><span /></div><h4 className="ot-cat-header" id="ot-header-id-C0001">Cookies strictement nécessaires</h4><div className="ot-always-active">Toujours actif</div></div>{/* accordion detail */}<div className="ot-acc-grpcntr ot-acc-txt"><p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">Ces cookies sont strictement nécessaires pour le fonctionnement du Site Web. Elles permettent à l'Utilisateur de naviguer sur le Site ainsi que d'utiliser les différentes options et services que le Site leur offre. Sans elles, certaines fonctionnalités du Site Web ne fonctionneraient pas correctement.</p></div></div><div className="ot-accordion-layout ot-cat-item" data-optanongroupid="SPD_BG"><button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-SPD_BG" aria-labelledby="ot-header-id-SPD_BG" />{/* Accordion header */}<div className="ot-acc-hdr"><div className="ot-plus-minus"><span /><span /></div><h4 className="ot-cat-header" id="ot-header-id-SPD_BG">Vente de données personnelles</h4><div className="ot-tgl"><input type="checkbox" name="ot-group-id-SPD_BG" id="ot-group-id-SPD_BG" aria-checked="true" role="switch" className="category-switch-handler" data-optanongroupid="SPD_BG" defaultChecked aria-labelledby="ot-header-id-SPD_BG" /> <label className="ot-switch" htmlFor="ot-group-id-SPD_BG"><span className="ot-switch-nob" /> <span className="ot-label-txt">Vente de données personnelles</span></label> </div></div>{/* accordion detail */}<div className="ot-acc-grpcntr ot-acc-txt"><p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-SPD_BG">En vertu du CCPA de Californie, vous avez le droit de refuser que vos informations personnelles soient vendues à des tierces parties. Ces cookies permettent de recueillir des informations à des fins d’analyses et de statistiques et pour personnaliser les publicités ciblées que vous recevez. Utilisez ce bouton pour refuser la vente de vos informations personnelles. Si vous décidez de refuser la vente de vos données, vous ne recevrez pas de publicités personnalisées et nous ne vendrons pas vos informations personnelles à aucun tiers. Veuillez noter que, si vous le désirez, vous pouvez contacter notre service juridique pour obtenir plus de détails sur vos droits en tant que consommateur de Californie. Pour cela, cliquez sur le lien Exercer ses droits. <br /><br />Si vous avez activé les contrôles de sécurité dans votre navigateur (avec un plug-in par exemple), nous devons considérer que votre opposition à la vente de vos données est valide. Nous ne pourrons donc pas suivre votre activité en ligne. Cela est susceptible d’affecter notre capacité à vous proposer des publicités ciblées selon vos préférences.</p><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0002"><h5>Cookies d'analyse</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0002" aria-checked="false" role="switch" data-optanongroupid="C0002" className="cookie-subgroup-handler" aria-label="Cookies d'analyse" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0002"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers stockent des informations sur la manière dont les Utilisateurs interagissent avec le contenu du Site Web, leur provenance, le navigateur qu'ils utilisent et la durée de leur visite sur chaque page, entre d’autres. Elles sont utilisées pour mesurer les audiences et produire des statistiques.</p></li></ul></div><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0005"><h5>Cookies « réseaux sociaux »</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0005" aria-checked="false" role="switch" data-optanongroupid="C0005" className="cookie-subgroup-handler" aria-label="Cookies « réseaux sociaux »" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0005"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers permettent aux Utilisateurs de partager du contenu à travers les réseaux sociaux. Ces cookies peuvent suivre la trace du navigateur de l'Utilisateur sur d'autres sites web et créer un profil des intérêts de l'Utilisateur, ce qui peut avoir une incidence sur le contenu montré à l'Utilisateur sur les autres sites web visités.</p></li></ul></div><div className="ot-subgrp-cntr"><ul className="ot-subgrps"><li className="ot-subgrp" data-optanongroupid="C0004"><h5>Cookies pour une publicité personnalisée</h5><div className="ot-tgl-cntr ot-subgrp-tgl"><div className="ot-tgl ot-hide-tgl"><input type="checkbox" name="switch" id="ot-sub-group-id-C0004" aria-checked="false" role="switch" data-optanongroupid="C0004" className="cookie-subgroup-handler" aria-label="Cookies pour une publicité personnalisée" aria-hidden="true" /> <label className="ot-switch" htmlFor="ot-sub-group-id-C0004"><span className="ot-switch-nob" /> <span className="ot-label-txt">Switch Label</span></label> <span className="ot-label-status">label</span></div></div><p className="ot-subgrp-desc">Ces cookies tiers stockent les informations comportementales de l'Utilisateur, obtenues à partir de l'analyse de ses habitudes de navigation, et nous permettent ou permettent à des tiers de lui montrer de la publicité en fonction du comportement et des intérêts de l'Utilisateur, ou de suivre le comportement et l'efficacité des campagnes publicitaires.</p></li></ul></div></div></div>{/* Groups sections starts */}{/* Group section ends */}{/* Accordion Group section starts */}{/* Accordion Group section ends */}</section></div><section id="ot-pc-lst" className="ot-hide ot-hosts-ui ot-pc-scrollbar"><div id="ot-pc-hdr"><div id="ot-lst-title"><button className="ot-link-btn back-btn-handler" aria-label="Back"><svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve"><title>Back Button</title><g><path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                              l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                              c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                              s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                              L213.13,222.409z" /></g></svg></button><h3>Performance Cookies</h3></div><div className="ot-lst-subhdr"><div className="ot-search-cntr"><p role="status" className="ot-scrn-rdr" /><label htmlFor="vendor-search-handler" className="ot-scrn-rdr" /> <input id="vendor-search-handler" type="text" name="vendor-search-handler" /> <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true"><title>Search Icon</title><path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
                      s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
                      c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
                      s-17-7.626-17-17S14.61,6,23.984,6z" /></svg></div><div className="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve"><title>Filter Icon</title><g><path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
                c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
                c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
                C402.765,25.895,404.093,19.231,400.858,11.427z" /></g></svg></button></div><div id="ot-anchor" /><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div className="ot-fltr-scrlcnt ot-pc-scrollbar"><div className="ot-fltr-opts"><div className="ot-fltr-opt"><div className="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div><div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar"><div id="ot-sel-blk"><div className="ot-sel-all"><div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div><div className="ot-sel-all-chkbox"><div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div></div><div className="ot-sdk-row"><div className="ot-sdk-column" /></div></section></section><div className="ot-pc-footer"><div className="ot-btn-container"> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirmer la sélection</button></div>{/* Footer logo */}<div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" /></div></div>{/* Cookie subgroup container */}{/* Vendor list link */}{/* Cookie lost link */}{/* Toggle HTML element */}{/* Checkbox HTML */}{/* plus minus*/}{/* Arrow SVG element */}{/* Accordion basic element */}<span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" /><iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" /></div></div><div id="criteo-tags-div" style={{display: 'none'}} /><iframe height={0} width={0} title="Criteo DIS iframe" style={{display: 'none'}} />
                </div>
          

)}