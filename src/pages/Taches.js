import React, { useState, useEffect } from 'react';
function Taches() {
    return (
        <div>
          <span className="ot-sdk-show-settings" style={{display: 'none'}}>Ne pas vendre mes données personnelles</span>
          <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
          <main id="layoutMain">
            <div className="wrapper">
              <form id="app-navigation-form">
                <input type="hidden" name="status" defaultValue={0} />
                <input type="hidden" name="esential" defaultValue={-1} />
                <input type="hidden" name="category" defaultValue={-1} />
                <input type="hidden" name="period" defaultValue={-1} />
              </form>
              <div className="overflow mb0">
                <div className="pure-g">
                  <div className="pure-u-1-4">
                    <h1 className="tools-title">
                      Rétro Planning              </h1>
                  </div>
                  <div className="pure-u-3-4 flex">
                    <div className="content container-progress-bar checklistMainHeaderProgressbar">
                      <p>
                        <strong><span className="app-mobile-checklist-task-counter app-checklist-progressComplete">0</span> tâches sur <span className="app-checklist-progressTotal">101</span></strong> sont réalisées  </p>
                      <div className="tools-boxProgress-progress tools-boxProgress-progressBig mb30 ml0 mr0">
                        <div className="app-checklist-progress" data-complete={0} data-total={101} style={{width: '0%'}} />
                      </div>
                    </div>
                    <div className="flex-left-auto flex">
                      <a href="/tools/ChecklistCSV" className="flex-va-center mt10 app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-checklist+i-download" data-track-v={1} data-track-ni={0}>
                        <i className="svgIcon svgIcon__downloadCircle checklistIconHeader"><svg viewBox="0 0 38 38"><path d="M19.568 29.204a.748.748 0 01-1.116.023l-8.15-8.69a.75.75 0 111.095-1.026l6.853 7.307V8.365a.75.75 0 111.5 0V26.79l6.686-7.272a.75.75 0 111.104 1.015l-7.972 8.672zM37.129 19c0 10.012-8.117 18.13-18.129 18.13S.87 29.011.87 19C.87 8.987 8.988.87 19 .87 29.013.87 37.13 8.988 37.13 19zm-1.5 0C35.63 9.815 28.185 2.37 19 2.37 9.815 2.37 2.37 9.816 2.37 19c0 9.183 7.446 16.63 16.63 16.63S35.63 28.182 35.63 19z" fillRule="nonzero" /></svg></i>                        Télécharger                  </a>
                      <a href="/tools/ChecklistPrint" className="flex-va-center mt10 app-ua-track-event" data-track-c="PlanningToolsAuthed" data-track-a="a-click" data-track-l="d-desktop+s-checklist+i-print" data-track-v={1} data-track-ni={0}>
                        <i className="svgIcon svgIcon__print checklistIconHeader"><svg viewBox="0 0 36 33"><path d="M26.883 6.85H23.1a.75.75 0 01-.75-.75V2.317H9.117v7.566h17.766V6.85zm-1.06-1.5L23.85 3.377V5.35h1.973zM7.617 26.117H3.833A3.023 3.023 0 01.817 23.1V12.9a3.023 3.023 0 013.016-3.017h3.784V1.567a.75.75 0 01.75-.75H23.1a.75.75 0 01.53.22l4.534 4.533c.14.14.22.331.22.53v3.783h3.783a3.023 3.023 0 013.016 3.017v10.2a3.023 3.023 0 01-3.016 3.017h-3.784v6.05a.75.75 0 01-.75.75H8.367a.75.75 0 01-.75-.75v-6.05zm0-1.5v-3.784a.75.75 0 01.75-.75h19.266a.75.75 0 01.75.75v3.784h3.784c.832 0 1.516-.685 1.516-1.517V12.9c0-.832-.684-1.517-1.516-1.517H3.833c-.832 0-1.516.685-1.516 1.517v10.2c0 .832.684 1.517 1.516 1.517h3.784zm1.5-3.034v9.834h17.766v-9.834H9.117zm2.65 3.15a.5.5 0 110-1h12.466a.5.5 0 010 1H11.767zm0 2.267a.5.5 0 110-1h12.466a.5.5 0 110 1H11.767zm0 2.267a.5.5 0 010-1h12.466a.5.5 0 110 1H11.767z" fillRule="nonzero" /></svg></i>                        Imprimer                  </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pure-g">
                <div className="pure-u-1-4">
                  <div className="mr35 app-checklist-ajaxNav">
                    <div className="app-active-filters-wrapper mb30">
                      <p className="tools-filters-title">Votre recherche</p>
                      <ul className="app-active-filters">
                        <li className="tag-filter" data-param="status" data-value={0}>
                          <span>En attente</span>
                          <i className="svgIcon svgIcon__close tag-box-close"><svg viewBox="0 0 26 26"><path d="M12.983 10.862L23.405.439l2.122 2.122-10.423 10.422 10.423 10.422-2.122 2.122-10.422-10.423L2.561 25.527.439 23.405l10.423-10.422L.439 2.561 2.561.439l10.422 10.423z" fillRule="nonzero" /></svg></i>          </li>
                      </ul>
                    </div>
                    <div className="app-filters-status-container">
                      <p className="tools-filters-title">Par état</p>
                      <ul className="tools-filters tools-filters-bullets">
                        <li className="tools-filters-item tools-filters-item-green app-filters-status app-task-filter  dnone" data-value={1} data-param="status" style={{display: 'none'}}>
                          <span className="tools-filters-item-name">Complétées</span>
                          <span className="tools-filters-item-count app-checklist-estado-completadas notablet">0</span>
                        </li>
                        <li className="tools-filters-item tools-filters-item-orange app-filters-status app-task-filter current" data-value={0} data-param="status">
                          <span className="tools-filters-item-name">En attente</span>
                          <span className="tools-filters-item-count app-checklist-estado-pendientes notablet">101</span>
                        </li>
                      </ul>
                    </div>
                    <div className="app-filters-period-container">
                      <p className="tools-filters-title">Par date</p>
                      <ul className="tools-filters tools-filters-bullets tools-filters-lineal">
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={1} data-order data-param="period">
                          <span className="tools-filters-item-name">De 10 à 12 mois</span>
                          <span className="tools-filters-item-count notablet">24</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={2} data-order data-param="period">
                          <span className="tools-filters-item-name">De 7 à 9 mois</span>
                          <span className="tools-filters-item-count notablet">16</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={3} data-order data-param="period">
                          <span className="tools-filters-item-name">De 4 à 6 mois</span>
                          <span className="tools-filters-item-count notablet">18</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={4} data-order data-param="period">
                          <span className="tools-filters-item-name">De 2 à 3 mois</span>
                          <span className="tools-filters-item-count notablet">22</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={5} data-order data-param="period">
                          <span className="tools-filters-item-name">Dernier mois</span>
                          <span className="tools-filters-item-count notablet">8</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={6} data-order data-param="period">
                          <span className="tools-filters-item-name">2 Semaines</span>
                          <span className="tools-filters-item-count notablet">2</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={7} data-order data-param="period">
                          <span className="tools-filters-item-name">Dernière semaine</span>
                          <span className="tools-filters-item-count notablet">5</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={8} data-order data-param="period">
                          <span className="tools-filters-item-name">Dernier jour</span>
                          <span className="tools-filters-item-count notablet">1</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={9} data-order data-param="period">
                          <span className="tools-filters-item-name">Jour du mariage</span>
                          <span className="tools-filters-item-count notablet">1</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-period app-task-filter " data-value={10} data-order data-param="period">
                          <span className="tools-filters-item-name">Après le mariage</span>
                          <span className="tools-filters-item-count notablet">4</span>
                        </li>
                      </ul>
                    </div>
                    <div className="app-filters-category-container">
                      <p className="tools-filters-title">Par catégorie</p>
                      <ul className="tools-filters">
                        <li className="tools-filters-item esential app-tools-scroll-up app-filters-esential app-task-filter " data-value={1} data-param="esential">
                          <span className="tools-filters-item-name">Essentiels</span>
                          <span className="tools-filters-item-count notablet">18</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={13} data-param="category">
                          <span className="tools-filters-item-name">Organisation</span>
                          <span className="tools-filters-item-count notablet">18</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={14} data-param="category">
                          <span className="tools-filters-item-name">Démarches administratives</span>
                          <span className="tools-filters-item-count notablet">3</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={3} data-param="category">
                          <span className="tools-filters-item-name">Cérémonie</span>
                          <span className="tools-filters-item-count notablet">6</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={1} data-param="category">
                          <span className="tools-filters-item-name">Réception</span>
                          <span className="tools-filters-item-count notablet">10</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={12} data-param="category">
                          <span className="tools-filters-item-name">Musique</span>
                          <span className="tools-filters-item-count notablet">4</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={6} data-param="category">
                          <span className="tools-filters-item-name">Invitations</span>
                          <span className="tools-filters-item-count notablet">7</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={19} data-param="category">
                          <span className="tools-filters-item-name">Cadeaux aux invités</span>
                          <span className="tools-filters-item-count notablet">4</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={4} data-param="category">
                          <span className="tools-filters-item-name">Fleurs et Décoration</span>
                          <span className="tools-filters-item-count notablet">6</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={5} data-param="category">
                          <span className="tools-filters-item-name">Photo et Vidéo</span>
                          <span className="tools-filters-item-count notablet">4</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={15} data-param="category">
                          <span className="tools-filters-item-name">Transports</span>
                          <span className="tools-filters-item-count notablet">3</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={8} data-param="category">
                          <span className="tools-filters-item-name">Bijoux</span>
                          <span className="tools-filters-item-count notablet">3</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={16} data-param="category">
                          <span className="tools-filters-item-name">Mariée et Accessoires</span>
                          <span className="tools-filters-item-count notablet">11</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={20} data-param="category">
                          <span className="tools-filters-item-name">Marié et Accessoires</span>
                          <span className="tools-filters-item-count notablet">4</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={2} data-param="category">
                          <span className="tools-filters-item-name">Beauté et Bien-Être</span>
                          <span className="tools-filters-item-count notablet">6</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={11} data-param="category">
                          <span className="tools-filters-item-name">Lune de Miel</span>
                          <span className="tools-filters-item-count notablet">6</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter  dnone" data-value={9} data-param="category" style={{display: 'none'}}>
                          <span className="tools-filters-item-name">Liste de mariage</span>
                          <span className="tools-filters-item-count notablet">0</span>
                        </li>
                        <li className="tools-filters-item app-tools-scroll-up app-filters-category app-task-filter " data-value={18} data-param="category">
                          <span className="tools-filters-item-name">Autres</span>
                          <span className="tools-filters-item-count notablet">6</span>
                        </li>
                      </ul>
                    </div>
                    <div id="div-gpt-ad-1334158298810-0" className="dfp-center" style={{minHeight: '295px'}}><div id="google_ads_iframe_/4879/Planningtools.n_FR/Desktop/checklist/leftrail_0__container__" style={{border: '0pt none', width: '180px', height: '0px'}} /></div>
                  </div>
                </div>
                <div className="pure-u-3-4 mt20">
                  <div className="checklist-boxNew app-newTask">
                    <i className="icon-tools icon-tools-plus-circle-outline-big mr15" />
                    Créer une nouvelle tâche...</div>
                  <div className="app-checklist-container checklist-container">
                    <div className="app-task-item-section checklist-section" data-section={1} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        De 10 à 12 mois  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Septembre 2022                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li>
                        </li>
                        <li data-id={701} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={701} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={701}>
                            <p className="checklist-tasks-item-title">C'est décidé on se marie ! Mais par où commencer ? 💍</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={700} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={700} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={700}>
                            <p className="checklist-tasks-item-title">Première étape : télécharger l'appli ! 📱</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/app-download.php" className="app-task-list-link-anchor app-link link--primary">Télécharger l'appli Mariages.net</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={699} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={699} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={699}>
                            <p className="checklist-tasks-item-title">Choisir la date 🗓️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={698} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={698} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={698}>
                            <p className="checklist-tasks-item-title">Organiser soi-même ou faire appel à un wedding planner ?</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/organisation-mariage" className="app-task-list-link-anchor app-link link--primary">Voir wedding planners</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={697} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={697} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={697}>
                            <p className="checklist-tasks-item-title">Qui allons-nous inviter ? 💌</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Guests" className="app-task-list-link-anchor app-link link--primary">Etablir la liste d'invités</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={696} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={696} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={696}>
                            <p className="checklist-tasks-item-title">Fusionner les comptes de Mariages.net</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={695} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={695} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={695}>
                            <p className="checklist-tasks-item-title">Annoncer le mariage 📣</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={694} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={694} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={694}>
                            <p className="checklist-tasks-item-title">Combien allons-nous dépenser ? 💰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Budget" className="app-task-list-link-anchor app-link link--primary">Accéder à l'outil Gestion du Budget de Mariages.net</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={693} data-category={3} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={693} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={693}>
                            <p className="checklist-tasks-item-title">Choisir le lieu de la cérémonie 🏰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={692} data-category={3} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={692} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={692}>
                            <p className="checklist-tasks-item-title">Confirmer le jour et l'heure de la cérémonie</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={691} data-category={3} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={691} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={691}>
                            <p className="checklist-tasks-item-title">Trouver l'officiant de cérémonie</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={690} data-category={1} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={690} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={690}>
                            <p className="checklist-tasks-item-title">Prospecter les lieux de réception 🔎</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">2 304€</span>
                              </span>
                              <a data-href="/reception" className="app-task-list-link-anchor app-link link--primary">Rechercher lieu de réception</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={689} data-category={1} data-period={1} data-status={0} data-esential={1} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={689} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={689}>
                            <p className="checklist-tasks-item-title">Réserver le lieu de réception 🍽️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">2 304€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={688} data-category={1} data-period={1} data-status={0} data-esential={1} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={688} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={27} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={688}>
                            <p className="checklist-tasks-item-title">Réserver le traiteur 🍢</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">3 232€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={687} data-category={1} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={687} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={687}>
                            <p className="checklist-tasks-item-title">Où vont s'asseoir les invités ? 👪</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Tables" className="app-task-list-link-anchor app-link link--primary">Accéder au Plan de Tables</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={686} data-category={5} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={686} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={21} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={686}>
                            <p className="checklist-tasks-item-title">C'est le moment de choisir photographe ! 📷</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Photo et Vidéo          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">608€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={685} data-category={12} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={685} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={17} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={685}>
                            <p className="checklist-tasks-item-title">Comment trouver la musique parfaite pour la cérémonie ? 🎻</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Musique          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/musique-mariage" className="app-task-list-link-anchor app-link link--primary">Voir musique pour la cérémonie</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={684} data-category={12} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={684} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={17} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={684}>
                            <p className="checklist-tasks-item-title">Choisir la musique pour la réception 💿</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Musique          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/musique-mariage" className="app-task-list-link-anchor app-link link--primary">Voir musique pour la soirée dansante</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={683} data-category={1} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={683} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={683}>
                            <p className="checklist-tasks-item-title">Trouver des animations amusantes pour les invités 🎉</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/animation-mariage" className="app-task-list-link-anchor app-link link--primary">Voir prestataires pour l'animation du mariage</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={682} data-category={13} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={682} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={682}>
                            <p className="checklist-tasks-item-title">Faciliter la venue aux invités qui viennent de loin 🏨</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/hotel-mariage" className="app-task-list-link-anchor app-link link--primary">Rechercher hôtel pour les invités</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={681} data-category={5} data-period={1} data-status={0} data-esential={1} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={681} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={21} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={681}>
                            <p className="checklist-tasks-item-title">Engager photographe 📷</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Photo et Vidéo          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">608€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={680} data-category={12} data-period={1} data-status={0} data-esential={1} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={680} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={17} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={680}>
                            <p className="checklist-tasks-item-title">Engager les prestataires pour l'ensemble de l'animation musicale 🎷</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Musique          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={679} data-category={6} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={679} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={679}>
                            <p className="checklist-tasks-item-title">Commander les Save the Date</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={678} data-category={11} data-period={1} data-status={0} data-esential={0} data-order={20220904} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={678} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={678}>
                            <p className="checklist-tasks-item-title">Commencer à chercher une destination pour la lune de miel 🏖️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/lune-miel" className="app-task-list-link-anchor app-link link--primary">Voir les destinations</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={2} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        De 7 à 9 mois  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Décembre 2022                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={677} data-category={16} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={677} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={677}>
                            <p className="checklist-tasks-item-title">Commencer à regarder les robes de mariée 👰🏻</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                              <a data-href="/robes-mariee" className="app-task-list-link-anchor app-link link--primary">Accéder au catalogue de robes de mariée</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={676} data-category={13} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={676} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={676}>
                            <p className="checklist-tasks-item-title">Annoncer le mariage au travail 📣</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={675} data-category={14} data-period={2} data-status={0} data-esential={1} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={675} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={675}>
                            <p className="checklist-tasks-item-title">Retirer le dossier pour le mariage civil</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Démarches administratives          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={674} data-category={14} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={674} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={674}>
                            <p className="checklist-tasks-item-title">Régime matrimonial. Lequel choisir ?</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Démarches administratives          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={673} data-category={14} data-period={2} data-status={0} data-esential={1} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={673} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={673}>
                            <p className="checklist-tasks-item-title">Préparer les documents nécessaires à la cérémonie religieuse</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Démarches administratives          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={672} data-category={4} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={672} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={20} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={672}>
                            <p className="checklist-tasks-item-title">Choisir le fleuriste pour la décoration 🌸🌼</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">80€</span>
                              </span>
                              <a data-href="/fleurs-mariage" className="app-task-list-link-anchor app-link link--primary">Rechercher fleuristes</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={671} data-category={19} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={671} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={19} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={671}>
                            <p className="checklist-tasks-item-title">Envie d'une décoration fait-maison ? Pensez aux DIY !</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cadeaux aux invités          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={670} data-category={4} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={670} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={20} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={670}>
                            <p className="checklist-tasks-item-title">Réfléchir au style de bouquet 💐</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">64€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={669} data-category={8} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={669} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={29} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={669}>
                            <p className="checklist-tasks-item-title">Regarder les alliances ! 💍</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Bijoux          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">480€</span>
                              </span>
                              <a data-href="/cat-DressList.php?type=7&complementType=2" className="app-task-list-link-anchor app-link link--primary">Voir alliances</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={668} data-category={16} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={668} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={668}>
                            <p className="checklist-tasks-item-title">Premiers essayages de robes de mariée 👰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                              <a data-href="/robe-de-mariee" className="app-task-list-link-anchor app-link link--primary">Voir boutiques de robes de mariée</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={667} data-category={16} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={667} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={667}>
                            <p className="checklist-tasks-item-title">Louer ou acheter la robe de mariée ?</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={666} data-category={6} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={666} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={666}>
                            <p className="checklist-tasks-item-title">Envoyer le Save the Date</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/InvitationsAdd" className="app-task-list-link-anchor app-link link--primary">Envoyer faire-part en ligne</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={665} data-category={13} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={665} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={665}>
                            <p className="checklist-tasks-item-title">Faire le point sur l'avancée des préparatifs</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={664} data-category={16} data-period={2} data-status={0} data-esential={1} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={664} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={664}>
                            <p className="checklist-tasks-item-title">Commander la robe de mariée 👰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={663} data-category={16} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={663} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={663}>
                            <p className="checklist-tasks-item-title">Essayages de la robe de mariée</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={662} data-category={11} data-period={2} data-status={0} data-esential={0} data-order={20221203} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={662} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={662}>
                            <p className="checklist-tasks-item-title">Prospecter les agences de voyages pour la lune de miel ✈️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">2 000€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={3} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        De 4 à 6 mois  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Mars 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={661} data-category={6} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={661} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={661}>
                            <p className="checklist-tasks-item-title">Choisissez vos faire-part ! 💌</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">208€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={660} data-category={13} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={660} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={660}>
                            <p className="checklist-tasks-item-title">Choix des témoins, demoiselles et garçons d'honneur</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={659} data-category={4} data-period={3} data-status={0} data-esential={1} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={659} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={20} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={659}>
                            <p className="checklist-tasks-item-title">Réserver les fleurs et la décoration 🌼</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">128€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={657} data-category={11} data-period={3} data-status={0} data-esential={1} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={657} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={657}>
                            <p className="checklist-tasks-item-title">Réserver la lune de miel ✈️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">2 000€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={656} data-category={11} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={656} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={656}>
                            <p className="checklist-tasks-item-title">S'informer sur les formalités et préparer les documents nécessaires pour partir en lune de miel</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">2 000€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={655} data-category={6} data-period={3} data-status={0} data-esential={1} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={655} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={655}>
                            <p className="checklist-tasks-item-title">Commander les faire-part</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={654} data-category={6} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={654} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={654}>
                            <p className="checklist-tasks-item-title">Revoir la liste des invités et confirmer leurs adresses !</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/GuestsRequestAddress" className="app-task-list-link-anchor app-link link--primary">Accéder à la liste des invités</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={653} data-category={15} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={653} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={22} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={653}>
                            <p className="checklist-tasks-item-title">Rechercher la voiture des mariés 🚘</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Transports          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">336€</span>
                              </span>
                              <a data-href="/voiture-mariage" className="app-task-list-link-anchor app-link link--primary">Voir voitures de mariage</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={652} data-category={15} data-period={3} data-status={0} data-esential={1} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={652} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={159} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={652}>
                            <p className="checklist-tasks-item-title">Prévoir le transport des invités 🚌</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Transports          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">315€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={651} data-category={2} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={651} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={651}>
                            <p className="checklist-tasks-item-title">Quelle coiffure de mariée choisir ? 👱‍♀️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={650} data-category={6} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={650} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={650}>
                            <p className="checklist-tasks-item-title">Récupérer et envoyer les faire-part 📫</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/InvitationsAdd" className="app-task-list-link-anchor app-link link--primary">Accéder à l'outil Liste des Invités</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={649} data-category={20} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={649} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={24} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={649}>
                            <p className="checklist-tasks-item-title">Rechercher le costume du marié</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Marié et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/costumes-marie" className="app-task-list-link-anchor app-link link--primary">Voir costumes pour le marié</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={648} data-category={18} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={648} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={648}>
                            <p className="checklist-tasks-item-title">Organiser la fête des fiançailles</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={647} data-category={20} data-period={3} data-status={0} data-esential={1} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={647} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={24} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={647}>
                            <p className="checklist-tasks-item-title">Commander le costume du marié 🤵</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Marié et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={646} data-category={20} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={646} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={24} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={646}>
                            <p className="checklist-tasks-item-title">Choisir les accessoires du marié 👞</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Marié et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/accessoires-marie" className="app-task-list-link-anchor app-link link--primary">Voir boutiques pour les accessoires</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={645} data-category={18} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={645} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={645}>
                            <p className="checklist-tasks-item-title">Créer votre site de mariage 📱💻</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/website/index.php?actionReferrer=220" className="app-task-list-link-anchor app-link link--primary">Créer votre site de mariage personnalisé</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={644} data-category={1} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={644} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={644}>
                            <p className="checklist-tasks-item-title">Choisir le menu 🍽</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">3 232€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={643} data-category={1} data-period={3} data-status={0} data-esential={0} data-order={20230303} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={643} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={643}>
                            <p className="checklist-tasks-item-title">Commander la pièce-montée 🍰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/wedding-cake" className="app-task-list-link-anchor app-link link--primary">Voir pâtissiers</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={4} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        De 2 à 3 mois  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Mai 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={642} data-category={16} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={642} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={642}>
                            <p className="checklist-tasks-item-title">Choisir les accessoires de la mariée 👛</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={641} data-category={16} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={641} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={641}>
                            <p className="checklist-tasks-item-title">Choisir les chaussures de la mariée 👠</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">112€</span>
                              </span>
                              <a data-href="/cat-DressList.php?tipo=8&Disenador=0&Temporada=0&Corte=0&Escote=0&Largo=0&Estilo=0&TipoComp=0&categoria=1&manga=0&Coleccion=0" className="app-task-list-link-anchor app-link link--primary">Voir chaussures de mariée</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={640} data-category={16} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={640} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={640}>
                            <p className="checklist-tasks-item-title">Acheter la lingerie 👙</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">64€</span>
                              </span>
                              <a data-href="/lingeries" className="app-task-list-link-anchor app-link link--primary">Voir lingerie pour la mariée</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={639} data-category={16} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={639} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={639}>
                            <p className="checklist-tasks-item-title">Voile ou autre accessoire pour cheveux 👑</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={638} data-category={8} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={638} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={29} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={638}>
                            <p className="checklist-tasks-item-title">Commander les alliances et choisir la gravure</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Bijoux          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">480€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={637} data-category={4} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={637} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={637}>
                            <p className="checklist-tasks-item-title">Choisir la décoration et les animations pour la fête</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={636} data-category={19} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={636} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={19} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={636}>
                            <p className="checklist-tasks-item-title">Choisir les cadeaux pour les invités</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cadeaux aux invités          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">272€</span>
                              </span>
                              <a data-href="/cadeaux-invites-mariage" className="app-task-list-link-anchor app-link link--primary">Voir boutiques accessoires de mariage</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={635} data-category={19} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={635} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={19} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={635}>
                            <p className="checklist-tasks-item-title">Rechercher des cadeaux pour les invités de marque 👵👴🏻</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cadeaux aux invités          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">272€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={634} data-category={15} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={634} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={159} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={634}>
                            <p className="checklist-tasks-item-title">Réserver la voiture des mariés 🚘</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Transports          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={633} data-category={18} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={633} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={633}>
                            <p className="checklist-tasks-item-title">Réserver l'hôtel pour la nuit de noces 🏩</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/hotel-mariage" className="app-task-list-link-anchor app-link link--primary">Réserver l'hôtel pour la nuit de noces</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={632} data-category={2} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={632} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={28} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={632}>
                            <p className="checklist-tasks-item-title">Prospecter les instituts de beauté et salons de coiffure💄</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">112€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={631} data-category={13} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={631} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={631}>
                            <p className="checklist-tasks-item-title">Tenues des témoins, demoiselles et garçons d'honneur 👗🎩</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/robes-soiree" className="app-task-list-link-anchor app-link link--primary">Voir robes pour demoiselles d'honneur</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={630} data-category={19} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={630} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={19} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={630}>
                            <p className="checklist-tasks-item-title">Commander les cadeaux pour les invités</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cadeaux aux invités          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">272€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={629} data-category={2} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={629} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={28} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={629}>
                            <p className="checklist-tasks-item-title">Prendre rendez-vous pour les essais coiffure et maquillage 📞</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">64€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={628} data-category={1} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={628} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={628}>
                            <p className="checklist-tasks-item-title">Choix définitif du menu</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Menus" className="app-task-list-link-anchor app-link link--primary">Voir mes menus</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={627} data-category={18} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={627} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={627}>
                            <p className="checklist-tasks-item-title">Enterrement de vie de célibataire 🎉</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={626} data-category={3} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={626} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={626}>
                            <p className="checklist-tasks-item-title">Définir le programme de la cérémonie 📔</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={625} data-category={3} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={625} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={625}>
                            <p className="checklist-tasks-item-title">Choix des textes pour la cérémonie 📖</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={624} data-category={3} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={624} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={624}>
                            <p className="checklist-tasks-item-title">Informer les participants à la cérémonie de leur rôle</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Cérémonie          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={623} data-category={4} data-period={4} data-status={0} data-esential={1} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item esential " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={623} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={1} data-category={20} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={623}>
                            <p className="checklist-tasks-item-title">Commander le bouquet de marié 💐</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag esential">Essentiel</span>
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">64€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={622} data-category={8} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={622} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={29} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={622}>
                            <p className="checklist-tasks-item-title">Récupérer les alliances</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Bijoux          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">480€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={621} data-category={12} data-period={4} data-status={0} data-esential={0} data-order={20230502} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={621} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={17} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={621}>
                            <p className="checklist-tasks-item-title">Quelle musique pour l'ouverture de bal et la suite de la soirée 🎶 </p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Musique          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={5} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        Dernier mois  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Juin 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={620} data-category={13} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={620} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={620}>
                            <p className="checklist-tasks-item-title">Liste définitive des invités</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Guests" className="app-task-list-link-anchor app-link link--primary">Accéder à l'outil Liste des Invités</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={619} data-category={1} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={619} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={619}>
                            <p className="checklist-tasks-item-title">Plan de table définitif</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Tables" className="app-task-list-link-anchor app-link link--primary">Accéder à l'outil Plan de Tables</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={618} data-category={1} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={618} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={16} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={618}>
                            <p className="checklist-tasks-item-title">Transmettre le plan de table aux responsables du lieu de réception</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Réception          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={617} data-category={13} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={617} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={617}>
                            <p className="checklist-tasks-item-title">Dernières indications aux invités</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={616} data-category={16} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={616} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={23} data-vendors-booked={0} data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={616}>
                            <p className="checklist-tasks-item-title">Dernier essayage de la robe 👰</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">1 088€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={615} data-category={20} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={615} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={24} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={615}>
                            <p className="checklist-tasks-item-title">Dernier essayage du costume du marié 🤵</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Marié et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container ">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">480€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={614} data-category={5} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={614} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={21} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={614}>
                            <p className="checklist-tasks-item-title">Créer votre album de mariage grâce à Wedshoots 📱</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Photo et Vidéo          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/album-mariage-wedshoots" className="app-task-list-link-anchor app-link link--primary">Télécharger Wedshoots</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={613} data-category={11} data-period={5} data-status={0} data-esential={0} data-order={20230601} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={613} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={613}>
                            <p className="checklist-tasks-item-title">Vérifier les documents nécessaires pour partir en lune de miel</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={6} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        2 Semaines  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Juin 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={612} data-category={2} data-period={6} data-status={0} data-esential={0} data-order={20230617} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={612} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={612}>
                            <p className="checklist-tasks-item-title">Prendre rendez-vous chez le coiffeur pour le futur marié 💇‍♂️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/soins-beaute" className="app-task-list-link-anchor app-link link--primary">Voir salons de coiffure pour le marié</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={611} data-category={2} data-period={6} data-status={0} data-esential={0} data-order={20230617} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={611} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={611}>
                            <p className="checklist-tasks-item-title">Prendre rendez-vous à l'institut de beauté 💅</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/esthetique-coiffure-mariage" className="app-task-list-link-anchor app-link link--primary">Voir salons de beauté</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={7} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        Dernière semaine  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Juin 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={610} data-category={16} data-period={7} data-status={0} data-esential={0} data-order={20230624} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={610} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={610}>
                            <p className="checklist-tasks-item-title">Récupérer la robe de mariée et le costume</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Mariée et Accessoires          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={609} data-category={13} data-period={7} data-status={0} data-esential={0} data-order={20230624} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={609} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={609}>
                            <p className="checklist-tasks-item-title">Liste des invités : changements de dernière minute 🤞</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Guests" className="app-task-list-link-anchor app-link link--primary">Accéder à l'outil Plan de Tables</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={608} data-category={13} data-period={7} data-status={0} data-esential={0} data-order={20230624} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={608} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={608}>
                            <p className="checklist-tasks-item-title">Vérifier que tout est sous contrôle</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={607} data-category={11} data-period={7} data-status={0} data-esential={0} data-order={20230624} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={607} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={25} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={607}>
                            <p className="checklist-tasks-item-title">Préparer la valise pour la nuit de noces et le kit de survie</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Lune de Miel          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={606} data-category={13} data-period={7} data-status={0} data-esential={0} data-order={20230624} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={606} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={606}>
                            <p className="checklist-tasks-item-title">Transmettre le manuel d'utilisation de Wedshoots aux invités</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Organisation          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={8} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        Dernier jour  </span>
                      <span className="tools-subtitleInner fright">
                        Avant Juin 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={605} data-category={2} data-period={8} data-status={0} data-esential={0} data-order={20230630} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={605} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={605}>
                            <p className="checklist-tasks-item-title">Se reposer et profiter ! 💆</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Beauté et Bien-Être          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={9} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        Jour du mariage  </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={604} data-category={4} data-period={9} data-status={0} data-esential={0} data-order={20230701} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={604} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={604}>
                            <p className="checklist-tasks-item-title">Récupérer le bouquet de la mariée</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Fleurs et Décoration          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                    <div className="app-task-item-section checklist-section" data-section={10} data-order data-order-completed={10} style={{}}>
                      <span className="tools-subtitle">
                        Après le mariage  </span>
                      <span className="tools-subtitleInner fright">
                        Après Juillet 2023                          </span>
                      <ul className="checklist-tasks app-tasks-list-container mt10">
                        <li data-id={603} data-category={5} data-period={10} data-status={0} data-esential={0} data-order={20230702} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={603} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={21} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={603}>
                            <p className="checklist-tasks-item-title">Télécharger l'album de Wedshoots</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Photo et Vidéo          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={602} data-category={18} data-period={10} data-status={0} data-esential={0} data-order={20230702} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={602} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={602}>
                            <p className="checklist-tasks-item-title">Recommander les prestataires de votre mariage ⭐</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/tools/Recomendacion" className="app-task-list-link-anchor app-link link--primary">Recommander vos prestataires</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={601} data-category={18} data-period={10} data-status={0} data-esential={0} data-order={20230702} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={601} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={601}>
                            <p className="checklist-tasks-item-title">Publier votre reportage de mariage 📸</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Autres          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                              <a data-href="/reportages-mariage/rediger" className="app-task-list-link-anchor app-link link--primary">Publier votre reportage photos de mariage</a>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                        <li data-id={600} data-category={6} data-period={10} data-status={0} data-esential={0} data-order={20230702} data-edit-mode={0} className="app-navTask app-task-item app-task-item-list checklist-tasks-item  " style={{}}>
                          <div className="checklist-tasks-item-checkBox">
                            <a className="app-checklist-checkbox" role="button" data-id={600} data-check="icon-tools-checkbox-green" data-uncheck="icon-tools-checkbox-grey" data-status={0} data-essential={0} data-category={18} data-vendors-booked data-show-vendors={1} data-section="checklist">
                              <i className="icon-tools icon-tools-checkbox-grey" />
                            </a>
                          </div>
                          <div className="checklist-tasks-item-description app-task-edit pointer" data-id={600}>
                            <p className="checklist-tasks-item-title">Préparer les cartons de remerciements ou une vidéo à envoyer aux invités ✍️</p>
                            <div className="checklist-tasks-item-information">
                              <span className="checklist-tasks-item-tag task-category-highlight app-task-category">
                                Invitations          </span>
                              <span className="checklist-tasks-item-tag app-task-budget-list-container dnone">
                                <i className="icon icon-price" />
                                <span className="app-task-budget-list-number">0€</span>
                              </span>
                            </div>
                          </div>
                          <a className="btn-outline outline-transparent checklist-tasks-item-remove app-checklist-remove app-icon-hover" role="button" data-type={0}>
                            <i className="icon-tools icon-tools-trash-grey" />
                          </a>
                          <div className="app-task-vendor-content">
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="app-checklist-noResult" style={{display: 'none'}}>
                    <div className="checklist-noResult">
                      <i className="icon-tools icon-tools-checklist-noResult" />
                      <p className="checklist-noResult-description">Aucune tâche trouvée.</p>
                      <a className="btn-outline outline-red app-newTask" role="button">
                        Ajouter une tâche      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="taskLayer app-checklist-layer-task dnone">
                <div className="taskLayer__droplayer app-checklist-layer-task-close" />
                <div className="taskLayer__content app-checklist-layer-task-content">
                  <div className="app-checklist-container-auxiliar" />
                  <div className="taskLayer__container app-checklist-container-edit" />
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
                          <div className="chat__timestamp">13:10</div>
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
          <iframe src="https://401f36ae2e839219478e16c399038c34.safeframe.googlesyndication.com/safeframe/1-0-38/html/container.html" style={{visibility: 'hidden', display: 'none'}} />
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
              s-17-7.626-17-17S14.61,6,23.984,6z" /></svg></div><div className="ot-fltr-cntr"><button id="filter-btn-handler" aria-label="Filter" aria-haspopup="true"><svg role="presentation" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 402.577 402.577" xmlSpace="preserve"><title>Filter Icon</title><g><path fill="#fff" d="M400.858,11.427c-3.241-7.421-8.85-11.132-16.854-11.136H18.564c-7.993,0-13.61,3.715-16.846,11.136 c-3.234,7.801-1.903,14.467,3.999,19.985l140.757,140.753v138.755c0,4.955,1.809,9.232,5.424,12.854l73.085,73.083c3.429,3.614,7.71,5.428,12.851,5.428c2.282,0,4.66-0.479,7.135-1.43c7.426-3.238,11.14-8.851,11.14-16.845V172.166L396.861,31.413
        C402.765,25.895,404.093,19.231,400.858,11.427z" /></g></svg></button></div><div id="ot-anchor" /><section id="ot-fltr-modal"><div id="ot-fltr-cnt"><button id="clear-filters-handler">Clear</button><div className="ot-fltr-scrlcnt ot-pc-scrollbar"><div className="ot-fltr-opts"><div className="ot-fltr-opt"><div className="ot-chkbox"><input id="chkbox-id" type="checkbox" aria-checked="false" className="category-filter-handler" /> <label htmlFor="chkbox-id"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div><div className="ot-fltr-btns"><button id="filter-apply-handler">Apply</button> <button id="filter-cancel-handler">Cancel</button></div></div></div></section></div></div><section id="ot-lst-cnt" className="ot-host-cnt ot-pc-scrollbar"><div id="ot-sel-blk"><div className="ot-sel-all"><div className="ot-sel-all-hdr"><span className="ot-consent-hdr">Consent</span> <span className="ot-li-hdr">Leg.Interest</span></div><div className="ot-sel-all-chkbox"><div className="ot-chkbox" id="ot-selall-hostcntr"><input id="select-all-hosts-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-hosts-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-vencntr"><input id="select-all-vendor-groups-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-groups-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div><div className="ot-chkbox" id="ot-selall-licntr"><input id="select-all-vendor-leg-handler" type="checkbox" aria-checked="false" /> <label htmlFor="select-all-vendor-leg-handler"><span className="ot-label-txt">checkbox label</span></label> <span className="ot-label-status">label</span></div></div></div></div><div className="ot-sdk-row"><div className="ot-sdk-column" /></div></section></section><div className="ot-pc-footer"><div className="ot-btn-container"> <button className="save-preference-btn-handler onetrust-close-btn-handler">Confirmer la sélection</button></div>{/* Footer logo */}<div className="ot-pc-footer-logo"><a href="https://www.onetrust.com/products/cookie-consent/" target="_blank" rel="noopener noreferrer" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/static/poweredBy_ot_logo.svg")'}} aria-label="Powered by OneTrust S'ouvre dans un nouvel onglet" /></div></div>{/* Cookie subgroup container */}{/* Vendor list link */}{/* Cookie lost link */}{/* Toggle HTML element */}{/* Checkbox HTML */}{/* plus minus*/}{/* Arrow SVG element */}{/* Accordion basic element */}<span className="ot-scrn-rdr" aria-atomic="true" aria-live="polite" /><iframe className="ot-text-resize" title="onetrust-text-resize" style={{position: 'absolute', top: '-50000px', width: '100em'}} aria-hidden="true" /></div></div>
        </div>
      );
 }
 
  export default Taches;