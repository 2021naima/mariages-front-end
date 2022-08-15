import React, { useState, useEffect } from 'react';

function DashboardNav() {





return(

                    <div className="tools-navigation">
                      <div className="wrapper">
                        <ul className="pure-g">
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link current" href="/accueil" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-mywedding" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-dash" />
                              Mon mariage                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="/taches" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-checklist" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-checklist" />
                              Tâches                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="/PrestatairesDash" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-vendor_manager" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-vendors" />
                              Prestataires                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="/Invites" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-guestlist" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-guests" />
                              Invités                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="/Table" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-seating" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-tables" />
                              Tables                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="/Budget" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-budget" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-budget" />
                              Budget                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="RobesDash" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-dresses" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-dresses" />
                              Robes                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="https://www.mariages.net/website/index.php?actionReferrer=201" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-wws" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-wedsite" />
                              Site                       </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="https://www.mariages.net/tools/Wedshoots" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-wedshoots" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-wedshoots" />
                              WedShoots                      </a>
                          </li>
                          <li className="pure-u-1-10">
                            <a className="app-ua-track-event tools-navigation-link " href="https://www.mariages.net/tools/Concurso" data-track-c="NavigationAuth" data-track-a="a-click" data-track-l="d-desktop+s-header_secondary+o-tools_main+dt-lottery" data-track-v={0} data-track-ni={0}>
                              <span className="tools-navigation-icon icon-tools-navigation icon-tools-navigation-contest" />
                              Tirage au sort                      </a>
                          </li>
                        </ul>
                      </div>
                    </div>
)}
export default DashboardNav;