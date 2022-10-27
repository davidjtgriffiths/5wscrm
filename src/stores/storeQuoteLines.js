import { ref, onMounted, computed } from 'vue'
import { defineStore } from 'pinia'
// import { useStorage } from 'vueuse/core'

export const useStoreQuoteLines = defineStore('quoteLines', () => {
    // const count = ref(0)
    // const name = ref('Eduardo')
    // const quoteLines = ref('Eduardo')

    const database = ref (
      {
        "company": [
          {
            "name": "Cafe Lavista",
            "category": [
              {
                "coffeeMachine": [
                  {
                    "brand": [
                      {
                        "name": "Vista",
                        "model": [
                          {
                            "name": "Gaia",
                            "variant": [
                              {
                                "description": "Easy",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              },
                              {
                                "description": "Touch",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "Talia",
                            "variant": [
                              {
                                "description": "Easy",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              },
                              {
                                "description": "Touch",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              }
                            ]
                          },
                          {
                            "name": "Piccola",
                            "variant": [
                              {
                                "description": "New",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              },
                              {
                                "description": "Refurbished",
                                "wsPrice": 219500,
                                "rrPrice": 369500,
                                "warranty": [
                                  {
                                    "description": "none",
                                    "term": [
                                      {
                                        "length": 0,
                                        "wsPrice": 0,
                                        "rrPrice": 0
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts Only",
                                    "term": [
                                      {
                                        "length": 3,
                                        "wsPrice": 27500,
                                        "rrPrice": 30000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 70000,
                                        "rrPrice": 75000
                                      }
                                    ]
                                  },
                                  {
                                    "description": "Parts & Labour",
                                    "term": [
                                      {
                                        "length": 1,
                                        "wsPrice": 40000,
                                        "rrPrice": 45000
                                      },
                                      {
                                        "length": 3,
                                        "wsPrice": 135000,
                                        "rrPrice": 150000
                                      },
                                      {
                                        "length": 4,
                                        "wsPrice": 182500,
                                        "rrPrice": 204000
                                      },
                                      {
                                        "length": 5,
                                        "wsPrice": 230000,
                                        "rrPrice": 260000
                                      }
                                    ]
                                  }
                                ],
                                "waterOptions": [
                                  {
                                    "description": "Integrated Tank",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "Water Filter Kit & Brita Water Filter",
                                    "wsPrice": 0,
                                    "rrPrice": 0
                                  },
                                  {
                                    "description": "External 5 Gallon Water Tank & Pump Kit",
                                    "wsPrice": 125000,
                                    "rrPrice": 175000
                                  }
                                ]
                              }
                            ]
                          }
                        ]
                      }
                    ]
                  }
                ],
                "merchandising": [
                  {
                    "description": "none",
                    "wsPrice": 0,
                    "rrPrice": 0
                  },
                  {
                    "description": "Display Stand",
                    "wsPrice": 55000,
                    "rrPrice": 85000
                  }
                ],
                "marketing": [
                  {
                    "description": "none",
                    "wsPrice": 0,
                    "rrPrice": 0
                  },
                  {
                    "description": "Partial Marketing",
                    "wsPrice": 70,
                    "rrPrice": 125
                  },
                  {
                    "description": "Full Marketing",
                    "wsPrice": 125,
                    "rrPrice": 250
                  }
                ],
                "cardMachine": [
                  {
                    "name": "no",
                    "wsPrice": 0,
                    "rrPrice": 0
                  },
                  {
                    "name": "yes",
                    "wsPrice": 395000,
                    "rrPrice": 495000
                  }
                ],
                "drinkPack": [
                  {
                    "id": 1,
                    "description": "none",
                    "wsPrice": 0,
                    "rrPrice": 0
                  },
                  {
                    "id": 2,
                    "description": "250 Drink Pack",
                    "wsPrice": 0,
                    "rrPrice": 0
                  },
                  {
                    "id": 3,
                    "description": "500 Drink Pack",
                    "wsPrice": 9000,
                    "rrPrice": 10000
                  },
                  {
                    "id": 4,
                    "description": "750 Drink Pack",
                    "wsPrice": 18000,
                    "rrprice": 20000
                  },
                  {
                    "id": 5,
                    "description": "1000 Drink Pack",
                    "wsPrice": 27000,
                    "rrPrice": 30000
                  }
                ]
              }
            ]
          }
        ]
      }
    )
// attempting to return all the categories or all the category.brands or category.brand.modeles etc

    const category = computed ((a) =>
    'gdfgfdgdh       '+database.company+a
    )


    const doubleCount = computed(() => count.value * 2)

    function increment() {
      count.value++
    }

// attempting to return all the categories or all the category.brands or category.brand.modeles etc
      function getUserById (state) {

// ????????????????????????????????????????

console.log('store get user', state)
        return (userId) => state.quoteLines.find((category) => category === 'drinkPack')
      }


    // return { count, name, doubleCount, increment, database }
    return { database, getUserById, category }
  })
