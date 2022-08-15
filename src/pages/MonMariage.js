import React, { useState, useEffect } from 'react';



function MonMariage() {
    return (

        <div>
        <div>
          <span className="ot-sdk-show-settings" style={{display: 'none'}}>
            Ne pas vendre mes données personnelles
          </span>
          <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
          <div className="layoutHeader">
            <div className="menu-top" />
            <div id="menu" className="menu app-menu">
              <div className>
                <div className="menu-wrapper-align flex">
                  <div className="app-ua-track-event layoutHeader__logoAnchor main-logo" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+o-header_logo" data-track-v={0} data-track-ni={0}>
                    <a title="Mariage" href="https://www.mariages.net">
                      <img alt="Mariage" src="https://www.mariages.net/assets/img/logos/gen_logoHeader.svg" width={204} height={37} />
                    </a>
                  </div>
                  <div className="layoutHeader__nav">
                    <div className="app-common-header-container" id="nav-main" role="navigation">
                      <ul className="nav-main">
                        <li className="nav-main-item">
                          <a href="https://www.mariages.net/tools/Main" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-tools" data-track-v={0} data-track-ni={0} data-tab="miboda">
                            Mon&nbsp;mariage
                          </a>
                          <div className="app-tabs-container-miboda">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/tools/Main">
                                    Mon mariage
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabMyWedding">
                                  <div className="layoutNavMenuTabMyWeddingList">
                                    <a className="layoutNavMenuTabMyWedding__title" href="https://www.mariages.net/tools/Main">
                                      Mon planificateur
                                    </a>
                                    <ul className="layoutNavMenuTabMyWeddingList__content">
                                      <li className="layoutNavMenuTabMyWeddingList__item layoutNavMenuTabMyWeddingList__item--viewAll">
                                        <a href="https://www.mariages.net/tools/Main">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/Checklist">
                                          <i className="svgIcon svgIcon__checklist layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 21 27">
                                              <path d="M13.78 3.375h2.47a.5.5 0 01.5.5v.965h3.062c.634 0 1.15.514 1.15 1.148v19.796c0 .635-.516 1.149-1.15 1.149H1.87c-.635 0-1.15-.514-1.15-1.149V5.988c0-.634.515-1.148 1.15-1.148h3.056v-.965a.5.5 0 01.5-.5h2.47a2.96 2.96 0 015.884 0zm-.971.428a.502.502 0 01-.01-.1c0-1.08-.878-1.957-1.96-1.957-1.083 0-1.96.876-1.96 1.957a.504.504 0 01-.005.072.502.502 0 01-.49.6H5.927v2.057h9.823V4.375h-2.447a.5.5 0 01-.494-.572zM16.75 5.84v1.092a.5.5 0 01-.5.5H5.427a.5.5 0 01-.5-.5V5.84H1.871a.149.149 0 00-.15.148v19.796c0 .082.067.149.15.149h17.94c.083 0 .15-.067.15-.149V5.988a.149.149 0 00-.15-.148h-3.06zm-6.425 7.373a.5.5 0 010-1h6.534a.5.5 0 110 1h-6.534zm0 8.518a.5.5 0 110-1h6.534a.5.5 0 110 1h-6.534zm0-4.259a.5.5 0 110-1h6.534a.5.5 0 110 1h-6.534zm-3.943.532a1.264 1.264 0 11-.001-2.527 1.264 1.264 0 010 2.527zm0 4.93a1.264 1.264 0 11-.001-2.528 1.264 1.264 0 010 2.528zM5.265 10.899l.876.879 2.234-2.232a.5.5 0 11.707.708l-2.588 2.585a.5.5 0 01-.707 0l-1.23-1.234a.5.5 0 01.708-.706z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Tâches
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/Guests">
                                          <i className="svgIcon svgIcon__guests layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 55 36">
                                              <path d="M49.93 20.617a16.189 16.189 0 014.952 10.326c0 .189.008.676.033 2.008.024 1.349.032 1.837.032 2.049a.947.947 0 01-.947.947H1A.947.947 0 01.053 35c0-1.498.076-4.415.173-5.08.815-5.651 4.405-10.397 9.392-12.49a9.807 9.807 0 01-.749-.922 11.37 11.37 0 01-1.245-2.242 8.798 8.798 0 01-.369-1.027C5.111 6.106 8.811.053 14.975.053h1.13V.08c5.694.445 9.004 6.303 6.966 13.14-.063.225-.188.591-.385 1.053a11.558 11.558 0 01-1.26 2.238c-.234.323-.481.626-.741.908 2.583 1.067 4.795 2.844 6.448 5.093a15.198 15.198 0 011.938-2.13c.172-5.141.79-9.36 2.217-13.528C32.058 2.898 35.689.05 40 .05V.048c4.459 0 8.189 3.045 8.777 7.192l.017.104c.738 3.13 1.015 6 1.09 9.857.011.55.017 1 .029 1.974.007.686.012 1.077.018 1.442zm-1.914-1.555c-.01-.877-.016-1.307-.026-1.824a71.7 71.7 0 00-.107-2.855 11.458 11.458 0 01-1.321 2.195c-.306.4-.633.771-.981 1.109.857.387 1.671.848 2.435 1.375zM46.933 7.708a39.867 39.867 0 00-.23-.913 14.124 14.124 0 01-3.236 2.577c-3.37 1.93-6.946 2.04-10.254 1.075-.071-.02-.14-.041-.209-.062.082.792.253 1.579.512 2.351a9.582 9.582 0 001.428 2.69c1.264 1.657 2.915 2.627 5.056 2.627 2.14 0 3.792-.97 5.056-2.625a9.576 9.576 0 001.11-1.874c.17-.38.274-.667.329-.85.54-1.604.69-3.307.438-4.996zM33.846 5.35l.03.013c-.273.659-.522 1.316-.75 1.975-.013.069-.024.139-.034.208-.046.278-.081.556-.105.835.229.085.482.168.756.248 2.857.833 5.92.74 8.783-.9 1.19-.682 2.308-1.62 3.343-2.84C44.632 3.1 42.469 1.944 40 1.944v.002c-2.67 0-4.982 1.353-6.154 3.404zm-2.812 13.52a15.576 15.576 0 013.043-1.533c-.222-.24-.435-.493-.639-.76-.94-1.23-1.49-2.455-1.729-3.27-.02-.06-.04-.12-.058-.179-.308 1.806-.505 3.698-.617 5.742zm-9.508-11.88c-.894 1.056-1.85 1.916-2.86 2.588-3.257 2.167-6.731 2.252-9.942 1.104a13.654 13.654 0 01-.095-.034c.087.67.235 1.363.448 2.073a9.498 9.498 0 001.33 2.682c1.179 1.64 2.725 2.595 4.742 2.595h.009c1.997 0 3.544-.956 4.733-2.598a9.686 9.686 0 001.36-2.704c.627-2.106.679-4.059.275-5.706zm-.811-2.028c-1.101-1.87-2.982-3.014-5.313-3.014h-.427c-3.623 0-6.167 2.708-6.42 6.623.242.111.512.222.806.327 2.697.964 5.563.893 8.256-.898 1.096-.729 2.133-1.732 3.098-3.038zm-4.74 14.93l1.254 1.51c.224.27.28.64.148.965l-1.15 2.806.714 1.07c.071.107.12.228.143.355l.9 4.922a.947.947 0 01-.16.721l-1.294 1.813h11.882c-.023-1.508-.093-3.552-.162-4.016-.811-5.195-4.258-9.473-8.937-11.114a.947.947 0 01-.254-.135 7.053 7.053 0 01-2.963 1.049v.055h-.121zm-2.347-.146a7.031 7.031 0 01-2.36-.934.951.951 0 01-.178.084C6.343 20.548 2.863 24.913 2.1 30.193c-.063.431-.124 2.391-.146 3.86h10.89l-1.3-1.811a.947.947 0 01-.157-.743l1.013-4.923a.947.947 0 01.14-.334l.713-1.07-1.15-2.806a.947.947 0 01.148-.965l1.376-1.656zm16.68 14.308h22.731c-.004-.277-.01-.625-.019-1.063-.025-1.369-.033-1.84-.027-1.948-.024-.225-.05-.448-.08-.663-.732-5.247-4.255-9.625-9.113-11.37-1.11.605-2.375.938-3.8.938-1.608 0-3.012-.425-4.22-1.186l-.437.14a13.506 13.506 0 00-7.083 5.295l-.025.036a16.658 16.658 0 011.888 5.52c.087.581.16 2.715.185 4.3zM14.74 23.803l.668-1.629-.668-.803-.667.803.667 1.63zm-.52 3.336l-.893 4.336 1.36 1.897 1.362-1.906-.793-4.336-.516-.773-.52.782z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Invités
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/Tables">
                                          <i className="svgIcon svgIcon__tables layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 54 56">
                                              <path d="M6.287 17.12a3.683 3.683 0 01-.017-.017l-5.12-5.12a3.635 3.635 0 010-5.138l5.12-5.12a3.633 3.633 0 015.14 0l5.12 5.12c.031.03.06.062.09.093a23.365 23.365 0 0120.796.018c.035-.038.07-.075.107-.111l5.118-5.12a3.634 3.634 0 015.14 0l5.12 5.12a3.635 3.635 0 010 5.138l-5.12 5.12a3.669 3.669 0 01-.05.05 23.36 23.36 0 01-.125 21.545c.057.063.14.154.175.19l5.12 5.118a3.634 3.634 0 010 5.138l-5.12 5.12a3.636 3.636 0 01-5.14 0l-5.117-5.118a3.63 3.63 0 01-.33-.379 23.366 23.366 0 01-20.35.018 3.655 3.655 0 01-.315.36l-5.12 5.12a3.635 3.635 0 01-5.139 0l-5.119-5.12a3.633 3.633 0 010-5.139l5.12-5.119c.048-.048.098-.095.148-.14a23.356 23.356 0 01-.132-21.628zm8.516-9.174L9.995 3.14a1.633 1.633 0 00-2.31 0l-5.12 5.12a1.635 1.635 0 000 2.31l4.754 4.753a23.385 23.385 0 013.205-3.994 23.362 23.362 0 014.28-3.383zm31.898 7.408l4.785-4.785a1.635 1.635 0 000-2.31l-5.12-5.12a1.634 1.634 0 00-2.311 0L39.23 7.967a23.364 23.364 0 014.247 3.363 23.382 23.382 0 013.224 4.025zM7.467 40.52l-4.902 4.902a1.633 1.633 0 000 2.31l5.12 5.119a1.634 1.634 0 002.31 0l5.042-5.041a23.348 23.348 0 01-4.513-3.526 23.4 23.4 0 01-3.057-3.764zm31.529 7.27l5.059 5.061a1.635 1.635 0 002.312 0l5.119-5.12a1.634 1.634 0 000-2.31l-4.933-4.931a23.397 23.397 0 01-3.076 3.794 23.35 23.35 0 01-4.481 3.507zM11.938 12.745c-8.32 8.319-8.32 21.806 0 30.125 8.318 8.318 21.806 8.318 30.124 0 8.318-8.319 8.318-21.806 0-30.125-8.318-8.318-21.806-8.318-30.124 0z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Tables
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/Budget">
                                          <i className="svgIcon svgIcon__budget layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 24 24">
                                              <path d="M6.957 18.25l1.397 1.396a.5.5 0 01-.708.708L6.25 18.957l-1.396 1.397a.5.5 0 01-.708-.708l1.397-1.396-1.397-1.396a.5.5 0 01.708-.708l1.396 1.397 1.396-1.397a.5.5 0 01.708.708L6.957 18.25zM6.5 6h2a.5.5 0 110 1h-2v2a.5.5 0 11-1 0V7h-2a.5.5 0 010-1h2V4a.5.5 0 011 0v2zm6-5v11H23V2.172C23 1.525 22.475 1 21.828 1H12.5zm-1 0H2.172C1.525 1 1 1.525 1 2.172V12h10.5V1zm1 22h9.328c.647 0 1.172-.525 1.172-1.172V13H12.5v10zm-1 0V13H1v8.828C1 22.475 1.525 23 2.172 23H11.5zM2.172 0h19.656C23.028 0 24 .972 24 2.172v19.656c0 1.2-.972 2.172-2.172 2.172H2.172C.972 24 0 23.028 0 21.828V2.172C0 .972.972 0 2.172 0zM15.5 7a.5.5 0 110-1h5a.5.5 0 110 1h-5zm0 10a.5.5 0 110-1h5a.5.5 0 110 1h-5zm0 3a.5.5 0 110-1h5a.5.5 0 110 1h-5z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Budget
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/Vendors">
                                          <i className="svgIcon svgIcon__vendors layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 26 26">
                                              <path d="M21.589 16.913V3.087a1.243 1.243 0 00-1.243-1.243H3.796v22.312h16.55a1.243 1.243 0 001.243-1.243v-6zm1-.5H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.19a2.243 2.243 0 01-2.243 2.243H2.743A2.243 2.243 0 01.5 22.913V3.087A2.243 2.243 0 012.743.844h17.603a2.243 2.243 0 012.243 2.243v.392H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.16H25a.5.5 0 01.5.5v4.31a.5.5 0 01-.5.5h-2.411v1.154zm0 1v3.31H24.5v-3.31h-1.911zm0-3.155H24.5v-3.31h-1.911v3.31zm0-9.779v3.31H24.5v-3.31h-1.911zM2.796 24.156V1.844h-.053c-.687 0-1.243.557-1.243 1.243v19.826a1.243 1.243 0 001.243 1.243h.053zM7.476 6.89a.5.5 0 01.5-.5h9.182a.5.5 0 01.5.5v4.482a.5.5 0 01-.5.5H7.976a.5.5 0 01-.5-.5V6.89zm1 3.982h8.182V7.39H8.476v3.482z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Prestataires
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tools/DressList">
                                          <i className="svgIcon svgIcon__dresses layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 44 51">
                                              <path d="M32.581 9.03l-4.377 11.382c.467.33.982.723 1.533 1.178a32.947 32.947 0 014.802 4.908c3.656 4.6 6.109 10.095 6.797 16.5.193 1.794.41 2.785.843 4.128-.023-.073.286.874.376 1.164.154.492.286.955.415 1.465L43.284 51H.715l.303-1.238c.119-.484.242-.929.385-1.405.056-.183.111-.363.184-.594.09-.28.136-.43.175-.552.444-1.42.663-2.425.853-4.213.689-6.407 3.149-11.904 6.816-16.504a32.979 32.979 0 014.814-4.906c.553-.455 1.07-.847 1.538-1.178L11.24 8.533l-2.599-6.12L14.01.753l1.712 5.248.133-.001c2.266 0 4.669 1.377 6.116 3.499 1.377-2.164 3.615-3.437 6.199-3.469l.103.001L30.014.758l5.412 1.653-2.845 6.62zm-1.964-.465l-.813-.318a9.433 9.433 0 00-.287-.104 8.51 8.51 0 00-1.339-.113c-2.41.03-4.393 1.522-5.234 4.062l-.953 2.88-.946-2.882c-.736-2.241-2.88-3.89-4.832-4.073h-.846a8.145 8.145 0 00-.756.087c-.11.035-.241.082-.398.141l-.818.325 4.84 12.65-.714.432c-.088.054-.269.171-.53.353-.442.31-.939.686-1.475 1.127a30.99 30.99 0 00-4.521 4.608c-3.442 4.318-5.746 9.465-6.39 15.47-.206 1.926-.453 3.059-.935 4.598l-.175.557-.177.57c-.004.014 12.45.036 37.364.065-.122-.389-.426-1.323-.407-1.26-.473-1.47-.72-2.593-.928-4.528-.645-6.006-2.942-11.152-6.373-15.47a30.958 30.958 0 00-4.51-4.61 23.891 23.891 0 00-1.472-1.127c-.26-.182-.44-.3-.527-.353l-.713-.435 4.865-12.652zM13.502 6.376l.211-.078-.995-3.052-1.37.424 1.294 3.047c.41-.163.8-.318.86-.34zm19.205-2.704l-1.407-.43-1.009 3.053c.07.025.142.051.217.08.062.023.466.182.888.347l1.311-3.05z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Robes
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/website/index.php?actionReferrer=8">
                                          <i className="svgIcon svgIcon__website layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 63 50">
                                              <path d="M62.194 16.79V43.4c0 3.52-2.838 6.38-6.35 6.388H6.572c-3.514 0-6.36-2.862-6.36-6.388V16.79c0-.058.003-.115.011-.17V7C.24 3.49 3.068.648 6.572.63H55.85c3.497.017 6.326 2.86 6.343 6.37v9.79zm-2.388-1.193V7.009c-.012-2.201-1.782-3.98-3.961-3.99H6.577c-2.185.01-3.956 1.79-3.967 3.987v8.59h57.196zM2.598 17.985V43.4c0 2.21 1.78 4 3.973 4h49.271c2.19-.005 3.964-1.793 3.964-4V17.985H2.598zm51.447-6.856a1.964 1.964 0 01-1.96-1.969c0-1.088.878-1.97 1.96-1.97 1.082 0 1.96.882 1.96 1.97s-.878 1.97-1.96 1.97zm-6.404 0a1.964 1.964 0 01-1.96-1.969c0-1.088.878-1.97 1.96-1.97 1.082 0 1.959.882 1.959 1.97s-.877 1.97-1.96 1.97zm-6.417 0a1.964 1.964 0 01-1.959-1.969c0-1.088.877-1.97 1.96-1.97 1.082 0 1.959.882 1.959 1.97s-.877 1.97-1.96 1.97zm-18 16.726c.02.131.02.264 0 .394l-2.632 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.139-.778l-1.396-4.062-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.311c-.02-.13-.02-.263 0-.394a1.23 1.23 0 01.808-1.145c.135-.042.276-.063.417-.061.503.008.95.326 1.126.8l1.408 4.025 1.274-4.025c.172-.479.62-.802 1.126-.812h.098c.498.02.934.341 1.102.812l1.409 4.025 1.408-4.025a1.225 1.225 0 011.126-.8c.141 0 .282.02.417.061.499.164.839.63.844 1.157zm14.29 0c.02.131.02.264 0 .394l-2.559 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.138-.778l-1.409-4.05-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.31c-.019-.131-.019-.264 0-.395a1.23 1.23 0 01.808-1.144c.135-.043.276-.064.417-.062.503.009.95.326 1.126.8l1.408 4.025 1.396-4.025c.17-.475.613-.797 1.115-.812h.085c.498.02.934.341 1.102.812l1.409 4.025 1.408-4.025a1.225 1.225 0 011.126-.8c.141 0 .282.02.417.062.432.213.7.66.685 1.144zm14.302 0c.02.131.02.264 0 .394l-2.559 7.311c-.185.47-.636.778-1.139.778-.502 0-.954-.308-1.138-.778l-1.409-4.05-1.408 4.05c-.18.478-.636.794-1.145.794-.508 0-.964-.316-1.145-.794l-2.559-7.31c-.019-.131-.019-.264 0-.395a1.23 1.23 0 01.808-1.144c.135-.043.276-.064.417-.062.503.009.95.326 1.126.8l1.408 4.025 1.396-4.025c.173-.479.62-.802 1.127-.812h.086c.497.02.933.341 1.102.812l1.408 4.025 1.408-4.025a1.225 1.225 0 011.127-.8c.14 0 .28.02.416.062.428.216.69.663.673 1.144z" fillRule="nonzero" />
                                            </svg>
                                          </i>
                                          Site de mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabMyWeddingList__item">
                                        <a href="https://www.mariages.net/tirageausort">
                                          <i className="svgIcon svgIcon__contest layoutNavMenuTabMyWeddingList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M4.03 4a.5.5 0 01.5-.5h22.94a.5.5 0 01.5.5A3.03 3.03 0 0031 7.03a.5.5 0 01.5.5v15.293a.5.5 0 01-.5.5 3.03 3.03 0 00-3.03 3.03.5.5 0 01-.5.5H4.53a.5.5 0 01-.5-.5A3.03 3.03 0 001 23.323a.5.5 0 01-.5-.5V7.53a.5.5 0 01.5-.5A3.03 3.03 0 004.03 4zm.969.5A4.031 4.031 0 011.5 7.999v14.355a4.031 4.031 0 013.499 3.499H27a4.032 4.032 0 013.499-3.499V8A4.031 4.031 0 0127.001 4.5H5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M15.857 13.167c-.407-.451-.968-.743-1.621-.65-1.017.143-1.736 1.04-1.736 2.124 0 .324.086.642.227.946.266.575.745 1.14 1.333 1.68a12.049 12.049 0 001.432 1.125.67.67 0 00.73 0l.13-.088a12.049 12.049 0 001.302-1.036c.588-.54 1.067-1.106 1.334-1.681.14-.304.226-.622.226-.946 0-1.085-.719-1.98-1.735-2.124-.654-.093-1.215.199-1.622.65zm-.454 1.113c-.272-.59-.69-.821-1.027-.773-.47.066-.876.492-.876 1.134 0 .146.039.32.134.525.187.404.558.865 1.103 1.366a11.092 11.092 0 001.12.898 11.746 11.746 0 001.12-.898c.546-.501.916-.962 1.103-1.366.096-.205.134-.379.134-.525 0-.642-.405-1.068-.875-1.134-.337-.048-.756.184-1.028.773a.5.5 0 01-.908 0z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M4.5 10.478a3.5 3.5 0 013.5-3.5h16a3.5 3.5 0 013.5 3.5v10a3.5 3.5 0 01-3.5 3.5H8a3.5 3.5 0 01-3.5-3.5v-10zm3.5-2.5a2.5 2.5 0 00-2.5 2.5v10a2.5 2.5 0 002.5 2.5h16a2.5 2.5 0 002.5-2.5v-10a2.5 2.5 0 00-2.5-2.5H8z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M7.47 7.03a.5.5 0 01.5.5v15.293a.5.5 0 11-1 0V7.53a.5.5 0 01.5-.5zM24.53 7.03a.5.5 0 01.5.5v15.293a.5.5 0 11-1 0V7.53a.5.5 0 01.5-.5z" />
                                            </svg>
                                          </i>
                                          Tirage au sort
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabMyWeddingBanners">
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/app-mariage">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Téléchargez l'application
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Organisez votre mariage où et quand vous
                                          voulez
                                        </span>
                                      </div>
                                      <img data-src="https://www.mariages.net/assets/img/logos/square-icon.svg" className="lazyload layoutNavMenuBannerBox__icon" alt="Icône de l'application" width={60} height={60} />
                                    </div>
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/tools/Wedshoots">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <a className="layoutNavMenuBannerBox__title" href="https://www.mariages.net/tools/Wedshoots">
                                          Wedshoots
                                        </a>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Toutes les photos prises par vos invités
                                          dans un album
                                        </span>
                                      </div>
                                      <img data-src="https://www.mariages.net/assets/img/wedshoots/ico_wedshoots.svg" className="lazyload layoutNavMenuBannerBox__icon" alt="Icône de Wedshoots" width={60} height={60} />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item">
                          <a href="https://www.mariages.net/reception" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-venues" data-track-v={0} data-track-ni={0} data-tab="banquetes">
                            Réception
                          </a>
                          <div className="app-tabs-container-banquetes">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/reception">
                                    Réception
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabVenues">
                                  <div className="layoutNavMenuTabVenues__categories">
                                    <div className="layoutNavMenuTabVenuesList">
                                      <a className="layoutNavMenuTabVenues__title" href="https://www.mariages.net/reception">
                                        Réception
                                      </a>
                                      <ul className="layoutNavMenuTabVenuesList__content">
                                        <li className="layoutNavMenuTabVenuesList__item layoutNavMenuTabVenuesList__item--viewAll">
                                          <a href="https://www.mariages.net/reception">
                                            Voir plus
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/domaine-mariage">
                                            Domaine mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/auberge-mariage">
                                            Auberge mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/hotel-mariage">
                                            Hôtel mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/restaurant-mariage">
                                            Restaurant mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/traiteur-mariage">
                                            Traiteur mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/salle-mariage">
                                            Salle mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/chateau-mariage">
                                            Château mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/mariages-a-la-plage">
                                            Mariages à la plage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item">
                                          <a href="https://www.mariages.net/bateau-mariage">
                                            Bateau mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVenuesList__item layoutNavMenuTabVenuesList__item--highlight">
                                          <a href="https://www.mariages.net/promotions/reception">
                                            Promotions
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="layoutNavMenuTabVenuesBanners">
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/destination-wedding">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Destination Weddings
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Mariez-vous dans le pays de vos rêves.
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__plane_destination
                                layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/plane_destination.svg" aria-hidden alt="illustration plane
                                destination" width={56} height={56}  />
                                    </div>
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/tirageausort">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Gagnez 4.000€
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Participez à la 101ème édition du tirage au
                                          sort de Mariages.net
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__stars
                                layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/stars.svg" aria-hidden alt="illustration stars" width={56} height={56}  />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item">
                          <a href="https://www.mariages.net/prestataires" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-vendors" data-track-v={0} data-track-ni={0} data-tab="proveedores">
                            Prestataires
                          </a>
                          <div className="app-tabs-container-proveedores">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/prestataires">
                                    Prestataires
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabVendors">
                                  <div className="layoutNavMenuTabVendors__content">
                                    <div className="layoutNavMenuTabVendorsList">
                                      <a className="layoutNavMenuTabVendors__title" href="https://www.mariages.net/prestataires">
                                        Commencez à rechercher vos prestataires
                                      </a>
                                      <ul className="layoutNavMenuTabVendorsList__content">
                                        <li className="layoutNavMenuTabVendorsList__item layoutNavMenuTabVendorsList__item--viewAll">
                                          <a href="https://www.mariages.net/prestataires">
                                            Voir plus
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categPhoto layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M4.619 5.832c0-.697.568-1.265 1.265-1.265h3.595c.697 0 1.265.568 1.265 1.265v.915h18.738c.774 0 1.38.606 1.38 1.38V25.91c0 .774-.606 1.38-1.38 1.38H2.518c-.774 0-1.38-.606-1.38-1.38V8.128c0-.774.606-1.38 1.38-1.38h2.1v-.915zm1 .915h4.125v-.915a.267.267 0 00-.265-.265H5.884a.267.267 0 00-.265.265v.915zm-3.48 8.037v11.127c0 .222.158.38.379.38h26.964c.221 0 .38-.158.38-.38V14.784h-6.728a7.461 7.461 0 11-14.23 0H2.138zm7.164-1H2.138V8.127c0-.222.159-.38.38-.38h26.964c.221 0 .38.158.38.38v5.657h-7.127a7.461 7.461 0 00-6.716-4.207 7.462 7.462 0 00-6.716 4.207zm12.618.62a6.462 6.462 0 00-12.363 2.634 6.461 6.461 0 1012.428-2.483.495.495 0 01-.065-.15zm1.362-4.824a.5.5 0 01.5-.5h3.94a.5.5 0 01.5.5v2.256a.5.5 0 01-.5.5h-3.94a.5.5 0 01-.5-.5V9.58zm1 .5v1.256h2.94V10.08h-2.94zm-8.264 4.016a2.942 2.942 0 100 5.885 2.942 2.942 0 000-5.885zm-3.942 2.942a3.942 3.942 0 117.884 0 3.942 3.942 0 01-7.884 0z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/photo-mariage">
                                            Photo mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categVideo layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M6.266 3.357C3.715 3.357 1.643 5.434 1.643 8s2.072 4.643 4.623 4.643S10.889 10.565 10.889 8c0-2.566-2.072-4.643-4.623-4.643zM.643 8c0-3.114 2.516-5.643 5.623-5.643S11.889 4.886 11.889 8s-2.516 5.643-5.623 5.643S.643 11.114.643 8zm16.894-.529a2.58 2.58 0 00-2.574 2.586 2.58 2.58 0 002.574 2.586 2.58 2.58 0 002.574-2.586 2.58 2.58 0 00-2.574-2.586zm-3.574 2.586a3.58 3.58 0 013.574-3.586 3.58 3.58 0 013.574 3.586 3.58 3.58 0 01-3.574 3.586 3.58 3.58 0 01-3.574-3.586zM3.193 15.7a.53.53 0 00-.526.529v11.314a.53.53 0 00.525.528h18.444a.53.53 0 00.524-.528v-3.686-3.52-4.108a.53.53 0 00-.524-.529H3.192zm19.967 3.875v-3.346a1.53 1.53 0 00-1.524-1.529H3.192a1.53 1.53 0 00-1.525 1.529v11.314c0 .84.684 1.528 1.525 1.528h18.444a1.53 1.53 0 001.524-1.528v-2.947l6.558 2.744c.376.157.796.16 1.139-.068.342-.229.5-.618.5-1.026v-8.318c0-.408-.158-.797-.5-1.026-.342-.229-.762-.226-1.138-.069l-6.559 2.742zm0 1.084v2.854l6.944 2.904c.143.06.196.024.197.023.001 0 .056-.036.056-.194v-8.318c0-.158-.054-.194-.056-.195-.002 0-.054-.037-.197.023l-6.944 2.902zM5.81 19.314a.5.5 0 01.5-.5h12.92a.5.5 0 110 1H6.31a.5.5 0 01-.5-.5z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/video-mariage">
                                            Vidéo mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categMusic layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M6.952 23.173a3.5 3.5 0 00-.008 7 3.641 3.641 0 003.508-3.508v-3.492h-3.5zm-4.5 3.5a4.5 4.5 0 014.5-4.5h4a.5.5 0 01.5.5v4.017a4.641 4.641 0 01-4.483 4.483h-.017a4.5 4.5 0 01-4.5-4.5zM21.619 17.84a3.5 3.5 0 00-.008 7 3.641 3.641 0 003.508-3.509V17.84h-3.5zm-4.5 3.5a4.5 4.5 0 014.5-4.5h4a.5.5 0 01.5.5v4.017a4.641 4.641 0 01-4.483 4.483h-.017a4.5 4.5 0 01-4.5-4.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M24.752 1.969a.833.833 0 00-.782-.081l-12 4.91a.834.834 0 00-.518.771v15.104a.5.5 0 11-1 0V7.57c0-.745.45-1.416 1.139-1.698l12-4.91a1.833 1.833 0 012.528 1.706v.001l-.5-.002h.5v14.68a.5.5 0 01-1 0V2.664a.833.833 0 00-.367-.695z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M26.082 5.15a.5.5 0 01-.274.653l-14.666 6a.5.5 0 01-.379-.926l14.667-6a.5.5 0 01.652.274z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/musique-mariage">
                                            Musique mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categRental layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M3.993 11.653c3.087-3.47 7.37-5.296 12.35-5.296h4.72c1.116 0 2.022.907 2.022 2.022 0 .05-.009.458-.244.886a1.818 1.818 0 01-.98.837l1.423 2.848h5.509A3.21 3.21 0 0132 16.157v4.125a3.21 3.21 0 01-3.207 3.207h-1.32v-.049a3.5 3.5 0 01-6.94.05h-8.067a3.5 3.5 0 01-6.932 0H2.367A2.437 2.437 0 01.05 20.565l.002-.009.065-.308.063-.288v-.003l.001-.002c.39-1.816 1.138-5.3 3.812-8.303zM5.537 22.49a3.5 3.5 0 016.926 0h8.074a3.5 3.5 0 016.936.07v-.07h1.32A2.21 2.21 0 0031 20.282v-4.125a2.21 2.21 0 00-2.207-2.207h-10.37V9.248h2.64a.836.836 0 00.073-.004c.518-.044.727-.275.829-.46.105-.193.118-.383.12-.405 0-.003 0-.003 0 0 0-.563-.46-1.022-1.023-1.022h-4.719c-4.721 0-8.722 1.722-11.603 4.961-2.487 2.793-3.194 6.046-3.582 7.853v.003l-.064.288-.063.297a1.437 1.437 0 001.355 1.73h3.151zm16.629-9.54l-1.35-2.7h-1.393v2.7h2.743zM16 9.442V14H5.9l.723-.829c2.036-2.333 4.869-3.227 8.822-3.668L16 9.441zM8.215 13H15v-2.437c-3.014.382-5.167 1.062-6.785 2.437zm-4.463 7.384a5.85 5.85 0 0110.491 0 .5.5 0 11-.896.444 4.85 4.85 0 00-8.699 0 .5.5 0 11-.896-.444zM9 20.5a2.5 2.5 0 100 5 2.5 2.5 0 000-5zm15 0a2.5 2.5 0 100 5 2.5 2.5 0 000-5z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/voiture-mariage">
                                            Voiture mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categTransport layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M7.721 24.652a.5.5 0 01.5-.5H20.26a.5.5 0 010 1H8.22a.5.5 0 01-.5-.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M.5 9.522A3.022 3.022 0 013.522 6.5h19.246a5.062 5.062 0 014.527 2.798l2.589 5.177a5.84 5.84 0 01.616 2.612v6.304a1.76 1.76 0 01-1.76 1.761h-4.13a.5.5 0 110-1h4.13c.42 0 .76-.34.76-.76v-6.305a4.84 4.84 0 00-.51-2.165L26.4 9.745l.432-.216-.431.216A4.062 4.062 0 0022.768 7.5H3.522A2.022 2.022 0 001.5 9.522v13.87c0 .42.34.76.76.76h1.608a.5.5 0 110 1H2.261A1.76 1.76 0 01.5 23.392V9.521z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M22.435 21.37a2.022 2.022 0 100 4.043 2.022 2.022 0 000-4.043zm-3.022 2.021a3.022 3.022 0 116.044 0 3.022 3.022 0 01-6.044 0zM6.043 21.37a2.022 2.022 0 100 4.043 2.022 2.022 0 000-4.043zM3.022 23.39a3.022 3.022 0 116.043 0 3.022 3.022 0 01-6.043 0zM.5 9.522a.5.5 0 01.5-.5h25.848a.5.5 0 110 1H1a.5.5 0 01-.5-.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M.5 17.087a.5.5 0 01.5-.5h21.435a7.213 7.213 0 014.742 1.784l3.152 2.752a.5.5 0 11-.658.754l-3.152-2.753a6.213 6.213 0 00-4.084-1.537H1a.5.5 0 01-.5-.5zM8.565 9.022a.5.5 0 01.5.5v3.782c0 .42.34.761.761.761H29.37a.5.5 0 110 1H9.826a1.76 1.76 0 01-1.76-1.76V9.521a.5.5 0 01.5-.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M14.87 9.022a.5.5 0 01.5.5v5.043a.5.5 0 11-1 0V9.522a.5.5 0 01.5-.5zM22.435 9.022a.5.5 0 01.5.5v5.043a.5.5 0 01-1 0V9.522a.5.5 0 01.5-.5z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/bus-mariage">
                                            Bus mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categFlower layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M16.077.776a.5.5 0 01.678 0 15.546 15.546 0 013.052 3.886 8.846 8.846 0 014.997-1.543.5.5 0 01.5.5v6.423c-.052 4.72-3.771 8.587-8.439 8.822v6.802a9.827 9.827 0 011.62-2.134c2.026-2.077 4.742-3.034 7.4-2.928a.5.5 0 01.48.48c.107 2.664-.905 5.372-2.815 7.388a10.084 10.084 0 01-6.87 2.885h-.517c-2.505 0-4.956-.96-6.87-2.873-2.078-2.025-3.034-4.742-2.928-7.4a.5.5 0 01.49-.48c2.65-.053 5.363.901 7.387 2.926a9.544 9.544 0 011.623 2.169v-6.84c-4.62-.286-8.286-4.132-8.338-8.817V3.62a.5.5 0 01.5-.5c1.859 0 3.58.565 5.004 1.532A15.547 15.547 0 0116.077.776zM12.738 5.67a.498.498 0 00.324.254 7.864 7.864 0 012.854 6.084.5.5 0 101 0A7.868 7.868 0 0119.8 5.915a.503.503 0 00.277-.218 7.856 7.856 0 014.226-1.562v5.9c-.048 4.273-3.482 7.754-7.73 7.839a.498.498 0 00-.412-.003c-4.204-.134-7.587-3.595-7.635-7.837v-5.9a7.855 7.855 0 014.212 1.536zm6.266-.391a14.536 14.536 0 00-2.588-3.445 14.538 14.538 0 00-2.582 3.433 8.865 8.865 0 012.584 3.79 8.91 8.91 0 012.586-3.778zm6.368 16.318a8.734 8.734 0 00-6.172 2.635l-.005.005c-1.198 1.198-2.008 2.678-2.34 4.248a.5.5 0 01-.976.014c-.385-1.59-1.152-3.071-2.344-4.262-1.694-1.694-3.933-2.561-6.177-2.63a8.732 8.732 0 002.635 6.163l.004.005c1.725 1.724 3.922 2.582 6.166 2.582h.5a9.083 9.083 0 006.168-2.58c1.61-1.703 2.507-3.947 2.541-6.18z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/fleurs-mariage">
                                            Fleurs mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categInvite layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M7.934 12.043a.5.5 0 01-.129.695L3.5 15.698v11.606c0 .66.535 1.196 1.196 1.196h22.608c.66 0 1.196-.535 1.196-1.196V15.698l-4.305-2.96a.5.5 0 11.567-.824l4.521 3.109a.5.5 0 01.217.412v11.87a2.196 2.196 0 01-2.196 2.195H4.696A2.196 2.196 0 012.5 27.304v-11.87a.5.5 0 01.217-.411l4.521-3.109a.5.5 0 01.696.129z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M11.731 20.697a.5.5 0 01.313-.11h7.912a.5.5 0 01.313.11l5.652 4.521a.5.5 0 11-.625.781l-5.515-4.412H12.22l-5.515 4.412a.5.5 0 11-.625-.78l5.652-4.523zM29.416 15.157a.5.5 0 01-.139.694l-6.782 4.521a.5.5 0 01-.555-.831l6.783-4.522a.5.5 0 01.693.138zM2.584 15.157a.5.5 0 01.693-.138l6.783 4.522a.5.5 0 01-.555.831l-6.782-4.521a.5.5 0 01-.139-.694z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M7.022 4.13c0-.9.73-1.63 1.63-1.63h14.696c.9 0 1.63.73 1.63 1.63v14.32a.5.5 0 11-1 0V4.13a.63.63 0 00-.63-.63H8.652a.63.63 0 00-.63.63v14.32a.5.5 0 11-1 0V4.13z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M11.5 9.21c0-1.448 1.073-2.71 2.5-2.71.767 0 1.393.508 1.774.903.082.085.158.17.226.251.068-.08.144-.166.226-.251.382-.395 1.007-.903 1.774-.903 1.427 0 2.5 1.262 2.5 2.71 0 .643-.207 1.24-.559 1.71a.5.5 0 01-.097.127l-.025.024c-.11.126-.232.242-.363.344l-3.112 2.948a.5.5 0 01-.688 0l-3.112-2.948a2.594 2.594 0 01-.363-.344l-.025-.024a.5.5 0 01-.097-.128 2.846 2.846 0 01-.559-1.708zm1.41 1.175l.014.016c.075.089.159.167.248.235a.506.506 0 01.041.035L16 13.311l2.787-2.64a.506.506 0 01.041-.035 1.583 1.583 0 00.276-.269c.243-.3.396-.705.396-1.156 0-.993-.718-1.711-1.5-1.711-.337 0-.711.242-1.054.597a4.24 4.24 0 00-.511.65l-.005.009L16 8.5l-.43.257-.005-.01a2.718 2.718 0 00-.128-.19 4.24 4.24 0 00-.383-.46C14.711 7.742 14.337 7.5 14 7.5c-.783 0-1.5.718-1.5 1.71a1.838 1.838 0 00.41 1.175zM16 8.5l-.43.257s.001 0 0 0a.5.5 0 00.86-.001" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/faire-part-mariage">
                                            Faire part mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsList__item">
                                          <i className="svgIcon svgIcon__categGift layoutNavMenuTabVendorsList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8.877 5.157c0-2.232 1.78-4.019 3.982-4.019a3.97 3.97 0 012.679 1.048 3.977 3.977 0 012.69-1.048c2.203 0 3.983 1.787 3.983 4.019a4.019 4.019 0 01-1.452 3.108h8.78a.5.5 0 01.5.5v6.752a.5.5 0 01-.5.5h-1.288v14.345a.5.5 0 01-.5.5h-8.476a.501.501 0 01-.218 0H3.427a.5.5 0 01-.5-.5V16.017H1.637a.5.5 0 01-.5-.5V8.765a.5.5 0 01.5-.5h8.705a4.037 4.037 0 01-1.466-3.108zm2.635 4.108H2.138v5.752h9.374V9.265zm-.045 6.752h-7.54v13.845h7.54V16.017zm1 13.845h6.199V16.017h-6.2v13.845zm.045-14.845V9.16c.114.01.23.015.348.015h5.368c.148 0 .294-.008.438-.023v5.865h-6.154zm7.154 1v13.845h7.585V16.017h-7.585zm0-1h9.373V9.265h-9.373v5.752zM12.86 2.138c-1.644 0-2.983 1.333-2.983 3.019 0 1.653 1.342 3.018 2.982 3.018h5.37c1.643 0 2.982-1.332 2.982-3.018 0-1.686-1.34-3.019-2.983-3.019-.932 0-1.77.436-2.295 1.084a.5.5 0 01-.768.011c-.57-.665-1.38-1.095-2.305-1.095z" />
                                            </svg>
                                          </i>
                                          <a href="https://www.mariages.net/cadeaux-invites-mariage">
                                            Cadeaux invités mariage
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="layoutNavMenuTabVendorsListOthers">
                                      <p className="layoutNavMenuTabVendorsListOthers__subtitle">
                                        Autres catégories
                                      </p>
                                      <ul className="layoutNavMenuTabVendorsListOthers__container">
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/decoration-mariage">
                                            Décoration mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/chapiteau-mariage">
                                            Chapiteau mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/animation-mariage">
                                            Animation mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/liste-de-mariage">
                                            Liste de mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/organisation-mariage">
                                            Organisation mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/lune-de-miel">
                                            Lune de miel
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/wedding-cake">
                                            Wedding cake
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/food-truck">
                                            Food Truck
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/officiants">
                                            Officiants
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__item">
                                          <a href="https://www.mariages.net/vin-et-spiritueux">
                                            Vin et Spiritueux
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsListOthers__deals">
                                          <a href="https://www.mariages.net/promotions/prestataires">
                                            Promotions
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div className="layoutNavMenuTabVendorsBanners">
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/destination-wedding">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Destination Weddings
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Mariez-vous dans le pays de vos rêves.
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__plane_destination
                                layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/plane_destination.svg" aria-hidden alt="illustration plane
                                destination" width={56} height={56}  />
                                    </div>
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/tirageausort">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Gagnez 4.000€
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Participez à la 101ème édition du tirage au
                                          sort de Mariages.net
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__stars layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/stars.svg" aria-hidden alt="illustration stars" width={56} height={56}  />
                                    </div>
                                  </div>
                                  <div className="layoutNavMenuTabVendorsOtherTabs">
                                    <div className="layoutNavMenuTabVendorsBride">
                                      <p className="layoutNavMenuTabVendorsOtherTabs__subtitle">
                                        Mariée
                                      </p>
                                      <ul className="layoutNavMenuTabVendorsOtherTabsList">
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/robe-de-mariee">
                                            Robe de mariée
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/accessoires-mariage">
                                            Accessoires mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/bijoux-mariage">
                                            Bijoux mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/esthetique-coiffure-mariage">
                                            Esthétique coiffure mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/robe-de-cocktail">
                                            Robe de cocktail
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item layoutNavMenuTabVendorsOtherTabsList__item--deals">
                                          <a href="https://www.mariages.net/promotions/mariee">
                                            Promotions
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div className="layoutNavMenuTabVendorsGrooms">
                                      <p className="layoutNavMenuTabVendorsOtherTabs__subtitle">
                                        Marié
                                      </p>
                                      <ul className="layoutNavMenuTabVendorsOtherTabsList">
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/costumes-mariage">
                                            Costumes mariage
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/accessoires-marie">
                                            Accessoires marié
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item">
                                          <a href="https://www.mariages.net/soins-beaute">
                                            Soins beauté
                                          </a>
                                        </li>
                                        <li className="layoutNavMenuTabVendorsOtherTabsList__item layoutNavMenuTabVendorsOtherTabsList__item--deals">
                                          <a href="https://www.mariages.net/promotions/marie">
                                            Promotions
                                          </a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item nav-tabBrides">
                          <a href="https://www.mariages.net/mariee" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-bride" data-track-v={0} data-track-ni={0} data-tab="novias">
                            Mariée
                          </a>
                          <div className="app-tabs-container-novias">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/mariee">
                                    Mariée
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabBridesGrooms">
                                  <div className="layoutNavMenuTabBridesGroomsList">
                                    <a className="layoutNavMenuTabBridesGrooms__title" href="https://www.mariages.net/mariee">
                                      Mariée
                                    </a>
                                    <ul className="layoutNavMenuTabBridesGroomsList__content">
                                      <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--viewAll">
                                        <a href="https://www.mariages.net/mariee">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/robe-de-mariee">
                                          Robe de mariée
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/accessoires-mariage">
                                          Accessoires mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/bijoux-mariage">
                                          Bijoux mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/esthetique-coiffure-mariage">
                                          Esthétique coiffure mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/robe-de-cocktail">
                                          Robe de cocktail
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--highlight">
                                        <a href="https://www.mariages.net/promotions/mariee">
                                          Promotions
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabBridesGroomsBanner">
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/robes-mariee">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Catalogue de robes
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Choisissez la vôtre et trouvez la boutique
                                          la plus proche.
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__dress
                                layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/dress.svg" aria-hidden alt="illustration dress" width={56} height={56}  />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item nav-tabGrooms">
                          <a href="https://www.mariages.net/marie" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-groom" data-track-v={0} data-track-ni={0} data-tab="novios">
                            Marié
                          </a>
                          <div className="app-tabs-container-novios">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/marie">
                                    Marié
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabBridesGrooms">
                                  <div className="layoutNavMenuTabBridesGroomsList">
                                    <a className="layoutNavMenuTabBridesGrooms__title" href="https://www.mariages.net/marie">
                                      Marié
                                    </a>
                                    <ul className="layoutNavMenuTabBridesGroomsList__content">
                                      <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--viewAll">
                                        <a href="https://www.mariages.net/marie">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/costumes-mariage">
                                          Costumes mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/accessoires-marie">
                                          Accessoires marié
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item">
                                        <a href="https://www.mariages.net/soins-beaute">
                                          Soins beauté
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabBridesGroomsList__item layoutNavMenuTabBridesGroomsList__item--highlight">
                                        <a href="https://www.mariages.net/promotions/marie">
                                          Promotions
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabBridesGroomsBanner">
                                    <div className="layoutNavMenuBannerBox app-header-menu-banner app-link" data-href="https://www.mariages.net/costumes-marie">
                                      <div className="layoutNavMenuBannerBox__content">
                                        <p className="layoutNavMenuBannerBox__title">
                                          Catalogue de costumes
                                        </p>
                                        <span className="layoutNavMenuBannerBox__subtitle">
                                          Choisissez la vôtre et trouvez la boutique
                                          la plus proche.
                                        </span>
                                      </div>
                                      <img className="svgIcon svgIcon__bowtie_blue
                                layoutNavMenuBannerBox__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/bowtie_blue.svg" aria-hidden alt="illustration bowtie blue" width={56} height={56}  />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item nav-tabDresses">
                          <a href="https://www.mariages.net/robes-mariee" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-dresses" data-track-v={0} data-track-ni={0} data-tab="catalogo">
                            Robes
                          </a>
                          <div className="app-tabs-container-catalogo">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/robes-mariee">
                                    Robes
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabDresses">
                                  <div className="layoutNavMenuTabDressesList">
                                    <a className="layoutNavMenuTabDresses__title" href="https://www.mariages.net/robes-mariee">
                                      Les dernières tendances de la mode nuptiale
                                    </a>
                                    <ul className="layoutNavMenuTabDressesList__content">
                                      <li className="layoutNavMenuTabDressesList__item layoutNavMenuTabDressesList__item--viewAll">
                                        <a href="https://www.mariages.net/robes-mariee">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/robes-mariee" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__bride-dress layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <g clipPath="url(#clip0)" fillRule="evenodd" clipRule="evenodd">
                                                <path d="M11.163 2.677a7.448 7.448 0 012.04-.283c.647 0 1.407.213 2.05.62.352.224.681.515.938.874.737-.994 1.95-1.494 2.932-1.494.718 0 1.404.102 2.039.283a.5.5 0 01.335.646l-2.408 6.892c.214.106.508.26.86.461a19.103 19.103 0 012.793 1.963c2.091 1.772 4.387 4.522 5.083 8.387.588 3.265 1.329 5.265 1.908 6.436.29.585.538.963.707 1.188a2.956 2.956 0 00.232.274l.005.005a.5.5 0 01-.192.853l-.02.005a.506.506 0 01-.056.013 85.157 85.157 0 01-28.141.058l-.35-.057a.5.5 0 01-.25-.867l.005-.005c.007-.007.02-.02.04-.043.041-.043.106-.117.19-.23.17-.225.419-.603.708-1.188.58-1.172 1.32-3.172 1.909-6.437.696-3.866 2.991-6.615 5.082-8.387a19.094 19.094 0 012.795-1.963c.343-.197.631-.348.843-.453l-2.412-6.905a.5.5 0 01.335-.646zm3.071 7.364a.5.5 0 01-.028.817l-.063.04-.005.002-.014.008a.494.494 0 01-.09.05l-.004.002-.013.006a14.691 14.691 0 00-1.122.582 18.097 18.097 0 00-2.646 1.86c-1.987 1.682-4.104 4.242-4.745 7.8-.602 3.337-1.367 5.43-1.996 6.703-.217.438-.418.78-.59 1.04a84.154 84.154 0 0026.51-.003 9.612 9.612 0 01-.591-1.043c-.63-1.272-1.395-3.365-1.996-6.702-.641-3.558-2.759-6.118-4.745-7.8a18.1 18.1 0 00-2.646-1.86 14.744 14.744 0 00-1.065-.556 4.231 4.231 0 00-.057-.026l-.014-.006h-.002a.506.506 0 01-.091-.051l-.016-.01c-.012-.008-.043-.025-.074-.046a.5.5 0 01-.045-.793l2.285-6.54a6.48 6.48 0 00-1.248-.121c-.926 0-2.125.633-2.485 1.79a.5.5 0 01-.967-.048c-.11-.537-.47-.97-.954-1.277-.49-.31-1.064-.465-1.514-.465-.432 0-.85.043-1.249.12l2.28 6.527z" />
                                                <path d="M11.901.02a.5.5 0 01.61.31l.866 2.394a.5.5 0 01-.665.63.655.655 0 00-.102-.003c-.17.006-.518.056-1.142.278a.5.5 0 01-.635-.292l-.84-2.199A.5.5 0 0110.32.48L11.9.02zm.293 2.373l-.464-1.282-.61.177.477 1.247a5.27 5.27 0 01.597-.142zM19.799.33a.5.5 0 01.61-.31l1.581.46a.5.5 0 01.328.658l-.842 2.199a.5.5 0 01-.634.292c-.625-.222-.973-.272-1.142-.278a.655.655 0 00-.102.003.5.5 0 01-.665-.63L19.799.33zm.317 2.063c.169.029.366.074.596.142l.477-1.247-.61-.177-.463 1.282zM15.65 10.404a.5.5 0 01-.171.685h-.001l-.257-.429.258.43h-.002l-.015.01a4.677 4.677 0 00-.322.232c-.22.17-.52.432-.839.787a6.693 6.693 0 00-1.614 3.269.5.5 0 01-.983-.182 7.695 7.695 0 011.853-3.754c.364-.406.71-.707.966-.908a5.647 5.647 0 01.403-.289l.026-.016.008-.005.003-.002h.001l.257.428-.257-.428a.5.5 0 01.687.172zM16.608 10.404a.5.5 0 01.686-.173l-.256.43.256-.43.002.001.003.002.008.005.026.016.091.06c.077.052.184.128.312.229.257.2.602.502.966.908a7.694 7.694 0 011.853 3.754.5.5 0 01-.983.182 6.695 6.695 0 00-1.614-3.269 6.626 6.626 0 00-.838-.788 4.671 4.671 0 00-.323-.231l-.014-.01-.003-.001a.5.5 0 01-.172-.685z" />
                                                <path d="M13.307 8.9c1.91-.661 3.909-.78 5.752-.054a.5.5 0 01.29.627l-.364 1.063a.5.5 0 01-.497.557h-4.651a.5.5 0 01-.495-.573L13 9.538a.5.5 0 01.308-.637zm.945 1.193h3.828l.162-.473c-1.302-.396-2.71-.34-4.13.073l.14.4z" />
                                              </g>
                                              <defs>
                                                <clipPath id="clip0">
                                                  <path d="M0 0h32v32H0z" />
                                                </clipPath>
                                              </defs>
                                            </svg>
                                          </i>
                                          Mariée
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/costumes-marie" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__suit layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M12.288.094c.06-.01.123-.01.187.003l1.522.313c1.4.286 2.842.283 4.24-.01L19.68.098a.5.5 0 01.534.238c.059.043.147.102.275.176.348.2.98.501 2.073.862 1.39.458 2.293.873 2.912 1.233a6.082 6.082 0 011.175.872.5.5 0 01.144.233l4.687 16.585a.5.5 0 01-.316.608l-4.258 1.49a.5.5 0 01-.64-.317l-2.434-7.465.323 10.548a.5.5 0 01-.239.442l-.261-.426.261.426-.002.001-.003.002-.009.005a1.337 1.337 0 01-.12.066c-.079.04-.194.096-.347.162-.307.13-.767.3-1.4.468-1.266.336-3.223.664-6.036.664l-.033-.001c-2.795-.003-4.742-.33-6.003-.664a10.323 10.323 0 01-1.4-.468 5.237 5.237 0 01-.467-.228l-.009-.005-.003-.002h-.001s-.001-.001.26-.427l-.261.426a.5.5 0 01-.239-.442l.323-10.548-2.434 7.465a.5.5 0 01-.64.317l-4.258-1.49a.5.5 0 01-.316-.608L5.206 3.711a.5.5 0 01.165-.252c.223-.203.546-.499 1.154-.853.62-.36 1.522-.775 2.912-1.233 1.094-.36 1.725-.662 2.073-.862a2.576 2.576 0 00.367-.25V.258c.002-.001.002-.002 0 .001l-.006.007-.004.004-.002.003-.001.001a.446.446 0 01.013-.015m.127 1.12c-.333.192-.837.435-1.593.713l2.96 5.766a.5.5 0 01.003.448l-.525 1.075 2.65 2.11v-.5L12.005 1.38zM15.5 12.771l-3.588-2.856a.5.5 0 01-.138-.611l.592-1.211-2.91-5.671c-1.174.402-1.926.756-2.428 1.048a6.4 6.4 0 00-.234.143A20.399 20.399 0 018.02 5.85c.692 1.48 1.388 3.467 1.252 5.324l-.219 7.16.685.195c.729.19 1.474.316 2.225.378l1.126.09a.5.5 0 01.46.499v2.402a.5.5 0 01-.508.5l-.976-.015a11.418 11.418 0 01-2.69-.368l-.43-.113-.091 2.972.102.045c.262.112.676.266 1.264.421 1.102.292 2.816.591 5.28.627V12.771zm1 13.196c2.464-.036 4.178-.334 5.28-.627a9.35 9.35 0 001.366-.466l-.09-2.98-.462.12c-.879.23-1.781.353-2.689.368l-.977.015a.5.5 0 01-.508-.5v-2.402a.5.5 0 01.46-.498l1.126-.091a13.03 13.03 0 002.225-.378l.715-.203-.219-7.17a.502.502 0 01.02-.153c-.083-1.808.592-3.718 1.263-5.152a20.408 20.408 0 011.217-2.222 6.344 6.344 0 00-.255-.157c-.503-.292-1.256-.647-2.433-1.05l-2.91 5.671.591 1.212a.5.5 0 01-.137.61L16.5 12.768v13.2zm0-14.478l2.646-2.106-.526-1.077a.5.5 0 01.004-.448l2.96-5.766c-.735-.271-1.232-.508-1.564-.697l-3.52 9.6v.494zm2.473-10.221L16 9.442 13.013 1.23l.783.16c1.534.315 3.114.31 4.646-.01l.531-.111zm6.968 3.104a19.35 19.35 0 00-1.025 1.901c-.673 1.44-1.28 3.235-1.162 4.83.001.016.002.03.001.045l3.304 10.134 3.332-1.166-4.45-15.744zM22.93 19.37l-.442.125c-.787.206-1.591.342-2.402.408l-.667.054v1.434l.468-.008a10.415 10.415 0 002.454-.336l.633-.165-.044-1.512zM8.995 20.881l.633.165c.8.21 1.624.322 2.453.337l.468.007v-1.434l-.667-.054a14.043 14.043 0 01-2.402-.408l-.01-.002-.431-.123-.044 1.512zm-.716-9.84c.098-1.58-.501-3.348-1.166-4.768A19.402 19.402 0 006.068 4.34L1.61 20.115l3.332 1.166 3.338-10.24z" />
                                            </svg>
                                          </i>
                                          Marié
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/robes-soiree" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__dress layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M21.406 17.62a7.923 7.923 0 00-.362-1.893l.948-.316c.208.622.353 1.352.41 2.133.116 1.358-.03 3.172-.393 5.1a35.717 35.717 0 01-1.624 5.797c-.212.562-.822.647-1.22.433a11.047 11.047 0 01-1.923-1.15 12.54 12.54 0 01-1.607-1.407l.727-.687c.443.47.944.892 1.482 1.296l.003.002c.515.392 1.082.72 1.662 1.002a34.836 34.836 0 001.518-5.472c.354-1.88.484-3.597.38-4.832l-.001-.006z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M19.386 1a15.361 15.361 0 01.2 1.428c.057.456.085.91.112 1.345l.021.338-.296.148c-.658.33-1.273.65-1.857 1.022-.464.3-.882.589-1.242.897l-.326.28-.325-.28a11.57 11.57 0 00-1.242-.897 15.41 15.41 0 00-1.842-1.015l-.313-.143.022-.35c.027-.43.055-.88.111-1.33.027-.488.098-.95.191-1.415h-.91a15.6 15.6 0 00-.329 1.798c-.081.65-.135 1.27-.162 1.917v.01c-.104 1.716.253 2.686.63 3.684l.005.011c.304.803.635 1.675.635 2.953 0 .892-.378 1.675-.748 2.44l-.022.047c-.488.974-1.007 2.095-1.164 3.768-.105 1.235.026 2.952.38 4.83v.006c.317 1.788.863 3.71 1.518 5.466a12.182 12.182 0 003.212-2.31c-.002 0 .005-.007.018-.023a38.209 38.209 0 002.688-3.593c.68-1.034 1.35-2.183 1.851-3.316.49-1.11.8-2.17.815-3.075-.233-.752-.564-1.438-.953-2.113l-.007-.012c-.347-.64-.723-1.36-.723-2.087 0-1.258.348-2.125.672-2.933l.026-.067c.407-1.03.788-1.998.71-3.711v-.002c-.008-.21-.02-.427-.033-.647a25.059 25.059 0 01-.05-1.302c-.076-.6-.175-1.174-.318-1.767h-.955zM18.37.859c0-.47.389-.859.858-.859h1.215c.41 0 .72.277.833.618l.006.018.005.019c.17.685.285 1.34.37 2.018l.003.031v.031c0 .407.023.813.047 1.238a48.042 48.042 0 01.036.701l-.5.02.5-.02s0-.001 0 0c.087 1.927-.358 3.055-.78 4.122V8.8l-.017.04c-.325.811-.61 1.526-.61 2.589 0 .43.23.923.598 1.605l-.003-.006-.433.25.44-.238-.004-.006c.425.737.802 1.517 1.064 2.391l.021.07v.074c0 1.122-.374 2.357-.901 3.55-.53 1.202-1.234 2.401-1.93 3.462-1.389 2.112-2.79 3.728-2.835 3.773a13.147 13.147 0 01-3.588 2.555l-.01.004-.008.004a.987.987 0 01-.622.056.806.806 0 01-.568-.505c-.699-1.846-1.287-3.889-1.624-5.8-.363-1.928-.509-3.742-.393-5.1v-.004c.174-1.856.758-3.108 1.264-4.12.396-.82.666-1.405.666-2.043 0-1.089-.274-1.816-.575-2.61-.395-1.044-.81-2.17-.694-4.094.028-.676.085-1.323.169-1.996v-.003c.084-.64.196-1.318.367-1.976a.859.859 0 01.847-.694h1.305l.035.005c.535.076.756.587.7.98l-.002.016-.004.016c-.107.511-.185.98-.21 1.468l-.001.018-.003.018c-.039.315-.064.632-.085.956.574.281 1.125.598 1.652.934l.003.002c.353.228.7.463 1.025.714.325-.251.673-.486 1.026-.714l.003-.002a19.53 19.53 0 011.653-.925 16.675 16.675 0 00-.087-.965v-.007l-.008-.066c-.053-.481-.106-.954-.204-1.398l-.012-.054V.86z" />
                                            </svg>
                                          </i>
                                          Soirée
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/bijoux" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__diamond layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M7.87 2.708a.5.5 0 01.406-.208h15.448a.5.5 0 01.406.208l6.276 8.738a.5.5 0 11-.812.583L23.467 3.5H8.532l-6.126 8.53a.5.5 0 01-.812-.584L7.87 2.708z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M1.546 11.528a.5.5 0 01.454-.29h28a.5.5 0 01.38.824l-14 16.453a.5.5 0 01-.76 0l-14-16.453a.5.5 0 01-.074-.534zm1.536.71L16 27.42l12.918-15.182H3.082z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M10.285 11.443a.5.5 0 01.405-.205h10.62a.5.5 0 01.476.653l-5.31 16.454a.5.5 0 01-.952 0l-5.31-16.454a.5.5 0 01.071-.448zm1.091.795L16 26.563l4.624-14.325h-9.248z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M10.19 11.738a.5.5 0 01.5-.5h10.62a.5.5 0 010 1H10.69a.5.5 0 01-.5-.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8.143 2.518a.5.5 0 01.615.349l2.414 8.737a.5.5 0 11-.964.267L7.794 3.133a.5.5 0 01.349-.615zM23.857 2.518a.5.5 0 01.349.615l-2.413 8.738a.5.5 0 11-.964-.267l2.413-8.737a.5.5 0 01.615-.349z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M1.5 11.738a.5.5 0 01.5-.5h28a.5.5 0 010 1H2a.5.5 0 01-.5-.5z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M16.023 2.584a.5.5 0 01.427.24l5.31 8.738a.5.5 0 11-.854.52l-4.883-8.035-4.883 8.034a.5.5 0 01-.855-.52l5.31-8.737a.5.5 0 01.428-.24z" />
                                            </svg>
                                          </i>
                                          Bijoux
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/chaussures" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__shoe layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M2.087 13.618a.5.5 0 01.695-.13c.357.244.632.694.855 1.178.233.505.448 1.135.646 1.834.396 1.399.74 3.13 1.023 4.804a110.436 110.436 0 01.843 6.096H8.4V14.5a.5.5 0 111 0v13.4a.5.5 0 01-.5.5H5.7a.5.5 0 01-.497-.45l-.004-.034-.011-.106-.044-.402a115.57 115.57 0 00-.825-5.937c-.28-1.663-.617-3.351-.999-4.699-.19-.674-.389-1.25-.591-1.688-.212-.46-.393-.69-.511-.771a.5.5 0 01-.13-.695z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M4.517 4.15L8.81 6.146l.013.006c.665.333 1.237.787 1.692 1.47l.005.008 7.598 11.895c.163.244.415.495.658.658.2.133.497.216.823.216h3.8c.313 0 .695.139.924.253.274.137.524.388.703.567l.027.026.03.034 4.5 5.4a.5.5 0 01.11.239.283.283 0 01.003.007l.002.005c.011.022.035.068.053.118a.711.711 0 01.048.251.71.71 0 01-.047.25c-.02.051-.043.097-.054.12l-.002.004-.002.004a.591.591 0 01-.103.268.66.66 0 01-.177.17l-.043.027-.002.001a.849.849 0 00-.02.013l.004-.003a.852.852 0 01-.643.246H19c-.707 0-1.395-.234-1.957-.571a4.534 4.534 0 01-1.472-1.472l-.003-.006-6.1-10.5a.541.541 0 01-.015-.027c-.24-.479-.647-.817-1.11-1.095-.438-.263-.95-.429-1.443-.429H2.5a.5.5 0 01-.5-.5v-8c0-.322.149-.617.237-.793l.016-.03.015-.03c.088-.18.255-.518.608-.694l.03-.016C3.084 4.15 3.379 4 3.7 4h.024c.188 0 .488 0 .793.15zm-.44.897C3.996 5.007 3.912 5 3.7 5c-.059 0-.147.033-.376.147-.007.003-.024.013-.055.056-.035.05-.068.114-.122.22-.114.23-.147.318-.147.377v7.5h3.9c.707 0 1.395.234 1.957.571.534.32 1.121.777 1.483 1.49l6.09 10.485c.259.428.699.868 1.127 1.125.438.263.95.429 1.443.429h9.697a.886.886 0 01.046-.037.48.48 0 01.025-.063.907.907 0 01-.029-.072l-4.409-5.29c-.21-.21-.345-.336-.454-.39-.171-.087-.39-.148-.476-.148h-3.8c-.474 0-.977-.117-1.377-.384a3.54 3.54 0 01-.939-.939l-.005-.008L9.68 8.173c-.343-.513-.769-.857-1.298-1.123L4.089 5.053l-.013-.006z" />
                                            </svg>
                                          </i>
                                          Chaussures
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/lingerie" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__bra layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M16.956 10.878l-.73.366-.677-.376.486-.874.215.12.259-.13.447.894z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8.72 5.874a.5.5 0 01.527-.318c2.566.313 4.314 1.469 5.422 2.547a9.069 9.069 0 011.202 1.438c.129.192.223.35.286.46l.054.093.012.02a.5.5 0 01.06.473c-.548 1.412-1.523 2.237-2.63 2.574-1.09.331-2.27.18-3.242-.273-1.919-.894-2.296-2.758-2.24-4.238.028-.749.165-1.44.293-1.94a9.694 9.694 0 01.249-.817l.005-.013.001-.004v-.002l.468.178-.467-.178zm.81.733c-.03.1-.063.218-.097.351a8.385 8.385 0 00-.263 1.73c-.05 1.327.292 2.654 1.663 3.294.783.364 1.708.472 2.528.222.75-.228 1.45-.764 1.898-1.76a8.076 8.076 0 00-1.288-1.625c-.924-.899-2.354-1.867-4.44-2.212zm5.933 3.446z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M8.566 7.202a.5.5 0 01.658.258.592.592 0 00.557.344c.208 0 .38-.09.475-.209a.5.5 0 01.886.377.552.552 0 00.484.603l.012.001c.141.022.294-.028.433-.151a.5.5 0 01.832.373v.05a.498.498 0 01-.016.126.546.546 0 00.356.675c.195.043.34.008.457-.073a.5.5 0 01.68.717.526.526 0 00.101.725c.147.099.312.121.413.093a.5.5 0 11.263.965c-.441.12-.914-.004-1.26-.246a1.555 1.555 0 01-.618-1.167 1.797 1.797 0 01-.29-.046 1.517 1.517 0 01-1.06-1.053 1.575 1.575 0 01-1.627-.842 1.689 1.689 0 01-.521.082 1.591 1.591 0 01-1.473-.943.5.5 0 01.258-.659zM9.57.903a.5.5 0 01.462.536L9.685 6.04a.5.5 0 01-.997-.075l.347-4.601A.5.5 0 019.57.903zM9.356 11.275a.5.5 0 01.645.29l2.004 5.295a.711.711 0 01.006.018l.004.012c.048.142.109.326.14.542.171 1.091-.174 2.19-.814 3.024v.002l-1.18 1.56.263.083a9.328 9.328 0 014.748 3.335c.134.163.263.344.365.497.191.274.352.57.485.86l.64 1.304a.5.5 0 11-.898.44l-.643-1.31-.007-.014a4.492 4.492 0 00-.4-.712l-.006-.009a5.23 5.23 0 00-.332-.45 8.327 8.327 0 00-4.247-2.986l-.004-.001-.94-.297a.5.5 0 01-.249-.778l1.61-2.13c.498-.649.745-1.478.62-2.266v-.007a2.086 2.086 0 00-.1-.373l-2-5.285a.5.5 0 01.29-.644z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M9.708 21.875a.5.5 0 01.058.705l-.693.816a.487.487 0 01-.027.03c-.048.048-.092.213.056.364.086.088.357.255.934-.103a.5.5 0 01.742.278l.096.312c.002.003.006.01.02.016a.07.07 0 00.052.002l.438-.195a.5.5 0 01.701.419l.025.33a.14.14 0 00.07.108c.046.03.1.038.154.02l.27-.098a.5.5 0 01.664.546l-.04.257.325-.13a.5.5 0 01.67.586l-.104.418a.94.94 0 01.831.518l.246.466.014.03c.026.06.088.127.231.17a.597.597 0 01.022.007l.218.076a.498.498 0 01.858.163c.2.6-.397 1.026-.884.886a.528.528 0 01-.028-.008l-.485-.17c-.343-.106-.666-.33-.838-.7l-.23-.438h-.038c-.015 0-.03 0-.046-.002-.418-.038-.856-.38-.89-.866a.993.993 0 01-.848-.702 1.176 1.176 0 01-1.06-.722 1.062 1.062 0 01-1.172-.466c-.65.222-1.239.094-1.633-.308-.435-.445-.567-1.233-.065-1.754l.682-.803a.5.5 0 01.704-.058zM23.805 5.874l-.468.178c.468-.178.467-.179.468-.178v.002l.002.004.005.013a3.93 3.93 0 01.074.215c.047.145.11.35.174.602.129.5.266 1.191.294 1.94.055 1.48-.321 3.344-2.24 4.238-.973.452-2.152.604-3.242.273-1.108-.337-2.082-1.162-2.63-2.574a.5.5 0 01.06-.473l.011-.02.054-.094c.063-.109.158-.267.286-.459.257-.383.65-.9 1.202-1.438 1.108-1.078 2.857-2.234 5.422-2.547a.5.5 0 01.527.318zm-6.744 4.179zm5.933-3.446c-2.087.345-3.517 1.313-4.441 2.213a8.08 8.08 0 00-1.288 1.625c.45.995 1.148 1.53 1.898 1.759.82.25 1.745.142 2.529-.222 1.37-.64 1.712-1.967 1.662-3.295a8.388 8.388 0 00-.36-2.08z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M23.959 7.202a.5.5 0 01.257.659c-.258.59-.841.943-1.472.943-.178 0-.354-.028-.521-.082a1.575 1.575 0 01-1.627.842 1.517 1.517 0 01-1.08 1.057 1.8 1.8 0 01-.27.042 1.555 1.555 0 01-.619 1.167c-.346.242-.819.367-1.26.246a.5.5 0 01.264-.965c.1.028.265.006.412-.093a.526.526 0 00.1-.725.5.5 0 01.682-.717c.116.081.26.116.456.073a.546.546 0 00.357-.675.498.498 0 01-.017-.126v-.05a.5.5 0 01.833-.373c.139.123.291.173.433.151l.01-.001c.31-.04.522-.322.485-.603a.5.5 0 01.886-.377.608.608 0 00.476.209c.26 0 .468-.142.556-.344a.5.5 0 01.659-.258zM22.954.903a.5.5 0 01.536.46l.346 4.602a.5.5 0 11-.997.075l-.346-4.601a.5.5 0 01.46-.536zM23.168 11.275a.5.5 0 01.29.644l-2 5.285a2.087 2.087 0 00-.1.373v.007c-.125.788.123 1.617.62 2.265l.002.003 1.608 2.128a.5.5 0 01-.248.778l-.945.298a8.203 8.203 0 00-3.078 1.725l-.011.01a7.43 7.43 0 00-1.175 1.274 5.23 5.23 0 00-.315.427l-.006.01a4.487 4.487 0 00-.4.711l-.006.014-.643 1.31a.5.5 0 01-.898-.44l.64-1.304c.132-.29.293-.586.484-.86.102-.153.232-.336.367-.498.384-.51.801-.982 1.302-1.404a9.205 9.205 0 013.445-1.93l.262-.083-1.179-1.56v-.002c-.64-.835-.986-1.933-.815-3.024.032-.216.093-.4.14-.542l.004-.012a.711.711 0 01.007-.018l2.004-5.295a.5.5 0 01.644-.29z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M22.816 21.875a.5.5 0 01.705.058l.681.803c.502.521.37 1.309-.065 1.754-.394.402-.983.53-1.632.308-.25.415-.767.596-1.226.45a1.177 1.177 0 01-1.056.713.993.993 0 01-.848.703c-.034.486-.473.827-.89.865a.489.489 0 01-.046.002h-.038l-.23.438c-.172.371-.495.595-.838.7l-.485.17a.5.5 0 01-.33-.944l.494-.173a.539.539 0 01.022-.007c.143-.043.204-.11.23-.17l.015-.03.246-.466a.94.94 0 01.83-.518l-.104-.418a.5.5 0 01.67-.585l.325.13-.04-.258a.5.5 0 01.666-.546l.269.098c.053.018.108.01.154-.02a.14.14 0 00.07-.107v-.01l.025-.32a.5.5 0 01.704-.419l.485.219a.07.07 0 00.051-.002c.014-.006.019-.013.02-.016l.096-.312a.5.5 0 01.742-.278c.577.358.849.19.935.103.147-.15.104-.316.056-.364a.463.463 0 01-.028-.03l-.693-.816a.5.5 0 01.058-.705z" />
                                            </svg>
                                          </i>
                                          Lingerie
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabDressesList__item">
                                        <a href="https://www.mariages.net/accessoires" className="layoutNavMenuTabDressesList__Link">
                                          <i className="svgIcon svgIcon__handbag layoutNavMenuTabDressesList__itemIcon">
                                            <svg viewBox="0 0 32 32">
                                              <path fillRule="evenodd" clipRule="evenodd" d="M6.801 10.867c-2.367 0-4.301 1.928-4.301 4.276v5.682c0 2.348 1.934 4.275 4.301 4.275H25.2c2.367 0 4.301-1.927 4.301-4.275v-5.682c0-2.348-1.934-4.276-4.301-4.276H6.8zM1.5 15.143c0-2.905 2.387-5.276 5.301-5.276H25.2c2.914 0 5.301 2.37 5.301 5.276v5.682c0 2.905-2.387 5.275-5.301 5.275H6.8c-2.914 0-5.301-2.37-5.301-5.275v-5.682z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M1.575 18.228a.5.5 0 01.603-.37l12.868 3.076c.658.157 1.343.16 2.003.01l12.828-2.935a.5.5 0 11.223.974L17.272 21.92c-.81.185-1.65.18-2.458-.012L1.945 18.83a.5.5 0 01-.37-.603z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M11.59 14.42a.957.957 0 011.345-.875l2.843 1.257c.76.336.758 1.41 0 1.746l-2.843 1.257a.958.958 0 01-1.345-.873v-2.513zm1 .066l2.69 1.19-2.69 1.189v-2.379z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M19.41 14.486l-2.69 1.19 2.69 1.189v-2.38zm-2.986 1.605l.203-.457-.203.457zm2.641-2.546a.958.958 0 011.345.874v2.513a.958.958 0 01-1.345.874h-.001l-2.842-1.257c-.757-.336-.76-1.411 0-1.747l2.842-1.256h.001zM16 2.5c-3.024 0-5.471 2.438-5.471 5.438v2.388a.5.5 0 01-1 0V7.938C9.529 4.38 12.429 1.5 16 1.5c3.572 0 6.471 2.88 6.471 6.438v2.432a.5.5 0 11-1 0V7.938c0-3-2.446-5.438-5.47-5.438z" />
                                              <path fillRule="evenodd" clipRule="evenodd" d="M12.062 6.16c-.989.686-1.533 1.583-1.533 2.515v1.663a.5.5 0 01-1 0V8.675c0-1.353.791-2.524 1.964-3.337 1.174-.813 2.77-1.3 4.507-1.3 1.738 0 3.333.487 4.507 1.3 1.173.813 1.964 1.984 1.964 3.337v1.695a.5.5 0 11-1 0V8.675c0-.932-.544-1.83-1.533-2.515C18.95 5.477 17.56 5.038 16 5.038s-2.95.439-3.938 1.122z" />
                                            </svg>
                                          </i>
                                          Accessoires
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabDressesFeatured">
                                    <p className="layoutNavMenuTabDresses__subtitle">
                                      Marques sélectionnées
                                    </p>
                                    <div className="layoutNavMenuTabDressesFeatured__content">
                                      <a href="https://www.mariages.net/robes-mariee/lambert-creations--d464">
                                        <figure className="layoutNavMenuTabDressesFeaturedItem">
                                          <img data-src="https://cdn0.mariages.net/cat/robes-mariee/lambert-creations/le-palais--mfvr421081.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Lambert Créations" width={290} height={406} />
                                          <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">
                                            Lambert Créations
                                          </figcaption>
                                        </figure>
                                      </a>
                                      <a href="https://www.mariages.net/robes-mariee/justin-alexander--d324">
                                        <figure className="layoutNavMenuTabDressesFeaturedItem">
                                          <img data-src="https://cdn0.mariages.net/cat/robes-mariee/justin-alexander/denley--mfvr767905.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Justin Alexander" width={290} height={406} />
                                          <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">
                                            Justin Alexander
                                          </figcaption>
                                        </figure>
                                      </a>
                                      <a href="https://www.mariages.net/robes-mariee/cymbeline--d90">
                                        <figure className="layoutNavMenuTabDressesFeaturedItem">
                                          <img data-src="https://cdn0.mariages.net/cat/robes-mariee/cymbeline/ianis--mfvr489009.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Cymbeline" width={290} height={406} />
                                          <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">
                                            Cymbeline
                                          </figcaption>
                                        </figure>
                                      </a>
                                      <a href="https://www.mariages.net/robes-mariee/pronuptia--d48">
                                        <figure className="layoutNavMenuTabDressesFeaturedItem">
                                          <img data-src="https://cdn0.mariages.net/cat/robes-mariee/pronuptia/douchka--mfvr840693.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Pronuptia" width={290} height={406} />
                                          <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">
                                            Pronuptia
                                          </figcaption>
                                        </figure>
                                      </a>
                                      <a href="https://www.mariages.net/robes-mariee/justin-alexander-signature--d400">
                                        <figure className="layoutNavMenuTabDressesFeaturedItem">
                                          <img data-src="https://cdn0.mariages.net/cat/robes-mariee/justin-alexander-signature/heather--mfvr724859.jpg" className="lazyload layoutNavMenuTabDressesFeaturedItem__image" alt="Justin Alexander Signature" width={290} height={406} />
                                          <figcaption className="layoutNavMenuTabDressesFeaturedItem__name">
                                            Justin Alexander Signature
                                          </figcaption>
                                        </figure>
                                      </a>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item nav-tabArticles">
                          <a href="https://www.mariages.net/articles" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-ideas" data-track-v={0} data-track-ni={0} data-tab="contenidos">
                            Idées
                          </a>
                          <div className="app-tabs-container-contenidos">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://www.mariages.net/articles">
                                    Idées Mariage
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabArticles">
                                  <div className="layoutNavMenuTabArticlesList">
                                    <a className="layoutNavMenuTabArticles__title" href="https://www.mariages.net/articles">
                                      Toutes les inspirations et les conseils pour
                                      votre mariage
                                    </a>
                                    <ul className="layoutNavMenuTabArticlesList__content">
                                      <li className="layoutNavMenuTabArticlesList__item layoutNavMenuTabArticlesList__item--viewAll">
                                        <a href="https://www.mariages.net/articles">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/avant-le-mariage--t1">
                                          Avant le mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/la-ceremonie-de-mariage--t2">
                                          La cérémonie de mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/la-reception--t3">
                                          La réception
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/les-prestataires-de-mariage--t4">
                                          Les prestataires de mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/mode-nuptiale--t5">
                                          Mode nuptiale
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/beaute-et-sante--t6">
                                          Beauté et Santé
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/lune-de-miel--t7">
                                          Lune de miel
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/apres-le-mariage--t8">
                                          Après le mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/fait-maison--t56">
                                          Fait Maison
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabArticlesList__item">
                                        <a href="https://www.mariages.net/articles/instants-de-mariage--t57">
                                          Instants de mariage
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabArticlesBanners">
                                    <div className="layoutNavMenuTabArticlesBannersItem app-header-menu-banner app-link" data-href="https://www.mariages.net/reportages-mariage">
                                      <figure className="layoutNavMenuTabArticlesBannersItem__figure">
                                        <img data-src="https://www.mariages.net/assets/img/components/header/tabs/realweddings_banner.jpg" data-srcset="https://www.mariages.net/assets/img/components/header/tabs/realweddings_banner@2x.jpg 2x" className="lazyload layoutNavMenuTabArticlesBannersItem__image" alt="Vrais mariages" width={304} height={90} />
                                        <figcaption className="layoutNavMenuTabArticlesBannersItem__content">
                                          <a href="https://www.mariages.net/reportages-mariage" title="Vrais mariages" className="layoutNavMenuTabArticlesBannersItem__title">
                                            Vrais mariages
                                          </a>
                                          <p className="layoutNavMenuTabArticlesBannersItem__description">
                                            Chaque mariage est unique et il y a une
                                            belle histoire derrière chacun d'eux.
                                          </p>
                                        </figcaption>
                                      </figure>
                                    </div>
                                    <div className="layoutNavMenuTabArticlesBannersItem app-header-menu-banner app-link" data-href="https://www.mariages.net/lune-miel">
                                      <figure className="layoutNavMenuTabArticlesBannersItem__figure">
                                        <img data-src="https://www.mariages.net/assets/img/components/header/tabs/honeymoons_banner.jpg" data-srcset="https://www.mariages.net/assets/img/components/header/tabs/honeymoons_banner@2x.jpg 2x" className="lazyload layoutNavMenuTabArticlesBannersItem__image" alt="Lune de miel" width={304} height={90} />
                                        <figcaption className="layoutNavMenuTabArticlesBannersItem__content">
                                          <a href="https://www.mariages.net/lune-miel" title="Lune de miel" className="layoutNavMenuTabArticlesBannersItem__title">
                                            Lune de miel
                                          </a>
                                          <p className="layoutNavMenuTabArticlesBannersItem__description">
                                            Trouvez la destination de vos rêves pour
                                            votre lune de miel.
                                          </p>
                                        </figcaption>
                                      </figure>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item">
                          <a href="https://faire-part.mariages.net" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-invitations" data-track-v={0} data-track-ni={0} data-tab="paper">
                            Faire-part
                          </a>
                          <div className="app-tabs-container-paper">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://faire-part.mariages.net">
                                    Faire-part
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabInvitation">
                                  <div className="layoutNavMenuTabInvitationList">
                                    <span className="layoutNavMenuTabInvitation__title">
                                      Acheter par catégorie
                                    </span>
                                    <ul className="layoutNavMenuTabInvitationList__content">
                                      <li className="layoutNavMenuTabInvitationList__item">
                                        <a href="https://faire-part.mariages.net/faire-part" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Faire-part de mariage">
                                          Faire-part de mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabInvitationList__item">
                                        <a href="https://faire-part.mariages.net/save-the-date-carte" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Save the date">
                                          Save the date
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabInvitationList__item">
                                        <a href="https://faire-part.mariages.net/livres-d-or" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Livre d'or">
                                          Livre d'or
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabInvitationList__item">
                                        <a href="https://faire-part.mariages.net/cartes-de-remerciements" className="app-analytics-track-event-click" data-tracking-section="header_invitations" data-tracking-category="Navigation" data-tracking-category-authed={1} data-tracking-dt="Cartes de remerciements">
                                          Cartes de remerciements
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                        <li className="nav-main-item nav-tabCommunity">
                          <a href="https://communaute.mariages.net/" className="nav-main-link app-header-tab app-ua-track-event" data-track-c="NavigationAuthed" data-track-a="a-click" data-track-l="d-desktop+s-header+o-groups_discussion_item+dt-community" data-track-v={0} data-track-ni={0} data-tab="comunidad">
                            Communauté
                          </a>
                          <div className="app-tabs-container-comunidad">
                            <div className="layoutNavMenuTab app-header-menu-itemDropdown">
                              <div className="layoutNavMenuTab__layout">
                                <div className="layoutNavMenuTab__header">
                                  <i className="svgIcon svgIcon__angleLeftBlood layoutNavMenuTab__icon app-header-menu-item-closeSection">
                                    <svg viewBox="0 0 582 998">
                                      <path d="M582 83c0 8.7-3.3 16.3-10 23L179 499l393 393c6.7 6.7 10 14.3 10 23s-3.3 16.3-10 23l-50 50c-6.7 6.7-14.3 10-23 10s-16.3-3.3-23-10L10 522c-6.7-6.7-10-14.3-10-23s3.3-16.3 10-23L476 10c6.7-6.7 14.3-10 23-10s16.3 3.3 23 10l50 50c6.7 6.7 10 14.3 10 23z" />
                                    </svg>
                                  </i>
                                  <a className="layoutNavMenuTab__title" href="https://communaute.mariages.net/">
                                    Communauté
                                  </a>
                                  <i className="svgIcon svgIcon__close layoutNavMenuTab__iconClose app-header-menu-toggle">
                                    <svg viewBox="0 0 26 26">
                                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                                    </svg>
                                  </i>
                                </div>
                                <div className="layoutNavMenuTabCommunity">
                                  <div className="layoutNavMenuTabCommunityList">
                                    <a className="layoutNavMenuTabCommunity__title" href="https://communaute.mariages.net/">
                                      Groupes par thème
                                    </a>
                                    <ul className="layoutNavMenuTabCommunityList__content">
                                      <li className="layoutNavMenuTabCommunityList__item layoutNavMenuTabCommunityList__item--viewAll">
                                        <a href="https://communaute.mariages.net/">
                                          Voir plus
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/organisation-du-mariage">
                                          Organisation du mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/decoration">
                                          Décoration
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/mode-nuptiale">
                                          Mode nuptiale
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/avant-le-mariage">
                                          Avant le mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/ma-robe-de-mariee">
                                          Ma Robe de Mariée
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/mariages-net">
                                          Mariages.net
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/beaute">
                                          Beauté
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/ceremonie-de-mariage">
                                          Cérémonie de mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/banquets">
                                          Banquets
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/apres-le-mariage">
                                          Après le mariage
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/question-de-famille">
                                          Question de famille
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/lune-de-miel">
                                          Lune de miel
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/vivre-ensemble">
                                          Vivre ensemble
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/maman">
                                          Maman
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/mariages-celebres">
                                          Mariages célèbres
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/tirage-au-sort">
                                          Tirage au sort
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/aide">
                                          Aide technique
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute/jeux-et-tests">
                                          Jeux et tests
                                        </a>
                                      </li>
                                      <li className="layoutNavMenuTabCommunityList__item">
                                        <a href="https://communaute.mariages.net/communaute-departement">
                                          Groupes par département
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                  <div className="layoutNavMenuTabCommunityLast">
                                    <p className="layoutNavMenuTabCommunityLast__subtitle app-header-menu-community app-link" role="link" tabIndex={0} data-href="https://communaute.mariages.net/">
                                      Découvrez les nouveautés
                                    </p>
                                    <ul className="layoutNavMenuTabCommunityLast__list">
                                      <li>
                                        <a href="https://communaute.mariages.net/">
                                          Posts
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://communaute.mariages.net/photos">
                                          Photos
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://communaute.mariages.net/videos">
                                          Vidéos
                                        </a>
                                      </li>
                                      <li>
                                        <a href="https://communaute.mariages.net/membres">
                                          Membres
                                        </a>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="header-joined">
                      <a className="universalFavoriteBoxSave universalFavoriteBoxSave--header active" href="https://www.mariages.net/users-saved.php">
                        <i className="svgIcon svgIcon__heart universalFavoriteBoxSave__heartIcon universalFavoriteBoxSave__heartIcon--big">
                          <svg viewBox="0 0 32 32" width={16} height={16}>
                            <use xlinkHref="#svg-_common-heart" />
                          </svg>
                        </i>
                      </a>
                      <a className="header-joined-inbox app-header-envelope-inbox" href="https://www.mariages.net/users-mailbox.php">
                        <i className="svgIcon svgIcon__envelope">
                          <svg viewBox="0 0 20 15">
                            <path d="M18.912 12.604V1.995c0-.47-.406-.911-.8-.911H1.888c-.393 0-.799.441-.799.911v10.609c0 .466.402.896.8.896h16.225c.397 0 .799-.43.799-.896zm1 0c0 1.003-.834 1.896-1.8 1.896H1.888c-.965 0-1.799-.893-1.799-1.896V1.995C.088.991.923.084 1.888.084h16.225c.964 0 1.799.907 1.799 1.911v10.609zm-9.631-4.71a.5.5 0 01-.562.827L2.513 3.828a.5.5 0 01.562-.827l7.206 4.893zm7.18 1.85a.5.5 0 01-.552.834l-3.29-2.175a.5.5 0 11.552-.834l3.29 2.175zm-14.37.834a.5.5 0 01-.552-.834l3.29-2.175a.5.5 0 11.551.834l-3.29 2.175zm7.185-1.859a.5.5 0 11-.562-.827l7.206-4.893a.5.5 0 01.562.827l-7.206 4.893z" fillRule="nonzero" />
                          </svg>
                        </i>
                        <span className="counter app-header-inbox-counter">2</span>
                      </a>
                      <div className="header-joined-container app-dropdown-toggle pointer">
                        <div className="header-joined-avatar">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <div className="avatar-alias size-avatar-small">
                              <svg className="avatar-generic" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMin slice">
                                <circle fill="#C7C9C0" cx={100} cy={100} r={100} />
                                <text transform="translate(100,130)" y={0}>
                                  <tspan fontSize={90} className fill="rgba(0,0,0,0.3)" textAnchor="middle">
                                    N
                                  </tspan>
                                </text>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <i className="svgIcon svgIcon__angleDown header-joined__toggle">
                          <svg viewBox="0 0 18 18">
                            <path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" />
                          </svg>
                        </i>
                        <div className="userMenu app-dropdown-toggle-layer" data-ajax="/user-profile/menu" style={{display: 'none'}} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tabsHeader app-common-header-dropdown" />
              <div className="tabsHeader__backdrop app-header-backdrop" />
            </div>
          </div>
          <main id="layoutMain">
            <div className="tools-navigation">
              <div className="wrapper">
                <ul className="pure-g">
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link current" href="https://www.mariages.net/tools/Main" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-mywedding" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-dash" />
                      Mon mariage
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Checklist" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-checklist" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-checklist" />
                      Tâches
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Vendors" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-vendor_manager" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-vendors" />
                      Prestataires
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Guests" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-guestlist" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-guests" />
                      Invités
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Tables" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-seating" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-tables" />
                      Tables
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Budget" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-budget" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-budget" />
                      Budget
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/DressList" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-dresses" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-dresses" />
                      Robes
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/website/index.php?actionReferrer=201" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-wws" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-wedsite" />
                      Site
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Wedshoots" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-wedshoots" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-wedshoots" />
                      WedShoots
                    </a>
                  </li>
                  <li className="pure-u-1-10">
                    <a className="app-ua-track-event tools-navigation-link" href="https://www.mariages.net/tools/Concurso" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-lottery" data-track-v={0} data-track-ni={0}>
                      <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-contest" />
                      Tirage au sort
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div id="toolsHeading" className="app-tools-heading dash-hero">
              <div id="photoLoading" className="dash-hero-wrapper wrapper">
                <div id="uploadContainer" className="pure-g-r dash-heroContainer">
                  <div id="pickfiles" className="pure-u-1-3 dash-cover app-spinner-container app-pencil-profile" style={{cursor: 'default'}}>
                    <img className="block app-tools-main-front-img dash-img" src="https://cdn1.mariages.net/assets/tools/bg_dash-cover.jpg" srcSet="
                  https://cdn1.mariages.net/assets/tools/bg_dash-cover.jpg    1x,
                  https://cdn1.mariages.net/assets/tools/bg_dash-cover@2x.jpg 2x
                " alt="" />
                    <div className="dash-coverTopSection">
                      <button className="dash-coverTopSectionButton app-croppie-browse-button-front app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-changephoto" data-track-v={0} data-track-ni={0}>
                        <i className="svgIcon svgIcon__cameraOutline dash-coverTopSectionButton__icon dash-coverTopSectionButton__icon--camera">
                          <svg viewBox="0 0 44 32">
                            <path d="M21 26a8 8 0 110-16 8 8 0 010 16zm0-14a6 6 0 100 12 6 6 0 000-12zM10.58 6L15.865.6a2 2 0 011.43-.6h7.41a2 2 0 011.43.6L31.42 6H39c2.202 0 4 1.798 4 4v18c0 2.202-1.798 4-4 4H5c-2.202 0-4-1.798-4-4V10c0-2.202 1.798-4 4-4h5.58zm1.429 1.4a2 2 0 01-1.43.6H5c-1.098 0-2 .902-2 2v18c0 1.098.902 2 2 2h34c1.098 0 2-.902 2-2V10c0-1.098-.902-2-2-2h-7.58a2 2 0 01-1.429-.6L24.706 2h-7.412L12.01 7.4zM36 12a1 1 0 110 2 1 1 0 010-2z" fillRule="nonzero" />
                          </svg>
                        </i>
                        Changer photo
                      </button>
                      <button className="dash-coverTopSectionButton app-countdown-share app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-wws_share" data-track-v={0} data-track-ni={0}>
                        <i className="svgIcon svgIcon__share dash-coverTopSectionButton__icon">
                          <svg viewBox="0 0 34 36">
                            <path d="M24.3 7c.4.3.4 1 0 1.3-.2.2-.5.3-.7.3-.2 0-.5-.1-.7-.3L18 3.4v20.2c0 .5-.4 1-1 1s-1-.4-1-1V3.4l-4.9 4.9c-.4.4-1 .4-1.4 0-.4-.4-.4-1 0-1.4L16.3.3c.1-.1.2-.2.3-.2.1-.1.2-.1.3-.1h.1c.1 0 .2 0 .3.1.1 0 .2.1.3.2L24.3 7zm5.4 29H4.3c-2.2 0-4-1.8-4-4V16.2c0-2.2 1.8-4 4-4h5.2c.6 0 1 .4 1 1s-.4 1-1 1H4.3c-1.1 0-2 .9-2 2V32c0 1.1.9 2 2 2h25.5c1.1 0 2-.9 2-2V16.2c0-1.1-.9-2-2-2h-5.2c-.6 0-1-.4-1-1s.4-1 1-1h5.2c2.2 0 4 1.8 4 4V32c-.1 2.2-1.9 4-4.1 4z" fillRule="nonzero" />
                          </svg>
                        </i>
                        Partager
                      </button>
                    </div>
                    <div className="dash-cover-info">
                      <div className="justMarriedWidget justMarriedWidget--toolsMain">
                        <div className="justMarriedWidget__body">
                          <p className="justMarriedWidget__notice mb10 dnone app-countdown-message">
                            Heureux en mariage 🎉
                          </p>
                          <div id="defaultCountdown" className="justMarriedWidget__timer" data-fecha="2023-07-01" data-time data-days={323} data-hours={11} data-minutes={42} data-seconds={50}>
                            <span className="justMarriedWidget__number">
                              323
                              <small>jours</small>
                            </span>
                            <span className="justMarriedWidget__number">
                              11
                              <small>heures</small>
                            </span>
                            <span className="justMarriedWidget__dots">:</span>
                            <span className="justMarriedWidget__number">
                              40
                              <small>min</small>
                            </span>
                            <span className="justMarriedWidget__dots">:</span>
                            <span className="justMarriedWidget__number">
                              31
                              <small>s</small>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="pure-u-2-3">
                    <div className="dash-summary">
                      <span className="dash-summary-edit btnOutline btnOutline--primary app-marriage-layer-open app-ua-track-event-multiple" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+i-edit" data-track-v={0} data-track-ni={0} role="button">
                        Modifier
                      </span>
                      <div className="dash-summary-info">
                        <ul className="avatar-group reverse avatar-group-medium">
                          <li className="avatar-group-item app-marriage-layer-open">
                            <div className="modal-myWedding-dash-sectionAvatar modal-myWedding-dash-sectionAvatar-small">
                              <label htmlFor="photo_1" className="pointer frame-inputFile">
                                <div className="modal-myWedding-dash-sectionAvatar-hover modal-myWedding-dash-sectionAvatar-hover-small">
                                  <i className="icon-tools icon-tools-avatar-camera-white" />
                                </div>
                                <div className="avatar-alias size-avatar-xmedium avatar-center">
                                  <svg className="avatar-generic" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMin slice">
                                    <circle fill="#C7C9C0" cx={100} cy={100} r={100} />
                                    <text transform="translate(100,130)" y={0}>
                                      <tspan fontSize={90} className fill="rgba(0,0,0,0.3)" textAnchor="middle">
                                        N
                                      </tspan>
                                    </text>
                                  </svg>
                                </div>
                              </label>
                            </div>
                          </li>
                          <li className="avatar-group-item app-marriage-layer-open">
                            <div className="modal-myWedding-dash-sectionAvatar modal-myWedding-dash-sectionAvatar-small">
                              <label htmlFor="photo_2" className="pointer frame-inputFile">
                                <div className="modal-myWedding-dash-sectionAvatar-hover modal-myWedding-dash-sectionAvatar-hover-small" />
                                <span className="modal-myWedding-dash-sectionAvatar-empty modal-myWedding-dash-sectionAvatar-empty-small">
                                  <i className="icon-tools icon-tools-avatar-camera-white" />
                                </span>
                              </label>
                            </div>
                          </li>
                        </ul>
                        <p className="dash-couple-names">
                          <span className="app-owner-name">naima bourhym</span>
                        </p>
                        <div className="dash-couple-personal">
                          <div className="dash-couple-personal-date">
                            <p className="dash-couple-subtitle">
                              <span>1 Juillet 2023</span>
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="dash-couple-progress">
                        <p className="dash-couple-progress-label clearfix">
                          <span>Etat :</span>
                          <span className="fright">
                            Vous avez dit oui&nbsp;! On commence&nbsp;?
                          </span>
                        </p>
                        <div className="tools-boxProgress-progress tools-boxProgress-progressBig">
                          <div className="app-checklist-progress" style={{width: '10%'}} />
                        </div>
                      </div>
                      <ul className="pure-g dash-couple-info">
                        <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Vendors" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-vendor_manager" data-track-v={0} data-track-ni={0}>
                          <p className="dash-couple-info-item">
                            <span>
                              <strong>0</strong>
                              sur 20
                            </span>
                            services souscrits
                          </p>
                        </li>
                        <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Checklist" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist" data-track-v={0} data-track-ni={0}>
                          <p className="dash-couple-info-item">
                            <span>
                              <strong>0</strong>
                              sur 101
                            </span>
                            tâches réalisées
                          </p>
                        </li>
                        <li className="pure-u-1-4 app-link app-ua-track-event" data-href="/tools/Guests" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-guestlist_att" data-track-v={0} data-track-ni={0}>
                          <p className="dash-couple-info-item">
                            <span>
                              <strong>2</strong>
                              sur 4
                            </span>
                            invités confirmés
                          </p>
                        </li>
                        <li className="pure-u-1-4 app-link app-ua-track-event" data-href="https://www.mariages.net/tools/Tables" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-seatingchart" data-track-v={0} data-track-ni={0}>
                          <p className="dash-couple-info-item">
                            <span>
                              <strong>2</strong>
                              sur 3
                            </span>
                            invités placés
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="dash-summary-wedsite">
                      <div className="icon-tools icon-tools-wedsite-small">
                        <span className="ml5">
                          <strong>Votre site de mariage:</strong>
                          <span id="app-website-guest-url">
                            www.mariages.net/web/W6159171
                          </span>
                          <a href="https://www.mariages.net/website/index.php?actionReferrer=206" data-track-c="Community" data-track-a="dashboard_website" data-track-l="d-desktop+s-personalize" data-track-v={0} data-track-ni={0} className="link--primary app-ua-track-event">
                            Donnez-lui un nom original&nbsp;!
                          </a>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="wrapper app-website-send-tracking-show app-ua-track-event" data-track-c="Wedding Website" data-track-a="a-show" data-track-l="d-desktop+s-experiment_card+o-tools+Auth" data-track-v={0} data-track-ni={0}>
              <div className="dashTemplates dashTemplates--step2 wizardSlider wizardSlider-websiteCTA wizardSlider-firstStep">
                <div className="wizardSlider__card wizardSlider__card-smallCard" data-id={129} data-page data-option="setTemplate" data-id-layout={1} data-custom-layout data-css-class data-family data-premium>
                  <div className="wizardSlider__upperWrapper">
                    <div className="wizardSlider__imagesWrapper app-wizard-images-wrapper">
                      <img className="wizardSlider__gridThumb wizardSlider__gridThumb-detailed wizardSlider__gridThumb-smallImage wizardSlider__gridThumb-vertical" width={560} height={704} src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg" srcSet="
                    https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg    1x,
                    https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg@2x.jpg 2x
                  " />
                      <img className="wizardSlider__gridThumbMobile wizardSlider__gridThumbMobile-detailed wizardSlider__gridThumbMobile-smallImage wizardSlider__gridThumbMobile-vertical" width={150} height={325} src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg" srcSet="
                    https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 1x,
                    https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 2x
                  " />
                    </div>
                  </div>
                </div>
                <div className="dashTemplates__body">
                  <p className="dashTemplates__title">
                    Vos invités sont impatients de découvrir votre site de mariage.
                  </p>
                  <p className="dashTemplates__description">
                    Ajoutez tous les détails du grand jour, partagez votre lieu de
                    réception et indiquez le lien de votre liste de mariage !
                  </p>
                </div>
                <a href="https://www.mariages.net/tools/website-wizard?actionReferrer=203" className="dashTemplates__action btnFlat btnFlat--primary">
                  Personnaliser
                </a>
                <a role="button" className="app-templates-close" title="Fermer">
                  <i className="svgIcon svgIcon__close">
                    <svg viewBox="0 0 26 26">
                      <path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" />
                    </svg>
                  </i>
                </a>
              </div>
              <div className="fleft">
                <h2 className="dash-title dash-title--m0">
                  Mes prestataires
                </h2>
                <p className="vendors-headerCount-total vendors-headerCount-total--small block">
                  0 sur 20 engagés
                </p>
              </div>
              <div className="app-search-right text-right mb30">
                <form id="app-frm-search" className="heroVendorForm__tools app-vendors-search-form" name="frmSearch" method="get" action="https://www.mariages.net/busc.php">
                  <input type="hidden" name="id_grupo" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_sector" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_region" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_provincia" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_poblacion" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_geozona" autoComplete="off" defaultValue />
                  <input type="hidden" name="id_empresa" autoComplete="off" defaultValue />
                  <input type="hidden" name="distance" autoComplete="off" defaultValue />
                  <input type="hidden" name="lat" autoComplete="off" defaultValue />
                  <input type="hidden" name="long" autoComplete="off" defaultValue />
                  <input type="hidden" name="showmode" autoComplete="off" defaultValue />
                  <input type="hidden" name="NumPage" autoComplete="off" defaultValue={1} />
                  <input type="hidden" name="userSearch" autoComplete="off" defaultValue={1} />
                  <input type="hidden" name="isSearch" autoComplete="off" defaultValue={1} />
                  <input type="hidden" name="isHome" autoComplete="off" defaultValue={1} />
                  <input id="txtStrSearch" name="txtStrSearch" autoComplete="off" type="text" defaultValue className="heroVendorForm__input heroVendorForm__input--first heroVendorForm__input--small" size={25} placeholder="Que cherchez-vous ?" />
                  <input id="txtLocSearch" name="txtLocSearch" autoComplete="off" type="text" defaultValue className="heroVendorForm__input heroVendorForm__input--small" size={25} placeholder="Où ?" />
                  <input className="heroVendorForm__input heroVendorForm__input--small heroVendorForm__button app-ua-track-event" id="mainSearchBtn" defaultValue="Rechercher" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-searcher+dt-weddingvenues" data-track-v={0} data-track-ni={0} title="Rechercher" type="submit" />
                </form>
              </div>
              <div className="app-slider-container dashVendors pure-g row dashVendors--searcher">
                <div className="pure-u-1-5">
                  <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=163" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-videography" data-track-v={0} data-track-ni={0}>
                    <div className="dashVendors__item">
                      <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                        <i className="svgIcon svgIcon__categVideo dashVendors__itemIcon">
                          <svg viewBox="0 0 54 47">
                            <path d="M37.727 44.2V24.4a.873.873 0 00-.865-.871H4.586a.873.873 0 00-.864.871v19.8c0 .478.392.871.864.871h32.276a.873.873 0 00.865-.871zm1.857 0a2.73 2.73 0 01-2.722 2.729H4.586A2.73 2.73 0 011.865 44.2V24.4a2.73 2.73 0 012.721-2.729h32.276a2.73 2.73 0 012.722 2.729v19.8zm-29.54-13.471a.929.929 0 010-1.858h22.609a.929.929 0 010 1.858h-22.61zM19.86 10c0 5.482-4.43 9.929-9.894 9.929C4.5 19.929.07 15.482.07 10S4.501.071 9.966.071C15.43.071 19.86 4.518 19.86 10zm-1.858 0c0-4.458-3.6-8.071-8.036-8.071-4.438 0-8.037 3.613-8.037 8.071s3.6 8.071 8.037 8.071c4.437 0 8.036-3.613 8.036-8.071zm17.996 3.6c0 3.495-2.824 6.329-6.308 6.329-3.485 0-6.308-2.834-6.308-6.329 0-3.495 2.823-6.329 6.308-6.329 3.484 0 6.308 2.834 6.308 6.329zm-1.858 0c0-2.47-1.993-4.471-4.45-4.471-2.458 0-4.451 2-4.451 4.471 0 2.47 1.993 4.471 4.45 4.471 2.458 0 4.451-2 4.451-4.471zm4.157 24.986a.929.929 0 11.717-1.713l12.689 5.308c.297.124.368.077.368-.25V27.374c0-.328-.071-.376-.368-.252l-12.69 5.304a.929.929 0 11-.716-1.713l12.69-5.305c1.522-.636 2.942.315 2.942 1.966v14.557c0 1.651-1.42 2.6-2.942 1.963l-12.69-5.308z" fillRule="nonzero" />
                          </svg>
                        </i>
                        <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={163} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-videography" data-track-v={0} data-track-ni={0}>
                          <i className="svgIcon svgIcon__plus mr5">
                            <svg viewBox="0 0 16 16">
                              <path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" />
                            </svg>
                          </i>
                          Ajouter
                        </span>
                      </figure>
                    </div>
                    <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=163">
                      Vidéo
                    </p>
                  </div>
                </div>
                <div className="pure-u-1-5">
                  <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=23" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-bride" data-track-v={0} data-track-ni={0}>
                    <div className="dashVendors__item">
                      <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                        <i className="svgIcon svgIcon__categBride dashVendors__itemIcon">
                          <svg viewBox="0 0 49 54">
                            <path d="M39 36.064a22.418 22.418 0 00-1.352-1.036 25.587 25.587 0 01-4.901 2.73c-7.223 2.846-15.282 1.765-21.485-2.655C5.857 38.972 2.337 45.147 2.022 52H39V36.064zm2 1.875V52h5.977c-.243-5.372-2.439-10.309-5.977-14.06zm-5.184-4.079a22.689 22.689 0 00-4.337-1.908l.61-1.904c2.53.81 4.861 2.003 6.932 3.503V18.516c0-2.794-.28-4.741-1.106-6.936-3.02-7.783-11.733-11.591-19.403-8.516-5.65 2.31-9.368 7.869-9.512 13.933v17.314a24.27 24.27 0 017.99-4.265l.597 1.908a22.277 22.277 0 00-4.5 1.974c5.56 3.65 12.594 4.464 18.904 1.978a23.682 23.682 0 003.825-2.046zM7 36.113v-19.14C7.163 10.102 11.36 3.83 17.761 1.21c8.712-3.493 18.596.827 22.022 9.656.925 2.457 1.238 4.634 1.238 7.65v16.651C45.974 39.62 49 46.013 49 53v1H0v-1c0-6.493 2.64-12.498 7-16.887zM7 36h2v17H7V36zm30.145-10.979l.263.287v.389c0 .761-1.565 2.934-3.386 4.516C31.303 32.576 27.906 34 23.87 34c-3.648 0-6.813-1.244-9.47-3.308a16.936 16.936 0 01-2.396-2.264c-.409-.47-.688-.845-.84-1.074l-.856-1.3 1.54-.238c6.87-1.06 13.593-4.51 18.398-11.389l1.668-2.387.15 2.908c.175 3.37 2.11 6.83 5.081 10.073zm-6.707-7.535c-4.592 5.602-10.488 8.719-16.593 10a15.06 15.06 0 001.782 1.627C17.954 30.92 20.701 32 23.87 32c3.523 0 6.467-1.234 8.84-3.296a13.837 13.837 0 002.138-2.327 9.97 9.97 0 00.355-.526c-2.34-2.663-4.041-5.476-4.765-8.365z" fillRule="nonzero" />
                          </svg>
                        </i>
                        <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={23} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-bride" data-track-v={0} data-track-ni={0}>
                          <i className="svgIcon svgIcon__plus mr5">
                            <svg viewBox="0 0 16 16">
                              <path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" />
                            </svg>
                          </i>
                          Ajouter
                        </span>
                      </figure>
                    </div>
                    <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=23">
                      Mariée et Accessoires
                    </p>
                  </div>
                </div>
                <div className="pure-u-1-5">
                  <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=16" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-venue" data-track-v={0} data-track-ni={0}>
                    <div className="dashVendors__item">
                      <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                        <i className="svgIcon svgIcon__categReception dashVendors__itemIcon">
                          <svg viewBox="0 0 54 41">
                            <path d="M4 19.421l-2.401 1.795A1 1 0 01.4 19.614L25.868.584a1 1 0 01.751-.324 1 1 0 01.751.324l25.467 19.03a1 1 0 01-1.198 1.602L48 18.496V41H4V19.421zm2-1.494V39h12V21h16v18h12V17.002L26.619 2.519 6 17.927zM32 39V23H20v16h12z" fillRule="nonzero" />
                          </svg>
                        </i>
                        <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={16} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-venue" data-track-v={0} data-track-ni={0}>
                          <i className="svgIcon svgIcon__plus mr5">
                            <svg viewBox="0 0 16 16">
                              <path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" />
                            </svg>
                          </i>
                          Ajouter
                        </span>
                      </figure>
                    </div>
                    <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=16">
                      Réception
                    </p>
                  </div>
                </div>
                <div className="pure-u-1-5">
                  <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=27" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-caterer" data-track-v={0} data-track-ni={0}>
                    <div className="dashVendors__item">
                      <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                        <i className="svgIcon svgIcon__categCatering dashVendors__itemIcon">
                          <svg viewBox="0 0 50 33">
                            <path d="M39.678 28.996v-.004c-.216.01-.431.01-.647.003V29H.995L1 27.995c.063-11.97 8.762-21.843 20.165-23.686A2.796 2.796 0 0121 3.374C21 1.476 22.864 0 25 0s4 1.476 4 3.374c0 .308-.054.614-.155.907a24.195 24.195 0 0117.82 12.85 10.076 10.076 0 012.385-.102l.856.065.065.856a10.398 10.398 0 01-1.366 5.945c.258 1.483.395 2.82.395 4.105v1H39.678v-.004zm5.008-11.331A22.181 22.181 0 0025.156 6C13.29 5.936 3.611 15.238 3.028 27H33.96a8.646 8.646 0 01-.497-.459c-1.784-1.783-2.66-4.2-2.426-6.606l.08-.82.82-.079c2.411-.23 4.831.642 6.63 2.437.271.284.522.583.75.896a10.06 10.06 0 011.743-2.368 10.614 10.614 0 013.626-2.336zM46.9 26.13a9.93 9.93 0 01-1.019.869h1.09c-.017-.284-.04-.573-.07-.869zM25.054 4h1.69c.163-.2.256-.429.256-.626C27 2.696 26.12 2 25 2s-2 .696-2 1.374c0 .197.093.426.257.626h1.797zm9.823 21.127c1.135 1.133 2.597 1.781 4.104 1.864a6.713 6.713 0 00-1.843-4.118c-1.141-1.14-2.614-1.788-4.13-1.865.077 1.51.727 2.978 1.87 4.119zm7.592-3.707a7.97 7.97 0 00-1.929 3.183c.27.722.42 1.483.465 2.3 1.749-.26 3.346-1.038 4.582-2.286 1.491-1.554 2.334-3.57 2.408-5.612-2.033.073-3.985.91-5.526 2.415zM0 33v-2h50v2H0z" fillRule="nonzero" />
                          </svg>
                        </i>
                        <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={27} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-caterer" data-track-v={0} data-track-ni={0}>
                          <i className="svgIcon svgIcon__plus mr5">
                            <svg viewBox="0 0 16 16">
                              <path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" />
                            </svg>
                          </i>
                          Ajouter
                        </span>
                      </figure>
                    </div>
                    <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=27">
                      Traiteur
                    </p>
                  </div>
                </div>
                <div className="pure-u-1-5">
                  <div className="app-ua-track-event app-link" data-href="/tools/VendorsCateg?id_categ=21" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-photographer_video" data-track-v={0} data-track-ni={0}>
                    <div className="dashVendors__item">
                      <figure className="dashVendors__item-figure dashVendors__item-figure-empty">
                        <i className="svgIcon svgIcon__categPhoto dashVendors__itemIcon">
                          <svg viewBox="0 0 54 40">
                            <path d="M14.628 17.998H2V37.47c0 .303.236.53.592.53h48.816c.356 0 .592-.227.592-.53V17.998H39.372A12.99 12.99 0 0140 22c0 7.18-5.82 13-13 13s-13-5.82-13-13c0-1.397.22-2.742.628-4.002zm.838-2A12.999 12.999 0 0127 9c5.015 0 9.366 2.84 11.534 6.998H52V6.53c0-.303-.236-.53-.592-.53H2.592C2.236 6 2 6.227 2 6.53v9.468zM7 4V2.292C7 1.02 8.06 0 9.344 0h6.312C16.94 0 18 1.02 18 2.292V4h33.408C52.85 4 54 5.104 54 6.53v30.94c0 1.426-1.149 2.53-2.592 2.53H2.592C1.15 40 0 38.896 0 37.47V6.53C0 5.104 1.149 4 2.592 4zm2 0h7V2.292c0-.15-.148-.292-.344-.292H9.344C9.148 2 9 2.142 9 2.292zm31 10a1 1 0 01-1-1V9.032a1 1 0 011-1h8a1 1 0 011 1V13a1 1 0 01-1 1zm7-2v-1.968h-6V12zm-20-1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm.029 4c3.88 0 7.029 3.133 7.029 7 0 3.868-3.148 7-7.03 7C23.149 29 20 25.868 20 22c0-3.867 3.148-7 7.029-7zm0 2C24.25 17 22 19.24 22 22s2.25 5 5.029 5c2.778 0 5.029-2.24 5.029-5s-2.25-5-5.03-5z" />
                          </svg>
                        </i>
                        <span className="vendors-categBox-button app-icon-hover app-add-vendor-modal app-ua-track-event-multiple app-link" data-icon-old="icon-tools-plus" data-icon-new="icon-tools-plus-white" data-toolredirect="true" data-id-categ={21} data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-vendor+dt-photographer_video" data-track-v={0} data-track-ni={0}>
                          <i className="svgIcon svgIcon__plus mr5">
                            <svg viewBox="0 0 16 16">
                              <path d="M9 7h6a1 1 0 110 2H9v6a1 1 0 11-2 0V9H1a1 1 0 010-2h6V1a1 1 0 012 0v6z" fillRule="nonzero" />
                            </svg>
                          </i>
                          Ajouter
                        </span>
                      </figure>
                    </div>
                    <p className="dashVendors__itemCateg text-center" data-href="/tools/VendorsCateg?id_categ=21">
                      Photo
                    </p>
                  </div>
                </div>
              </div>
              <div className="text-right mb20">
                <a className="link--primary" data-icon-old="icon-arrow-right-red" href="https://www.mariages.net/tools/Vendors">
                  Voir tous mes prestataires
                  <i className="icon icon-arrow-right-red icon-right" />
                </a>
              </div>
              <div className="pure-g">
                <div className="pure-u-7-10">
                  <div className="mr40">
                    <section className="toolsPaper">
                      <h2 className="toolsPaper__title">
                        Faire-part et papeterie de mariage
                      </h2>
                      <div className="toolsPaper__tileContainer">
                        <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-save_the_dates" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/save-the-date-carte">
                          <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WSD-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Save the date" />
                          <h3 className="toolsPaperTile__title">Save the date</h3>
                          <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/save-the-date-carte">
                            Acheter
                          </a>
                        </div>
                        <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-invitations" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/faire-part">
                          <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WIN-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Faire-part" />
                          <h3 className="toolsPaperTile__title">Faire-part</h3>
                          <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/faire-part">
                            Acheter
                          </a>
                        </div>
                        <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-menu" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/menu">
                          <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WPR-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Menus" />
                          <h3 className="toolsPaperTile__title">Menus</h3>
                          <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/menu">
                            Acheter
                          </a>
                        </div>
                        <div className="toolsPaperTile app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-paper+o-home_tools+dt-guest_book" data-track-v={1} data-track-ni={0} data-href="https://faire-part.mariages.net/livres-d-or">
                          <img src="https://cdn1.mariages.net/assets/img/paper/promotion/WTY-Painted-Eucalyptus.jpeg" className="toolsPaperTile__image" alt="Livre d'or" />
                          <h3 className="toolsPaperTile__title">Livre d'or</h3>
                          <a className="toolsPaperTile__action app-paper-tile-link" href="https://faire-part.mariages.net/livres-d-or">
                            Acheter
                          </a>
                        </div>
                      </div>
                    </section>
                    <div className="clearfix">
                      <p className="dash-title fleft">
                        <a href="/tools/Checklist" className="dash-checklist-title dash-title">
                          Tâches à venir
                        </a>
                      </p>
                      <span className="dash-checklist-complete dash-subtitle fright">
                        0 sur 101 tâches réalisées
                      </span>
                    </div>
                    <div className="dash-checklist checklist-tasks">
                      <ul>
                        <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_1" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=701">
                          <div className="checklist-tasks-item-checkBox">
                            <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                          </div>
                          <div className="checklist-tasks-item-description">
                            <p className="checklist-tasks-item-title">
                              <a href="/tools/Checklist?action=editMode&taskId=701">
                                C'est décidé on se marie ! Mais par où commencer ? 💍
                              </a>
                            </p>
                            <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">
                              Organisation
                            </span>
                          </div>
                        </li>
                        <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_2" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=700">
                          <div className="checklist-tasks-item-checkBox">
                            <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                          </div>
                          <div className="checklist-tasks-item-description">
                            <p className="checklist-tasks-item-title">
                              <a href="/tools/Checklist?action=editMode&taskId=700">
                                Première étape : télécharger l'appli ! 📱
                              </a>
                            </p>
                            <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">
                              Organisation
                            </span>
                          </div>
                        </li>
                        <li className="checklist-tasks-item app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_3" data-track-v={0} data-track-ni={0} data-href="/tools/Checklist?action=editMode&taskId=699">
                          <div className="checklist-tasks-item-checkBox">
                            <a><i className="icon-tools icon-tools-checkbox-grey" /></a>
                          </div>
                          <div className="checklist-tasks-item-description">
                            <p className="checklist-tasks-item-title">
                              <a href="/tools/Checklist?action=editMode&taskId=699">
                                Choisir la date 🗓️
                              </a>
                            </p>
                            <span className="checklist-tasks-item-tag checklist-tasks-item-tag--block">
                              Organisation
                            </span>
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="dash-checklist-footer">
                      <a href="/tools/Checklist" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-checklist_all" data-track-v={0} data-track-ni={0}>
                        101 tâches en attente
                        <i className="icon icon-arrow-right-red icon-right" />
                      </a>
                    </div>
                    <div className="pure-g row">
                      <div className="pure-u-1-2">
                        <div className="unit">
                          <p className="dash-title">Mes invités</p>
                          <div className="dash-box app-link" data-href="/tools/Guests">
                            <p className="dash-subtitle pt10 pb15 text-center border-bottom">
                              1 invité en attente de confirmation
                            </p>
                            <ul className="dashGuests">
                              <li className="dashGuests__item app-link pure-g" data-href="/tools/Guests?view=2&idContact=55637073">
                                <div className="pure-u-1-7">
                                  <div className="dashGuests__avatar">
                                    <span className="icon-tools icon-tools-adult" />
                                  </div>
                                </div>
                                <div className="pure-u-6-7 pl10">
                                  <p className="dashGuests__name">etr</p>
                                  <p className="dashGuests__group" />
                                </div>
                              </li>
                            </ul>
                          </div>
                          <div className="text-right mt20 mr10">
                            <a href="/tools/Guests" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-guestlist" data-track-v={0} data-track-ni={0}>
                              Voir liste des invités
                              <i className="icon-right icon icon-arrow-right-red" />
                            </a>
                          </div>
                        </div>
                      </div>
                      <div className="pure-u-1-2">
                        <div className="unit">
                          <p className="dash-title">Mon budget</p>
                          <div className="dash-box app-link" data-href="/tools/Budget">
                            <div className="dashBudget">
                              <div className="pure-g mb10">
                                <div className="pure-u-1-2">
                                  <i className="icon-tools icon-tools-pig block mb20" />
                                  <p className="dashBudget__title">Montant estimé</p>
                                  <p className="dashBudget__price">
                                    16 003 €
                                  </p>
                                </div>
                                <div className="pure-u-1-2">
                                  <i className="icon-tools icon-tools-price block mb20" />
                                  <p className="dashBudget__title">Montant final</p>
                                  <p className="dashBudget__price green">
                                    0 €
                                  </p>
                                </div>
                              </div>
                              <p className="mb0">
                                <a className="btnOutline btnOutline--red app-ua-track-event" href="/tools/Budget" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-budget_expenses" data-track-v={0} data-track-ni={0}>
                                  Ajouter dépense
                                </a>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="text-right mt20 mr10">
                          <a href="/tools/Budget" className="link--primary app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-budget_all" data-track-v={0} data-track-ni={0}>
                            Voir mon budget
                            <i className="icon-right icon icon-arrow-right-red" />
                          </a>
                        </div>
                      </div>
                    </div>
                    <p className="dash-title mb20 mt30">A propos de mon mariage</p>
                    <div className="dash-wedding mb40">
                      <div id="misTags" data-url-base-buscador="https://communaute.mariages.net/membres">
                        <ul className="profile-aboutwedding pure-g row profile-aboutwedding-editprofile">
                          <li className="pure-u-1-5">
                            <div className="box app-container">
                              <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                <div className="pt10">
                                  <i data-grupo={1} className="app-perfil-show icon-wedding-color icon-wedding-color-red" />
                                </div>
                                <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone text-center">
                                  <ul className="profile-aboutwedding-droplayer--content pure-g" data-grupo={1}>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={139}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-silver" />
                                      <small className="block mt5">Argenté</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={70}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-beige" />
                                      <small className="block mt5">Beige</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={12}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-white" />
                                      <small className="block mt5">Blanc</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={30}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-blue" />
                                      <small className="block mt5">Bleu</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={66}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-garnet" />
                                      <small className="block mt5">Bordeaux</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={90}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-golden" />
                                      <small className="block mt5">Doré</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={118}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-fuchsia" />
                                      <small className="block mt5">Fuschia</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={97}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-grey" />
                                      <small className="block mt5">Gris</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={69}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-yellow" />
                                      <small className="block mt5">Jaune</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={71}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-brown" />
                                      <small className="block mt5">Marron</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={55}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-black" />
                                      <small className="block mt5">Noir</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={142}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-blackwhite" />
                                      <small className="block mt5">Noir et blanc</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={65}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-orange" />
                                      <small className="block mt5">Orange</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={68}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-purple" />
                                      <small className="block mt5">Parme</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={60}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-pink" />
                                      <small className="block mt5">Rose</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={42}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-red" />
                                      <small className="block mt5">Rouge</small>
                                    </li>
                                    <li className="pure-u-1-5 app-tools-perfil-boda-layer" data-id={36}>
                                      <span className="app-perfil-show icon-wedding-color icon-wedding-color-green" />
                                      <small className="block mt5">Vert</small>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="profile-aboutwedding-content">
                                <span className="profile-aboutwedding-title">
                                  Couleur
                                </span>
                                <span className="profile-aboutwedding-label" data-grupo={1}>
                                  Rouge
                                </span>
                                <a className="link--primary" href="https://communaute.mariages.net/membres?color=42" rel="nofollow">
                                  1.664 mariés
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="pure-u-1-5">
                            <div className="box app-container">
                              <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                <i data-grupo={3} className="app-perfil-show icon-season icon-season-spring" />
                                <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone text-center">
                                  <ul className="profile-aboutwedding-droplayer--content pure-g" data-grupo={3}>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={200}>
                                      <span className="app-perfil-show icon-season icon-season-winter" />
                                      <small className="block mt5">Hiver</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={197}>
                                      <span className="app-perfil-show icon-season icon-season-spring" />
                                      <small className="block mt5">Printemps</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={198}>
                                      <span className="app-perfil-show icon-season icon-season-summer" />
                                      <small className="block mt5">Été</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={199}>
                                      <span className="app-perfil-show icon-season icon-season-autumn" />
                                      <small className="block mt5">Automne</small>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="profile-aboutwedding-content">
                                <span className="profile-aboutwedding-title">
                                  Saison
                                </span>
                                <span className="profile-aboutwedding-label" data-grupo={3}>
                                  Printemps
                                </span>
                                <a className="link--primary" href="https://communaute.mariages.net/membres?temporada=197" rel="nofollow">
                                  8.264 mariés
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="pure-u-1-5">
                            <div className="box app-container">
                              <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                <i data-grupo={2} className="app-perfil-show icon-style icon-style-beach" />
                                <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                <div className="droplayer profile-aboutwedding-droplayer profile-aboutwedding-droplayer--bigContainer app-about-wedding-layer dnone text-center">
                                  <ul className="profile-aboutwedding-droplayer--content pure-g-r" data-grupo={2}>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={77}>
                                      <span className="icon-style icon-style-beach" />
                                      <small className="block mt5">À la plage</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={32}>
                                      <span className="icon-style icon-style-country" />
                                      <small className="block mt5">Champêtre</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={63}>
                                      <span className="icon-style icon-style-night" />
                                      <small className="block mt5">De nuit</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={204}>
                                      <span className="icon-style icon-style-elegant" />
                                      <small className="block mt5">Élégant</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={5}>
                                      <span className="icon-style icon-style-park" />
                                      <small className="block mt5">En extérieur</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={107}>
                                      <span className="icon-style icon-style-modern" />
                                      <small className="block mt5">Moderne</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={19}>
                                      <span className="icon-style icon-style-wood" />
                                      <small className="block mt5">Rustique</small>
                                    </li>
                                    <li className="pure-u-1-4 app-tools-perfil-boda-layer" data-id={24}>
                                      <span className="icon-style icon-style-vintage" />
                                      <small className="block mt5">Vintage</small>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                              <div className="profile-aboutwedding-content">
                                <span className="profile-aboutwedding-title">
                                  Style
                                </span>
                                <span className="profile-aboutwedding-label" data-grupo={2}>
                                  À la plage
                                </span>
                                <a className="link--primary" href="https://communaute.mariages.net/membres?estilo=77" rel="nofollow">
                                  1.061 mariés
                                </a>
                              </div>
                            </div>
                          </li>
                          <li className="pure-u-1-5">
                            <div className="box app-container">
                              <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                <div className="app-com-icon-about profile-aboutwedding-icon-miss profile-aboutwedding-icon-miss-old" data-group="designer">
                                  <i className="icon icon-miss" />
                                </div>
                                <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone">
                                  <div className="profile-aboutwedding-droplayer--content">
                                    <p className="strong text-left">
                                      Nom du Créateur de Mode
                                    </p>
                                    <div className="input-group contest-box-add-designer-option-search">
                                      <input type="hidden" className="app-suggest-designer" id="suDesigner_id-default" name="app-suggest-designer-input-id-default" defaultValue="default" />
                                      <input id="default" type="text" autoComplete="off" className="app-suggest-designer-input fs12" placeholder="Entrez un créateur de mode" onkeyup defaultValue />
                                    </div>
                                    <div className="app-suggest-designer-div droplayer-scroll dnone" />
                                  </div>
                                </div>
                              </div>
                              <div className="profile-aboutwedding-content">
                                <span className="profile-aboutwedding-title">
                                  Robes
                                </span>
                                <span className="profile-aboutwedding-label app-name-designer" data-grupo="designer">
                                  ...
                                </span>
                              </div>
                            </div>
                          </li>
                          <li className="pure-u-1-5">
                            <div className="box app-container">
                              <div className="profile-aboutwedding-icon app-aboutwedding-show">
                                <div className="app-com-icon-about profile-aboutwedding-icon-miss profile-aboutwedding-icon-miss-old" data-group="honeymoon">
                                  <i className="icon icon-miss" />
                                </div>
                                <i className="profile-aboutwedding-edit app-perfil-show icon icon-edit-red" />
                                <div className="droplayer profile-aboutwedding-droplayer app-about-wedding-layer dnone">
                                  <div className="profile-aboutwedding-droplayer--content">
                                    <p className="strong text-left">
                                      Destination Lune de Miel
                                    </p>
                                    <div className="input-group contest-box-add-honeymoon-option-search">
                                      <input type="hidden" className="app-suggest-honeymoon" id="suHoneymoon_id-default" name="app-suggest-designer-input-id-default" defaultValue="default" />
                                      <input id="default" type="text" autoComplete="off" className="app-suggest-honeymoon-input fs12" placeholder="Entrez une destination de Lune de Miel" onkeyup defaultValue />
                                    </div>
                                    <div className="app-suggest-honeymoon-div droplayer-scroll dnone" />
                                  </div>
                                </div>
                              </div>
                              <div className="profile-aboutwedding-content">
                                <span className="profile-aboutwedding-title">
                                  Lune de miel
                                </span>
                                <span className="profile-aboutwedding-label app-name-honeymoon" data-grupo="honeymoon">
                                  ...
                                </span>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <p className="dash-title mb20 mt30">
                      Aujourd'hui, dans les forums, nous parlons de...
                    </p>
                    <div className="dash-community-new">
                      <form action="https://communaute.mariages.net/community-discussions-create.php" method="post">
                        <div className="dash-community-new-avatar">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <div className="avatar-alias size-avatar-large">
                              <svg className="avatar-generic" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" preserveAspectRatio="xMidYMin slice">
                                <circle fill="#C7C9C0" cx={100} cy={100} r={100} />
                                <text transform="translate(100,130)" y={0}>
                                  <tspan fontSize={90} className fill="rgba(0,0,0,0.3)" textAnchor="middle">
                                    N
                                  </tspan>
                                </text>
                              </svg>
                            </div>
                          </div>
                        </div>
                        <div className="dash-community-new-comment">
                          <input type="text" className="dash-community-new-input" name="message" placeholder="Vous avez des questions ? Créez un post !" />
                        </div>
                        <input className="dash-community-new-button btn-flat red" type="submit" defaultValue="Envoyer" />
                      </form>
                    </div>
                    <div className="pure-g">
                      <div className="pure-u-1-3 dash-community-item-box">
                        <div className="dash-community-item">
                          <div className="dash-community-item-content">
                            <div className="dash-community-item-avatar">
                              <div className="avatar" data-testid="partials-complete-avatar">
                                <figure>
                                  <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/8/7/5/8/utmr_4438758.jpg?r=15199" width loading="lazy" alt="Maéva" />
                                </figure>
                              </div>
                            </div>
                            <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/que-repondre-a-une-amie-qui-15-jours-avant-le-mariage-annule-son-invitation--t635105">
                              Que répondre à une amie qui 15 jours avant le mariage
                              annule son invitation ?
                            </a>
                            <p className="dash-community-item-description">
                              (La date buttoir pour le traiteur est passé et j’avais
                              fait un point 1 mois avant pour être sûre du nombre de
                              présent.
                              <span className="app-common-ellipsis">...</span>
                            </p>
                          </div>
                          <footer className="dash-community-item-footer">
                            <a className="subtitle" href="https://communaute.mariages.net/forum/que-repondre-a-une-amie-qui-15-jours-avant-le-mariage-annule-son-invitation--t635105">
                              Voir sondage
                            </a>
                          </footer>
                        </div>
                      </div>
                      <div className="pure-u-1-3 dash-community-item-box">
                        <div className="dash-community-item">
                          <div className="dash-community-item-content">
                            <div className="dash-community-item-avatar">
                              <div className="avatar" data-testid="partials-complete-avatar">
                                <figure>
                                  <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/5/4/5/1/utmr_4575451.jpg?r=43810" width loading="lazy" alt="Céline" />
                                </figure>
                              </div>
                            </div>
                            <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/menu-affiche-ou-non--t633997">
                              Menu affiché ou non
                            </a>
                            <p className="dash-community-item-description">
                              Bonjour à tous, Je ne sais quoi faire par rapport au
                              menu au début je voulais qu'il en ai un par personne
                              mais je trouve
                              <span className="app-common-ellipsis">...</span>
                            </p>
                          </div>
                          <footer className="dash-community-item-footer">
                            <a className="subtitle" href="https://communaute.mariages.net/forum/menu-affiche-ou-non--t633997">
                              Voir sondage
                            </a>
                          </footer>
                        </div>
                      </div>
                      <div className="pure-u-1-3 dash-community-item-box">
                        <div className="dash-community-item">
                          <div className="dash-community-item-content">
                            <div className="dash-community-item-avatar">
                              <div className="avatar" data-testid="partials-complete-avatar">
                                <figure>
                                  <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/4/4/9/5/utmr_4744495.jpg?r=61271" width loading="lazy" alt="Lisa" />
                                </figure>
                              </div>
                            </div>
                            <a className="dash-community-item-title" href="https://communaute.mariages.net/forum/a-la-recherche-du-traiteur--t635047">
                              a la recherche du traiteur
                            </a>
                            <p className="dash-community-item-description">
                              Hello les FM, Moment de stress en moment pour mon
                              compagnon et moi. Nous nous marions le 12.08.2023 dans
                              le Morbihan,
                              <span className="app-common-ellipsis">...</span>
                            </p>
                          </div>
                          <footer className="dash-community-item-footer">
                            <a className="subtitle" href="https://communaute.mariages.net/forum/a-la-recherche-du-traiteur--t635047">
                              Voir post
                            </a>
                          </footer>
                        </div>
                      </div>
                    </div>
                    <div className="text-right mt20">
                      <a href="https://communaute.mariages.net/" className="link--primary">
                        Aller à la communauté
                        <i className="icon icon-arrow-right-red icon-right" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="pure-u-3-10 mt10">
                  <div className="cardPromo cardPromo--wedsites cardPromo--websitesStep2 app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-home_cards_customize_website" data-track-s data-track-v={0} data-track-ni={0} data-href="https://www.mariages.net/tools/website-wizard?actionReferrer=205">
                    <p className="cardPromo__title">
                      Nous adorons le thème que vous avez choisi
                    </p>
                    <p className="cardPromo__description">
                      Vous y êtes presque ! Ajoutez-y votre touche personnelle
                    </p>
                    <span className="link--primary small upper strong">
                      Personnaliser
                    </span>
                    <div className="mt20 wizardSlider wizardSlider-websiteCTA wizardSlider-customizeBox personalizarWizardBanner">
                      <div className="wrapperPersonalizarWizardBanner">
                        <div className="wizardSlider__card wizardSlider__card-smallCard" data-id={129} data-page data-option="setTemplate" data-id-layout={1} data-custom-layout data-css-class data-family data-premium>
                          <div className="wizardSlider__upperWrapper">
                            <div className="wizardSlider__imagesWrapper app-wizard-images-wrapper">
                              <img className="wizardSlider__gridThumb wizardSlider__gridThumb-detailed wizardSlider__gridThumb-smallImage wizardSlider__gridThumb-vertical" width={560} height={704} src="https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg" srcSet="
                            https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg.jpg    1x,
                            https://cdn1.mariages.net/assets/img/wedsites/thumb/fr/glam_deco_lg@2x.jpg 2x
                          " />
                              <img className="wizardSlider__gridThumbMobile wizardSlider__gridThumbMobile-detailed wizardSlider__gridThumbMobile-smallImage wizardSlider__gridThumbMobile-vertical" width={150} height={325} src="https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg" srcSet="
                            https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 1x,
                            https://cdn1.mariages.net/assets/img/wedsites/thumb_mobile/fr/glam_deco@2x.jpg 2x
                          " />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="cardPromo cardPromo--registryAmazon pointer app-link" data-href="https://www.amazon.fr/wedding?tag=registryeur04-21">
                    <p className="cardPromo__title">Votre liste de mariage sur Amazon</p>
                    <a className="link--primary small upper strong pr20" href="https://www.amazon.fr/wedding?tag=registryeur04-21" target="_blank">
                      Créez votre liste de mariage
                    </a>
                  </div>
                  <div className="dash-boxAside dash-boxAside-match">
                    <div className="dash-boxAside-hero">
                      <p className="dash-boxAside-content-title">
                        Il est temps de faire des rencontres !
                      </p>
                      <ul className="avatar-group pt20">
                        <li className="avatar-group-item">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <figure>
                              <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/6/3/9/9/utmp_5136399.jpg?r=93340" width loading="lazy" alt="Virginie" />
                            </figure>
                          </div>
                        </li>
                        <li className="avatar-group-item">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <figure>
                              <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/3/7/7/5/utmp_5563775.jpg?r=94068" width loading="lazy" alt="Lisa" />
                            </figure>
                          </div>
                        </li>
                        <li className="avatar-group-item">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <figure>
                              <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/8/4/7/5/utmp_5538475.jpg?r=11831" width loading="lazy" alt="Willyce" />
                            </figure>
                          </div>
                        </li>
                        <li className="avatar-group-item">
                          <div className="avatar" data-testid="partials-complete-avatar">
                            <figure>
                              <img className="avatar-thumb" src="https://cdn0.mariages.net/usr/2/9/9/6/utmp_1552996.jpg?r=57695" width loading="lazy" alt="Bouricha" />
                            </figure>
                          </div>
                        </li>
                        <li className="avatar-group-item size-avatar-medium app-link app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-comm_meet" data-track-v={0} data-track-ni={0} data-href="https://communaute.mariages.net/community-discussions-same-day.php">
                          <i className="btn-more btn-more-large size-avatar-medium" />
                        </li>
                      </ul>
                    </div>
                    <div className="dash-boxAside-content">
                      <p>
                        <span className="strong">
                          146 marié(e)s
                        </span>
                        se marient en Juillet 2023
                      </p>
                      <a href="https://communaute.mariages.net/community-discussions-same-day.php" className="btn-outline outline-red app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-comm_everyone" data-track-v={0} data-track-ni={0}>
                        Faites leur connaissance !
                      </a>
                    </div>
                  </div>
                  <div className="cardPromo cardPromo--wedshoots cardPromo--wedshootsLogo app-link app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-home_cards_wedshoots_download" data-track-s data-track-v={0} data-track-ni={0} data-href="/tools/Wedshoots">
                    <p className="cardPromo__title">Téléchargez WedShoots</p>
                    <p className="cardPromo__description">
                      Votre album privé pour que tous les invités partagent leurs
                      photos
                    </p>
                    <a className="link--primary small upper strong">
                      Télécharger l'application
                    </a>
                  </div>
                  <div className="cardPromo cardPromo--app">
                    <img className="mb10" width={65} src="https://cdn1.mariages.net/assets/img/dropdown/app.png" srcSet="
                  https://cdn1.mariages.net/assets/img/dropdown/app.png    1x,
                  https://cdn1.mariages.net/assets/img/dropdown/app@2x.png 2x
                " />
                    <p className="cardPromo__title">Téléchargez l'application</p>
                    <p className="cardPromo__description">
                      Emportez le meilleur planificateur de mariage pour iPhone et
                      Android partout avec vous
                    </p>
                    <a className="mr10 app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-down_ios" data-track-v={0} data-track-ni={0} href="https://app.appsflyer.com/id606938005?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr">
                      <img height={45} src="https://cdn1.mariages.net/assets/img/store/btn-appstore_fr.svg" />
                    </a>
                    <a className="app-ua-track-event" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+o-home_tools+s-dashboard+dt-down_and" data-track-v={0} data-track-ni={0} href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS">
                      <img height={45} src="https://cdn1.mariages.net/assets/img/store/btn-gplay_fr.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </main>
          <div className="white pt5 mt25">
            <div className="footer-info">
              <div className="wrapper">
                <div className="pure-g">
                  <div className="pure-u-1-4">
                    <div className="pure-s">
                      <p className="footer-info-title">Informations</p>
                      <hr />
                      <ul>
                        <li>
                          <a rel="nofollow" href="https://www.mariages.net/contactar.php">
                            Contact
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="https://www.mariages.net/mentions-legales.php">
                            Mentions légales
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="https://www.mariages.net/legal/privacy.php">
                            Politique de confidentialité
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="https://www.mariages.net/legal/cookies.php">
                            Politique de cookies
                          </a>
                        </li>
                        <li>
                          <a className="ot-sdk-show-settings">
                            Ne pas vendre mes données personnelles
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="https://www.mariages.net/emp-Acceso.php">
                            Inscription entreprises
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mariages.net/aboutus/aboutus.php">
                            Qui sommes-nous ?
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow" href="https://www.theknotww.com/careers/" target="_blank">
                            Careers
                          </a>
                        </li>
                        <li>
                          <a href="https://www.mariages.net/site-web-mariage">
                            Site de mariage
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pure-u-1-4">
                    <div className="pure-s">
                      <p className="footer-info-title">Téléchargez l'application</p>
                      <hr />
                      <ul>
                        <li>
                          <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/id606938005?pid=WP-iOS-FR&c=WP-FR-LANDINGS&s=fr">
                            <img src="https://cdn1.mariages.net/assets/img/footer/appstore.png" srcSet="
                          https://cdn1.mariages.net/assets/img/footer/appstore@2x.png 2x
                        " width={140} height={42} loading="lazy" alt="Appstore" />
                          </a>
                        </li>
                        <li className="mt10">
                          <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS">
                            <img src="https://cdn1.mariages.net/assets/img/footer/googleplay.png" srcSet="
                          https://cdn1.mariages.net/assets/img/footer/googleplay@2x.png 2x
                        " width={140} height={42} loading="lazy" alt="Google Play" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="pure-u-1-4">
                    <div className="pure-s">
                      <p className="footer-info-title">Suivez-nous sur</p>
                      <hr />
                      <ul className="footer-social">
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.facebook.com/mariagesnet" target="_blank">
                            <i className="svgIcon svgIcon__facebook">
                              <svg viewBox="0 0 1792 1792">
                                <path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z" />
                              </svg>
                            </i>
                            Facebook
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://twitter.com/mariagesnet" target="_blank">
                            <i className="svgIcon svgIcon__twitter">
                              <svg viewBox="0 0 502 408">
                                <path d="M501.625 48.375c-18.477 8.203-38.281 13.71-59.102 16.21 21.25-12.733 37.579-32.89 45.235-56.874a206.477 206.477 0 01-65.313 24.922c-18.75-20-45.468-32.461-75.039-32.461-56.797 0-102.851 46.016-102.851 102.812 0 8.047.937 15.899 2.695 23.438C161.781 122.125 86.04 81.188 35.297 18.96 26.43 34.195 21.39 51.85 21.39 70.68c0 35.664 18.125 67.148 45.742 85.625-16.875-.547-32.735-5.196-46.602-12.89v1.288c0 49.844 35.469 91.367 82.461 100.86-8.594 2.343-17.695 3.593-27.07 3.593-6.64 0-13.086-.625-19.375-1.875 13.125 40.82 51.094 70.625 96.055 71.446-35.157 27.578-79.493 43.984-127.696 43.984-8.32 0-16.484-.469-24.492-1.445 45.469 29.218 99.531 46.21 157.617 46.21 189.14 0 292.578-156.68 292.578-292.538 0-4.454-.117-8.946-.273-13.32 20.078-14.493 37.5-32.618 51.289-53.243z" fillRule="nonzero" />
                              </svg>
                            </i>
                            Twitter
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://pinterest.com/mariagesnet" target="_blank">
                            <i className="svgIcon svgIcon__pinterest">
                              <svg viewBox="0 0 1792 1792">
                                <path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" />
                              </svg>
                            </i>
                            Pinterest
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://instagram.com/mariagesnet" target="_blank">
                            <i className="svgIcon svgIcon__instagram">
                              <svg viewBox="0 0 1792 1792">
                                <path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" />
                              </svg>
                            </i>
                            Instagram
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.youtube.com/user/mariagesdotnet/featured" target="_blank">
                            <i className="svgIcon svgIcon__youtube-filled">
                              <svg viewBox="0 0 17 12">
                                <path d="M16.293 2.731v6.324a2.384 2.384 0 01-2.383 2.385H2.73A2.384 2.384 0 01.347 9.055V2.73A2.384 2.384 0 012.73.347h11.18a2.384 2.384 0 012.383 2.384zM6.587 8.624l4.693-3.001L6.587 2.62v6.004z" fillRule="evenodd" />
                              </svg>
                            </i>
                            Youtube
                          </a>
                        </li>
                        <li>
                          <a rel="nofollow noopener noreferrer" href="https://www.tiktok.com/@mariages.net" target="_blank">
                            <i className="svgIcon svgIcon__tiktok-logo">
                              <svg viewBox="0 0 18 18">
                                <path d="M17.806 4.507A4.546 4.546 0 0113.254 0h-2.94v8.03l-.003 4.4a2.66 2.66 0 01-2.814 2.655 2.65 2.65 0 01-1.217-.374 2.66 2.66 0 01-1.3-2.241 2.662 2.662 0 013.504-2.565V6.921a5.784 5.784 0 00-.848-.062 5.636 5.636 0 00-4.234 1.894 5.513 5.513 0 00-1.391 3.326 5.506 5.506 0 001.64 4.29A5.637 5.637 0 007.636 18c.287-.001.57-.022.848-.063a5.618 5.618 0 003.138-1.57 5.503 5.503 0 001.65-3.915l-.015-6.57a7.43 7.43 0 004.557 1.549V4.506h-.008z" />
                              </svg>
                            </i>
                            TikTok
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-nav">
              <div className="wrapper">
                <div className="fleft">
                  <div id="app-show-footer-flags" className="footer-flags">
                    <i className="icon-flag icon-flag-fr icon-left" />
                    France
                    <i className="svgIcon svgIcon__angleDown">
                      <svg viewBox="0 0 32 32" width={16} height={16}>
                        <use xlinkHref="#svg-_common-angleDown" />
                      </svg>
                    </i>
                    <div id="app-footer-flags" style={{display: 'none'}} />
                  </div>
                  <img className="footer-wwgroup" src="https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO.png" srcSet="
                https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO_2x.png 2x
              " width={95} height={33} alt="ww logo" loading="lazy" />
                </div>
                <div className="overflow">
                  <ul className="footer-nav-menu">
                    <li>
                      <span className="app-footer-links" data-sec={0}>
                        Mon&nbsp;mariage
                      </span>
                    </li>
                    <li>
                      <span className="app-footer-links" data-sec={1}>Réception</span>
                    </li>
                    <li>
                      <span className="app-footer-links" data-sec={2}>Prestataires</span>
                    </li>
                    <li><span className="app-footer-links" data-sec={3}>Mariée</span></li>
                    <li><span className="app-footer-links" data-sec={4}>Marié</span></li>
                    <li><span className="app-footer-links" data-sec={5}>Idées</span></li>
                    <li>
                      <span className="app-footer-links" data-sec={6}>Communauté</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div id="app-common-layer" className="modal dnone" tabIndex={-1} role="dialog" aria-hidden="true" />
          <div id="app-va-modal" className="modal fade dnone" tabIndex={-1} role="dialog" aria-hidden="true" />
          <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal" id="initPlannerShow" />
          <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal" id="initRequestLogin" />
          <div tabIndex={-1} role="dialog" aria-hidden="true" className="modal fade" id="tool-modal" />
          <div id="fb-root" />
        </div>
        <img className="img-trace" src="https://www.mariages.net/traces-LastConnection.php?idUser=6159171&idDevice=2" alt="" />
        <div id="app-pusher-vendors-users-notification-alert" className="pusher-notification dnone" />
        <div id="app-chat-container" className="pusher-container">
          <div id="app-bot-bot" data-fromtype="bot" data-fromid="bot" data-idconversation="null" data-id-question={1} data-id-flow="null" data-id-categ="null" data-id-sector="null" className="app-chat-container-top">
            <div className="chat-launcher app-chat-launcher">
              <div className="chat-launcher-button">
                <img className="app-chat-avatar" src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="" />
                <span className="app-chat-num-messages chat-message-count dnone bounce-once" style={{display: 'inline'}}>
                  1
                </span>
              </div>
              <div className="chat-launcher-preview fadeout">
                <div className="app-conversation-summary">
                  Bonjour, je suis Sara, votre assistante virtuelle. Puis-je vous
                  aider dans vos préparatifs de mariage ?
                </div>
              </div>
            </div>
            <div className="chat-conversation app-chat-conversation" data-initconversation={0}>
              <div className="chat-header">
                <div className="app-controls-menu chat-controls chat-controls-left">
                  <div className />
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
                  <span className="chat-control-btn app-chat-close">
                    <span className="chat-ui chat-close" />
                  </span>
                </div>
              </div>
              <div className="app-chat-history chat-history">
                <div className="app-chat-conversations chat-messages" />
              </div>
              <div className="app-mobile-nel-scrollfix chat-messages chat-messages--chatbot app-scroll-calculate">
                <div className="app-conversation-parts chat-messages__inner">
                  <div className="chat-message-welcome">
                    <p className="title">Conseillère Mariages.net</p>
                    <p>
                      Je tiens à vous aider à choisir le prestataire le mieux adapté
                      au mariage de vos rêves. Un service gratuit pour que vous
                      embauchiez toujours les meilleurs professionnels de votre
                      région. Demandez-nous conseil !
                    </p>
                    <div className="chat-legal">
                      <a className="app-pusher-link" href="https://www.mariages.net/mentions-legales.php#concierge">
                        Conditions d'utilisation
                      </a>
                      <a className="app-pusher-link ml10" href="https://www.mariages.net/legal/privacy.php">
                        Politique de confidentialité
                      </a>
                    </div>
                  </div>
                  <div className="chat__separator"><span>11/08/2022</span></div>
                  <div className="app-income-message message-income">
                    <div className="chat-message message-income">
                      <div className="chat-message-avatar">
                        <img src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="Sara" />
                      </div>
                      <div className="chat-message-globe">
                        Bonjour, je suis Sara, votre assistante virtuelle. Puis-je
                        vous aider dans vos préparatifs de mariage ?
                        <div className="chat__timestamp">12:17</div>
                      </div>
                    </div>
                    <div className="app-chat-reply-template">
                      <div className="app-chat-qr-container chatQuickReply">
                        <span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">
                          Oui
                        </span>
                        <span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">
                          Non, merci
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="composer-container chat-message-send app-chat-message-send">
                <div className="app-chat-writing-alert">
                  Sara est en train d'écrire...
                </div>
                <form method="POST" className="app-chat-form-chatbot" data-type="user" data-id={6159171}>
                  <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                    <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                    <div className="chat-submit">
                      <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled">
                        <i className="icon icon-send" />
                      </span>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
          <symbol>
            <svg id="svg-_common-heart" viewBox="0 0 34 30">
              <path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg><svg id="svg-_common-angleDown" viewBox="0 0 18 18">
              <path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" />
            </svg>
          </symbol>
        </svg>
        <div id="survicate-box"><div className="sv-box-child" /></div>
        <div id="onetrust-consent-sdk">
          <div className="onetrust-pc-dark-filter ot-hide ot-fade-in" />
          <div id="onetrust-pc-sdk" className="otPcCenter ot-hide ot-fade-in" aria-modal="true" role="alertdialog" lang="fr-FR" aria-label="Ne pas vendre mes données personnelles">
            {/* Close Button */}
            <div className="ot-pc-header">
              {/* Logo Tag */}
              <div className="ot-pc-logo" role="img" aria-label="Logo de la société" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/4708a190-b1e8-4c46-8bde-12838e4eaa32/006bd2e8-872d-4227-861d-cf26c0f64c1c/fc7601b1-1544-4023-8371-18b980ec8c87/logo_tkww.png")', backgroundPosition: 'left'}} />
              <button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Fermer" />
            </div>
            {/* Close Button */}
            <div id="ot-pc-content" className="ot-pc-scrollbar">
              <h2 id="ot-pc-title">Ne pas vendre mes données personnelles</h2>
              <div id="ot-pc-desc">
                Lorsque vous visitez notre site Web, nous stockons des cookies sur
                votre navigateur pour collecter des informations. Ces informations
                collectées peuvent être liées à vous, à vos préférences ou à votre
                appareil, et sont principalement utilisées pour faire fonctionner le
                site comme vous le souhaitez et pour fournir une expérience Web plus
                personnalisée. Toutefois, vous pouvez choisir de ne pas autoriser
                certains types de cookies, ce qui peut avoir un impact sur votre
                expérience du site et des services que nous offrons. Cliquez sur les
                différents titres de catégories pour en savoir plus et modifier nos
                paramètres par défaut selon vos préférences. Vous ne pouvez pas vous
                désinscrire de nos Cookies Strictement Nécessaires internes
                lorsqu'ils sont déployés afin d'assurer le bon fonctionnement de
                notre site Web (tels que pour afficher le bandeau des cookies, pour
                vous connecter à votre compte, pour rediriger votre session lorsque
                vous quittez votre compte, etc.) Pour plus d'Informations sur les
                cookies internes et de tiers utilisés, veuillez consulter le lien
                suivant.
                <br />
                <a href="https://cookiepedia.co.uk/giving-consent-to-cookies" className="privacy-notice-link" rel="noopener" target="_blank" aria-label="Pour en savoir plus sur la protection de votre vie privée, s'ouvre dans un nouvel onglet">
                  Plus d’informations
                </a>
              </div>
              <button id="accept-recommended-btn-handler">Tout autoriser</button>
              <section className="ot-sdk-row ot-cat-grp">
                <h3 id="ot-category-title">
                  Gérer les préférences de consentement
                </h3>
                <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="C0001">
                  <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-C0001" aria-labelledby="ot-header-id-C0001" />
                  {/* Accordion header */}
                  <div className="ot-acc-hdr ot-always-active-group">
                    <div className="ot-plus-minus">
                      <span />
                      <span />
                    </div>
                    <h4 className="ot-cat-header" id="ot-header-id-C0001">
                      Cookies strictement nécessaires
                    </h4>
                    <div className="ot-always-active">Toujours actif</div>
                  </div>
                  {/* accordion detail */}
                  <div className="ot-acc-grpcntr ot-acc-txt">
                    <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-C0001">
                      Ces cookies sont strictement nécessaires pour le
                      fonctionnement du Site Web. Elles permettent à l'Utilisateur
                      de naviguer sur le Site ainsi que d'utiliser les différentes
                      options et services que le Site leur offre. Sans elles,
                      certaines fonctionnalités du Site Web ne fonctionneraient pas
                      correctement.
                    </p>
                  </div>
                </div>
                <div className="ot-accordion-layout ot-cat-item" data-optanongroupid="SPD_BG">
                  <button aria-expanded="false" ot-accordion="true" aria-controls="ot-desc-id-SPD_BG" aria-labelledby="ot-header-id-SPD_BG" />
                  {/* Accordion header */}
                  <div className="ot-acc-hdr">
                    <div className="ot-plus-minus">
                      <span />
                      <span />
                    </div>
                    <h4 className="ot-cat-header" id="ot-header-id-SPD_BG">
                      Vente de données personnelles
                    </h4>
                    <div className="ot-tgl">
                      <input type="checkbox" name="ot-group-id-SPD_BG" id="ot-group-id-SPD_BG" aria-checked="true" role="switch" className="category-switch-handler" data-optanongroupid="SPD_BG" defaultChecked aria-labelledby="ot-header-id-SPD_BG" />
                      <label className="ot-switch" htmlFor="ot-group-id-SPD_BG">
                        <span className="ot-switch-nob" />
                        <span className="ot-label-txt">
                          Vente de données personnelles
                        </span>
                      </label>
                    </div>
                  </div>
                  {/* accordion detail */}
                  <div className="ot-acc-grpcntr ot-acc-txt">
                    <p className="ot-acc-grpdesc ot-category-desc" id="ot-desc-id-SPD_BG">
                      En vertu du CCPA de Californie, vous avez le droit de refuser
                      que vos informations personnelles soient vendues à des tierces
                      parties. Ces cookies permettent de recueillir des informations
                      à des fins d’analyses et de statistiques et pour personnaliser
                      les publicités ciblées que vous recevez. Utilisez ce bouton
                      pour refuser la vente de vos informations personnelles. Si
                      vous décidez de refuser la vente de vos données, vous ne
                      recevrez pas de publicités personnalisées et nous ne vendrons
                      pas vos informations personnelles à aucun tiers. Veuillez
                      noter que, si vous le désirez, vous pouvez contacter notre
                      service juridique pour obtenir plus de détails sur vos droits
                      en tant que consommateur de Californie. Pour cela, cliquez sur
                      le lien Exercer ses droits.
                      <br />
                      <br />
                      Si vous avez activé les contrôles de sécurité dans votre
                      navigateur (avec un plug-in par exemple), nous devons
                      considérer que votre opposition à la vente de vos données est
                      valide. Nous ne pourrons donc pas suivre votre activité en
                      ligne. Cela est susceptible d’affecter notre capacité à vous
                      proposer des publicités ciblées selon vos préférences.
                    </p>
                    <div className="ot-subgrp-cntr">
                      <ul className="ot-subgrps">
                        <li className="ot-subgrp" data-optanongroupid="C0002">
                          <h5>Cookies d'analyse</h5>
                          <div className="ot-tgl-cntr ot-subgrp-tgl">
                            <div className="ot-tgl ot-hide-tgl">
                              <input type="checkbox" name="switch" id="ot-sub-group-id-C0002" aria-checked="false" role="switch" data-optanongroupid="C0002" className="cookie-subgroup-handler" aria-label="Cookies d'analyse" aria-hidden="true" />
                              <label className="ot-switch" htmlFor="ot-sub-group-id-C0002">
                                <span className="ot-switch-nob" />
                                <span className="ot-label-txt">Switch Label</span>
                              </label>
                              <span className="ot-label-status">label</span>
                            </div>
                          </div>
                          <p className="ot-subgrp-desc">
                            Ces cookies tiers stockent des informations sur la
                            manière dont les Utilisateurs interagissent avec le
                            contenu du Site Web, leur provenance, le navigateur
                            qu'ils utilisent et la durée de leur visite sur chaque
                            page, entre d’autres. Elles sont utilisées pour mesurer
                            les audiences et produire des statistiques.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="ot-subgrp-cntr">
                      <ul className="ot-subgrps">
                        <li className="ot-subgrp" data-optanongroupid="C0005">
                          <h5>Cookies « réseaux sociaux »</h5>
                          <div className="ot-tgl-cntr ot-subgrp-tgl">
                            <div className="ot-tgl ot-hide-tgl">
                              <input type="checkbox" name="switch" id="ot-sub-group-id-C0005" aria-checked="false" role="switch" data-optanongroupid="C0005" className="cookie-subgroup-handler" aria-label="Cookies « réseaux sociaux »" aria-hidden="true" />
                              <label className="ot-switch" htmlFor="ot-sub-group-id-C0005">
                                <span className="ot-switch-nob" />
                                <span className="ot-label-txt">Switch Label</span>
                              </label>
                              <span className="ot-label-status">label</span>
                            </div>
                          </div>
                          <p className="ot-subgrp-desc">
                            Ces cookies tiers permettent aux Utilisateurs de
                            partager du contenu à travers les réseaux sociaux. Ces
                            cookies peuvent suivre la trace du navigateur de
                            l'Utilisateur sur d'autres sites web et créer un profil
                            des intérêts de l'Utilisateur, ce qui peut avoir une
                            incidence sur le contenu montré à l'Utilisateur sur les
                            autres sites web visités.
                          </p>
                        </li>
                      </ul>
                    </div>
                    <div className="ot-subgrp-cntr">
                      <ul className="ot-subgrps">
                        <li className="ot-subgrp" data-optanongroupid="C0004">
                          <h5>Cookies pour une publicité personnalisée</h5>
                          <div className="ot-tgl-cntr ot-subgrp-tgl">
                            <div className="ot-tgl ot-hide-tgl">
                              <input type="checkbox" name="switch" id="ot-sub-group-id-C0004" aria-checked="false" role="switch" data-optanongroupid="C0004" className="cookie-subgroup-handler" aria-label="Cookies pour une publicité personnalisée" aria-hidden="true" />
                              <label className="ot-switch" htmlFor="ot-sub-group-id-C0004">
                                <span className="ot-switch-nob" />
                                <span className="ot-label-txt">Switch Label</span>
                              </label>
                              <span className="ot-label-status">label</span>
                            </div>
                          </div>
                          <p className="ot-subgrp-desc">
                            Ces cookies tiers stockent les informations
                            comportementales de l'Utilisateur, obtenues à partir de
                            l'analyse de ses habitudes de navigation, et nous
                            permettent ou permettent à des tiers de lui montrer de
                            la publicité en fonction du comportement et des intérêts
                            de l'Utilisateur, ou de suivre le comportement et
                            l'efficacité des campagnes publicitaires.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                {/* Groups sections starts */}
                {/* Group section ends */}
                {/* Accordion Group section starts */}
                {/* Accordion Group section ends */}
              </section>
            </div>
            <section id="ot-pc-lst" className="ot-hide ot-hosts-ui ot-pc-scrollbar">
              <div id="ot-pc-hdr">
                <div id="ot-lst-title">
                  <button className="ot-link-btn back-btn-handler" aria-label="Back">
                    <svg id="ot-back-arw" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 444.531 444.531" xmlSpace="preserve">
                      <title>Back Button</title>
                      <g>
                        <path fill="#656565" d="M213.13,222.409L351.88,83.653c7.05-7.043,10.567-15.657,10.567-25.841c0-10.183-3.518-18.793-10.567-25.835
                l-21.409-21.416C323.432,3.521,314.817,0,304.637,0s-18.791,3.521-25.841,10.561L92.649,196.425
                c-7.044,7.043-10.566,15.656-10.566,25.841s3.521,18.791,10.566,25.837l186.146,185.864c7.05,7.043,15.66,10.564,25.841,10.564
                s18.795-3.521,25.834-10.564l21.409-21.412c7.05-7.039,10.567-15.604,10.567-25.697c0-10.085-3.518-18.746-10.567-25.978
                L213.13,222.409z" />
                      </g>
                    </svg>
                  </button>
                  <h3>Performance Cookies</h3>
                </div>
                <div className="ot-lst-subhdr">
                  <div className="ot-search-cntr">
                    <p role="status" className="ot-scrn-rdr" />
                    <label htmlFor="vendor-search-handler" className="ot-scrn-rdr" />
                    <input id="vendor-search-handler" type="text" name="vendor-search-handler" />
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 -30 110 110" aria-hidden="true">
                      <title>Search Icon</title>
                      <path fill="#2e3644" d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23
        s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92
        c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17
        s-17-7.626-17-17S14.61,6,23.984,6z" />
                    </svg>
                  </div>
                  <div className="ot-fltr-cntr">
                    <button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true">
                      <svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve">
                        <title>Filter Icon</title>
                        <g>
                          <path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136
  c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083
  c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
  C402.765,25.895,404.093,19.231,400.858,11.427z" />
                        </g>
                      </svg>
                    </button>
                  </div>
                  <div id="ot-anchor" />
                  <section id="ot-fltr-modal">
                    <div id="ot-fltr-cnt">
                      <button id="clear-filters-handler">Clear</button>
                      <div className="ot-fltr-scrlcnt ot-pc-scrollbar">
                        <div className="ot-fltr-opts">
                          <div className="ot-fltr-opt">
                            <div className="ot-chkbox">
                              <input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" />
                              <label htmlFor="chkbox-id">
                                <span className="ot-label-txt">checkbox label</span>
                              </label>
                              <span className="ot-label-status">label</span>
                            </div>
                          </div>
                        </div>
                        <div className="ot-fltr-btns">
                          <button id="filter-apply-handler">Apply</button>
                          <button id="filter-cancel-handler">Cancel</button>
                        </div>
                      </div>
                    </div>
                  </section>
                </div>
              </div>
              <section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar">
                <div id="ot-sel-blk">
                  <div className="ot-sel-all">
                    <div className="ot-sel-all-hdr">
                      <span className="ot-consent-hdr">Consent</span>
                      <span className="ot-li-hdr">Leg.Interest</span>
                    </div>
                    <div className="ot-sel-all-chkbox">
                      <div className="ot-chkbox" id="ot-selall-hostcntr">
                        <input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" />
                        <label htmlFor="select-all-hosts-groups-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                      <div className="ot-chkbox" id="ot-selall-vencntr">
                        <input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" />
                        <label htmlFor="select-all-vendor-groups-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                      <div className="ot-chkbox" id="ot-selall-licntr">
                        <input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" />
                        <label htmlFor="select-all-vendor-leg-handler">
                          <span className="ot-label-txt">checkbox label</span>
                        </label>
                        <span className="ot-label-status">label</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="ot-sdk-row"><div className="ot-sdk-column" /></div>
              </section>
            </section>
            <div className="ot-pc-footer">
              <div className="ot-btn-container">
                <button className="save-preference-btn-handler onetrust-close-btn-handler">
                  Confirmer la sélection
                </button>
              </div>
              {/* Footer logo */}
              <div className="ot-pc-footer-logo">
                <a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" />
              </div>
            </div>
            {/* Cookie subgroup container */}
            {/* Vendor list link */}
            {/* Cookie lost link */}
            {/* Toggle HTML element */}
            {/* Checkbox HTML */}
            {/* plus minus*/}
            {/* Arrow SVG element */}
            {/* Accordion basic element */}
            <span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" />
            <iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" />
          </div>
        </div>
      </div>
    );
}






export default MonMariage;