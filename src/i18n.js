import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import i18next from 'i18next';

i18next
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'cz',
    lng: 'cz',
    interpolation: {
      escapeValue: false,
    },
    resources: {
      cz: {
        translation: {
          header: {
            faq: 'Časté otázky',
            new: 'Novinky',
            blog: 'Blog',
            contact: 'Kontakt',
          },
          home: {
            about: {
              title: {
                h1: {
                  firstPart: 'Zdravý jídelníček',
                  secondPart: 'na míru Vašim potřebám',
                },
                h2: 'Zdarma, online a do 5 minut',
              },
              text: {
                description:
                  'Za 5 minut můžete mít svůj zdravý jídelníček na míru i s recepty a nákupním seznamem. Stačí vyplnit krátký dotazník, kde se zeptáme na vaši aktivitu, cíle, typ postavy, diety a preference v jídle.',
                callToAction:
                  'Vyzkoušejte naši aplikaci a získejte jídelníček na míru zdarma.',
              },
              button: 'Chci jídelníček',
            },
            benefits: {
              clients: 'spokojených klientů',
              yearsBig: '3 roky',
              years: 'zkušeností ve zdravé výživě',
              sent: 'vytvořených jídelníčků',
              headline: 'Zdravý životní styl udržitelně',
              description:
                'Již více než 3 roky pomáháme našim klientům najít cestu k udržitelnému zdravému životnímu stylu, dosáhnout vysněné postavy a co víc, získat pevnější zdraví',
              button: 'Chci jídelníček zdarma',
            },
            faq: {
              headline: 'Časté otázky',
              q1: 'Mohu použít jídelníček, když mám omezení v jídle?',
              q2: 'Chci zhubnout, je pro mě jídlěníček vhodný?',
              q3: 'Mohou se těhotné ženy stravovat podle jídelníčku?',
              q4: 'Mohou se děti stravovat podle jídelníčku?',
              q5: 'Chci nabrat váhu, je pro mě jídlěníček vhodný?',
              q6: 'Jak jídelníček vypočítá můj doporučený denní příjem kalorií?',
              a1: 'Jídelníček mohou využít lidé s bezlepkovou nebo bezlaktózovou dietou, vegetariáni a vegani. Menu bude obsahovat pouze potraviny podle vaší diety.',
              a2: 'Ano, jídelníček je vhodný i při redukci váhy. Budete v mírném kalorickém deficitu, aby bylo hubnutí udržitelné a neměli jste hlad.',
              a3: `Ano, pokud vám lékař nedoporučil jinak. Doporučujeme, abyste si jako cíl zvolili udržení váhy nebo přibírání a dbali na dostatečný příjem potravy.`,
              a4: 'Jídelníček není určen pro děti do 18 let.',
              a5: 'Ano, menu je vhodné i pro uživatele, kteří mají za cíl přibrat. Doporučíme vám nutričně hodnotné potraviny, které podporují růst svalové hmoty.',
              a6: `Ke stanovení bazálního metabolismu používáme Harris-Benedictovu rovnici. Zohledňuje se nejen věk, výška a váha uživatele, ale také jeho aktivita, druh zaměstnání a cíle.`,
            },
            articles: {
              headline: 'Nové články',
              button: 'Domů',
            },
            contact: {
              headline: `Dejte nám vědět, co máte na srdci`,
              name: 'Jméno a příjmení',
              email: 'Email',
              message: 'Zpráva',
              button: 'Poslat',
              buttonSend: 'Děkujeme za zprávu',
              instagram: 'Sledujte nás na Instagramu',
            },
          },
          footer: {
            contact: 'Kontakt',
            Newsletter: 'Newsletter',
            newsletterDescription: `Zajímají vás novinky ze světa zdravé výživy, nebo se jen chcete dozvědět o nových funkcích v naší aplikaci? Zadejte svůj e-mail a nic vám neunikne.`,
            button: 'Poslat',
            info: 'Užitečné informace',
            docs: 'Dokumenty ke stažení',
            conditions: 'Podmínky používání',
            personalData: 'Ochrana osobních údajů',
          },
          form: {
            next: 'Dále',
            submit: 'Potvrdit',
            back: 'Zpět',
            questions: {
              personal: {
                sex: {
                  q: 'Jsem:',
                  a1: 'Muž',
                  a2: 'Žena',
                  a3: 'Jiné / nechci určit',
                },
                goal: {
                  q: 'Můj cíl:',
                  a1: 'Zhubnout',
                  a2: 'Jíst zdravě',
                  a3: 'Nabrat váhu a svaly',
                },
                weight: {
                  q: 'Kolik vážíte?',
                },
                age: {
                  q: 'Kolik je Vám let?',
                },
              },
              food: {
                diet: {
                  q: 'Držíte dietu?',
                  a1: 'Vegan',
                  a2: 'Vegetarián',
                  a3: 'Bez laktózy',
                  a4: 'Bez lepku',
                },
                meals: {
                  q: 'Kolik jídel za den preferujete?',
                  a1: '3 jídla (snídaně, oběd, večeře)',
                  a2: '5 jídel (svačiny mezi hlavními jídly)',
                },
              },
              activity: {
                sport: {
                  q: 'Sportujete?',
                  a1: 'Nedělám žádný sport',
                  a2: 'Sportuji 1-2x do týdne',
                  a3: 'Sportuji 3-4x do týdne',
                  a4: 'Sportuji 5x do týdne a více',
                },
                job: {
                  q: 'Máte fyzicky náročnou práci nebo denní aktivity?',
                  a1: 'Mám sedavou práci a všude jezdím autem, nejsem aktivní.',
                  a2: 'Jsem aktivní a často chodím pěšky.',
                  a3: 'Mám fyzicky náročnou práci a jsem hodně aktivní.',
                },
              },
              fat: {
                q: 'Kolik máte přibližně tuku v těle?',
              },
            },
          },
          menu: {
            noData: {
              headline: 'Dopřejte si zdravý jídelníček zdarma!',
              text: 'Stačí vyplnit krátký dotazník',
              buttonForm: 'Chci jídelníček',
              buttonHome: 'Domů',
            },
            headlineTop: 'Váš zdravý',
            headlineBig: 'Jídelníček na míru',
            noDiets: 'Žádné diety',
            meals: {
              breakfast: 'Snídaně',
              lunch: 'Oběd',
              dinner: 'Večeře',
              snack: 'Svačina',
            },
            diets: {
              vegan: 'Vegan',
              vegetarian: 'Vegetarián',
              lactoseFree: 'Bez laktózy',
              glutenFree: 'Bez lepku',
            },
            goal: 'Cíl',
            calories: 'Kalorie',
            diet: 'Dieta',
            instructions: 'Návod',
            ingredients: 'Ingredience',
            shoppingList: 'Nákupní seznam',
            menu: 'Jídelníček',
            reduce: 'Redukovat váhu',
            hold: 'Zdravě jíst',
            gain: 'Nabrat váhu',
            total: 'Celkem',
            prep: 'Příprava',
            cooking: 'Vaření',
            dificulty: 'Obtížnost',
          },
        },
      },
      en: {
        translation: {
          header: {
            faq: 'FAQ',
            new: 'News',
            blog: 'Blog',
            contact: 'Contact',
          },
          home: {
            about: {
              title: {
                h1: {
                  firstPart: 'Healthy menu',
                  secondPart: 'tailored to you needs',
                },
                h2: 'Free, online and in 5 minutes',
              },
              text: {
                description:
                  'In 5 minutes, you can have your own healthy meal plan with recipes and a shopping list. Just fill out a short questionnaire where we will ask about your activity, goals, body type, diet and food preferences.',
                callToAction: 'Try our app and get your healthy menu for free.',
              },
              button: 'Start quiz',
            },
            benefits: {
              clients: 'happy clients',
              yearsBig: '3 years',
              years: 'experience in nutrition',
              sent: 'daily menus sent',
              headline: 'Sustainable healthy lifestyle',
              description: `For more than 3 years we help our clients find their way towards a sustainable healthy lifestyle, achieve their dream body and what's more, get a better health.`,
              button: 'Get healthy menu for free',
            },
            faq: {
              headline: 'Frequently asked questions',
              q1: 'Can I use the menu if I have food restrictions?',
              q2: 'Is the diet suitable for me if I want to lose weight?',
              q3: 'Can pregnant women use the menu?',
              q4: 'Can children eat according to the menu?',
              q5: 'Is the diet suitable for me if I want to gain weight?',
              q6: 'How does the menu calculate my recommended daily calorie intake?',
              a1: 'The menu can be used by people with a gluten-free or lactose-free diet, vegetarians and vegans. The menu will only contain foods according to your diet.',
              a2: 'Yes, the menu is also suitable for weight reduction. You will be in a slight caloric deficit so that the weight loss is sustainable and you do not feel hungry.',
              a3: `Yes, if your doctor hasn't advised you a diet. We recommend that you choose to maintain your weight or gain weight as a goal and take care of sufficient food intake.`,
              a4: 'The menu is not intended for children under 18 years of age.',
              a5: 'Yes, the menu is also suitable for users who aim to gain weight. We will recommend nutritionally valuable foods that support the growth of muscle mass.',
              a6: `We use the Harris-Benedict equation to determine basal metabolism. Not only the user's age, height and weight are taken into account, but also their activity, type of job and goals.`,
            },
            articles: {
              headline: 'New articles',
              button: 'Homepage',
            },
            contact: {
              headline: `Let us know what's on your mind`,
              name: 'Full name',
              email: 'Email',
              message: 'Message',
              button: 'Send',
              buttonSend: 'Your message was sent',
              instagram: 'Follow us on Instagram',
            },
          },
          footer: {
            contact: 'Contact',
            Newsletter: 'Newsletter',
            newsletterDescription: `Are you interested in news from the world of healthy eating, or just want to know about new features in our application? Enter your email and you won't miss a thing.`,
            button: 'Send',
            info: 'Useful information',
            docs: 'Documents to download',
            conditions: 'Terms and Conditions',
            personalData: 'Protection of personal data',
          },
          form: {
            next: 'Next',
            submit: 'Submit',
            back: 'Back',
            questions: {
              personal: {
                sex: {
                  q: 'I idnetify myself as:',
                  a1: 'Male',
                  a2: 'Female',
                  a3: 'Other',
                },
                goal: {
                  q: 'My goal is:',
                  a1: 'Loose weight',
                  a2: 'Eat healthy',
                  a3: 'Gain weigth / muscles',
                },
                weight: {
                  q: 'what is your weight?',
                },
                age: {
                  q: 'How old are you?',
                },
              },
              food: {
                diet: {
                  q: 'Do you have any diet?',
                  a1: 'Vegan',
                  a2: 'Vegetarian',
                  a3: 'Lactose free',
                  a4: 'Gluten free',
                },
                meals: {
                  q: 'How meny meals per day do you eat?',
                  a1: '3 meals (breakfest, lunch, diner)',
                  a2: '5 meals (snacks between meals)',
                },
              },
              activity: {
                sport: {
                  q: 'Do you exercise?',
                  a1: 'I dont do any sport activity',
                  a2: 'I do sports 1-2x per week',
                  a3: 'I do sports 3-4x per week',
                  a4: 'I do sports 5x per week and more',
                },
                job: {
                  q: 'What is your daily activity?',
                  a1: 'I am not active. I always go by car. I have a sedentary job.',
                  a2: 'I am active. I often go on foot.',
                  a3: "I'm on my feet most of the day. I have a physically demanding job.",
                },
              },
              fat: {
                q: 'What is your approximate body fat percentage?',
              },
            },
          },
          menu: {
            noData: {
              headline: 'Looking for a healthy menu?',
              text: 'Fill a short form and get your menu in few minutes!',
              buttonForm: 'Start form',
              buttonHome: 'Homepage',
            },
            headlineTop: 'Your healthy',
            headlineBig: 'Daily menu',
            noDiets: 'No dietary restrictions',
            meals: {
              breakfast: 'Breakfast',
              lunch: 'Lunch',
              dinner: 'Dinner',
              snack: 'Snack',
            },
            diets: {
              vegan: 'Vegan',
              vegetarian: 'Vegetarian',
              lactoseFree: 'Lactose free',
              glutenFree: 'Gluten free',
            },
            goal: 'Goal',
            calories: 'Calories',
            diet: 'Diet',
            instructions: 'Instructions',
            ingredients: 'Ingredients',
            shoppingList: 'Shopping List',
            menu: 'Menu',
            reduce: 'Reduce weight',
            hold: 'Hold',
            gain: 'Gain weight',
            total: 'Total',
            prep: 'Preparation',
            cooking: 'Cooking',
            dificulty: 'Dificulty',
          },
        },
      },
    },
  });

export default i18n;
