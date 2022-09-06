jQuery("#simulation")
  .on("click", ".s-e7c773ac-84c3-4812-bafc-443a80473325 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Image_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.google.com/maps/place/Blackout+Card+Games/@-26.9067448,-48.6601812,16z/data=!4m5!3m4!1s0x0:0x25c430526cc11c4a!8m2!3d-26.9067448!4d-48.6586577",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.google.com/maps/place/Blackout+Card+Games/@-26.9067448,-48.6601812,16z/data=!4m5!3m4!1s0x0:0x25c430526cc11c4a!8m2!3d-26.9067448!4d-48.6586577://",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.facebook.com/Blackoutcardgames/",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://wa.me/5547999882207",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "isexternal": true,
                    "target": "https://www.instagram.com/blackoutcardgames/",
                    "tab": true
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/d12245cc-1680-458d-89dd-4f0d7fb22724",
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a79dc14-9c3d-428c-ae00-a78aa86ac5f3",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a79dc14-9c3d-428c-ae00-a78aa86ac5f3"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1a79dc14-9c3d-428c-ae00-a78aa86ac5f3",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c22a7b8-f3e9-46d5-844d-b0f9aca67f14",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c22a7b8-f3e9-46d5-844d-b0f9aca67f14"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/1c22a7b8-f3e9-46d5-844d-b0f9aca67f14",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/96904e05-2d25-4677-bbc5-02c13ad96fff",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/96904e05-2d25-4677-bbc5-02c13ad96fff",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/96904e05-2d25-4677-bbc5-02c13ad96fff"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/07fd4e10-c730-4ad8-bfa9-25785aa1504e",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/07fd4e10-c730-4ad8-bfa9-25785aa1504e"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/07fd4e10-c730-4ad8-bfa9-25785aa1504e",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7c773ac-84c3-4812-bafc-443a80473325",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7c773ac-84c3-4812-bafc-443a80473325"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Image_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7c773ac-84c3-4812-bafc-443a80473325"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#DDDDDD"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_10 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_9 > .backgroundLayer > .colorLayer",
                  "#s-e7c773ac-84c3-4812-bafc-443a80473325 #s-Rectangle_8 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#BBBBBB"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7c773ac-84c3-4812-bafc-443a80473325",
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e7c773ac-84c3-4812-bafc-443a80473325"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("click", ".s-e7c773ac-84c3-4812-bafc-443a80473325 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_2")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimShow",
                    "parameter": {
                      "target": [ "#s-Group_9" ]
                    },
                    "exectype": "serial",
                    "delay": 0
                  }
                ]
              }
            ],
            "exectype": "serial",
            "delay": 0
          }
        ];
        jEvent.launchCases(cases);
      }
    }
  })
  .on("pageload", ".s-e7c773ac-84c3-4812-bafc-443a80473325 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });