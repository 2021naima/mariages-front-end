import React, { useState, useEffect } from 'react';



export default function Login() {
    return (
                <div>
                  <div className="header">
                    <div className="mt30 text-center">
                      <a href="https://www.mariages.net" title="Mariage">
                        <img src="https://www.mariages.net/assets/img/logos/gen_logoHeader.svg" alt="www.mariages.net" height={30} />
                      </a>
                    </div>
                  </div>
                  <div className="wrapper-auth">
                    <div className="pure-g mb10 border-light template-auth">
                      <div className="pure-u-2-5 layout-auth-cover" style={{backgroundImage: 'url(https://cdn1.mariages.net/assets/img/layer-alta/default_fr-FR.jpg)'}} />
                      <div id="app-signup-layer-content" className="pure-u-3-5 white">
                        <div className="layout-auth-container">
                          <p className="layout-auth-title">Accédez à votre compte</p>
                          <p className="layout-auth-action">Vous n'avez pas de compte ?                    <a className="app-ua-track-event" href="/users-signup.php" data-track-c="SignUpTracking" data-track-a="a-step1" data-track-l="d-desktop+s-site_login" data-track-s data-track-v={0} data-track-ni={0}>Inscription</a>
                          </p>
                          <div className="app-social-login-buttons  pt15 pb30 text-center">
                            <button className="btnOutline btnOutline--grey app-facebook-button mb10 mr15  btnOutline--full             " type="button">
                              <i className="svgIcon svgIcon__facebook svgIcon--medium fleft"><svg width={12} height={24} viewBox="0 0 12 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M9.81 3.985H12.001V0.169C11.623 0.117 10.323 0 8.809 0C5.65 0 3.486 1.987 3.486 5.639V9H0V13.266H3.486V24H7.76V13.267H11.105L11.636 9.001H7.759V6.062C7.76 4.829 8.092 3.985 9.81 3.985V3.985Z" fill="#335795" />
                                </svg>
                              </i>        <b>Poursuivre avec Facebook</b>
                            </button>
                            <button className="btnOutline btnOutline--grey mb10 mr15  btnOutline--full app-google-login            " type="button">
                              <i className="svgIcon svgIcon__google svgIcon--medium fleft"><svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M4.6875 10C4.6875 9.00913 4.96051 8.08088 5.4348 7.28608V3.91467H2.0634C0.725313 5.65249 0 7.77042 0 10C0 12.2296 0.725313 14.3476 2.0634 16.0854H5.4348V12.714C4.96051 11.9192 4.6875 10.9909 4.6875 10V10Z" fill="#FBBD00" />
                                  <path d="M10 15.3126L7.65625 17.6563L10 20.0001C12.2296 20.0001 14.3475 19.2747 16.0854 17.9367V14.5688H12.7175C11.9158 15.0449 10.9836 15.3126 10 15.3126V15.3126Z" fill="#0F9D58" />
                                  <path d="M5.43488 12.714L2.06348 16.0854C2.3284 16.4295 2.61688 16.759 2.92902 17.0711C4.81777 18.9598 7.32898 20 10.0001 20V15.3125C8.06164 15.3125 6.3627 14.2688 5.43488 12.714Z" fill="#31AA52" />
                                  <path d="M20 10C20 9.39164 19.9449 8.78211 19.8363 8.18844L19.7483 7.70801H10V12.3955H14.7442C14.2835 13.312 13.5752 14.0596 12.7175 14.5689L16.0853 17.9367C16.4294 17.6718 16.7589 17.3833 17.0711 17.0711C18.9598 15.1823 20 12.6711 20 10V10Z" fill="#3C79E6" />
                                  <path d="M13.7565 6.24348L14.1708 6.65777L17.4854 3.34324L17.0711 2.92895C15.1823 1.0402 12.6711 0 10 0L7.65625 2.34375L10 4.6875C11.419 4.6875 12.7531 5.24008 13.7565 6.24348Z" fill="#CF2D48" />
                                  <path d="M10.0001 4.6875V0C7.32902 0 4.81781 1.0402 2.92902 2.92891C2.61688 3.24105 2.3284 3.57055 2.06348 3.91465L5.43488 7.28605C6.36273 5.73125 8.06168 4.6875 10.0001 4.6875V4.6875Z" fill="#EB4132" />
                                </svg>
                              </i>            <b>Poursuivre avec Google</b>
                            </button>
                            <button className="btnOutline btnOutline--grey mb10  btnOutline--full app-apple-login        " type="button">
                              <i className="svgIcon svgIcon__apple svgIcon--medium fleft"><svg viewBox="0 0 1792 1792"><path d="M1585 1215q-39 125-123 250-129 196-257 196-49 0-140-32-86-32-151-32-61 0-142 33-81 34-132 34-152 0-301-259-147-261-147-503 0-228 113-374 113-144 284-144 72 0 177 30 104 30 138 30 45 0 143-34 102-34 173-34 119 0 213 65 52 36 104 100-79 67-114 118-65 94-65 207 0 124 69 223t158 126zM1209 42q0 61-29 136-30 75-93 138-54 54-108 72-37 11-104 17 3-149 78-257 74-107 250-148 1 3 2.5 11t2.5 11q0 4 .5 10t.5 10z" /></svg></i>            <b>Poursuivre avec Apple</b>
                            </button>
                          </div>
                          <iframe name="frameCapaLogin" id="frameCapaLogin" style={{display: 'none'}} />
                          <p className="layout-auth-subtitle mb25">
                            Ou connectez-vous avec votre email                                  </p>
                          <div id="error_email" className="pure-u-1 mb5 alert alert-error" style={{display: 'none'}}>
                            <span>Votre adresse mail ou mot de passe est incorrect.</span>
                          </div>
                          <form name="frmLogin" className="form-line" action="/com-Login.php" method="post">
                            <input type="hidden" id="urlR" name="urlR" defaultValue />
                            <input type="hidden" name="isJsArchitectureEnabled" defaultValue="true" />
                            <div className="form-content-inputs">
                              <input id="Mail" name="Mail" className="pure-u-1" type="email" placeholder="Votre email" data-testid="user-login-email-input" />
                              <input id="Password" name="Password" className="pure-u-1" type="password" placeholder="Mot de passe" autoComplete="off" data-testid="user-login-password-input" />
                              <a href="/users-recover-password.php" className="forgotten-password">Mot de passe oublié ?</a>
                              <div className="text-center mb30 mt40">
                                <button className="btn-flat btn-flat--big red btn-full app-ua-track-event" type="submit" data-track-c="LoginTracking" data-track-a="a-step1" data-track-l="d-desktop+s-user_login" data-track-s data-track-v={0} data-track-ni={0} data-testid="user-login-submit-button">Accédez</button>
                              </div>
                              <p className="layout-auth-action">Vous êtes un professionnel ?</p>
                              <a className="app-ua-track-event strong" href="https://www.mariages.net/emp-Acceso.php" data-track-c="SignUpTracking" data-track-a="a-step1" data-track-l="d-desktop+s-site_login" data-track-s data-track-v={0} data-track-ni={0}>Accès entreprises</a>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="layout-auth-footer">
                    <ul>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/users-signup.php">Inscrivez-vous sur Mariages.net</a></li>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/emp-Alta.php">Inscription pour professionnels</a></li>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/contactar.php">Contact</a></li>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/mentions-legales.php">Mentions légales</a></li>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/legal/privacy.php">Politique de confidentialité</a></li>
                      <li className="pure-u"><a rel="nofollow" href="https://www.mariages.net/legal/cookies.php">Politique de cookies</a></li>
                      <li className="pure-u">
                        <a className="ot-sdk-show-settings">Ne pas vendre mes données personnelles</a>
                      </li>
                      <li className="pure-u"><a href="https://www.mariages.net/aboutus/aboutus.php">Qui sommes-nous ?</a></li>
                    </ul>
                    <ul className="mt5">
                      <li className="pure-u">
                        <span>Autres pays:</span>
                      </li>
                      <li className="pure-u"><a href="https://www.bodas.net" title="Bodas" hrefLang="es">Espagne</a></li>
                      <li className="pure-u"><a href="https://www.matrimonio.com" title="Matrimonio" hrefLang="it">Italie</a></li>
                      <li className="pure-u"><a href="https://www.hitched.co.uk" title="Wedding United Kingdom" hrefLang="en-gb">Royaume-Uni</a></li>
                      <li className="pure-u"><a href="https://www.hitched.ie" title="Wedding Ireland" hrefLang="en-ie">Irlande</a></li>
                      <li className="pure-u"><a href="https://www.casamentos.pt" title="Casamentos" hrefLang="pt">Portugal </a></li>
                      <li className="pure-u"><a href="https://www.weddingwire.in" title="Wedding India" hrefLang="en-in">Inde</a></li>
                      <li className="pure-u"><a href="https://www.bodas.com.mx" title="Bodas México" hrefLang="es-mx">Mexique</a></li>
                      <li className="pure-u"><a href="https://www.matrimonios.cl" title="Matrimonios Chile" hrefLang="es-cl">Chili</a></li>
                      <li className="pure-u"><a href="https://www.casamientos.com.ar" title="Casamientos Argentina" hrefLang="es-ar">Argentine</a></li>
                      <li className="pure-u"><a href="https://www.casamentos.com.br" title="Casamentos Brasil" hrefLang="pt-br">Brésil</a></li>
                      <li className="pure-u"><a href="https://www.matrimonio.com.co" title="Matrimonio Colombia" hrefLang="es-co">Colombie</a></li>
                      <li className="pure-u"><a href="https://www.matrimonio.com.pe" title="Matrimonio Perú" hrefLang="es-pe">Pérou</a></li>
                      <li className="pure-u"><a href="https://www.casamiento.com.uy" title="Casamiento Uruguay" hrefLang="es-uy">Uruguay</a></li>
                      <li className="pure-u"><a href="https://www.weddingwire.ca" title="Wedding Canada" hrefLang="en-ca">Canada</a></li>
                      <li className="pure-u"><a href="https://www.weddingwire.com" title="Wedding" hrefLang="en-us">États-Unis</a></li>
                    </ul>
                    <p className="layout-auth-footer-copyright">© 2007 - 2022 Mariages.net</p>
                  </div>
                  <div id="app-common-layer" className="modal dnone" tabIndex={-1} role="dialog" aria-hidden="true" />
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
                                  <div className="chat__timestamp">17:22</div>
                                </div>
                              </div>
                              <div className="app-chat-reply-template"><div className="app-chat-qr-container chatQuickReply"><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Oui">Oui</span><span className="chatQuickReply__input app-chat-qr" data-type="null" data-reply-text="Non, merci">Non, merci</span></div></div>
                            </div>
                          </div>
                        </div>
                        <div className="composer-container chat-message-send app-chat-message-send">
                          <div className="app-chat-writing-alert">Sara est en train d'écrire...</div>
                          <form method="POST" className="app-chat-form-chatbot" data-type="anonymous" data-id="7db8def1-9d68-e7a4-000e-4927f648b112-1658313550819">
                            <div className="composer-textarea-container flex-va-center flex-justify-space-between">
                              <input className="app-no-tiny app-chat-textarea chat-message-send__messageInput" name="comment" placeholder="Écrivez votre message..." autoComplete="off" readOnly="readonly" />
                              <div className="chat-submit"> <span className="app-chat-form-submit chat-message-send__messageSubmit chat-message-send__messageSubmit--disabled"><i className="icon icon-send" /></span></div>
                            </div>
                          </form>
                        </div>
                      </div></div></div>
                  <div id="onetrust-consent-sdk"><div className="onetrust-pc-dark-filter ot-hide ot-fade-in" /><div id="onetrust-pc-sdk" className="otPcCenter ot-hide ot-fade-in" aria-modal="true" role="alertdialog" lang="fr-FR" aria-label="Ne pas vendre mes données personnelles">{/* Close Button */}<div className="ot-pc-header">{/* Logo Tag */}<div className="ot-pc-logo" role="img" aria-label="Logo de la société" style={{backgroundImage: 'url("https://cdn.cookielaw.org/logos/4708a190-b1e8-4c46-8bde-12838e4eaa32/006bd2e8-872d-4227-861d-cf26c0f64c1c/fc7601b1-1544-4023-8371-18b980ec8c87/logo_tkww.png")', backgroundPosition: 'left'}} /><button id="close-pc-btn-handler" className="ot-close-icon" aria-label="Fermer" /></div>{/* Close Button */}<div id="ot-pc-content" className="ot-pc-scrollbar"><h2 id="ot-pc-title">Ne pas vendre mes données personnelles</h2><div id="ot-pc-desc">Lorsque vous visitez notre site Web, nous stockons des cookies sur votre navigateur pour collecter des informations. Ces informations collectées peuvent être liées à vous, à vos préférences ou à votre appareil, et sont principalement utilisées pour faire fonctionner le site comme vous le souhaitez et pour fournir une expérience Web plus personnalisée. Toutefois, vous pouvez choisir de ne pas autoriser certains types de cookies, ce qui peut avoir un impact sur votre expérience du site et des services que nous offrons. Cliquez sur les différents titres de catégories pour en savoir plus et modifier nos paramètres par défaut selon vos préférences. Vous ne pouvez pas vous désinscrire de nos Cookies Strictement Nécessaires internes lorsqu'ils sont déployés afin d'assurer le bon fonctionnement de notre site Web (tels que pour afficher le bandeau des cookies, pour vous connecter à votre compte, pour rediriger votre session lorsque vous quittez votre compte, etc.) Pour plus d'Informations sur les cookies internes et de tiers utilisés, veuillez consulter le lien suivant.
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