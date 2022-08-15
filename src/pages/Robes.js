import React, { useState, useEffect } from 'react';



export default function Robes() {
    return (
   
                <div>
                  <div id="app-apps-download-banner" className="branch-banner-placeholder branchBannerPlaceholder" />
                  <a className="layoutSkipMain" href="#layoutMain">Aller au contenu principal</a>
                  
                  <main id="layoutMain" className="layoutMain">
                    <article className="home">
                      <style dangerouslySetInnerHTML={{__html: "\n.homeHeading__background:before { background-image: url(https://cdn0.mariages.net/home/31/original/1400/jpg/fotoHome_631.webp);}\n" }} />
                      <header className="app-heading homeHeading">
                        <div className="homeHeading__background">
                          <span className="homeHeading__imageAuthor">Vardden</span>
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
                            <img className="svgIcon svgIcon__envelope homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/envelope.svg" aria-hidden alt="illustration envelope" width={56} height={56}  />                
                            <a href="https://faire-part.mariages.net" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-wedding_paper" data-track-v={0} data-track-ni={0}>
                              Faire-part              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__websites homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/websites.svg" aria-hidden alt="illustration websites" width={56} height={56} />          
                                  <a href="https://www.mariages.net/site-web-mariage" className="homeToolsCards__cardLink app-tool-cards-tile-link app-tool-tracking" data-track-c="Navigation" data-track-a="a-click" data-track-l="d-desktop+s-dashboard_icon+o-home+dt-WWS" data-track-v={0} data-track-ni={0}>
                              Site de mariage              </a>
                          </div>
                          <div className="homeToolsCards__cardItem app-tool-cards-tile">
                            <img className="svgIcon svgIcon__notebook homeToolsCards__icon" src="https://cdn1.mariages.net/assets/svg/original/illustration/notebook.svg" aria-hidden alt="illustration notebook" width={56} height={56} />               
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
                        <div className="homeFeaturedVendors__sliderContainer app-choice-awards-slider app-choice-awards-ajax" data-id-vendors="125139,196197,194721,122739,177661,139004,126649,182847,155586">
                          <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev" aria-disabled="false"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container homeChoiceAwards__slider" dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={0} data-visualized-slide="false" aria-hidden="true">
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
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/les-collines-iduki--e18831" tabIndex={-1}>Les Collines Iduki</a>
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
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={2} data-overall-position={2} data-vendor-id={134158} data-storefront-id={175292} data-ec-name="DML Traiteur" data-cliente={1} data-id-directory-score={22246223} data-vendor-info="{&quot;vendorId&quot;:134158,&quot;price&quot;:&quot;45.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Poey-de-Lescar&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;3, rue Principale&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64230&quot;}}" id="vendorTile134158" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/4158/3_2/320/jpg/1497_3_134158.webp 320w,
          https://cdn0.mariages.net/vendor/4158/3_2/640/jpg/1497_3_134158.webp 640w,
          https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.webp 960w,
          https://cdn0.mariages.net/vendor/4158/3_2/1280/jpg/1497_3_134158.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/4158/3_2/320/jpg/1497_3_134158.jpeg 320w,
          https://cdn0.mariages.net/vendor/4158/3_2/640/jpg/1497_3_134158.jpeg 640w,
          https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.jpeg 960w,
          https://cdn0.mariages.net/vendor/4158/3_2/1280/jpg/1497_3_134158.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4158/3_2/960/jpg/1497_3_134158.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="DML Traiteur" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={134158} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/dml-traiteur--e134158">DML Traiteur</a>
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
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={2} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={3} data-overall-position={3} data-vendor-id={153426} data-storefront-id={196830} data-ec-name="Pascal Discomobile" data-cliente={1} data-id-directory-score={22238614} data-vendor-info="{&quot;vendorId&quot;:153426,&quot;price&quot;:&quot;890.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;12, Rue Alfred Leblanc&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile153426" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/3426/3_2/320/jpg/p1010323_3_153426-1562091959.webp 320w,
          https://cdn0.mariages.net/vendor/3426/3_2/640/jpg/p1010323_3_153426-1562091959.webp 640w,
          https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.webp 960w,
          https://cdn0.mariages.net/vendor/3426/3_2/1280/jpg/p1010323_3_153426-1562091959.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/3426/3_2/320/jpg/p1010323_3_153426-1562091959.jpeg 320w,
          https://cdn0.mariages.net/vendor/3426/3_2/640/jpg/p1010323_3_153426-1562091959.jpeg 640w,
          https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.jpeg 960w,
          https://cdn0.mariages.net/vendor/3426/3_2/1280/jpg/p1010323_3_153426-1562091959.jpeg 1280w" src="https://cdn0.mariages.net/vendor/3426/3_2/960/jpg/p1010323_3_153426-1562091959.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Pascal Discomobile" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={153426} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/pascal-discomobile--e153426">Pascal Discomobile</a>
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
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeChoiceAwards__sliderItem" data-id={3} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={4} data-overall-position={4} data-vendor-id={190837} data-storefront-id={242877} data-ec-name="La cuisine de Lucien" data-cliente={1} data-id-directory-score={22246593} data-vendor-info="{&quot;vendorId&quot;:190837,&quot;price&quot;:&quot;50.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Orthez&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;347, chemin de Bellegarde&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64300&quot;}}" id="vendorTile190837" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/0837/3_2/320/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 320w,
          https://cdn0.mariages.net/vendor/0837/3_2/640/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 640w,
          https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 960w,
          https://cdn0.mariages.net/vendor/0837/3_2/1280/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg 1280w" src="https://cdn0.mariages.net/vendor/0837/3_2/960/jpg/36971824-620264105026100-5557428952194088960-n-2_3_190837-1562832677.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="La cuisine de Lucien" width={640} height={427} />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={190837} data-id-sector={27} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/traiteur-mariage/la-cuisine-de-lucien--e190837">La cuisine de Lucien</a>
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
                              </li>            <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={4} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={5} data-overall-position={5} data-vendor-id={125139} data-storefront-id={165527} data-ec-name="Music’Univers" data-cliente={1} data-id-directory-score={22236778} data-vendor-info="{&quot;vendorId&quot;:125139,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Lasseube&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Rue de l'\u00c9glise&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64290&quot;}}" id="vendorTile125139" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.webp 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.webp 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.webp 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.webp 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.webp 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.webp 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.jpeg 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.jpeg 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Music’Univers" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/5139/3_2/320/jpg/c0144-00-00-27-26h_3_125139.jpeg 320w,
          https://cdn0.mariages.net/vendor/5139/3_2/640/jpg/c0144-00-00-27-26h_3_125139.jpeg 640w,
          https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg 960w,
          https://cdn0.mariages.net/vendor/5139/3_2/1280/jpg/c0144-00-00-27-26h_3_125139.jpeg 1280w" src="https://cdn0.mariages.net/vendor/5139/3_2/960/jpg/c0144-00-00-27-26h_3_125139.jpeg" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={5} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={6} data-overall-position={6} data-vendor-id={196197} data-storefront-id={249313} data-ec-name="Christophe Simon" data-cliente={1} data-id-directory-score={22246618} data-vendor-info="{&quot;vendorId&quot;:196197,&quot;price&quot;:&quot;40.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arthez-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Chemin Dous Milhoucas&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64370&quot;}}" id="vendorTile196197" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.webp 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.webp 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.webp 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.webp 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.webp 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.webp 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.jpeg 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.jpeg 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Christophe Simon" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/6197/3_2/320/jpg/img-0156-1_3_196197-158023873528798.jpeg 320w,
          https://cdn0.mariages.net/vendor/6197/3_2/640/jpg/img-0156-1_3_196197-158023873528798.jpeg 640w,
          https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg 960w,
          https://cdn0.mariages.net/vendor/6197/3_2/1280/jpg/img-0156-1_3_196197-158023873528798.jpeg 1280w" src="https://cdn0.mariages.net/vendor/6197/3_2/960/jpg/img-0156-1_3_196197-158023873528798.jpeg" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={6} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={7} data-overall-position={7} data-vendor-id={194721} data-storefront-id={247509} data-ec-name="Olivier Peyre" data-cliente={1} data-id-directory-score={22240566} data-vendor-info="{&quot;vendorId&quot;:194721,&quot;price&quot;:&quot;1,090.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Urcuit&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Photo mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;403, Chemin Mendy&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64990&quot;}}" id="vendorTile194721" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Olivier Peyre" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/4721/3_2/320/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 320w,
          https://cdn0.mariages.net/vendor/4721/3_2/640/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 640w,
          https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 960w,
          https://cdn0.mariages.net/vendor/4721/3_2/1280/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4721/3_2/960/jpg/rep-anais-michal-26_3_194721-163967535611904.jpeg" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={194721} data-id-sector={21} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/photo-mariage/olivier-peyre--e194721" tabIndex={-1}>Olivier Peyre</a>
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={7} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={8} data-overall-position={8} data-vendor-id={122739} data-storefront-id={163049} data-ec-name="Sébastien Ceresuela" data-cliente={1} data-id-directory-score={22236684} data-vendor-info="{&quot;vendorId&quot;:122739,&quot;price&quot;:&quot;1,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;15, Boulevard Des Couettes&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile122739" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={10} data-overall-position={10} data-vendor-id={139004} data-storefront-id={180472} data-ec-name="Stéphane Noël" data-cliente={1} data-id-directory-score={22246280} data-vendor-info="{&quot;vendorId&quot;:139004,&quot;price&quot;:&quot;59.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Bardos&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Impasse Larrabure&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64520&quot;}}" id="vendorTile139004" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={10} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={11} data-overall-position={11} data-vendor-id={126649} data-storefront-id={167188} data-ec-name="Délices en Cuisine" data-cliente={1} data-id-directory-score={22246160} data-vendor-info="{&quot;vendorId&quot;:126649,&quot;price&quot;:&quot;58.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Pau&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Traiteur mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Rue des Chasseurs&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64000&quot;}}" id="vendorTile126649" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.webp 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.webp 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.webp 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6649/3_2/320/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 320w,
          https://cdn0.mariages.net/vendor/6649/3_2/640/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 640w,
          https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 960w,
          https://cdn0.mariages.net/vendor/6649/3_2/1280/jpeg/adobestock-182532385_3_126649-1559726546.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6649/3_2/960/jpeg/adobestock-182532385_3_126649-1559726546.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Délices en Cuisine" width={640} height={427} className="lazyload" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={11} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={12} data-overall-position={12} data-vendor-id={182847} data-storefront-id={233259} data-ec-name="Say Yes" data-cliente={1} data-id-directory-score={22240012} data-vendor-info="{&quot;vendorId&quot;:182847,&quot;price&quot;:&quot;530.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arthez-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Route d'Artix&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64370&quot;}}" id="vendorTile182847" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/2847/3_2/320/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 320w,
          https://cdn0.mariages.net/vendor/2847/3_2/640/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 640w,
          https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 960w,
          https://cdn0.mariages.net/vendor/2847/3_2/1280/jpg/laetitia-et-yann-6181_3_182847-163549489410969.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/2847/3_2/320/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 320w,
          https://cdn0.mariages.net/vendor/2847/3_2/640/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 640w,
          https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 960w,
          https://cdn0.mariages.net/vendor/2847/3_2/1280/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/2847/3_2/960/jpg/laetitia-et-yann-6181_3_182847-163549489410969.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Say Yes" width={640} height={427} className="lazyload" />
                                    </picture>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={182847} data-id-sector={17} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                      <span className="multimedia__item">
                                        <i className="svgIcon svgIcon__videos multimedia__icon"><svg viewBox="0 0 20 20"><path d="M10.1 19.3C5 19.3.8 15.1.8 10 .8 4.9 5 .7 10.1.7c5.1 0 9.3 4.2 9.3 9.3 0 5.1-4.3 9.3-9.3 9.3zm0-1c4.484 0 8.3-3.788 8.3-8.3 0-4.548-3.752-8.3-8.3-8.3-4.548 0-8.3 3.752-8.3 8.3 0 4.548 3.752 8.3 8.3 8.3zM6.7 15c-.1 0-.2 0-.3-.1-.1-.1-.2-.3-.2-.4V5.8c0-.2.1-.3.2-.4.1-.1.3-.1.5 0l8.7 4.4c.2.1.3.3.3.4 0 .1-.1.4-.3.4l-8.7 4.3c0 .1-.1.1-.2.1zm.5-8.328v6.964l6.964-3.442L7.2 6.672z" fillRule="nonzero" /></svg></i>              </span>
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/musique-mariage/say-yes--e182847" tabIndex={-1}>Say Yes</a>
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={12} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={13} data-overall-position={13} data-vendor-id={155586} data-storefront-id={199468} data-ec-name="GLX Évènementiel" data-cliente={1} data-id-directory-score={22238708} data-vendor-info="{&quot;vendorId&quot;:155586,&quot;price&quot;:&quot;1,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Bardos&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;219 route d'or\u00e8gue&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64520&quot;}}" id="vendorTile155586" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li></ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next" aria-disabled="false"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
                          </div>
                        </div>
                        <div className="homeChoiceAwards__button app-choice-awards-view-all-tracking">
                          <a href="https://www.mariages.net/wedding-awards" className="button button--tertiary" title="Découvrir tous les gagnants">Découvrir tous les gagnants<i className="svgIcon svgIcon__arrowShortRight "><svg viewBox="0 0 12 12"><path fillRule="evenodd" clipRule="evenodd" d="M6.17.183a.74.74 0 011.044.07l4.603 5.26a.74.74 0 010 .974l-4.603 5.26a.74.74 0 11-1.113-.974l3.563-4.072H.74a.74.74 0 010-1.48h8.856L6.101 1.228A.74.74 0 016.17.183z" /></svg></i></a>
                        </div>  </section>
                      <section className="homeFeaturedVendors">
                        <h2 className="homeFeaturedVendors__title">Entreprises sélectionnées</h2>
                        <div className="homeFeaturedVendors__sliderContainer app-home-featured-vendors-slider app-home-featured-vendors-ajax" data-id-vendors="147759,178977,187153,7808,22068,200593,134546,10619,7570,156926,272219,15952,118687">
                          <div className="scrollSnap app-scroll-snap-wrapper scrollSnap--fullBleed scrollSnap--floatArrows" role="region" aria-label=" Carrousel">
                            <button type="button" aria-label="Précédent" className="scrollSnap__arrow scrollSnap__arrow--prev app-scroll-snap-prev disabled"><i className="svgIcon svgIcon__arrowLeftThick "><svg viewBox="0 0 20 36"><path d="M18.769.653a2.004 2.004 0 00-2.961 0L1.245 16.17c-.09.07-.175.147-.256.233A2.302 2.302 0 00.376 18c-.005.578.2 1.157.613 1.598.08.086.167.164.256.233l14.563 15.515a2.004 2.004 0 002.96 0c.744-.791.812-2.031.204-2.904l-.203-.25L5.449 18 18.77 3.809l.203-.25c.608-.874.54-2.113-.203-2.906z" /></svg></i></button>
                            <ul className="scrollSnap__container app-scroll-snap-container homeFeaturedVendors__slider" dir="ltr">
                              <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={0} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={1} data-overall-position={1} data-vendor-id={128737} data-storefront-id={169479} data-ec-name="Photo Breje" data-cliente={1} data-id-directory-score={22236991} data-vendor-info="{&quot;vendorId&quot;:128737,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Dax&quot;,&quot;region&quot;:&quot;Landes&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Photo mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;12, Rue des Boutons d'Or&quot;,&quot;city&quot;:&quot;Landes&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;40100&quot;}}" id="vendorTile128737" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/8737/3_2/320/jpg/d71-0713_3_128737-165052669088477.webp 320w,
          https://cdn0.mariages.net/vendor/8737/3_2/640/jpg/d71-0713_3_128737-165052669088477.webp 640w,
          https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.webp 960w,
          https://cdn0.mariages.net/vendor/8737/3_2/1280/jpg/d71-0713_3_128737-165052669088477.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/8737/3_2/320/jpg/d71-0713_3_128737-165052669088477.jpeg 320w,
          https://cdn0.mariages.net/vendor/8737/3_2/640/jpg/d71-0713_3_128737-165052669088477.jpeg 640w,
          https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.jpeg 960w,
          https://cdn0.mariages.net/vendor/8737/3_2/1280/jpg/d71-0713_3_128737-165052669088477.jpeg 1280w" src="https://cdn0.mariages.net/vendor/8737/3_2/960/jpg/d71-0713_3_128737-165052669088477.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Photo Breje" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={128737} data-id-sector={21} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/photo-mariage/photo-breje--e128737">Photo Breje</a>
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
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={1} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={2} data-overall-position={2} data-vendor-id={150610} data-storefront-id={193518} data-ec-name="Château La Grave Bechade" data-cliente={1} data-id-directory-score={22238482} data-vendor-info="{&quot;vendorId&quot;:150610,&quot;price&quot;:&quot;1,500.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Baleyssagues&quot;,&quot;region&quot;:&quot;Lot-et-Garonne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Lieu-dit La Grave&quot;,&quot;city&quot;:&quot;Lot-et-Garonne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;47120&quot;}}" id="vendorTile150610" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.webp 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.webp 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.webp 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/0610/3_2/320/jpg/6_3_150610-163765912058771.jpeg 320w,
          https://cdn0.mariages.net/vendor/0610/3_2/640/jpg/6_3_150610-163765912058771.jpeg 640w,
          https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg 960w,
          https://cdn0.mariages.net/vendor/0610/3_2/1280/jpg/6_3_150610-163765912058771.jpeg 1280w" src="https://cdn0.mariages.net/vendor/0610/3_2/960/jpg/6_3_150610-163765912058771.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château La Grave Bechade" width={640} height={427} />
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
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={2} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={3} data-overall-position={3} data-vendor-id={15946} data-storefront-id={67080} data-ec-name="Château d'Aubiac en Gascogne" data-cliente={1} data-id-directory-score={22235810} data-vendor-info="{&quot;vendorId&quot;:15946,&quot;price&quot;:&quot;2,400.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Aubiac&quot;,&quot;region&quot;:&quot;Lot-et-Garonne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Ch\u00e2teau d'Aubiac&quot;,&quot;city&quot;:&quot;Lot-et-Garonne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;47310&quot;}}" id="vendorTile15946" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.webp 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.webp 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.webp 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/5946/3_2/320/jpg/entree-chateau_3_15946_v1.jpeg 320w,
          https://cdn0.mariages.net/vendor/5946/3_2/640/jpg/entree-chateau_3_15946_v1.jpeg 640w,
          https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg 960w,
          https://cdn0.mariages.net/vendor/5946/3_2/1280/jpg/entree-chateau_3_15946_v1.jpeg 1280w" src="https://cdn0.mariages.net/vendor/5946/3_2/960/jpg/entree-chateau_3_15946_v1.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château d'Aubiac en Gascogne" width={640} height={427} />
                                    </picture>
                                    <span className="vendorTag  vendorTag--premium">PREMIUM</span>
                                    <button type="button" className="vendorTileGallery__favorite  favoriteButton app-favorite-save-vendor" data-vendor-id={15946} data-id-sector={16} data-aria-label-saved="Prestataire ajouté aux favoris" data-tracking-section aria-label="Ajouter prestataire aux favoris" aria-pressed="false" data-insert-source={1}>
                                      <i className="svgIcon svgIcon__heartOutline favoriteButton__heartDisable"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086zm-9.115 27.628a65.438 65.438 0 001.785-1.288 66.954 66.954 0 005.418-4.489c3.194-2.958 5.57-5.85 6.79-8.502.588-1.283.89-2.479.89-3.577 0-4.193-2.626-7.304-6.05-7.792-3.552-.507-6.76 1.95-7.978 7.03-.245 1.023-1.7 1.023-1.944 0-1.219-5.08-4.426-7.537-7.978-7.03C4.626 2.554 2 5.666 2 9.858c0 1.098.302 2.294.89 3.577 1.22 2.652 3.596 5.544 6.79 8.502a66.954 66.954 0 005.418 4.489A65.438 65.438 0 0017 27.796l.117-.082z" /></svg></i>    <i className="svgIcon svgIcon__heart favoriteButton__heartActive"><svg viewBox="0 0 34 30"><path d="M26.232.086C30.653.716 34 4.68 34 9.858c0 1.41-.371 2.884-1.073 4.412-1.35 2.937-3.878 6.013-7.247 9.134a68.921 68.921 0 01-5.582 4.625c-.665.496-1.284.941-1.84 1.328-.335.233-.577.396-.71.483a1 1 0 01-1.097 0c-.132-.087-.374-.25-.71-.483a67.429 67.429 0 01-1.84-1.328 68.921 68.921 0 01-5.58-4.625c-3.37-3.121-5.898-6.197-7.248-9.134C.371 12.742 0 11.268 0 9.858 0 4.681 3.347.716 7.768.086 11.6-.46 15.091 1.616 17 5.778 18.91 1.617 22.4-.46 26.232.086z" fillRule="nonzero" /></svg></i></button>
                                    <div className="multimedia">
                                    </div>
                                  </div>
                                  <div className="vendorTile__content">
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-daubiac-en-gascogne--e15946">Château d'Aubiac en Gascogne</a>
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
                              </li>                <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={3} data-visualized-slide="false" aria-hidden="false">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={4} data-overall-position={4} data-vendor-id={174949} data-storefront-id={223111} data-ec-name="Le Caillavet" data-cliente={1} data-id-directory-score={22239633} data-vendor-info="{&quot;vendorId&quot;:174949,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Saint-Aubin-de-M\u00e9doc&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Route de Lacanau&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33160&quot;}}" id="vendorTile174949" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" srcSet="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.webp 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.webp 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.webp 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img srcSet="https://cdn0.mariages.net/vendor/4949/3_2/320/jpg/033_3_174949.jpeg 320w,
          https://cdn0.mariages.net/vendor/4949/3_2/640/jpg/033_3_174949.jpeg 640w,
          https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg 960w,
          https://cdn0.mariages.net/vendor/4949/3_2/1280/jpg/033_3_174949.jpeg 1280w" src="https://cdn0.mariages.net/vendor/4949/3_2/960/jpg/033_3_174949.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Le Caillavet" width={640} height={427} />
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
                              </li>            <li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={4} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={5} data-overall-position={5} data-vendor-id={147759} data-storefront-id={190304} data-ec-name="Domaine de la Fauconnie *****" data-cliente={1} data-id-directory-score={22238252} data-vendor-info="{&quot;vendorId&quot;:147759,&quot;price&quot;:&quot;5,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Campsegret&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Domaine de la Fauconnie&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24140&quot;}}" id="vendorTile147759" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.webp 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.webp 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.webp 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.webp 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.webp 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.webp 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.jpeg 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.jpeg 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de la Fauconnie *****" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/7759/3_2/320/jpeg/mariage_3_147759.jpeg 320w,
          https://cdn0.mariages.net/vendor/7759/3_2/640/jpeg/mariage_3_147759.jpeg 640w,
          https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg 960w,
          https://cdn0.mariages.net/vendor/7759/3_2/1280/jpeg/mariage_3_147759.jpeg 1280w" src="https://cdn0.mariages.net/vendor/7759/3_2/960/jpeg/mariage_3_147759.jpeg" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={5} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={6} data-overall-position={6} data-vendor-id={178977} data-storefront-id={228597} data-ec-name="Château de Camarsac" data-cliente={1} data-id-directory-score={22246532} data-vendor-info="{&quot;vendorId&quot;:178977,&quot;price&quot;:&quot;2,300.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Camarsac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;30, Route de Bergerac&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33750&quot;}}" id="vendorTile178977" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.webp 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.webp 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.webp 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" srcSet="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.webp 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.webp 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.webp 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.webp 1280w" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.jpeg 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.jpeg 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château de Camarsac" width={640} height={427} className=" lazyloaded" srcSet="https://cdn0.mariages.net/vendor/8977/3_2/320/jpg/photo-donjon_3_178977-157242351548125.jpeg 320w,
          https://cdn0.mariages.net/vendor/8977/3_2/640/jpg/photo-donjon_3_178977-157242351548125.jpeg 640w,
          https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg 960w,
          https://cdn0.mariages.net/vendor/8977/3_2/1280/jpg/photo-donjon_3_178977-157242351548125.jpeg 1280w" src="https://cdn0.mariages.net/vendor/8977/3_2/960/jpg/photo-donjon_3_178977-157242351548125.jpeg" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={6} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={7} data-overall-position={7} data-vendor-id={187153} data-storefront-id={238547} data-ec-name="L'Airial des Monges" data-cliente={1} data-id-directory-score={22240207} data-vendor-info="{&quot;vendorId&quot;:187153,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Marions&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Les Monges&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33690&quot;}}" id="vendorTile187153" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={7} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={8} data-overall-position={8} data-vendor-id={7808} data-storefront-id={539} data-ec-name="Les Jardins du Manoir d'Eyrignac" data-cliente={1} data-id-directory-score={22234975} data-vendor-info="{&quot;vendorId&quot;:7808,&quot;price&quot;:&quot;2,000.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Salignac-Eyvigues&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Les jardins du Manoir d'Eyrignac&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24590&quot;}}" id="vendorTile7808" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={8} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={9} data-overall-position={9} data-vendor-id={22068} data-storefront-id={36094} data-ec-name="Kreativ Events" data-cliente={1} data-id-directory-score={22235397} data-vendor-info="{&quot;vendorId&quot;:22068,&quot;price&quot;:&quot;990.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Barsac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Musique mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;51, Rue du Onze Novembre 1918&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33720&quot;}}" id="vendorTile22068" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={9} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={10} data-overall-position={10} data-vendor-id={200593} data-storefront-id={254737} data-ec-name="Château Haut Breton Larigaudière" data-cliente={1} data-id-directory-score={22246992} data-vendor-info="{&quot;vendorId&quot;:200593,&quot;price&quot;:&quot;1,700.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Soussans&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;3, Rue des Anciens Combattants&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33460&quot;}}" id="vendorTile200593" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={10} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={11} data-overall-position={11} data-vendor-id={134546} data-storefront-id={175718} data-ec-name="Urtubien Borda" data-cliente={1} data-id-directory-score={22237392} data-vendor-info="{&quot;vendorId&quot;:134546,&quot;price&quot;:&quot;1.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Urrugne&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Salle mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;290,  Chemin Inzola&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64122&quot;}}" id="vendorTile134546" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/4546/3_2/320/png/pour-les-grands-moments.webp 320w,
          https://cdn0.mariages.net/vendor/4546/3_2/640/png/pour-les-grands-moments.webp 640w,
          https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.webp 960w,
          https://cdn0.mariages.net/vendor/4546/3_2/1280/png/pour-les-grands-moments.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/4546/3_2/320/png/pour-les-grands-moments.jpeg 320w,
          https://cdn0.mariages.net/vendor/4546/3_2/640/png/pour-les-grands-moments.jpeg 640w,
          https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.jpeg 960w,
          https://cdn0.mariages.net/vendor/4546/3_2/1280/png/pour-les-grands-moments.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/4546/3_2/960/png/pour-les-grands-moments.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Urtubien Borda" width={640} height={427} className="lazyload" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={11} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={12} data-overall-position={12} data-vendor-id={10619} data-storefront-id={66928} data-ec-name="Château de Lantic" data-cliente={1} data-id-directory-score={22235785} data-vendor-info="{&quot;vendorId&quot;:10619,&quot;price&quot;:&quot;2,600.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Martillac&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;10, Route de Lartigue&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33650&quot;}}" id="vendorTile10619" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/0619/3_2/320/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 320w,
          https://cdn0.mariages.net/vendor/0619/3_2/640/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 640w,
          https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 960w,
          https://cdn0.mariages.net/vendor/0619/3_2/1280/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/0619/3_2/960/jpg/1-point-de-vue-aerien-02_3_10619-164845598640895.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Château de Lantic" width={640} height={427} className="lazyload" />
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
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/chateau-mariage/chateau-de-lantic--e10619" tabIndex={-1}>Château de Lantic</a>
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={12} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={13} data-overall-position={13} data-vendor-id={7570} data-storefront-id={503} data-ec-name="Domaine de Montplaisir" data-cliente={1} data-id-directory-score={22234965} data-vendor-info="{&quot;vendorId&quot;:7570,&quot;price&quot;:&quot;3,200.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Condat-sur-Trincou&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Montplaisir&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24530&quot;}}" id="vendorTile7570" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/7570/3_2/320/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 320w,
          https://cdn0.mariages.net/vendor/7570/3_2/640/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 640w,
          https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 960w,
          https://cdn0.mariages.net/vendor/7570/3_2/1280/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/7570/3_2/320/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 320w,
          https://cdn0.mariages.net/vendor/7570/3_2/640/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 640w,
          https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 960w,
          https://cdn0.mariages.net/vendor/7570/3_2/1280/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/7570/3_2/960/jpg/cocktail-dans-le-parc-du-domaine-de-montplaisir-perigord-3_3_7570.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de Montplaisir" width={640} height={427} className="lazyload" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={13} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={14} data-overall-position={14} data-vendor-id={156926} data-storefront-id={201102} data-ec-name="Théâtre de la Nature d'Arcangues" data-cliente={1} data-id-directory-score={22238769} data-vendor-info="{&quot;vendorId&quot;:156926,&quot;price&quot;:&quot;1,800.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Arcangues&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Salle mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Le Bourg&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64200&quot;}}" id="vendorTile156926" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.webp 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.webp 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.webp 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/6926/3_2/320/jpg/thetre-de-la-nature_3_156926.jpeg 320w,
          https://cdn0.mariages.net/vendor/6926/3_2/640/jpg/thetre-de-la-nature_3_156926.jpeg 640w,
          https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg 960w,
          https://cdn0.mariages.net/vendor/6926/3_2/1280/jpg/thetre-de-la-nature_3_156926.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/6926/3_2/960/jpg/thetre-de-la-nature_3_156926.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Théâtre de la Nature d'Arcangues" width={640} height={427} className="lazyload" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={14} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={15} data-overall-position={15} data-vendor-id={272219} data-storefront-id={337457} data-ec-name="Domaine de Landrevie" data-cliente={1} data-id-directory-score={22245728} data-vendor-info="{&quot;vendorId&quot;:272219,&quot;price&quot;:&quot;3,500.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Saint-Geyrac&quot;,&quot;region&quot;:&quot;Dordogne&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;185, Route de Landrevie&quot;,&quot;city&quot;:&quot;Dordogne&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;24330&quot;}}" id="vendorTile272219" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/2219/3_2/320/jpg/dpp-97_3_272219-165661043040659.webp 320w,
          https://cdn0.mariages.net/vendor/2219/3_2/640/jpg/dpp-97_3_272219-165661043040659.webp 640w,
          https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.webp 960w,
          https://cdn0.mariages.net/vendor/2219/3_2/1280/jpg/dpp-97_3_272219-165661043040659.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/2219/3_2/320/jpg/dpp-97_3_272219-165661043040659.jpeg 320w,
          https://cdn0.mariages.net/vendor/2219/3_2/640/jpg/dpp-97_3_272219-165661043040659.jpeg 640w,
          https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.jpeg 960w,
          https://cdn0.mariages.net/vendor/2219/3_2/1280/jpg/dpp-97_3_272219-165661043040659.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/2219/3_2/960/jpg/dpp-97_3_272219-165661043040659.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Domaine de Landrevie" width={640} height={427} className="lazyload" />
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={15} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={16} data-overall-position={16} data-vendor-id={15952} data-storefront-id={67083} data-ec-name="Château d'Agassac" data-cliente={1} data-id-directory-score={22235811} data-vendor-info="{&quot;vendorId&quot;:15952,&quot;price&quot;:&quot;2,835.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Ludon-M\u00e9doc&quot;,&quot;region&quot;:&quot;Gironde&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Ch\u00e2teau mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;15, Rue du Ch\u00e2teau d\u2019Agassac&quot;,&quot;city&quot;:&quot;Gironde&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;33290&quot;}}" id="vendorTile15952" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
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
                              </li><li className="scrollSnap__item app-scroll-snap-item homeFeaturedVendors__sliderItem" data-id={16} data-visualized-slide="false" aria-hidden="true">
                                <div className="gtm-tracking-impression app-ec-item vendorTile vendorTile--mosaic app-catalog-list-vendor app-vendor-tile app-vendor-tile-common app-internal-tracking-item gtm-tracking-impression" data-it-position={17} data-overall-position={17} data-vendor-id={118687} data-storefront-id={158835} data-ec-name="Hôtel Du Parc" data-cliente={1} data-id-directory-score={22236548} data-vendor-info="{&quot;vendorId&quot;:118687,&quot;price&quot;:&quot;60.00&quot;,&quot;currency&quot;:&quot;EUR&quot;,&quot;city&quot;:&quot;Salies-de-B\u00e9arn&quot;,&quot;region&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;sector&quot;:&quot;Domaine mariage&quot;,&quot;address&quot;:{&quot;addr1&quot;:&quot;Boulevard Saint Guily&quot;,&quot;city&quot;:&quot;Pyr\u00e9n\u00e9es-Atlantiques&quot;,&quot;region&quot;:&quot;Aquitaine&quot;,&quot;country&quot;:&quot;FR&quot;,&quot;postal_code&quot;:&quot;64270&quot;}}" id="vendorTile118687" data-force-target-blank={1} aria-label="Prestataire" data-initialized="true">
                                  <div className="vendorTileGallery vendorTileGallery--mosaic ">
                                    <picture>
                                      <source type="image/webp" data-srcset="https://cdn0.mariages.net/vendor/8687/3_2/320/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 320w,
          https://cdn0.mariages.net/vendor/8687/3_2/640/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 640w,
          https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 960w,
          https://cdn0.mariages.net/vendor/8687/3_2/1280/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.webp 1280w" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/vendor/8687/3_2/320/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 320w,
          https://cdn0.mariages.net/vendor/8687/3_2/640/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 640w,
          https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 960w,
          https://cdn0.mariages.net/vendor/8687/3_2/1280/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg 1280w" data-src="https://cdn0.mariages.net/vendor/8687/3_2/960/jpg/htel-du-parc-parc-et-tente-de-reception-14_3_118687.jpeg" sizes="(min-width: 600px) 280px, calc(100vw - 2rem)" alt="Hôtel Du Parc" width={640} height={427} className="lazyload" />
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
                                    <div>            <a className="vendorTile__title  app-vendor-tile-link" target="_blank" href="https://www.mariages.net/domaine-mariage/hotel-du-parc--e118687" tabIndex={-1}>Hôtel Du Parc</a>
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
                              </li></ul>
                            <button type="button" aria-label="Suivant" className="scrollSnap__arrow scrollSnap__arrow--next app-scroll-snap-next"><i className="svgIcon svgIcon__arrowRightThick "><svg viewBox="0 0 20 36"><path d="M.984.653a1.976 1.976 0 012.936 0L18.36 16.17c.089.07.174.147.254.233.41.441.613 1.02.608 1.598a2.313 2.313 0 01-.608 1.598c-.08.086-.165.164-.254.233L3.92 35.346a1.976 1.976 0 01-2.936 0c-.737-.791-.804-2.031-.201-2.904l.2-.25L14.192 18 .984 3.809l-.201-.25C.18 2.684.247 1.445.983.652z" /></svg></i></button>
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
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456597.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456597.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/1280/jpg/2456597.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/960/jpg/2456597.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Charlotte et Rémy" width={640} height={427} className="lazyload" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456599.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456599.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 1" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456569.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456569.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 2" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/619/3_2/320/jpg/2456571.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/619/3_2/640/jpg/2456571.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Charlotte et Rémy 3" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529505.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529505.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/1280/jpg/2529505.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/960/jpg/2529505.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Sylvie et Julien" width={640} height={427} className="lazyload" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529441.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529441.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 1" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529443.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529443.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 2" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/197/3_2/320/jpg/2529445.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/197/3_2/640/jpg/2529445.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Sylvie et Julien 3" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216075.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216075.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/1280/jpg/2216075.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/960/jpg/2216075.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Antoine et Marie" width={640} height={427} className="lazyload" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216073.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216073.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 1" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216077.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216077.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 2" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/549/3_2/320/jpg/2216079.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/549/3_2/640/jpg/2216079.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Antoine et Marie 3" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.webp 1280w" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" />
                                      <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117043.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117043.jpeg 640w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg 960w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/1280/jpg/2117043.jpeg 1280w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/960/jpg/2117043.jpeg" sizes="(min-width: 768px) 284px, (min-width: 480px) 350px, calc(100vw - 4rem)" alt="Le mariage de Élodie et Stéphane" width={640} height={427} className="lazyload" />
                                    </picture>
                                  </div>
                                  <figcaption className="realWeddingsCouplesTile__thumbnails">
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117045.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117045.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 1" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117047.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117047.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 2" width={640} height={427} className="lazyload" />
                                      </picture>
                                    </div>
                                    <div className="realWeddingsCouplesTile__thumbnail">
                                      <picture>
                                        <source type="image/webp" data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.webp 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.webp 640w" sizes="(min-width: 768px) 93px, 0px" />
                                        <img data-srcset="https://cdn0.mariages.net/real-wedding-photo/443/3_2/320/jpg/2117049.jpeg 320w,
          https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg 640w" data-src="https://cdn0.mariages.net/real-wedding-photo/443/3_2/640/jpg/2117049.jpeg" sizes="(min-width: 768px) 93px, 0px" alt="Le mariage de Élodie et Stéphane 3" width={640} height={427} className="lazyload" />
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
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-1@2x.jpg 2x" className="lazyload " alt="Avant le mariage" width={160} height={160} />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/avant-le-mariage--t1" className="app-article-category-item-link">
                                    Avant le mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={1} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-2@2x.jpg 2x" className="lazyload " alt="La cérémonie de mariage" width={160} height={160} />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/la-ceremonie-de-mariage--t2" className="app-article-category-item-link">
                                    La cérémonie de mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={2} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-3@2x.jpg 2x" className="lazyload " alt="La réception" width={160} height={160} />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/la-reception--t3" className="app-article-category-item-link">
                                    La réception      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={3} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-4@2x.jpg 2x" className="lazyload " alt="Les prestataires de mariage" width={160} height={160} />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/les-prestataires-de-mariage--t4" className="app-article-category-item-link">
                                    Les prestataires de mariage      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={4} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-5@2x.jpg 2x" className="lazyload " alt="Mode nuptiale" width={160} height={160} />
                                </div>
                                <div className="homeCategoryItem__title">
                                  <a href="https://www.mariages.net/articles/mode-nuptiale--t5" className="app-article-category-item-link">
                                    Mode nuptiale      </a>
                                </div>
                              </div>
                            </li>                <li className="scrollSnap__item app-scroll-snap-item homeCategories__slide" data-id={5} data-visualized-slide="false">
                              <div className="homeCategoryItem app-article-category-item">
                                <div className="homeCategoryItem__image">
                                  <img data-src="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6.jpg" data-srcset="https://www.mariages.net/assets/img/articles/categories/articles-cat-global-6@2x.jpg 2x" className="lazyload " alt="Beauté et Santé" width={160} height={160} />
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
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" />
                                    <img data-srcset="https://cdn0.mariages.net/article/1696/3_2/320/jpg/46961-fr-portada-editorial-1.jpeg 320w,
          https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg 640w,
          https://cdn0.mariages.net/article/1696/3_2/960/jpg/46961-fr-portada-editorial-1.jpeg 960w" data-src="https://cdn0.mariages.net/article/1696/3_2/640/jpg/46961-fr-portada-editorial-1.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Les 10 faire-part dont les mariés raffolent !" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" />
                                    <img data-srcset="https://cdn0.mariages.net/article-vendor/9731/3_2/320/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 320w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 640w,
          https://cdn0.mariages.net/article-vendor/9731/3_2/960/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg 960w" data-src="https://cdn0.mariages.net/article-vendor/9731/3_2/640/jpg/unadjustednonraw-thumb-48b3_3_189731-1560978388.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Lune de miel 2022-2023 : cap sur 16 destinations de rêve !" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" />
                                    <img data-srcset="https://cdn0.mariages.net/article/5756/3_2/320/jpg/46575-fotojet-41.jpeg 320w,
          https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg 640w,
          https://cdn0.mariages.net/article/5756/3_2/960/jpg/46575-fotojet-41.jpeg 960w" data-src="https://cdn0.mariages.net/article/5756/3_2/640/jpg/46575-fotojet-41.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Mariage d’été : voici les 8 robes du moment à piquer aux influenceuses !" width={640} height={427} className="lazyload" />
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
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.webp 960w" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" />
                                    <img data-srcset="https://cdn0.mariages.net/article/9661/3_2/320/jpg/41669-vicky-rose-ok.jpeg 320w,
          https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg 640w,
          https://cdn0.mariages.net/article/9661/3_2/960/jpg/41669-vicky-rose-ok.jpeg 960w" data-src="https://cdn0.mariages.net/article/9661/3_2/640/jpg/41669-vicky-rose-ok.jpeg" sizes="(min-width: 1024px) 456px, (min-width: 668px) calc(50vw - 2rem), calc(100vw - 2rem)" alt="Robes de soirée roses : 75 modèles à tomber pour un mariage en 2022" width={640} height={427} className="lazyload" />
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
                                  <div className="chat__timestamp">17:00</div>
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