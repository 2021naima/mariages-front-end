import React, { useState, useEffect } from 'react';

function Invites() {
    return (
                <div>
                  <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
                                   <main id="layoutMain">
                    
                    <div className="wrapper">
                      <a className="btnOutline btnOutline--transparent fright" href="/tools/Stats">
                        Voir statistiques  <i className="svgIcon svgIcon__angleRight svgIcon--center"><svg viewBox="0 0 9 16"><path d="M1.344.137l7.432 7.43a.502.502 0 01.232.381v.02a.499.499 0 01-.233.465l-7.431 7.43a.5.5 0 01-.707-.707L7.792 8 .637.844a.5.5 0 01.707-.707z" fillRule="nonzero" /></svg></i>  </a>
                      <h1 className="tools-title mb0">
                        Mes invités  </h1>
                      <div className="tools-guest-stats pure-g mb20">
                        <div className="tools-guest-stats-item pure-u-1-3 border-right">
                          <i className="icon-tools icon-tools-guest-count" />
                          <div className="guest-stats-count">
                            <span className="block app-tools-guests-stats-total">4</span>
                            <p className="app-guests-stats-total-title">invités</p>
                          </div>
                          <div className="guest-stats-subcount">
                            <span className="app-budget-stats-adults-title"><strong className="app-tools-guests-stats-adults">4</strong> adultes</span>
                            <span>
                              <span className="app-budget-stats-children-title"><strong className="app-tools-guests-stats-children">0</strong> enfants</span>,
                              <span className="app-budget-stats-babies-title"><strong className="app-tools-guests-stats-babies">0</strong> bébés</span>
                            </span>
                          </div>
                        </div>
                        <div className="tools-guest-stats-item pure-u-1-3 border-right">
                          <i className="icon-tools icon-tools-guest-stats ml20" />
                          <div className="guest-stats-count">
                            <span className="block app-tools-guests-stats-confirmed">2</span>
                            <p className="app-budget-stats-confirmed-title">confirmés</p>
                          </div>
                          <div className="guest-stats-count">
                            <span className="block app-tools-guests-stats-pending">1</span>
                            <p className="app-budget-stats-pending-title">en attente</p>
                          </div>
                          <div className="guest-stats-count">
                            <span className="block app-tools-guests-stats-cancelled">1</span>
                            <p className="app-budget-stats-cancelled-title">refus</p>
                          </div>
                        </div>
                        <div className="tools-guest-stats-item pure-u-1-3">
                          <i className="icon-tools icon-tools-guest-tables ml20" />
                          <div className="guest-stats-count">
                            <span className="app-tools-guests-stats-seated">2</span> Invités placés            <a className="link--primary block" href="https://www.mariages.net/tools/Tables">Organiser les tables</a>
                          </div>
                        </div>
                      </div>
                      <div className="guest-header-options">
                        <ul className="btn-set fright">
                          <li>
                            <a href="/tools/GuestsCSV?Query=">
                              <i className="icon-tools icon-tools-download-pdf" />
                              <span className="ml5 btn-set-label">Télécharger</span>
                            </a>
                          </li>
                          <li>
                            <a className="app-tools-guest-print" href="/tools/GuestsPrint?tab=1" target="_blank">
                              <i className="icon icon-print" />
                              <span className="ml5 btn-set-label">Imprimer</span>
                            </a>
                          </li>
                        </ul>
                        <div className="inline-block mr15">
                          <a className="app-layer-add-guest btnFlat btnFlat--primary" data-remote="/tools/TablesGuestsAdd" role="button">
                            <i className="svgIcon svgIcon__plusCircle ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-plusCircle" />
                              </svg>
                            </i>                Invité          </a>
                          <a className="app-layer-add-modal btnOutline btnOutline--primary guests-rows-add ml10 app-tools-section-add " data-remote="/tools/GroupsAdd?section=group" data-tab={1} role="button">
                            <i className="svgIcon svgIcon__plusCircle ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-plusCircle" />
                              </svg>
                            </i>                Groupe          </a>
                          <a data-remote="/tools/MenusAdd?section=group" className="app-layer-add-modal btnOutline btnOutline--primary guests-rows-add ml10 app-tools-section-add dnone" data-tab={2} role="button">
                            <i className="svgIcon svgIcon__plusCircle ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-plusCircle" />
                              </svg>
                            </i>                Menu          </a>
                          <a href="https://www.mariages.net/tools/Tables" className="btnOutline btnOutline--primary guests-rows-add ml10 app-tools-section-add dnone" data-tab={3} role="button">
                            <i className="svgIcon svgIcon__plusCircle ">
                              <svg viewBox="0 0 32 32" width={16} height={16}>
                                <use xlinkHref="#svg-_common-plusCircle" />
                              </svg>
                            </i>                    Table              </a>
                          <div className="pure-u ml10 app-toogle-layer pointer relative inline-block" data-selector="app-dropdown-request-contact">
                            <a className="btnOutline btnOutline--grey" role="button">
                              <i className="icon icon-mail-letter mr10" /> Envoyer message                    <i className="icon icon-arrow-down" />
                            </a>
                            <div className="guestsDropdown app-dropdown-request-contact dnone">
                              <a href="/tools/InvitationsAdd" className="icon icon-mail-letter icon-left">
                                Faire-part online                      </a>
                              <a href="/tools/GuestsRequestConfirm" className="icon icon-mail-letter icon-left">
                                Demander confirmation                  </a>
                              <a href="/tools/GuestsRequestAddress" className="icon icon-mail-letter icon-left">
                                Demander adresse                      </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="app-tools-guest-container box">
                        <form name="frmGuests" id="frmPaged" action="/tools/Guests" method="post">
                          <input type="hidden" name="tab" id="tab" defaultValue={1} />
                          <input type="hidden" name="viewGrid" id="viewGrid" defaultValue={1} />
                          <input type="hidden" name="show" id="show" defaultValue />
                          <input type="hidden" name="idContact" id="idContact" defaultValue />
                          <input type="hidden" name="idEvent" id="idEvent" defaultValue />
                          <input type="hidden" name="subIdEvent" id="subIdEvent" defaultValue />
                          <div className="relative">
                            <span className="app-tools-guest-change-view absolute pointer btn-outline outline-transparent" style={{right: '15px', top: '5px'}} role="button" data-view={2}>
                              <i className="icon icon-arrow-left" />
                            </span>
                            <header className="guests-rows-header">
                              <span className="guests-rows-header-link pointer active app-tools-guest-change-tab" data-tab={1}>Groupes</span>
                              <span className="guests-rows-header-link pointer  app-tools-guest-change-tab" data-tab={4}>Présence</span>
                              <span className="guests-rows-header-link pointer  app-tools-guest-change-tab" data-tab={3}>Tables</span>
                              <span className="guests-rows-header-link pointer  app-tools-guest-change-tab" data-tab={2}>Menus</span>
                            </header>
                            <div className="app-dropdown-filters" />
                            <div className="guests-rows-content guests-rows-content-full">
                              <ul id="app-guest-mark-nav" className="app-mark-as guests-mark-nav disabled">
                                <li>
                                  <div className="input-group-line">
                                    <label className="guests-rows-select-all">
                                      <input type="checkbox" className="app-guest-select-all app-not-icheck" />
                                      <span />
                                      <span className="label-mark-all app-guest-mark-hide-label">Sélectionner tout</span>
                                    </label>
                                  </div>
                                </li>
                                <li className="app-guest-multi-open guests-mark-nav-action flex-va-center" data-action="group">
                                  <i className="svgIcon svgIcon__switch guests-mark-nav__icon guests-mark-nav__icon--switch"><svg viewBox="0 0 34 34"><path d="M29.71 25.5H.996a1 1 0 010-2h28.59l-6.293-6.293a1 1 0 011.414-1.414l8.062 8.062a1 1 0 010 1.414l-8 8a1 1 0 01-1.414-1.414L29.71 25.5zm-26.358-15l6.355 6.355a1 1 0 01-1.414 1.415l-8-8a1 1 0 010-1.415L8.355.793A1 1 0 119.77 2.207L3.476 8.5H32.5a1 1 0 010 2H3.352z" fillRule="nonzero" /></svg></i>                    <span className="guests-mark-nav__name">Groupe</span>
                                </li>
                                <li className="app-guest-multi-open guests-mark-nav-action flex-va-center" data-action="confirmacion">
                                  <i className="svgIcon svgIcon__checkOutline guests-mark-nav__icon"><svg viewBox="0 0 24 24"><path d="M12 0c6.627 0 12 5.373 12 12s-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0zm0 1C5.925 1 1 5.925 1 12s4.925 11 11 11 11-4.925 11-11S18.075 1 12 1zm6.26 6.442a.75.75 0 01.125.972l-.068.087-7.09 7.886a.749.749 0 01-.593.248.743.743 0 01-.434-.143l-.092-.08-4.332-4.383a.75.75 0 01.983-1.128l.084.073 3.787 3.833 6.572-7.308a.75.75 0 011.059-.057z" fillRule="nonzero" /></svg></i>                    <span className="guests-mark-nav__name">Présence</span>
                                </li>
                                <li className="app-guest-multi-open guests-mark-nav-action flex-va-center" data-action="mesas">
                                  <i className="svgIcon svgIcon__tables guests-mark-nav__icon"><svg viewBox="0 0 54 56"><path d="M6.287 17.12a3.683 3.683 0 01-.017-.017l-5.12-5.12a3.635 3.635 0 010-5.138l5.12-5.12a3.633 3.633 0 015.14 0l5.12 5.12c.031.03.06.062.09.093a23.365 23.365 0 0120.796.018c.035-.038.07-.075.107-.111l5.118-5.12a3.634 3.634 0 015.14 0l5.12 5.12a3.635 3.635 0 010 5.138l-5.12 5.12a3.669 3.669 0 01-.05.05 23.36 23.36 0 01-.125 21.545c.057.063.14.154.175.19l5.12 5.118a3.634 3.634 0 010 5.138l-5.12 5.12a3.636 3.636 0 01-5.14 0l-5.117-5.118a3.63 3.63 0 01-.33-.379 23.366 23.366 0 01-20.35.018 3.655 3.655 0 01-.315.36l-5.12 5.12a3.635 3.635 0 01-5.139 0l-5.119-5.12a3.633 3.633 0 010-5.139l5.12-5.119c.048-.048.098-.095.148-.14a23.356 23.356 0 01-.132-21.628zm8.516-9.174L9.995 3.14a1.633 1.633 0 00-2.31 0l-5.12 5.12a1.635 1.635 0 000 2.31l4.754 4.753a23.385 23.385 0 013.205-3.994 23.362 23.362 0 014.28-3.383zm31.898 7.408l4.785-4.785a1.635 1.635 0 000-2.31l-5.12-5.12a1.634 1.634 0 00-2.311 0L39.23 7.967a23.364 23.364 0 014.247 3.363 23.382 23.382 0 013.224 4.025zM7.467 40.52l-4.902 4.902a1.633 1.633 0 000 2.31l5.12 5.119a1.634 1.634 0 002.31 0l5.042-5.041a23.348 23.348 0 01-4.513-3.526 23.4 23.4 0 01-3.057-3.764zm31.529 7.27l5.059 5.061a1.635 1.635 0 002.312 0l5.119-5.12a1.634 1.634 0 000-2.31l-4.933-4.931a23.397 23.397 0 01-3.076 3.794 23.35 23.35 0 01-4.481 3.507zM11.938 12.745c-8.32 8.319-8.32 21.806 0 30.125 8.318 8.318 21.806 8.318 30.124 0 8.318-8.319 8.318-21.806 0-30.125-8.318-8.318-21.806-8.318-30.124 0z" fillRule="nonzero" /></svg></i>                        <span className="guests-mark-nav__name">Table</span>
                                </li>
                                <li className="app-guest-multi-open guests-mark-nav-action flex-va-center" data-action="menus">
                                  <i className="svgIcon svgIcon__categCatering guests-mark-nav__icon guests-mark-nav__icon--menu"><svg viewBox="0 0 50 33"><path d="M39.678 28.996v-.004c-.216.01-.431.01-.647.003V29H.995L1 27.995c.063-11.97 8.762-21.843 20.165-23.686A2.796 2.796 0 0121 3.374C21 1.476 22.864 0 25 0s4 1.476 4 3.374c0 .308-.054.614-.155.907a24.195 24.195 0 0117.82 12.85 10.076 10.076 0 012.385-.102l.856.065.065.856a10.398 10.398 0 01-1.366 5.945c.258 1.483.395 2.82.395 4.105v1H39.678v-.004zm5.008-11.331A22.181 22.181 0 0025.156 6C13.29 5.936 3.611 15.238 3.028 27H33.96a8.646 8.646 0 01-.497-.459c-1.784-1.783-2.66-4.2-2.426-6.606l.08-.82.82-.079c2.411-.23 4.831.642 6.63 2.437.271.284.522.583.75.896a10.06 10.06 0 011.743-2.368 10.614 10.614 0 013.626-2.336zM46.9 26.13a9.93 9.93 0 01-1.019.869h1.09c-.017-.284-.04-.573-.07-.869zM25.054 4h1.69c.163-.2.256-.429.256-.626C27 2.696 26.12 2 25 2s-2 .696-2 1.374c0 .197.093.426.257.626h1.797zm9.823 21.127c1.135 1.133 2.597 1.781 4.104 1.864a6.713 6.713 0 00-1.843-4.118c-1.141-1.14-2.614-1.788-4.13-1.865.077 1.51.727 2.978 1.87 4.119zm7.592-3.707a7.97 7.97 0 00-1.929 3.183c.27.722.42 1.483.465 2.3 1.749-.26 3.346-1.038 4.582-2.286 1.491-1.554 2.334-3.57 2.408-5.612-2.033.073-3.985.91-5.526 2.415zM0 33v-2h50v2H0z" fillRule="nonzero" /></svg></i>
                                  <span className="guests-mark-nav__name">Menu</span>
                                </li>
                                <li className="app-guest-multi-delete guests-mark-nav-action flex-va-center">
                                  <i className="svgIcon svgIcon__trash guests-mark-nav__icon guests-mark-nav__icon guests-mark-nav__icon--trash"><svg viewBox="0 0 32 32"><path d="M5.5 4.5h4v-3a1 1 0 011-1h11a1 1 0 011 1v3h8a1 1 0 010 2h-3v24a1 1 0 01-1 1h-21a1 1 0 01-1-1v-24h-3a1 1 0 110-2h4zm1 2v23h19v-23h-19zm14-2v-2h-9v2h9zM9.5 11a1 1 0 012 0v14a1 1 0 01-2 0V11zm5.5 0a1 1 0 012 0v14a1 1 0 01-2 0V11zm5.5 0a1 1 0 012 0v14a1 1 0 01-2 0V11z" fillRule="nonzero" /></svg></i>                    <span className="guests-mark-nav__name">Supprimer</span>
                                </li>
                              </ul>
                              <div className="guests-rows-actions ">
                                <i className="icon-tools icon-tools-search icon-left" />
                                <span className="reset-input app-input-search-guests-reset" style={{display: 'none'}}>×</span>
                                <input type="text" className=" guests-rows-header-search app-input-search-guests" placeholder="Rechercher des invités..." defaultValue name="Query" />
                              </div>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Marié        <span className="guests-rows-count app-guests-group-items-count">2</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header1">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header1" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header1" data-remote="/tools/GroupsAdd?section=group&idGroup=1">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-contact-row guests-rows-item" data-contact-id={55608821} data-event-id data-parent-contact-id={55608821} data-name="Ma moitié ">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%">
                                      <div className="guests-rows-td-checkbox input-group-line inline">
                                        <label className="app-guest-check-label">
                                          <input type="checkbox" className="app-guest-check app-not-icheck" data-isnovios={1} />
                                          <span />
                                        </label>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-name pointer app-contact-change-view-contact" data-idcontact={55608821}>
                                      <span className="icon-tools icon-tools-adult" />        <span className="app-contact-grid-name pointer pl5">
                                        Ma moitié       </span>
                                    </td>
                                    <td className="guests-rows-td">
                                      <div className="app-input-select input-select app-guest-update select-attendance guests-rows-select" data-eager="true" data-type="confirmacion" data-event>
                                        <span className="app-input-label input-select-label input-filled"><i className="icon-tools icon-tools-checkbox mr10" />Confirmé</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={0}>
                                              <i className="icon-tools icon-tools-clock-orange mr10" />En attente              </li>
                                            <li data-value={1} data-default style={{display: 'none'}}>
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={2} data-confirm="Si vous annulez l'assistance de l'invité(e), vous perdrez les informations relatives à l'ensemble de la table. Êtes-vous sûr(e) de vouloir annuler ?">
                                              <i className="icon-tools icon-tools-times-red mr10" />Annulé              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="menus">
                                        <span className="app-input-label input-select-label input-filled">Adultes</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              Adultes              </li>
                                            <li data-value={6141243} data-default style={{display: 'none'}}>
                                              Adultes              </li>
                                            <li data-value={6141245}>
                                              Enfant(s)              </li>
                                            <li className="app-layer-add-modal guests-rows-select-add" data-remote="/tools/MenusAdd?assignToIdGuest=55608821" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer menu              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="mesas">
                                        <span className="app-input-label input-select-label input-filled">Table d'Honneur (4)</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              Table d'Honneur (4)              </li>
                                            <li data-value="table1" data-default style={{display: 'none'}}>
                                              Table d'Honneur (4)              </li>
                                            <li className="app-link guests-rows-select-add" data-href="https://www.mariages.net/tools/Tables" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer table              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-more" align="right">
                                      <div className="app-toogle-layer pointer relative inline-block" data-selector="app-dropdown-55608821">···
                                        <div className="guests-rows-dropdown app-dropdown-55608821 dnone">
                                          <a role="button" className="app-contact-change-view-contact" data-idcontact={55608821}>
                                            <i className="icon-tools icon-tools-edit icon-left" />
                                            Modifier                  </a>
                                          <a role="button" className="app-layer-remove-guest" data-remote="/tools/GuestsDeleteModal?idGuest=55608821&idEvent=">
                                            <i className="icon-tools icon-tools-trash icon-left" />
                                            Supprimer                  </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="app-contact-row guests-rows-item" data-contact-id={55608819} data-event-id data-parent-contact-id={55608819} data-name="naima bourhym ">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%">
                                      <div className="guests-rows-td-checkbox input-group-line inline">
                                        <label className="app-guest-check-label">
                                          <input type="checkbox" className="app-guest-check app-not-icheck" data-isnovios={1} />
                                          <span />
                                        </label>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-name pointer app-contact-change-view-contact" data-idcontact={55608819}>
                                      <span className="icon-tools icon-tools-bride" />        <span className="app-contact-grid-name pointer pl5">
                                        naima bourhym       </span>
                                    </td>
                                    <td className="guests-rows-td">
                                      <div className="app-input-select input-select app-guest-update select-attendance guests-rows-select" data-eager="true" data-type="confirmacion" data-event>
                                        <span className="app-input-label input-select-label input-filled"><i className="icon-tools icon-tools-checkbox mr10" />Confirmé</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={0}>
                                              <i className="icon-tools icon-tools-clock-orange mr10" />En attente              </li>
                                            <li data-value={1} data-default style={{display: 'none'}}>
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={2} data-confirm="Si vous annulez l'assistance de l'invité(e), vous perdrez les informations relatives à l'ensemble de la table. Êtes-vous sûr(e) de vouloir annuler ?">
                                              <i className="icon-tools icon-tools-times-red mr10" />Annulé              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="menus">
                                        <span className="app-input-label input-select-label ">Sélectionner</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li data-value={6141243}>
                                              Adultes              </li>
                                            <li data-value={6141245}>
                                              Enfant(s)              </li>
                                            <li className="app-layer-add-modal guests-rows-select-add" data-remote="/tools/MenusAdd?assignToIdGuest=55608819" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer menu              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="mesas">
                                        <span className="app-input-label input-select-label input-filled">Table d'Honneur (4)</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              Table d'Honneur (4)              </li>
                                            <li data-value="table1" data-default style={{display: 'none'}}>
                                              Table d'Honneur (4)              </li>
                                            <li className="app-link guests-rows-select-add" data-href="https://www.mariages.net/tools/Tables" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer table              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-more" align="right">
                                      <div className="app-toogle-layer pointer relative inline-block" data-selector="app-dropdown-55608819">···
                                        <div className="guests-rows-dropdown app-dropdown-55608819 dnone">
                                          <a role="button" className="app-contact-change-view-contact" data-idcontact={55608819}>
                                            <i className="icon-tools icon-tools-edit icon-left" />
                                            Modifier                  </a>
                                          <a role="button" className="app-layer-remove-guest" data-remote="/tools/GuestsDeleteModal?idGuest=55608819&idEvent=">
                                            <i className="icon-tools icon-tools-trash icon-left" />
                                            Supprimer                  </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="app-row-no-items" style={{display: 'none'}}>
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Amis du conjoint        <span className="guests-rows-count app-guests-group-items-count">1</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header5">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header5" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header5" data-remote="/tools/GroupsAdd?section=group&idGroup=5">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header5" data-id={5}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-contact-row guests-rows-item" data-contact-id={55609045} data-event-id data-parent-contact-id={55609045} data-name="GGSDFG TUTUS">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%">
                                      <div className="guests-rows-td-checkbox input-group-line inline">
                                        <label className="app-guest-check-label">
                                          <input type="checkbox" className="app-guest-check app-not-icheck" data-isnovios />
                                          <span />
                                        </label>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-name pointer app-contact-change-view-contact" data-idcontact={55609045}>
                                      <span className="icon-tools icon-tools-woman" />        <span className="app-contact-grid-name pointer pl5">
                                        GGSDFG TUTUS      </span>
                                    </td>
                                    <td className="guests-rows-td">
                                      <div className="app-input-select input-select app-guest-update select-attendance guests-rows-select" data-eager="true" data-type="confirmacion" data-event>
                                        <span className="app-input-label input-select-label input-filled"><i className="icon-tools icon-tools-times-red mr10" />Annulé</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              <i className="icon-tools icon-tools-times-red mr10" />Annulé              </li>
                                            <li data-value={0}>
                                              <i className="icon-tools icon-tools-clock-orange mr10" />En attente              </li>
                                            <li data-value={1}>
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={2} data-confirm="Si vous annulez l'assistance de l'invité(e), vous perdrez les informations relatives à l'ensemble de la table. Êtes-vous sûr(e) de vouloir annuler ?" data-default style={{display: 'none'}}>
                                              <i className="icon-tools icon-tools-times-red mr10" />Annulé              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled">Annulé</span>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled">Annulé</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-more" align="right">
                                      <div className="app-toogle-layer pointer icon icon-mail-letter-grey mr15 relative inline-block" data-selector="app-dropdown-messages-55609045">
                                        <div className="guests-rows-dropdown guests-rows-dropdown-messages app-dropdown-messages-55609045 dnone">
                                          <a role="button" href="/tools/InvitationsAdd?idGuest=55609045&idEvent=">
                                            <i className="icon icon-mail-letter-grey icon-left" /> Envoyer invitation                      </a>
                                          <a role="button" href="/tools/GuestsRequestAddress?idGuest=55609045&idEvent=">
                                            <i className="icon icon-mail-letter-grey icon-left" /> Demander adresse postale                          </a>
                                        </div>
                                      </div>
                                      <div className="app-toogle-layer pointer relative inline-block" data-selector="app-dropdown-55609045">···
                                        <div className="guests-rows-dropdown app-dropdown-55609045 dnone">
                                          <a role="button" className="app-contact-change-view-contact" data-idcontact={55609045}>
                                            <i className="icon-tools icon-tools-edit icon-left" />
                                            Modifier                  </a>
                                          <a role="button" className="app-layer-remove-guest" data-remote="/tools/GuestsDeleteModal?idGuest=55609045&idEvent=">
                                            <i className="icon-tools icon-tools-trash icon-left" />
                                            Supprimer                  </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="app-row-no-items" style={{display: 'none'}}>
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Non attribué        <span className="guests-rows-count app-guests-group-items-count">1</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-contact-row guests-rows-item" data-contact-id={55637073} data-event-id data-parent-contact-id={55637073} data-name="etr ">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%">
                                      <div className="guests-rows-td-checkbox input-group-line inline">
                                        <label className="app-guest-check-label">
                                          <input type="checkbox" className="app-guest-check app-not-icheck" data-isnovios />
                                          <span />
                                        </label>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-name pointer app-contact-change-view-contact" data-idcontact={55637073}>
                                      <span className="icon-tools icon-tools-adult" />        <span className="app-contact-grid-name pointer pl5">
                                        etr       </span>
                                    </td>
                                    <td className="guests-rows-td">
                                      <div className="app-input-select input-select app-guest-update select-attendance guests-rows-select" data-eager="true" data-type="confirmacion" data-event>
                                        <span className="app-input-label input-select-label input-filled"><i className="icon-tools icon-tools-clock-orange mr10" />En attente</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              <i className="icon-tools icon-tools-clock-orange mr10" />En attente              </li>
                                            <li data-value={0} data-default style={{display: 'none'}}>
                                              <i className="icon-tools icon-tools-clock-orange mr10" />En attente              </li>
                                            <li data-value={1}>
                                              <i className="icon-tools icon-tools-checkbox mr10" />Confirmé              </li>
                                            <li data-value={2} data-confirm="Si vous annulez l'assistance de l'invité(e), vous perdrez les informations relatives à l'ensemble de la table. Êtes-vous sûr(e) de vouloir annuler ?">
                                              <i className="icon-tools icon-tools-times-red mr10" />Annulé              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="menus">
                                        <span className="app-input-label input-select-label input-filled">Adultes</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li className="input-select-dropdown__title app-input-select-label ">
                                              Adultes              </li>
                                            <li data-value={6141243} data-default style={{display: 'none'}}>
                                              Adultes              </li>
                                            <li data-value={6141245}>
                                              Enfant(s)              </li>
                                            <li className="app-layer-add-modal guests-rows-select-add" data-remote="/tools/MenusAdd?assignToIdGuest=55637073" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer menu              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td">
                                      <span className="app-guest-canceled" style={{display: 'none'}}>Annulé</span>
                                      <div className="app-input-select input-select app-guest-update guests-rows-select" data-eager="true" data-type="mesas">
                                        <span className="app-input-label input-select-label ">Sélectionner</span>
                                        <span className="app-input-no-value-label dnone">Sélectionner</span>
                                        <div className="app-input-dropdown input-select-dropdown">
                                          <ul>
                                            <li data-value="table1">
                                              Table d'Honneur (4)              </li>
                                            <li className="app-link guests-rows-select-add" data-href="https://www.mariages.net/tools/Tables" data-action>
                                              <i className="icon-tools icon-tools-plus-circle-medium icon-left" />Créer table              </li>
                                          </ul>
                                        </div>
                                      </div>
                                    </td>
                                    <td className="guests-rows-td guests-rows-more" align="right">
                                      <div className="app-toogle-layer pointer relative inline-block" data-selector="app-dropdown-55637073">···
                                        <div className="guests-rows-dropdown app-dropdown-55637073 dnone">
                                          <a role="button" className="app-contact-change-view-contact" data-idcontact={55637073}>
                                            <i className="icon-tools icon-tools-edit icon-left" />
                                            Modifier                  </a>
                                          <a role="button" className="app-layer-remove-guest" data-remote="/tools/GuestsDeleteModal?idGuest=55637073&idEvent=">
                                            <i className="icon-tools icon-tools-trash icon-left" />
                                            Supprimer                  </a>
                                        </div>
                                      </div>
                                    </td>
                                  </tr>
                                  <tr className="app-row-no-items" style={{display: 'none'}}>
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Collègues de travail du conjoint        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header8">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header8" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header8" data-remote="/tools/GroupsAdd?section=group&idGroup=8">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header8" data-id={8}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Travail naima bourhym        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header7">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header7" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header7" data-remote="/tools/GroupsAdd?section=group&idGroup=7">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header7" data-id={7}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Amis en commun        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header6">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header6" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header6" data-remote="/tools/GroupsAdd?section=group&idGroup=6">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header6" data-id={6}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Amis naima bourhym        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header4">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header4" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header4" data-remote="/tools/GroupsAdd?section=group&idGroup=4">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header4" data-id={4}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Famille du conjoint        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header3">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header3" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header3" data-remote="/tools/GroupsAdd?section=group&idGroup=3">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header3" data-id={3}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                              <table className="app-guest-row-group guests-rows-group">
                                <thead>
                                  <tr className="guests-rows-head app-guests-group-title">
                                    <td className="guests-rows-td guests-rows-noBorder" width="3%" />
                                    <td className="guests-rows-td guests-rows-nameBig" width="24%">
                                      Famille naima bourhym        <span className="guests-rows-count app-guests-group-items-count">0</span>
                                    </td>
                                    <td className="guests-rows-td guests-rows-tag" width="15%">Présence</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Menu</td>
                                    <td className="guests-rows-td guests-rows-tag" width="18%">Table</td>
                                    <td className="guests-rows-td guests-rows-more" align="right" width="10%">
                                      <span className="app-toogle-layer pointer" data-selector="app-dropdown-header2">
                                        ···
                                      </span>
                                      <div className="guests-rows-dropdown app-dropdown-header2" style={{display: 'none'}}>
                                        <a className="app-layer-add-modal" role="button" data-selector="app-dropdown-header2" data-remote="/tools/GroupsAdd?section=group&idGroup=2">
                                          <i className="icon-tools icon-tools-edit icon-left" />
                                          Renommer                      </a>
                                        <a role="button" className="app-contact-group-delete" data-selector="app-dropdown-header2" data-id={2}>
                                          <i className="icon-tools icon-tools-trash icon-left" />
                                          Supprimer</a>
                                      </div>
                                    </td>
                                  </tr>
                                </thead>
                                <tbody>
                                  <tr className="app-row-no-items">
                                    <td width="3%" />
                                    <td className="guests-rows-empty" colSpan={5}>
                                      <span>Aucun invité</span>
                                    </td>
                                  </tr>
                                </tbody>
                              </table>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div id="div-gpt-ad-1334158298810-0" className="dfp-center text-center" style={{minHeight: '60px'}}><div id="google_ads_iframe_/4879/Planningtools.n_FR/Desktop/guestlist/bottomleaderboard_0__container__" style={{border: '0pt none', width: '728px', height: '0px'}} /></div>
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
                                  <div className="chat__timestamp">13:27</div>
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
                  <iframe src="https://bea8e4ba90abafdf997767fcae5ca94e.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" style={{visibility: 'hidden', display: 'none'}} />
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{display: 'none'}}>
                    <symbol>
                      <svg id="svg-_common-plusCircle" viewBox="0 0 16 16"><path d="M8.5 7.5h3a.5.5 0 110 1h-3v3a.5.5 0 11-1 0v-3h-3a.5.5 0 010-1h3v-3a.5.5 0 011 0v3zM8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 118 0a8 8 0 010 16z" fillRule="nonzero" /></svg><svg id="svg-_common-heart" viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg><svg id="svg-_common-angleDown" viewBox="0 0 18 18"><path d="M16.9 5.6c-.2-.2-.5-.2-.7 0L9 12.8 1.8 5.6c-.2-.2-.5-.2-.7 0s-.2.5 0 .7l7.5 7.5v.1c.1.1.3.1.4.1.1 0 .3 0 .4-.1v-.1l7.5-7.5c.2-.2.2-.5 0-.7z" /></svg>  </symbol>
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
export default Invites;