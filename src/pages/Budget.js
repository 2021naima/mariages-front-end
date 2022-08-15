
import React, { useState, useEffect } from 'react';

function Budget() {
    return (
                
       
        
                <div>
                  <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
                         
                  <main id="layoutMain">
                                       <div className="wrapper">
                      <div className="app-currency-entity dnone" data-before data-after="€" />
                      <div className="tools-toggle-content app-lista-header-nav pure-g">
                        <div className="pure-u-1-3">
                        </div>
                        <div className="pure-u-1-3">
                          <div className="tools-toggle">
                            <a className="tools-toggle-item active" href="/tools/Budget">Budget</a>
                            <a className="tools-toggle-item" href="/tools/BudgetPayments">Paiements</a>
                          </div>
                        </div>
                        <div className="pure-u-1-3 text-right">
                          <a className="pointer tools-toggle-action" href="/tools/BudgetDownload" role="button"><i className="icon-tools icon-tools-download icon-left" />Télécharger</a><a className="pointer tools-toggle-action" href="/tools/BudgetReport" target="_blank" role="button"><i className="icon icon-print icon-left" />Imprimer</a>      </div>
                      </div>
                      <div id="app-error" />
                      <div className="pure-g">
                        <div className="pure-u-1-3 budget-listing">
                          <div className="mr40">
                            <div className="box">
                              <div className="budget-categories-item add-item">
                                <span className="app-add-budget-category link--primary pointer">
                                  <i className="icon-tools mr10 icon-tools-plus-circle-outline mr15" />Nouvelle catégorie                          </span>
                              </div>
                              <div className="app-tools-budget-rows subtitle">
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={61}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categCeremony budget-categories-item-icon"><svg viewBox="0 0 46 43"><path d="M21.692 6.255c-6.998.293-13.12 5.911-13.533 12.578h1.76v5.438H8.122V42.17H2.275V24.271H.717v-5.438h1.526C2.668 8.96 11.816.719 22.115.719h1.314c10.302 0 19.467 8.244 19.893 18.114h1.762v5.438h-1.783V42.17h-5.845V24.271h-1.573v-5.438h1.524c-.426-6.845-6.886-12.59-14.124-12.59h-.091v2.922a3.456 3.456 0 011.785-.49 3.473 3.473 0 013.493 3.493c0 .899-.364 1.764-1.011 2.481l-4.377 4.377a.75.75 0 01-1.061 0l-4.459-4.46a3.661 3.661 0 01-.929-2.398 3.473 3.473 0 013.494-3.492c.56 0 1.092.13 1.565.369v-2.79zM41.82 18.833C41.391 9.815 32.926 2.219 23.43 2.219h-1.314c-9.493 0-17.943 7.593-18.37 16.614h2.911c.421-7.699 7.568-14.09 15.608-14.09h1.02c8.043 0 15.203 6.393 15.625 14.09h2.911zm-.019 5.438h-2.845V40.67H41.8V24.271zM3.775 40.67h2.847V24.416H3.775v16.253zm14.878-27.133l3.898 3.899 3.82-3.818c.383-.424.599-.939.599-1.45a1.973 1.973 0 00-1.993-1.991c-.753 0-1.407.404-1.763 1.077a.75.75 0 01-1.326 0c-.356-.673-1.009-1.077-1.761-1.077a1.973 1.973 0 00-1.994 1.992c0 .502.212 1.02.52 1.368zM2.217 20.333v2.438H8.42v-2.438H2.217zm35.166 0v2.438h6.201v-2.438h-6.201z" /></svg></i>        Cérémonie  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">99</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={70}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categReception budget-categories-item-icon"><svg viewBox="0 0 54 41"><path d="M4 19.421l-2.401 1.795A1 1 0 01.4 19.614L25.868.584a1 1 0 01.751-.324 1 1 0 01.751.324l25.467 19.03a1 1 0 01-1.198 1.602L48 18.496V41H4V19.421zm2-1.494V39h12V21h16v18h12V17.002L26.619 2.519 6 17.927zM32 39V23H20v16h12z" fillRule="nonzero" /></svg></i>        Réception  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">6 960</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={97}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categBand budget-categories-item-icon"><svg viewBox="0 0 55 41"><path d="M18.635 4.636a9.002 9.002 0 000 12.728 8.992 8.992 0 0012.722 0 9.004 9.004 0 000-12.729 8.994 8.994 0 00-12.722 0zm14.137-1.414c4.293 4.296 4.293 11.26 0 15.556-4.294 4.296-11.257 4.296-15.551 0-4.295-4.297-4.295-11.26 0-15.556 4.294-4.296 11.257-4.296 15.55 0zM45 26v-3.465a4 4 0 11-4 6.93 4 4 0 014-6.93V6.558l9.014 3.372-.145 7.075L47 14.195V26h-2a2 2 0 10-3.999-.002A2 2 0 0045 26zM2.877 34.27a8.29 8.29 0 00-.229.404c-.398.75-.636 1.485-.648 2.12-.015.903.42 1.569 1.584 2.066 1.248.532 1.547.393 7.754-3.224 4.299-2.505 7.515-3.7 11.178-3.634 3.042.054 5.307 1.278 6.849 3.267.942 1.217 1.43 2.43 1.613 3.284l-1.956.42a5.104 5.104 0 00-.244-.738 7.269 7.269 0 00-.994-1.74c-1.183-1.528-2.891-2.45-5.303-2.493-3.21-.058-6.127 1.026-10.136 3.362-.529.308-2.278 1.356-2.565 1.524-.974.573-1.702.97-2.387 1.288-1.83.852-3.28 1.084-4.593.523-1.912-.815-2.83-2.22-2.8-3.94.018-1 .349-2.018.881-3.022.21-.397.421-.736.605-1.003A4.153 4.153 0 011 30.78v-.297c0-.97.34-1.91.962-2.663l12.776-15.457 1.541 1.274L3.503 29.095A2.18 2.18 0 003 30.483v.297c0 1.132.879 2.088 2.048 2.207a2.334 2.334 0 001.702-.499l15.622-12.595 1.256 1.557L8.005 34.045a4.333 4.333 0 01-3.163.932 4.314 4.314 0 01-1.965-.706zM15.274 2.689l1.452-1.376 18 19-1.452 1.376-18-19zM51.929 14.05l.057-2.745L47 9.442v2.592l4.93 2.017z" fillRule="nonzero" /></svg></i>        Musique  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">1 008</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={98}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categInvite budget-categories-item-icon"><svg viewBox="0 0 50 51"><path d="M45 22.32V9.19C45 8.54 44.444 8 43.748 8H6.252C5.556 8 5 8.54 5 9.19v13.058l20.398 12.324L45 22.321zm2-1.25l.553-.345-.553-.461v.807zm1 1.734L27.317 35.731 48 48.227V22.804zM3 21.04v-.776l-.54.45.54.326zM45.411 49L2 22.773V49h43.411zM3 17.66V9.19C3 7.423 4.463 6 6.252 6h9.978l5.589-4.868C22.546.402 23.564 0 24.656 0c1.13 0 2.125.34 2.783 1.004L33.245 6h10.503C45.537 6 47 7.423 47 9.19v8.47l3 2.5V51H0V20.16l3-2.5zM19.274 6H30.18L26.08 2.468C25.777 2.166 25.293 2 24.656 2c-.572 0-1.078.2-1.472.592L19.274 6zm8.819 8C30.248 14 32 15.78 32 18.008a4 4 0 01-1.14 2.803l-4.636 4.878a1 1 0 01-1.443.006l-4.766-4.935A4.306 4.306 0 0119 18.008C19 15.813 20.72 14 22.907 14c.968 0 1.891.37 2.593.999A3.904 3.904 0 0128.093 14zm1.323 5.428c.382-.396.584-.883.584-1.42 0-1.13-.864-2.008-1.907-2.008a1.91 1.91 0 00-1.693 1.061 1 1 0 01-1.801 0A1.908 1.908 0 0022.907 16C21.848 16 21 16.894 21 18.008c0 .532.198 1.045.504 1.42l3.99 4.127 3.922-4.127z" fillRule="nonzero" /></svg></i>        Faire-part  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">208</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={99}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categGift budget-categories-item-icon"><svg viewBox="0 0 44 49"><path d="M37.436 2.802c1.542 2.462 1.213 4.674-.693 6.42-1.463 1.34-3.794 2.37-6.77 3.16l-.659.168H41.8c1.114 0 2.05.936 2.05 2.05l-.006 9.107c.153 1.226-.763 2.143-1.944 2.143h-.351l.001 20.35c0 1.29-.98 2.361-2.285 2.445l-.165.005H4.9a2.435 2.435 0 01-2.45-2.45V25.85H2.1A2.073 2.073 0 01.05 23.8v-9.2c0-1.114.936-2.05 2.05-2.05l12.685.001c-.221-.054-.44-.11-.657-.168-2.977-.792-5.308-1.822-6.77-3.161-1.907-1.746-2.236-3.958-.695-6.418C8.341.108 10.563-.6 12.993.515c2 .917 4.055 3.008 6.131 5.93a49.908 49.908 0 012.7 4.273l.226.405.226-.405a49.908 49.908 0 012.7-4.272c2.076-2.923 4.13-5.014 6.13-5.93 2.43-1.115 4.653-.408 6.33 2.286zm2.613 23.048H26.25v21.3H39.1a.933.933 0 00.944-.839l.006-.111-.001-20.35zm-22.299 0H3.95V46.2c0 .506.364.891.839.944l.111.006h12.85v-21.3zm7 0h-5.5v21.3h5.5v-21.3zm-7-11.8H2.1a.575.575 0 00-.55.55v9.2c0 .286.264.55.55.55h15.65v-10.3zm7 0h-5.5v10.3h5.5v-10.3zm17.05 0H26.25v10.3H41.9c.32 0 .491-.172.45-.55v-9.2a.575.575 0 00-.55-.55zM7.936 3.598c-1.154 1.842-.944 3.256.434 4.518 1.244 1.139 3.38 2.082 6.143 2.817 1.691.45 3.509.794 5.327 1.046l.707.093.337.04-.365-.655A48.438 48.438 0 0017.9 7.315c-1.935-2.725-3.834-4.658-5.533-5.436-1.734-.795-3.148-.346-4.432 1.72zm23.796-1.72c-1.699.78-3.598 2.712-5.533 5.437a47.1 47.1 0 00-2.21 3.436l-.408.706-.365.656.337-.04.707-.094c1.818-.252 3.636-.596 5.327-1.046 2.763-.735 4.9-1.678 6.143-2.817 1.378-1.262 1.588-2.676.433-4.52-1.283-2.063-2.697-2.512-4.431-1.717z" fillRule="nonzero" /></svg></i>        Cadeaux invités  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">880</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={100}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categFlower budget-categories-item-icon"><svg viewBox="0 0 34 54"><path d="M1.262 19.007a15.769 15.769 0 01-.262-2.7V5a1 1 0 011-1c3.282 0 6.336 1 8.878 2.709A27.672 27.672 0 0116.343.246a1 1 0 011.314 0 27.673 27.673 0 015.464 6.462c.18-.112.361-.22.545-.326A15.792 15.792 0 0132 4a1 1 0 011 1v11.32c-.074 6.59-4.225 12.225-10.06 14.546a15.496 15.496 0 01-4.94 1.24V43.37a17.164 17.164 0 012.44-3.202c3.326-3.533 7.89-5.348 12.59-5.154l.922.038.035.923c.181 4.698-1.553 9.434-4.798 12.977-3.173 3.194-7.3 4.952-11.679 5.048h-.85c-4.363 0-8.506-1.764-11.68-5.049C1.572 45.516-.173 40.813.013 35.975l.037-.942.942-.02c4.693-.097 9.242 1.712 12.56 5.146.948.98 1.765 2.073 2.448 3.256V32.14C8.57 31.797 2.468 26.23 1.262 19.007zm15.611-4.878a15.757 15.757 0 014.618-6.252A25.576 25.576 0 0017 2.346a25.567 25.567 0 00-4.525 5.588 16.15 16.15 0 014.398 6.195zm5.013 27.42c-1.99 2.059-3.348 4.614-3.907 7.34L17.341 52h.147c3.842-.085 7.475-1.633 10.254-4.429a16.353 16.353 0 004.254-10.567c-3.785.091-7.402 1.668-10.11 4.544zm-5.86 7.366c-.667-2.85-1.99-5.376-3.912-7.366-2.696-2.79-6.314-4.363-10.11-4.525.084 3.946 1.615 7.716 4.405 10.528C9.216 50.457 12.839 52 16.66 52h.089l-.723-3.085zM18 20.015c0 1.334-2 1.334-2 0 0-7.35-5.75-13.46-13-13.98v10.262C3.085 23.864 9.338 30 17 30c7.663 0 13.915-6.136 14-13.692V6.036c-7.2.525-13 6.662-13 13.98z" fillRule="nonzero" /></svg></i>        Fleurs et Décoration  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">272</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={101}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categPhoto budget-categories-item-icon"><svg viewBox="0 0 54 40"><path d="M14.628 17.998H2V37.47c0 .303.236.53.592.53h48.816c.356 0 .592-.227.592-.53V17.998H39.372A12.99 12.99 0 0140 22c0 7.18-5.82 13-13 13s-13-5.82-13-13c0-1.397.22-2.742.628-4.002zm.838-2A12.999 12.999 0 0127 9c5.015 0 9.366 2.84 11.534 6.998H52V6.53c0-.303-.236-.53-.592-.53H2.592C2.236 6 2 6.227 2 6.53v9.468zM7 4V2.292C7 1.02 8.06 0 9.344 0h6.312C16.94 0 18 1.02 18 2.292V4h33.408C52.85 4 54 5.104 54 6.53v30.94c0 1.426-1.149 2.53-2.592 2.53H2.592C1.15 40 0 38.896 0 37.47V6.53C0 5.104 1.149 4 2.592 4zm2 0h7V2.292c0-.15-.148-.292-.344-.292H9.344C9.148 2 9 2.142 9 2.292zm31 10a1 1 0 01-1-1V9.032a1 1 0 011-1h8a1 1 0 011 1V13a1 1 0 01-1 1zm7-2v-1.968h-6V12zm-20-1c-6.075 0-11 4.925-11 11s4.925 11 11 11 11-4.925 11-11-4.925-11-11-11zm.029 4c3.88 0 7.029 3.133 7.029 7 0 3.868-3.148 7-7.03 7C23.149 29 20 25.868 20 22c0-3.867 3.148-7 7.029-7zm0 2C24.25 17 22 19.24 22 22s2.25 5 5.029 5c2.778 0 5.029-2.24 5.029-5s-2.25-5-5.03-5z" /></svg></i>        Photo et Vidéo  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">1 280</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={102}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categTransport budget-categories-item-icon"><svg viewBox="0 0 55 36"><path d="M2 25.023c.05-.008.1-.012.153-.012h7.914a7.547 7.547 0 016.779-4.224 7.55 7.55 0 016.719 4.101h9.593a7.55 7.55 0 016.72-4.101 7.547 7.547 0 016.716 4.101h6.084v-6.497c0-.73-.149-1.447-.438-2.11L46.795 3.718A2.858 2.858 0 0044.174 2H3.138A1.14 1.14 0 002 3.139v21.884zM2 27v1.333c0 .665.54 1.206 1.206 1.206h6.187a7.612 7.612 0 01.02-2.528h-7.26c-.052 0-.103-.004-.153-.011zm8.009 4.539H3.206A3.206 3.206 0 010 28.333V3.139a3.14 3.14 0 013.138-3.14h41.036a4.859 4.859 0 014.455 2.924l5.446 12.56a7.28 7.28 0 01.603 2.908v9.846a3.304 3.304 0 01-3.302 3.302h-4.662a7.547 7.547 0 01-6.837 4.346 7.55 7.55 0 01-6.838-4.346h-9.354a7.55 7.55 0 01-6.839 4.346 7.547 7.547 0 01-6.837-4.346zm37.32-2h4.047c.718 0 1.302-.585 1.302-1.302v-1.349h-5.391a7.59 7.59 0 01.043 2.65zm-35.736.588c.023.049.04.1.055.152a5.55 5.55 0 0010.423-3.82.994.994 0 01-.166-.41 5.551 5.551 0 00-10.312 4.078zm12.665-3.239a7.585 7.585 0 01.043 2.65h8.122a7.607 7.607 0 01.043-2.65h-8.208zm9.926-19.885H22.54v5.524h11.643V7.003zm2 .041v5.767l1.08.813 1.147.86.514.386c.116.086.553.23.7.23h6.027a2831.413 2831.413 0 00-1.59-3.625l-.028-.062A660.403 660.403 0 0042.524 8c-.176-.392-.32-.712-.432-.957h-5.908zm-15.643-.04H9.03v5.523h11.512V7.003zm14.504 7.453v.07H7.03V5.003h28.016v.041h7.674c.97.514.97.514.896.548l.063.123c.039.08.091.191.158.335.123.266.295.647.513 1.134.383.855.899 2.022 1.516 3.423l.027.063a1914.415 1914.415 0 012.205 5.03l.612 1.4h-9.084c-.576 0-1.431-.282-1.895-.627l-.518-.388a1306.421 1306.421 0 01-2.167-1.628zM19.071 28.335a2.222 2.222 0 01-2.224 2.222 2.222 2.222 0 110-4.444c1.228 0 2.224.994 2.224 2.222zm-2 0c0-.122-.1-.222-.224-.222a.222.222 0 100 .444c.124 0 .224-.099.224-.222zm22.806-5.548a5.549 5.549 0 10-.002 11.097 5.549 5.549 0 00.002-11.097zm2.223 5.548a2.224 2.224 0 01-4.448 0 2.224 2.224 0 014.448 0zm-2 0a.22.22 0 00-.222-.222c-.126 0-.226.1-.226.222s.1.222.226.222a.22.22 0 00.222-.222z" fillRule="nonzero" /></svg></i>        Transport  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">651</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={103}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categJewel budget-categories-item-icon"><svg viewBox="0 0 38 54"><path d="M24.296 16.829c7.87 2.309 13.637 9.597 13.637 18.203C37.933 45.488 29.422 54 18.967 54 8.511 54 .001 45.49.001 35.032c0-8.625 5.791-15.926 13.689-18.218L5.706 7.047 11.522 0h14.956l5.816 7.047-7.998 9.782zm-5.329 1.237c-9.352 0-16.966 7.615-16.966 16.966C2.001 44.385 9.616 52 18.967 52c9.35 0 16.966-7.616 16.966-16.968 0-9.35-7.616-16.966-16.966-16.966zM12.464 2l-4.17 5.053 7.243 8.86c1.236-.205 2.366-.311 3.462-.311 1.156 0 2.3.105 3.466.307l7.24-8.856L25.536 2h-13.07zm6.537 15.602c-1.367 0-2.556.092-3.681.302l-.958-.348-8.135-9.922L7 6h24l.776 1.631-8.134 10-.97.35A18.738 18.738 0 0019 17.6zm0-2c1.152 0 2.296.105 3.464.307L28.898 8H9.113l6.428 7.839c1.079-.165 2.207-.237 3.46-.237zm-3.869-8.28l2.88 8.758c.265-.01.574-.014.987-.014.413 0 .722.003.987.014l2.881-8.757-3.9-4.334-3.835 4.334zm-.72-2.187L17.186 2h-3.804l1.03 3.135zM20.75 2l2.833 3.148L24.618 2H20.75zM19 18.066c-.798 0-1.141.012-1.547.07l-1.092-.677-5.31-16.147L12 0h14l.95 1.313-5.312 16.146-1.091.677c-.407-.058-.75-.07-1.548-.07z" fillRule="nonzero" /></svg></i>        Bijoux  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">480</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={77}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categBride budget-categories-item-icon"><svg viewBox="0 0 49 54"><path d="M39 36.064a22.418 22.418 0 00-1.352-1.036 25.587 25.587 0 01-4.901 2.73c-7.223 2.846-15.282 1.765-21.485-2.655C5.857 38.972 2.337 45.147 2.022 52H39V36.064zm2 1.875V52h5.977c-.243-5.372-2.439-10.309-5.977-14.06zm-5.184-4.079a22.689 22.689 0 00-4.337-1.908l.61-1.904c2.53.81 4.861 2.003 6.932 3.503V18.516c0-2.794-.28-4.741-1.106-6.936-3.02-7.783-11.733-11.591-19.403-8.516-5.65 2.31-9.368 7.869-9.512 13.933v17.314a24.27 24.27 0 017.99-4.265l.597 1.908a22.277 22.277 0 00-4.5 1.974c5.56 3.65 12.594 4.464 18.904 1.978a23.682 23.682 0 003.825-2.046zM7 36.113v-19.14C7.163 10.102 11.36 3.83 17.761 1.21c8.712-3.493 18.596.827 22.022 9.656.925 2.457 1.238 4.634 1.238 7.65v16.651C45.974 39.62 49 46.013 49 53v1H0v-1c0-6.493 2.64-12.498 7-16.887zM7 36h2v17H7V36zm30.145-10.979l.263.287v.389c0 .761-1.565 2.934-3.386 4.516C31.303 32.576 27.906 34 23.87 34c-3.648 0-6.813-1.244-9.47-3.308a16.936 16.936 0 01-2.396-2.264c-.409-.47-.688-.845-.84-1.074l-.856-1.3 1.54-.238c6.87-1.06 13.593-4.51 18.398-11.389l1.668-2.387.15 2.908c.175 3.37 2.11 6.83 5.081 10.073zm-6.707-7.535c-4.592 5.602-10.488 8.719-16.593 10a15.06 15.06 0 001.782 1.627C17.954 30.92 20.701 32 23.87 32c3.523 0 6.467-1.234 8.84-3.296a13.837 13.837 0 002.138-2.327 9.97 9.97 0 00.355-.526c-2.34-2.663-4.041-5.476-4.765-8.365z" fillRule="nonzero" /></svg></i>        Mariée et Accessoires  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">1 264</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={88}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categGroom budget-categories-item-icon"><svg viewBox="0 0 49 54"><path d="M38.816 19.577c.145-.837.221-1.698.221-2.577 0-8.284-6.724-15-15.018-15C15.77 2 9.073 8.643 9 16.863c1.904.656 3.948.988 6.073.988 6.374 0 12.286-3.235 15.762-8.443l1.697-2.544.134 3.056a11.453 11.453 0 006.15 9.657zm-.488 1.991a13.47 13.47 0 01-7.319-9.08c-3.922 4.592-9.728 7.363-15.935 7.363a20.8 20.8 0 01-5.94-.845C10.113 26.34 16.405 32 24.017 32c6.7 0 12.375-4.381 14.31-10.432zM16.509 32.26C8.172 35.392 2.425 43.103 2.023 52h19.68l-.186-1.212-.012-.153V41.68l1.17-1.945-1.943-2.513 2.546-3.238a16.94 16.94 0 01-6.769-1.725zm-2.162-1.27C9.908 27.921 7 22.8 7 17 7 7.612 14.621 0 24.018 0c9.4 0 17.019 7.61 17.019 17 0 5.686-2.794 10.72-7.086 13.806C42.803 34.537 48.742 43.196 48.742 53v1H0v-1c0-9.627 5.736-18.133 14.347-22.01zM31.8 32.123a16.921 16.921 0 01-6.07 1.792l2.531 3.316-1.937 2.504 1.17 1.945v8.954l-.01.153-.187 1.212h19.422c-.409-9.065-6.356-16.911-14.919-19.876zm-8.073 19.876h1.546l.222-1.441v-8.322l-.995-1.654-.995 1.654v8.322l.222 1.441zm2.012-14.776l-1.214-1.59-1.257 1.599 1.232 1.592 1.239-1.601z" fillRule="nonzero" /></svg></i>        Marié et Accessoires  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">725</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={104}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categBeauty budget-categories-item-icon"><svg viewBox="0 0 54 44"><path d="M52.832 30H54v13H42V30h1v-6h1v-5.602l4.307-5.665.743.374c.418.21.98.63 1.528 1.31.89 1.103 1.422 2.541 1.422 4.318V24h.832v6zm-2 0v-4H45v4h5.832zm-39.943 7C4.439 33.82 0 27.177 0 19.499 0 8.73 8.731 0 19.5 0 30.27 0 39 8.73 39 19.499c0 7.678-4.437 14.32-10.888 17.501H38v6.075H1V37h9.889zM3 41.075h33V39H3v2.075zM19.5 2C9.836 2 2 9.835 2 19.499 2 29.164 9.836 37 19.5 37 29.165 37 37 29.164 37 19.499 37 9.834 29.166 2 19.5 2zM50 18.735c0-1.309-.369-2.307-.978-3.062a4.284 4.284 0 00-.235-.267L46 19.072V24h4v-5.265zM52 41v-9h-8v9h8zM19.5 6C26.956 6 33 12.044 33 19.499 33 26.957 26.957 33 19.5 33 12.044 33 6 26.957 6 19.499 6 12.044 12.045 6 19.5 6zm0 2C13.15 8 8 13.149 8 19.499 8 25.852 13.148 31 19.5 31 25.853 31 31 25.853 31 19.499 31 13.149 25.852 8 19.5 8z" fillRule="nonzero" /></svg></i>        Beauté et Bien-Être  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">176</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={93}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categPlane budget-categories-item-icon"><svg viewBox="0 0 54 54"><path d="M50.572 11.446a5.68 5.68 0 00-8.5-7.533L9.365 40.803a2.714 2.714 0 00.002 3.601 2.713 2.713 0 003.832.231L50.087 11.93c.16-.143.34-.322.485-.484zm.846 1.977L14.525 46.132a4.713 4.713 0 01-6.655-.4 4.713 4.713 0 010-6.258L40.575 2.586a7.678 7.678 0 1110.843 10.837zM40.211 31.775l3.213-3.215a3.505 3.505 0 114.957 4.957l-3.215 3.215a3.505 3.505 0 01-4.955-4.957zm1.414 3.542c.586.587 1.54.587 2.128 0l3.214-3.214a1.505 1.505 0 10-2.13-2.128l-3.212 3.214a1.505 1.505 0 000 2.128zM17.267 8.834l3.214-3.217a3.507 3.507 0 014.958 4.959l-3.215 3.214a3.505 3.505 0 01-4.957-4.956zm3.543 3.541l3.215-3.213a1.507 1.507 0 00-2.13-2.13l-3.213 3.216a1.505 1.505 0 002.128 2.127zm-1.218 34.82a.962.962 0 001.584-1.01l-2.272-5.728 1.859-.737 2.278 5.744a2.959 2.959 0 01-.676 3.143c-1.154 1.158-3.038 1.158-4.15.037l-.06-.056-3.675-3.674 1.415-1.415 3.664 3.665.033.031zM5.296 35.73a2.97 2.97 0 01.095-4.098 2.95 2.95 0 013.15-.673l5.74 2.277-.738 1.86-5.726-2.273a.946.946 0 00-1.012.224c-.377.377-.377.987-.042 1.323.018.01.026.014.062.061l3.674 3.676-1.414 1.414L5.4 35.835l-.105-.105zm40.018 17.075l1.397-1.433-1.397 1.433-18.672-18.672 1.415-1.415 18.656 18.656a2.168 2.168 0 003.056-.01c.612-.61.794-1.519.489-2.308l-4.945-12.47-.145.145a3.503 3.503 0 01-4.957 0 3.505 3.505 0 010-4.957l2.287-2.287-2.918-7.359 1.86-.737 3.401 8.58-.464.466-2.752 2.75a1.505 1.505 0 102.13 2.13l2.295-2.297.561 1.415 5.51 13.892a4.168 4.168 0 01-6.816 4.467l.703-.71.707-.708-1.4 1.429zM32.611 12.56l-.737 1.86-7.972-3.163.737-1.859 7.972 3.162zM19.566 7.388l-.737 1.86L4.952 3.744a2.167 2.167 0 00-2.33 3.539L21.28 25.945l-1.414 1.414L1.205 8.694a4.168 4.168 0 01.015-5.88 4.17 4.17 0 014.462-.932l13.884 5.506z" fillRule="nonzero" /></svg></i>        Lune de Miel  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">2 000</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                                <div className="budget-categories-item icon icon-arrow-right app-tools-budget-row app-budget-scroll-top " data-category-id={95}>
                                  <span className="budget-categories-item-title app-item-title">
                                    <i className="svgIcon svgIcon__categMore budget-categories-item-icon"><svg viewBox="0 0 54 54"><path d="M54 27c0 14.912-12.088 27-27 27S0 41.912 0 27 12.088 0 27 0s27 12.088 27 27zm-2 0C52 13.192 40.808 2 27 2S2 13.192 2 27s11.192 25 25 25 25-11.192 25-25zm-32.182 0a3.416 3.416 0 11-6.832 0 3.416 3.416 0 016.832 0zm-2 0a1.416 1.416 0 10-2.832 0 1.416 1.416 0 002.832 0zm12.113 0a3.416 3.416 0 11-6.833 0 3.416 3.416 0 016.833 0zm-2 0a1.416 1.416 0 10-2.833 0 1.416 1.416 0 002.833 0zm13.084 0a3.416 3.416 0 11-6.833 0 3.416 3.416 0 016.833 0zm-2 0a1.416 1.416 0 10-2.833 0 1.416 1.416 0 002.833 0z" fillRule="nonzero" /></svg></i>        Autres  </span>
                                  <span className="budget-categories-item-amount app-category-estimated-row app-row-info fright  color-grey italic">
                                    <span className="app-budget-estimated-cost">0</span>
                                    €  </span>
                                  <span className="budget-categories-item-amount app-category-final-row app-row-info fright subtitle dnone">
                                    <span className="app-budget-final-cost">0</span>
                                    €  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="pure-u-2-3 budget-detail">
                          <div className="box p30 app-budget-aside app-budget-estimated dnone" data-section-active="totals">
                            <p className="budget-category-header-title">Modifiez le coût estimé</p>
                            <p>Si vous modifiez le montant total du budget estimé, chaque budget individuel sera recalculé et modifié en fonction.</p>
                            <div className="mt20">
                              <div className="pure-u">
                                <div className="input-group-line tools-budget-update">
                                  <span className="input-group-line-label">Montant estimé </span>
                                  <div className="input-group-line">
                                    <input className="app-tools-budget-modify-estimated" type="text" name="amount" defaultValue="16 003" data-msgerror="Veuillez entrer un montant valide" />
                                    €                              </div>
                                </div>
                              </div>
                              <div className="pure-u mt20">
                                <span className="btn-flat red ml20 app-save-budgetmodif">Enregistrer</span>
                                <span className="app-cancel-budgetmodif btn-transparent color-grey ml20 underline inline-block pointer">Annuler</span>
                              </div>
                            </div>
                          </div>
                          <div className="app-my-budget  app-budget-aside box" data-section-active="summary">
                            <h1 className="tools-title text-center pt30">Mon budget</h1>
                            <div className="pure-g border-bottom text-center">
                              <div className="pure-u-1-2">
                                <div className="budget-balance app-modif-budget pointer">
                                  <i className="icon-tools icon-tools-pig block mb20" />
                                  <p className="uppercase small strong mb10">Montant estimé </p>
                                  <span className="budget-balance-amount">
                                    <span className="app-tools-budget-stats-estimado">16 003</span>
                                    €          </span>
                                  <p>
                                    <a className="color-red">Modifier budget</a>
                                  </p>
                                </div>
                              </div>
                              <div className="pure-u-1-2">
                                <div className="budget-balance border-left">
                                  <i className="icon-tools icon-tools-price block mb20" />
                                  <p className="uppercase small strong mb10">Montant final </p>
                                  <span className="app-tools-budget-final-cost-container budget-balance-amount budget-balance-amount-positive">
                                    <span className="app-tools-budget-stats-coste-final">0</span>
                                    €          </span>
                                  <ul>
                                    <li className="inline-block mr10">
                                      <span className="strong mr5">Payé :</span>
                                      <span className="app-total-paid">0</span>
                                      €              </li>
                                    <li className="inline-block">
                                      <span className="strong mr5">En attente:</span>
                                      <span className="app-total-pending">0</span>
                                      €              </li>
                                  </ul>
                                </div>
                              </div>
                            </div>
                            <div className="app-budget-donutchart-container ">
                              <p className="budget-chart-title">Combien coûte mon mariage&nbsp;?</p>
                              <div className="budget-stats-graph">
                                <div id="app-budget-donutchart" data-donut-rows="[[&quot;Cat\u00e9gorie&quot;,&quot;Quantit\u00e9 &quot;,&quot;id&quot;,&quot;Co\u00fbt &quot;],[&quot;C\u00e9r\u00e9monie&quot;,99,&quot;61&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;R\u00e9ception&quot;,6960,&quot;70&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Musique&quot;,1008,&quot;97&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Faire-part&quot;,208,&quot;98&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Cadeaux invit\u00e9s&quot;,880,&quot;99&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Fleurs et D\u00e9coration&quot;,272,&quot;100&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Photo et Vid\u00e9o&quot;,1280,&quot;101&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Transport&quot;,651,&quot;102&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Bijoux&quot;,480,&quot;103&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Mari\u00e9e et Accessoires&quot;,1264,&quot;77&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Mari\u00e9 et Accessoires&quot;,725,&quot;88&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Beaut\u00e9 et Bien-\u00catre&quot;,176,&quot;104&quot;,&quot;Montant estim\u00e9 : &quot;],[&quot;Lune de Miel&quot;,2000,&quot;93&quot;,&quot;Montant estim\u00e9 : &quot;]]"><div style={{position: 'relative'}}><div dir="ltr" style={{position: 'relative', width: '798px', height: '300px'}}><div style={{position: 'absolute', left: '0px', top: '0px', width: '100%', height: '100%'}} aria-label="A chart."><svg width={798} height={300} aria-label="A chart." style={{overflow: 'hidden'}}><defs id="_ABSTRACT_RENDERER_ID_0" /><rect x={0} y={0} width={798} height={300} stroke="none" strokeWidth={0} fill="#ffffff" /><g><path d="M399,105L399,59A92,92,0,0,1,402.5751323107858,59.0694913047884L400.7875661553929,105.03474565239421A46,46,0,0,0,399,105" stroke="#ffffff" strokeWidth={1} fill="#9b59b6" /></g><g><path d="M400.7875661553929,105.03474565239421L402.5751323107858,59.0694913047884A92,92,0,0,1,432.2728655375975,236.7724688866827L415.6364327687987,193.88623444334135A46,46,0,0,0,400.7875661553929,105.03474565239421" stroke="#ffffff" strokeWidth={1} fill="#e67e22" /></g><g><path d="M366.47787750317514,118.4682993327813L333.9557550063503,85.9365986655626A92,92,0,0,1,399,59L399,105A46,46,0,0,0,366.47787750317514,118.4682993327813" stroke="#ffffff" strokeWidth={1} fill="#c097a0" /></g><g><path d="M364.3092751769315,120.7914976993208L329.61855035386304,90.5829953986416A92,92,0,0,1,333.9557550063503,85.9365986655626L366.47787750317514,118.4682993327813A46,46,0,0,0,364.3092751769315,120.7914976993208" stroke="#ffffff" strokeWidth={1} fill="#a63446" /></g><g><path d="M357.2219648230814,131.74913568807492L315.44392964616276,112.49827137614983A92,92,0,0,1,329.61855035386304,90.5829953986416L364.3092751769315,120.7914976993208A46,46,0,0,0,357.2219648230814,131.74913568807492" stroke="#ffffff" strokeWidth={1} fill="#93a8ac" /></g><g><path d="M353.09561917705696,153.96442595829586L307.1912383541139,156.92885191659173A92,92,0,0,1,315.44392964616276,112.49827137614983L357.2219648230814,131.74913568807492A46,46,0,0,0,353.09561917705696,153.96442595829586" stroke="#ffffff" strokeWidth={1} fill="#f1ecce" /></g><g><path d="M354.4637831800449,162.51196731084443L309.9275663600898,174.02393462168885A92,92,0,0,1,307.1912383541139,156.92885191659173L353.09561917705696,153.96442595829586A46,46,0,0,0,354.4637831800449,162.51196731084443" stroke="#ffffff" strokeWidth={1} fill="#98b9f2" /></g><g><path d="M358.821191619648,173.3978426893073L318.642383239296,195.79568537861462A92,92,0,0,1,309.9275663600898,174.0239346216888L354.4637831800449,162.5119673108444A46,46,0,0,0,358.821191619648,173.3978426893073" stroke="#ffffff" strokeWidth={1} fill="#eab6ad" /></g><g><path d="M374.57761150068245,189.98136657415182L350.15522300136485,228.96273314830364A92,92,0,0,1,318.642383239296,195.79568537861465L358.821191619648,173.3978426893073A46,46,0,0,0,374.57761150068245,189.98136657415182" stroke="#ffffff" strokeWidth={1} fill="#00bfb2" /></g><g><path d="M378.871820054907,192.36249958716175L358.743640109814,233.7249991743235A92,92,0,0,1,350.15522300136485,228.96273314830364L374.57761150068245,189.98136657415182A46,46,0,0,0,378.871820054907,192.36249958716175" stroke="#ffffff" strokeWidth={1} fill="#c64191" /></g><g><path d="M394.0698667893213,196.73503893651957L389.1397335786426,242.47007787303917A92,92,0,0,1,358.743640109814,233.7249991743235L378.871820054907,192.36249958716175A46,46,0,0,0,394.0698667893213,196.73503893651957" stroke="#ffffff" strokeWidth={1} fill="#face75" /></g><g><path d="M397.817149867859,196.98478950223534L396.6342997357179,242.9695790044707A92,92,0,0,1,389.1397335786426,242.47007787303917L394.0698667893213,196.73503893651957A46,46,0,0,0,397.817149867859,196.98478950223534" stroke="#ffffff" strokeWidth={1} fill="#e39695" /></g><g><path d="M415.6364327687987,193.88623444334135L432.2728655375975,236.7724688866827A92,92,0,0,1,396.6342997357179,242.9695790044707L397.817149867859,196.98478950223534A46,46,0,0,0,415.6364327687987,193.88623444334135" stroke="#ffffff" strokeWidth={1} fill="#3498db" /></g><g /></svg><div aria-label="A tabular representation of the data in the chart." style={{position: 'absolute', left: '-10000px', top: 'auto', width: '1px', height: '1px', overflow: 'hidden'}}><table><thead><tr><th>Catégorie</th><th>Quantité </th><th>id</th><th>Coût </th></tr></thead><tbody><tr><td>Cérémonie</td><td>99€</td><td>61</td><td>Montant estimé : </td></tr><tr><td>Réception</td><td>6 960€</td><td>70</td><td>Montant estimé : </td></tr><tr><td>Musique</td><td>1 008€</td><td>97</td><td>Montant estimé : </td></tr><tr><td>Faire-part</td><td>208€</td><td>98</td><td>Montant estimé : </td></tr><tr><td>Cadeaux invités</td><td>880€</td><td>99</td><td>Montant estimé : </td></tr><tr><td>Fleurs et Décoration</td><td>272€</td><td>100</td><td>Montant estimé : </td></tr><tr><td>Photo et Vidéo</td><td>1 280€</td><td>101</td><td>Montant estimé : </td></tr><tr><td>Transport</td><td>651€</td><td>102</td><td>Montant estimé : </td></tr><tr><td>Bijoux</td><td>480€</td><td>103</td><td>Montant estimé : </td></tr><tr><td>Mariée et Accessoires</td><td>1 264€</td><td>77</td><td>Montant estimé : </td></tr><tr><td>Marié et Accessoires</td><td>725€</td><td>88</td><td>Montant estimé : </td></tr><tr><td>Beauté et Bien-Être</td><td>176€</td><td>104</td><td>Montant estimé : </td></tr><tr><td>Lune de Miel</td><td>2 000€</td><td>93</td><td>Montant estimé : </td></tr></tbody></table></div></div></div><div aria-hidden="true" style={{display: 'none', position: 'absolute', top: '310px', left: '808px', whiteSpace: 'nowrap', fontFamily: 'Arial', fontSize: '13px'}} /><div /></div></div>
                              </div>
                              <div id="app-budget-donutchart-legend"><div className="app-legend-table budget-legend-table pure-g">
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={61}>
                                    <p><span style={{backgroundColor: '#9b59b6'}} />
                                      Cérémonie
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={70}>
                                    <p><span style={{backgroundColor: '#e67e22'}} />
                                      Réception
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={97}>
                                    <p><span style={{backgroundColor: '#3498db'}} />
                                      Musique
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={98}>
                                    <p><span style={{backgroundColor: '#E39695'}} />
                                      Faire-part
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={99}>
                                    <p><span style={{backgroundColor: '#FACE75'}} />
                                      Cadeaux invités
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={100}>
                                    <p><span style={{backgroundColor: '#C64191'}} />
                                      Fleurs et Décoration
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={101}>
                                    <p><span style={{backgroundColor: '#00BFB2'}} />
                                      Photo et Vidéo
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={102}>
                                    <p><span style={{backgroundColor: '#EAB6AD'}} />
                                      Transport
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={103}>
                                    <p><span style={{backgroundColor: '#98B9F2'}} />
                                      Bijoux
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={77}>
                                    <p><span style={{backgroundColor: '#F1ECCE'}} />
                                      Mariée et Accessoires
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={88}>
                                    <p><span style={{backgroundColor: '#93A8AC'}} />
                                      Marié et Accessoires
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={104}>
                                    <p><span style={{backgroundColor: '#A63446'}} />
                                      Beauté et Bien-Être
                                    </p>
                                  </div>
                                  <div className="pure-u-1-2 app-set-category-active pointer link-hover" data-chart-category-id={93}>
                                    <p><span style={{backgroundColor: '#C097A0'}} />
                                      Lune de Miel
                                    </p>
                                  </div>
                                </div></div>
                            </div>
                          </div>
                          <div className="app-category-budget app-budget-aside mb40" data-section-active="categDetail">
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="app-totals-info" data-info="{&quot;61&quot;:{&quot;spendings&quot;:{&quot;61&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;1182201&quot;:{&quot;estimated&quot;:34,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;1182205&quot;:{&quot;estimated&quot;:65,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;C\u00e9r\u00e9monie&quot;},&quot;100&quot;:{&quot;spendings&quot;:{&quot;63&quot;:{&quot;estimated&quot;:80,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;75&quot;:{&quot;estimated&quot;:128,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;84&quot;:{&quot;estimated&quot;:64,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;100&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Fleurs et D\u00e9coration&quot;},&quot;97&quot;:{&quot;spendings&quot;:{&quot;64&quot;:{&quot;estimated&quot;:400,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;74&quot;:{&quot;estimated&quot;:608,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;97&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Musique&quot;},&quot;103&quot;:{&quot;spendings&quot;:{&quot;65&quot;:{&quot;estimated&quot;:480,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;83&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;103&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;109&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Bijoux&quot;},&quot;98&quot;:{&quot;spendings&quot;:{&quot;66&quot;:{&quot;estimated&quot;:208,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;98&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;106&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Faire-part&quot;},&quot;101&quot;:{&quot;spendings&quot;:{&quot;67&quot;:{&quot;estimated&quot;:608,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;68&quot;:{&quot;estimated&quot;:672,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;101&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Photo et Vid\u00e9o&quot;},&quot;102&quot;:{&quot;spendings&quot;:{&quot;69&quot;:{&quot;estimated&quot;:336,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;102&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;108&quot;:{&quot;estimated&quot;:315,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Transport&quot;},&quot;70&quot;:{&quot;spendings&quot;:{&quot;70&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;71&quot;:{&quot;estimated&quot;:2304,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;72&quot;:{&quot;estimated&quot;:3232,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;73&quot;:{&quot;estimated&quot;:608,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;105&quot;:{&quot;estimated&quot;:816,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;R\u00e9ception&quot;},&quot;99&quot;:{&quot;spendings&quot;:{&quot;76&quot;:{&quot;estimated&quot;:272,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;99&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;107&quot;:{&quot;estimated&quot;:608,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Cadeaux invit\u00e9s&quot;},&quot;77&quot;:{&quot;spendings&quot;:{&quot;77&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;78&quot;:{&quot;estimated&quot;:1088,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;79&quot;:{&quot;estimated&quot;:112,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;80&quot;:{&quot;estimated&quot;:64,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;81&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;82&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Mari\u00e9e et Accessoires&quot;},&quot;104&quot;:{&quot;spendings&quot;:{&quot;85&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;86&quot;:{&quot;estimated&quot;:64,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;87&quot;:{&quot;estimated&quot;:112,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;91&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;92&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;104&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Beaut\u00e9 et Bien-\u00catre&quot;},&quot;88&quot;:{&quot;spendings&quot;:{&quot;88&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;89&quot;:{&quot;estimated&quot;:480,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;90&quot;:{&quot;estimated&quot;:96,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;110&quot;:{&quot;estimated&quot;:64,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;111&quot;:{&quot;estimated&quot;:85,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Mari\u00e9 et Accessoires&quot;},&quot;93&quot;:{&quot;spendings&quot;:{&quot;93&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;94&quot;:{&quot;estimated&quot;:2000,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Lune de Miel&quot;},&quot;95&quot;:{&quot;spendings&quot;:{&quot;95&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;96&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]},&quot;112&quot;:{&quot;estimated&quot;:0,&quot;final&quot;:0,&quot;payments&quot;:[]}},&quot;name&quot;:&quot;Autres&quot;}}" />
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
                                  <a rel="nofollow" href="https://www.mariages.net/contactar.php">Contact</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/mentions-legales.php">Mentions légales</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/legal/cookies.php">Politique de cookies</a>
                                </li>
                                <li>
                                  <a className="ot-sdk-show-settings">Ne pas vendre mes données personnelles</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.mariages.net/emp-Acceso.php">Inscription entreprises</a>
                                </li>
                                <li>
                                  <a href="https://www.mariages.net/aboutus/aboutus.php">Qui sommes-nous ?</a>
                                </li>
                                <li>
                                  <a rel="nofollow" href="https://www.theknotww.com/careers/" target="_blank">Careers</a>
                                </li>
                                <li>
                                  <a href="https://www.mariages.net/site-web-mariage">Site de mariage</a>
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
                                    <img src="https://cdn1.mariages.net/assets/img/footer/appstore.png" srcSet="https://cdn1.mariages.net/assets/img/footer/appstore@2x.png 2x" width={140} height={42} loading="lazy" alt="Appstore" />
                                  </a>
                                </li>
                                <li className="mt10">
                                  <a rel="nofollow noopener noreferrer" target="_blank" href="https://app.appsflyer.com/net.mariages.launcher?pid=WP-Android-FR&c=WP-FR-LANDINGS">
                                    <img src="https://cdn1.mariages.net/assets/img/footer/googleplay.png" srcSet="https://cdn1.mariages.net/assets/img/footer/googleplay@2x.png 2x" width={140} height={42} loading="lazy" alt="Google Play" />
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
                                <li><a rel="nofollow noopener noreferrer" href="https://www.facebook.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__facebook "><svg viewBox="0 0 1792 1792"><path d="M1343 12v264h-157q-86 0-116 36t-30 108v189h293l-39 296h-254v759H734V905H479V609h255V391q0-186 104-288.5T1115 0q147 0 228 12z" /></svg></i>Facebook</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://twitter.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__twitter "><svg viewBox="0 0 502 408"><path d="M501.625 48.375c-18.477 8.203-38.281 13.71-59.102 16.21 21.25-12.733 37.579-32.89 45.235-56.874a206.477 206.477 0 01-65.313 24.922c-18.75-20-45.468-32.461-75.039-32.461-56.797 0-102.851 46.016-102.851 102.812 0 8.047.937 15.899 2.695 23.438C161.781 122.125 86.04 81.188 35.297 18.96 26.43 34.195 21.39 51.85 21.39 70.68c0 35.664 18.125 67.148 45.742 85.625-16.875-.547-32.735-5.196-46.602-12.89v1.288c0 49.844 35.469 91.367 82.461 100.86-8.594 2.343-17.695 3.593-27.07 3.593-6.64 0-13.086-.625-19.375-1.875 13.125 40.82 51.094 70.625 96.055 71.446-35.157 27.578-79.493 43.984-127.696 43.984-8.32 0-16.484-.469-24.492-1.445 45.469 29.218 99.531 46.21 157.617 46.21 189.14 0 292.578-156.68 292.578-292.538 0-4.454-.117-8.946-.273-13.32 20.078-14.493 37.5-32.618 51.289-53.243z" fillRule="nonzero" /></svg></i>Twitter</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://pinterest.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__pinterest "><svg viewBox="0 0 1792 1792"><path d="M1664 896q0 209-103 385.5T1281.5 1561 896 1664q-111 0-218-32 59-93 78-164 9-34 54-211 20 39 73 67.5t114 28.5q121 0 216-68.5t147-188.5 52-270q0-114-59.5-214T1180 449t-255-63q-105 0-196 29t-154.5 77-109 110.5-67 129.5T377 866q0 104 40 183t117 111q30 12 38-20 2-7 8-31t8-30q6-23-11-43-51-61-51-151 0-151 104.5-259.5T904 517q151 0 235.5 82t84.5 213q0 170-68.5 289T980 1220q-61 0-98-43.5T859 1072q8-35 26.5-93.5t30-103T927 800q0-50-27-83t-77-33q-62 0-105 57t-43 142q0 73 25 122l-99 418q-17 70-13 177-206-91-333-281T128 896q0-209 103-385.5T510.5 231 896 128t385.5 103T1561 510.5 1664 896z" /></svg></i>Pinterest</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://instagram.com/mariagesnet" target="_blank"><i className="svgIcon svgIcon__instagram "><svg viewBox="0 0 1792 1792"><path d="M1152 896q0-106-75-181t-181-75-181 75-75 181 75 181 181 75 181-75 75-181zm138 0q0 164-115 279t-279 115-279-115-115-279 115-279 279-115 279 115 115 279zm108-410q0 38-27 65t-65 27-65-27-27-65 27-65 65-27 65 27 27 65zM896 266q-7 0-76.5-.5t-105.5 0-96.5 3-103 10T443 297q-50 20-88 58t-58 88q-11 29-18.5 71.5t-10 103-3 96.5 0 105.5.5 76.5-.5 76.5 0 105.5 3 96.5 10 103T297 1349q20 50 58 88t88 58q29 11 71.5 18.5t103 10 96.5 3 105.5 0 76.5-.5 76.5.5 105.5 0 96.5-3 103-10 71.5-18.5q50-20 88-58t58-88q11-29 18.5-71.5t10-103 3-96.5 0-105.5-.5-76.5.5-76.5 0-105.5-3-96.5-10-103T1495 443q-20-50-58-88t-88-58q-29-11-71.5-18.5t-103-10-96.5-3-105.5 0-76.5.5zm768 630q0 229-5 317-10 208-124 322t-322 124q-88 5-317 5t-317-5q-208-10-322-124t-124-322q-5-88-5-317t5-317q10-208 124-322t322-124q88-5 317-5t317 5q208 10 322 124t124 322q5 88 5 317z" /></svg></i>Instagram</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.youtube.com/user/mariagesdotnet/featured" target="_blank"><i className="svgIcon svgIcon__youtube-filled "><svg viewBox="0 0 17 12"><path d="M16.293 2.731v6.324a2.384 2.384 0 01-2.383 2.385H2.73A2.384 2.384 0 01.347 9.055V2.73A2.384 2.384 0 012.73.347h11.18a2.384 2.384 0 012.383 2.384zM6.587 8.624l4.693-3.001L6.587 2.62v6.004z" fillRule="evenodd" /></svg></i>Youtube</a></li>
                                <li><a rel="nofollow noopener noreferrer" href="https://www.tiktok.com/@mariages.net" target="_blank"><i className="svgIcon svgIcon__tiktok-logo "><svg viewBox="0 0 18 18"><path d="M17.806 4.507A4.546 4.546 0 0113.254 0h-2.94v8.03l-.003 4.4a2.66 2.66 0 01-2.814 2.655 2.65 2.65 0 01-1.217-.374 2.66 2.66 0 01-1.3-2.241 2.662 2.662 0 013.504-2.565V6.921a5.784 5.784 0 00-.848-.062 5.636 5.636 0 00-4.234 1.894 5.513 5.513 0 00-1.391 3.326 5.506 5.506 0 001.64 4.29A5.637 5.637 0 007.636 18c.287-.001.57-.022.848-.063a5.618 5.618 0 003.138-1.57 5.503 5.503 0 001.65-3.915l-.015-6.57a7.43 7.43 0 004.557 1.549V4.506h-.008z" /></svg></i>TikTok</a></li>
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
                            <i className="icon-flag icon-flag-fr icon-left" /> France                <i className="svgIcon svgIcon__angleDown ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-angleDown" />
                              </svg>
                            </i>                <div id="app-footer-flags" style={{display: 'none'}} />
                          </div>
                          <img className="footer-wwgroup" src="https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO.png" srcSet="https://cdn1.mariages.net/assets/img/footer/tkww_logo_KO_2x.png 2x" width={95} height={33} alt="ww logo" loading="lazy" />
                        </div>
                        <div className="overflow">
                          <ul className="footer-nav-menu">
                            <li><span className="app-footer-links" data-sec={0}>Mon&nbsp;mariage</span></li>
                            <li><span className="app-footer-links" data-sec={1}>Réception</span></li>
                            <li><span className="app-footer-links" data-sec={2}>Prestataires</span></li>
                            <li><span className="app-footer-links" data-sec={3}>Mariée</span></li>
                            <li><span className="app-footer-links" data-sec={4}>Marié</span></li>
                            <li><span className="app-footer-links" data-sec={5}>Idées</span></li>
                            <li><span className="app-footer-links" data-sec={6}>Communauté</span></li>
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
                  <div className="dnone">
                  </div>
                  <img className="img-trace" src="https://www.mariages.net/traces-LastConnection.php?idUser=6159171&idDevice=2" alt="" />
                  <div id="app-pusher-vendors-users-notification-alert" className="pusher-notification dnone" />
                  <div id="app-chat-container" className="pusher-container"><div id="app-bot-bot" data-fromtype="bot" data-fromid="bot" data-idconversation="null" data-id-question={1} data-id-flow="null" data-id-categ="null" data-id-sector="null" className="app-chat-container-top">
                      <div className="chat-launcher app-chat-launcher ">
                        <div className="chat-launcher-button ">
                          <img className="app-chat-avatar" src="https://www.mariages.net/assets/img/chatbot/avatar.png" width={50} height={50} alt="" />
                          <span className="app-chat-num-messages chat-message-count dnone bounce-once" style={{display: 'inline'}}>1</span>
                        </div>
                        <div className="chat-launcher-preview fadeout">
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
                            <span className="chat-control-btn app-chat-close">
                              <span className="chat-ui chat-close" />
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
                                  <div className="chat__timestamp">13:56</div>
                                </div>
                              </div>
                              <div className="app-chat-reply-template"><div className="app-chat-qr-container chatQuickReply"><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">Oui</span><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">Non, merci</span></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="composer-container chat-message-send app-chat-message-send">
                          <div className="app-chat-writing-alert">Sara est en train d'écrire...</div>
                          <form method="POST" className="app-chat-form-chatbot" data-type="user" data-id={6159171}>
                            <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                              <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                              <div className="chat-submit"> <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled"><i className="icon icon-send" /></span></div>
                            </div>
                          </form>
                        </div>
                      </div></div></div>
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
                    <symbol>
                      <svg id="svg-_common-heart" viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg><svg id="svg-_common-angleDown" viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg>  </symbol>
                  </svg>
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
                C402.765,25.895,404.093,19.231,400.858,11.427z" /></g></svg></button></div><div id="ot-anchor" /><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div className="ot-fltr-scrlcnt ot-pc-scrollbar"><div className="ot-fltr-opts"><div className="ot-fltr-opt"><div className="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div><div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar"><div id="ot-sel-blk"><div className="ot-sel-all"><div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div><div className="ot-sel-all-chkbox"><div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div></div><div className="ot-sdk-row"><div className="ot-sdk-column" /></div></section></section><div className="ot-pc-footer"><div className="ot-btn-container"> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirmer la sélection</button></div>{/* Footer logo */}<div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" /></div></div>{/* Cookie subgroup container */}{/* Vendor list link */}{/* Cookie lost link */}{/* Toggle HTML element */}{/* Checkbox HTML */}{/* plus minus*/}{/* Arrow SVG element */}{/* Accordion basic element */}<span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" /><iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" /></div></div>
                </div>
        

    )}






   export default Budget;