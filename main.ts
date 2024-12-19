namespace SpriteKind {
    export const Law1 = SpriteKind.create()
    export const Law2 = SpriteKind.create()
    export const Answer1SPrite = SpriteKind.create()
    export const Anwser2Sprite = SpriteKind.create()
    export const Background = SpriteKind.create()
}
function EndGameMessage () {
    QuestionsSorted = [
    "Are cow breathalyzers, and what are the limits for riders ?",
    "Are individuals required to announce they are observing Opposite Day ?",
    "Are there concerns about dogs reacting poorly to clown noses?",
    "Are there designated penguin - only ice rinks for recreational purposes ?",
    "Are there designated times outside of this window for elephant walks ?",
    "Are there discounts for bears who picnic in bear - only zones ?",
    "Are there exceptions for essential items like water or medication?",
    "Are there exceptions for medical reasons or cultural attire ?",
    "Are there limits on how often someone can claim pajama - related immunity ?",
    "Are there penalties for riders who forget to make noises ?",
    "Are there protections against overuse of sarcasm in digital communication ?",
    "Are vegan or alternative taco options legally acceptable ?",
    "Are squirrel and bird tenants allowed to use the Wi - Fi for free ?",
    "Are skateboarders required to take tests for signal proficiency ?",
    "Can riders use sound devices, or must they make noises with their mouths ?",
    "Do the pajamas need to be identical in pattern, color, or material ?",
    "How will 'too loudly' be measured—by decibel meters ?",
    "How will authorities check compliance with potato - carrying laws ?",
    "How will contracts, legal documents, and laws function on Opposite Day ?",
    "How will enforcement ensure cows aren't also 'under the influence'?",
    "How will enforcement officers manage large, slow - moving elephants ?",
    "How will fashion police enforce this law on beaches and boardwalks ?",
    "How will grocery stores provide helmets and race tracks for safety?",
    "How will schools and workplaces operate with reversed roles or rules ?",
    "How will the ban be enforced, and what penalties will penguins face ?",
    "How will this affect shopping habits and inflation across the economy?",
    "How will this law affect bear - human relations in popular picnic areas ?",
    "How will this law impact taco restaurant businesses and suppliers ?",
    "How will this law impact the production and sale of Taco Bell food ?",
    "How will this law improve safety in crowded urban areas ?",
    "How would this affect competitive sports like basketball or wrestling ?",
    "How will Wi - Fi routers be installed and maintained in treehouses ?",
    "What alternative 'safe' taco options will the government recommend ?",
    "What happens if someone loses or eats their potato during the day ?",
    "What kind of turn signals are required—manual or electronic ?",
    "What penalties will squirrels face for tax evasion, and how will they be caught ?",
    "What qualifies as 'walking' ? Does stationary elephant activity count ?",
    "Where can bears obtain picnic permits, and are they available year - round ?",
    "Who decides the visual appearance of the sarcasm font ?",
    "Who decides what qualifies as 'socks with sandals'? Are fuzzy socks included ?",
    "Who determines the official measurement for height compliance, and are shoes included ?",
    "Who grants the permits, and how long do they remain valid?",
    "Who will enforce the tax collection, and do we need squirrel accountants ?",
    "Will bundles (e.g., 10 apples) still count as one $10 item?",
    "Will customers need a special racing license to participate ?",
    "Will exemptions exist for comedians or laughter therapy sessions ?",
    "Will households face penalties if they miss Taco Tuesday ?",
    "Will nut storage limits vary depending on tree size or species ?",
    "Will penguins be allowed to compete in official ice - skating competitions instead ?",
    "Will people need licenses to consume or possess Taco Bell products ?",
    "Will special training be required for clown-nose wearers to ensure safety?",
    "Will this law discourage cow - based transportation in rural areas ?",
    "Will this lead to an increase in demand for high - tech treehouses ?",
    "Will this lead to an increase in pajama - themed fashion trends ?",
    "Will there be competitions for the best or most creative bike noises ?",
    "Will winners be determined, and are there prizes for the fastest racers ?",
    "Would citizens be given height - increasing tools(platform shoes, stilts) to comply with the law ?"
    ]
    AnswersSorted = [
    "1000 handshakes",
    "AHHHHHHHH IT BURNS",
    "Absolutly not",
    "All basketball hoops will be lowered to 6 feet tall",
    "All quesadillas will be acceptable",
    "All squirrels will be provided with a squirrel accountant",
    "As God intended",
    "By last alive at the end",
    "By the chipmunks",
    "Buisness is boomin",
    "Cavity searches",
    "Civillians are required to throw potatos at trees",
    "Death",
    "Death by woodpecker",
    "Depends what thier buying ;)",
    "Die, please Die Taco Bell",
    "Doesn't matter, I won't yeild regardless",
    "Don't be silly, bears don't care",
    "Everything must be the same",
    "Feild sobriety tests",
    "FOOD FIGHT",
    "For life keith, for life",
    "Get a life Susan",
    "Have you ever walked before keith?",
    "How will authorities check compliance with potato - carrying laws ?",
    "HUH! I COULDN'T HEAR YOU",
    "It has already been decided",
    "It has to be Irish",
    "It won't",
    "Joseph Stalins tacitos and sushi",
    "Loud clicky ones",
    "Magic",
    "Medication will be billed directly to the insurance companies",
    "Me of Course and only if the shoes sparkle",
    "Moooo",
    "More midget wrestling",
    "My mommy will",
    "My nuts have no storage",
    "Never",
    "No",
    "No, anyone found at a comedy bar during the quiet period will be put in timeout",
    "No, death to the short ones!",
    "No, everyone knows how to run",
    "No, only seatbelts",
    "No, only some tax cuts",
    "No, only walking elefants",
    "No, survival of the fitest keith",
    "No, that would be silly",
    "No, they are a necessary part of ones life",
    "No, they will have unrestricted access pools though",
    "No, they will hired to catch any fish that try to sneak in",
    "No, you will be put on a registery",
    "Of course not, all are welcom in the Public demolition derby",
    "Of course not, anyone who doesn't get it in real life won't get it over text",
    "Of course not, we don't want to be squirrel racist",
    "Only for those who sleep naked",
    "Only on the elefants bat mitzvah",
    "Only through death",
    "Ow! Not to loud",
    "Pajama day every day!",
    "People will stop eating it",
    "People will think twice before skateboarding in my neighborhood",
    "Prizes will be a free grapefruit",
    "Public restrooms",
    "Steven hawking could do it, so can you",
    "Students will choose class agenda",
    "Teddy Bears!",
    "The birds will collect on those greedy squirrels hoarders",
    "The CIA will invest heavily in future nut fraud cases",
    "The FBI will grant the permits",
    "The loud clicky ones",
    "The riders have to be below me right now",
    "They love the honking when they bite them",
    "They must blink the national anthem of Yugoslavia",
    "They must make the noise themselves",
    "They will have thier own league",
    "They will only be available during turkey season",
    "They will wait in line at the DMV for thier permits, like any self respecting voter",
    "They'll still be able to mooove where they need to go",
    "This is only the beggining keith, wait till you see what I do to pillow forts",
    "TONY HAWK!",
    "Tobasco will need to be imported",
    "Uhhh . . . next question please",
    "We're over the mooooon about it",
    "With stickers that mark you as out of style",
    "With treats and love",
    "Yes",
    "Yes Keith, but no ostriches, only penguins",
    "Yes keith, you may use french fries",
    "Yes, any who are 2 and older may recive a liscense at their nearest grocery store",
    "Yes, by wearing shoes on thier hands",
    "Yes, darwin will be thier teacher",
    "Yes, punishable by 2 truths and a lie",
    "Yes, saftey first",
    "Yes, we start now!",
    "Yes, when you get tired of typing it",
    "You don't have one?",
    "Yas Queen",
    "chuckling evily",
    "Glances at High heels . . . no?",
    "in russian accent 4 years in gulag",
    "*Raucous Laughter",
    "sarcastically You I guess",
    "The US military fortunate son starts playing"
    ]
    GetRandomLawNumber = randint(0, 2)
    EndGameCalc = QuestionAndAnswerSearch(QuestionsSorted, ChosenQuestions) + QuestionAndAnswerSearch(AnswersSorted, ChosenAnswers)
    ClearScreen()
    EndScreenMessage = "In your Country you chose to add the law \"" + ChosenLaws[GetRandomLawNumber] + "\" which led to, " + GetEndScenario(EndGameCalc)
    game.showLongText(EndScreenMessage, DialogLayout.Full)
    game.reset()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Law1, function (sprite, otherSprite) {
    otherSprite.setPosition(80, 90)
    sprite.setPosition(80, 90)
    otherSprite.sayText(Law1Law, 5000, false)
    pause(6000)
    otherSprite.setPosition(40, 100)
})
function QuestionAndAnswerSearch (Array2: string[], ToFind: string[]) {
    Iterations = 0
    Beginning = 0
    Ending = Array2.length - 1
    Middle = Math.idiv(Beginning + Ending, 2)
    ItemToFind = ToFind[randint(0, ToFind.length - 1)]
    while (Beginning <= Ending) {
        if (ItemToFind == Array2[Middle]) {
            break;
        } else if (ItemToFind.compare(Array2[Middle]) == -1) {
            Ending = Middle - 1
        } else {
            Beginning = Middle + 1
        }
        Middle = Math.idiv(Beginning + Ending, 2)
        Iterations += 1
    }
    return Iterations
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Answer1SPrite, function (sprite, otherSprite) {
    otherSprite.setPosition(70, 90)
    otherSprite.sayText(Answer1Asnwer, 3000, false)
    pause(3000)
    otherSprite.setPosition(40, 90)
    QuestionSprite.sayText(ChosenQuestoin, 4000, false)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    select()
})
function GetEndScenario (num: number) {
    EndGameScenarios = [
    "Fashion rules disappear altogether, and humanity thrives in a colorful utopia where comfort, creativity, and ridiculous hats reign supreme.",
    "Humanity's obsession with overly regulated fashion spirals into a regime where mismatched shoelaces are grounds for imprisonment.",
    "National 'tree - living' initiatives reconnect people with nature, drastically improving mental health and making climbing trees a celebrated life skill.",
    "A forgotten law accidentally declares chickens the rightful rulers of Earth, and humanity complies without question, crowning them monarchs.",
    "A new holiday celebrating silliness cures global stress, where entire cities shut down so people can engage in harmless pranks and potato-themed parades.",
    "Society starts measuring height upside-down, leading to philosophical debates about what it truly means to 'grow taller.",
    "Wildlife preserves open worldwide with advanced integration systems, creating harmony between humans and animals who now peacefully share picnics.",
    "All noise becomes illegal outside strictly monitored hours, forcing society into a bleak world where laughter and joy are smuggled like contraband.",
    "The global economy collapses when a single grocery store item becomes worth more than an average annual salary, triggering mass potato bartering wars.",
    "Sentient machines emerge when everyday objects, like bikes and skateboards, demand equal rights, plunging humanity into a bizarre civil war against furniture.",
    "Animals overthrow humanity after becoming fluent in bureaucracy, charging humans hefty fees for air, space, and sunlight usage.",
    "Due to an administrative typo, paperclips become the primary currency, with banks hoarding 'shiny rare clips' as priceless heirlooms.",
    "Time zones break permanently, causing clocks to run backward in certain regions where residents are forced to eat breakfast at midnight and dinner at dawn.",
    "People randomly lose the ability to walk in straight lines, leading to chaotic sidewalks, artful zig-zag patterns, and widespread confusion in grocery aisles."
    ]
    for (let index = 0; index <= EndGameScenarios.length; index++) {
        if (index == num) {
            return EndGameScenarios[index]
        }
    }
    return 0
}
function Law2Questions () {
    ClearScreen()
    game.showLongText(Law2Law, DialogLayout.Top)
    RandomNum3 = randint(RandomNum1 * 3, RandomNum1 * 3 + 2)
    ChosenQuestoin = Questions[RandomNum3]
    ChosenQuestions.push(ChosenQuestoin)
    QuestionSprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    QuestionSprite.sayText(ChosenQuestoin, 2000, false)
    Answer1 = sprites.create(assets.image`myImage0`, SpriteKind.Answer1SPrite)
    Answer2 = sprites.create(assets.image`myImage1`, SpriteKind.Anwser2Sprite)
    Answer1Asnwer = Answers[RandomNum3 * 2]
    Answer2Answer = Answers[RandomNum3 * 2 + 1]
    Answer1.setPosition(30, 90)
    Answer2.setPosition(130, 90)
    SpawnCursor()
}
function SpawnWelcomSprite () {
    WelcomeSprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    WelcomeSprite.setScale(2, ScaleAnchor.Middle)
    WelcomeSprite.sayText("Welcome to Lawless, a game where you make your own laws")
    pause(3500)
    WelcomeSprite.sayText("Press start, choose a law and answer some questions!")
    pause(3500)
    WelcomeSprite.sayText("You'll get to see what your country will be like")
    pause(2000)
}
function SpawnCursor () {
    PlayerCursor = sprites.create(img`
        . . . . . 1 1 1 1 1 1 1 1 1 1 . 
        . . . . 1 1 f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . . 1 f f f f f f f f f 1 . 
        . . . 1 f f f f f f f f f f 1 . 
        . . 1 f f f f f f f f f f f 1 . 
        . 1 f f f f 1 1 1 1 1 1 1 1 . . 
        1 f f f f 1 . . . . . . . . . . 
        1 f f f 1 . . . . . . . . . . . 
        1 f f 1 . . . . . . . . . . . . 
        . 1 1 . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player)
    PlayerCursor.setPosition(80, 60)
    controller.moveSprite(PlayerCursor)
}
function ChooseLawScreen () {
    ClearScreen()
    sprites.destroy(StartButton)
    Law1a = sprites.create(img`
        ............................eee.....
        ...........................eddde....
        ................222.......eddddde...
        .............222...2.....eddddddde..
        ............2..2...2....edddddddde..
        ............2..22..2..eedddddddddde.
        .............2.2.22.eedddddddddddde.
        ..............2.2222dddddddddddddde.
        ...............2222dddddddddddddddde
        ............eeed22d2ddddddddddddddde
        ........eeeeddddd2d22dddddddddddddde
        ..eeeeeeddddddddd22d2ddddddddddddde.
        .eeedddddddddddddd2d22ddddddddddee..
        eddeeddddddddddddd22d2dddddeeeee....
        eeeeeeddddddddddddd2d2deeee.........
        ..eeddedddddddddddd2d22.............
        .eddededdddddddddd222...............
        .edddededdddddddee..................
        .edeeededdddddee....................
        .ededeeeddddee......................
        .eddeeeeddde........................
        ..eddddedde.........................
        ..eddddede..........................
        ...eeddee...........................
        .....ee.............................
        `, SpriteKind.Law1)
    Law2a = sprites.create(img`
        ............................eee.....
        ...........................eddde....
        ................222.......eddddde...
        .............222...2.....eddddddde..
        ............2..2...2....edddddddde..
        ............2..22..2..eedddddddddde.
        .............2.2.22.eedddddddddddde.
        ..............2.2222dddddddddddddde.
        ...............2222dddddddddddddddde
        ............eeed22d2ddddddddddddddde
        ........eeeeddddd2d22dddddddddddddde
        ..eeeeeeddddddddd22d2ddddddddddddde.
        .eeedddddddddddddd2d22ddddddddddee..
        eddeeddddddddddddd22d2dddddeeeee....
        eeeeeeddddddddddddd2d2deeee.........
        ..eeddedddddddddddd2d22.............
        .eddededdddddddddd222...............
        .edddededdddddddee..................
        .edeeededdddddee....................
        .ededeeeddddee......................
        .eddeeeeddde........................
        ..eddddedde.........................
        ..eddddede..........................
        ...eeddee...........................
        .....ee.............................
        `, SpriteKind.Law2)
    Law1a.setPosition(40, 100)
    Law2a.setPosition(120, 100)
    RandomNum1 = randint(0, 20)
    RandomNum2 = randint(0, 20)
    Law1Law = Laws[RandomNum1]
    Law2Law = Laws[RandomNum2]
    SpawnCursor()
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Law2, function (sprite, otherSprite) {
    otherSprite.setPosition(80, 90)
    sprite.setPosition(80, 90)
    otherSprite.sayText(Law2Law, 5000, false)
    pause(6000)
    otherSprite.setPosition(120, 100)
})
function StartScreen () {
    sprites.destroy(WelcomeSprite)
    StartButton = sprites.create(img`
        ................................................................
        ................................................................
        ................................................................
        .........999999999999999999999999999999999999999999999..........
        .......999999999999999ff99999999999999999999999999999999........
        ......9999999999999999ffff9999999999999999999999999999999.......
        .....99999999999999999ffffff999999999999999999999999999999......
        ....999999999999999999ffffffff99999999999999999999999999999.....
        ...9999999999999999999ffffffffff9999999999999999999999999999....
        ..99999999999999999999ffffffffffff999999999999999999999999999...
        ..99999999999999999999ffffffffffffff9999999999999999999999999...
        ..99999999999999999999ffffffffffffffff99999999999999999999999...
        ..99999999999999999999ffffffffffffffffff999999999999999999999...
        ..99999999999999999999ffffffffffffffffffff9999999999999999999...
        ..99999999999999999999ffffffffffffffffffffff99999999999999999...
        ..99999999999999999999fffffffffffffffffffffff9999999999999999...
        ..99999999999999999999ffffffffffffffffffffff99999999999999999...
        ..99999999999999999999ffffffffffffffffffff9999999999999999999...
        ..99999999999999999999ffffffffffffffffff999999999999999999999...
        ..99999999999999999999fffffffffffffffff9999999999999999999999...
        ..99999999999999999999fffffffffffffff999999999999999999999999...
        ..99999999999999999999ffffffffffffff9999999999999999999999999...
        ..99999999999999999999ffffffffffff999999999999999999999999999...
        ..99999999999999999999ffffffffff99999999999999999999999999999...
        ...9999999999999999999fffffffff99999999999999999999999999999....
        ....999999999999999999fffffff999999999999999999999999999999.....
        .....99999999999999999ffffff999999999999999999999999999999......
        ......9999999999999999ffff9999999999999999999999999999999.......
        .......999999999999999ff99999999999999999999999999999999........
        .........999999999999999999999999999999999999999999999..........
        ................................................................
        ................................................................
        `, SpriteKind.Food)
    StartButton.setPosition(80, 60)
    SpawnCursor()
}
function Law1Questions () {
    ClearScreen()
    game.showLongText(Law1Law, DialogLayout.Top)
    RandomNum3 = randint(RandomNum1 * 3, RandomNum1 * 3 + 2)
    ChosenQuestoin = Questions[RandomNum3]
    ChosenQuestions.push(ChosenQuestoin)
    QuestionSprite = sprites.create(img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f e e d d d d d d e e f . . 
        . . . f e e 4 4 4 4 e e f . . . 
        . . e 4 f 2 2 2 2 2 2 f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `, SpriteKind.Player)
    QuestionSprite.sayText(ChosenQuestoin, 2000, false)
    Answer1 = sprites.create(assets.image`myImage0`, SpriteKind.Answer1SPrite)
    Answer2 = sprites.create(assets.image`myImage1`, SpriteKind.Anwser2Sprite)
    Answer1Asnwer = Answers[RandomNum3 * 2]
    Answer2Answer = Answers[RandomNum3 * 2 + 1]
    Answer1.setPosition(30, 90)
    Answer2.setPosition(130, 90)
    SpawnCursor()
}
function select () {
    if (PlayerCursor.overlapsWith(StartButton)) {
        ChooseLawScreen()
    } else if (PlayerCursor.overlapsWith(Law1a)) {
        Law1Questions()
        ChosenLaws.push(Law1Law)
    } else if (PlayerCursor.overlapsWith(Law2a)) {
        Law2Questions()
        ChosenLaws.push(Law2Law)
    } else if (PlayerCursor.overlapsWith(Answer1)) {
        ChosenAnswers.push(Answer1Asnwer)
        LawsTillEnd += -1
        if (LawsTillEnd > 0) {
            ChooseLawScreen()
        } else {
            EndGameMessage()
        }
    } else if (PlayerCursor.overlapsWith(Answer2)) {
        ChosenAnswers.push(Answer2Answer)
        LawsTillEnd += -1
        if (LawsTillEnd > 0) {
            ChooseLawScreen()
        } else {
            EndGameMessage()
        }
    } else if (PlayerCursor.overlapsWith(Background)) {
        StartScreen()
    }
}
function ClearScreen () {
    sprites.destroyAllSpritesOfKind(SpriteKind.Player)
    sprites.destroyAllSpritesOfKind(SpriteKind.Law1)
    sprites.destroyAllSpritesOfKind(SpriteKind.Law2)
    sprites.destroyAllSpritesOfKind(SpriteKind.Answer1SPrite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Anwser2Sprite)
    sprites.destroyAllSpritesOfKind(SpriteKind.Projectile)
    sprites.destroyAllSpritesOfKind(SpriteKind.Food)
    sprites.destroyAllSpritesOfKind(SpriteKind.Enemy)
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Anwser2Sprite, function (sprite, otherSprite) {
    otherSprite.setPosition(90, 90)
    otherSprite.sayText(Answer2Answer, 3000, false)
    pause(3000)
    otherSprite.setPosition(120, 90)
    QuestionSprite.sayText(ChosenQuestoin, 4000, false)
})
let RandomNum2 = 0
let Law2a: Sprite = null
let Law1a: Sprite = null
let StartButton: Sprite = null
let PlayerCursor: Sprite = null
let WelcomeSprite: Sprite = null
let Answer2Answer = ""
let Answer2: Sprite = null
let Answer1: Sprite = null
let RandomNum1 = 0
let RandomNum3 = 0
let Law2Law = ""
let EndGameScenarios: string[] = []
let ChosenQuestoin = ""
let QuestionSprite: Sprite = null
let Answer1Asnwer = ""
let ItemToFind = ""
let Middle = 0
let Ending = 0
let Beginning = 0
let Iterations = 0
let Law1Law = ""
let EndScreenMessage = ""
let EndGameCalc = 0
let GetRandomLawNumber = 0
let AnswersSorted: string[] = []
let QuestionsSorted: string[] = []
let LawsTillEnd = 0
let Questions: string[] = []
let Answers: string[] = []
let Laws: string[] = []
let ChosenQuestions: string[] = []
let ChosenLaws: string[] = []
let ChosenAnswers: string[] = []
let Background: Sprite = null
Background = sprites.create(img`
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff
    `, SpriteKind.Background)
let list: number[] = []
ChosenAnswers = []
ChosenLaws = []
ChosenQuestions = []
Laws = [
"Raise the Legal Midget Hight to 5 foot 6 inches",
"Squirrels are now required to file taxes on all nut storage.",
"Penguins are banned from public ice-skating rinks to avoid unfair competition.",
"Bears are forbidden from picnicking without a permit.",
"Wearing socks with sandals is punishable by a $100 fine.",
"Laughing too loudly in public is only allowed between 10 a.m. and 5 p.m.",
"Wearing matching pajamas in public grants immunity from parking tickets.",
"Grocery stores must host \"cart races\" every Friday night.",
"Potato Appreciation Day: Everyone must carry a potato for good luck.",
"Taco Tuesday is now a legal obligation for all households.",
"Opposite Day will be observed every February 29th.",
"Smartphones must feature a \"sarcasm font.\"",
"Free Wi-Fi is required in all treehouses.",
"Skateboards must have turn signals.",
"All people riding bikes must make racecear noises",
"Taco bell is now considered a Weapon of Mass Destruction",
"No walking elefants in parks on sundays between 4 and 8 pm.",
"No riding cows under the influence",
"You need a permit to where a clown nose in dog parks",
"Every individual item at a grocery store now costs 10 dollars"
]
Answers = [
"Me of Course and only if the shoes sparkle",
"I don't know, I just pick the law",
"More midget wrestling",
"All basketball hoops will be lowered to 6 feet tall",
"No, death to the short ones!",
"*Glances at High heels* . . . no?",
"The birds will collect on those greedy squirrels hoarders",
"All squirrels will be provided with a squirrel accountant",
"Death by woodpecker",
"The CIA will invest heavily in future nut fraud cases",
"My nuts have no storage",
"Of course not, we don't want to be squirrel racist",
"We will have moose patrol the ice",
"1000 handshakes",
"They will have thier own league",
"No, they will hired to catch any fish that try to sneak in",
"Yes Keith, but no ostriches, only penguins",
"No, they will have unrestricted access pools though",
"They will wait in line at the DMV for thier permits, like any self respecting voter",
"They will only be available during turkey season",
"Teddy Bears!",
"Don't be silly, bears don't care",
"No, only some tax cuts",
"Depends what thier buying ;)",
"No exceptions",
"Only through death",
"No, they are a necessary part of ones life",
"My mommy will",
"With stickers that mark you as out of style",
"Yas Queen",
"Ow! Not to loud",
"HUH! I COULDN'T HEAR YOU",
"Public restrooms",
"No, not unless there is a funny cat",
"No, anyone found at a comedy bar during the quiet period will be put in timeout",
"*Raucous Laughter",
"Everything must be the same",
"Only for those who sleep naked",
"As God intended",
"Pajama day every day!",
"Never",
"No",
"Yes, saftey first",
"No, only seatbelts",
"By last alive at the end",
"Prizes will be a free grapefruit",
"Of course not, all are welcom in the Public demolition derby",
"Yes, any who are 2 and older may recive a liscense at their nearest grocery store",
"It has to be Irish",
"Yes keith, you may use french fries",
"How will authorities check compliance with potato - carrying laws ?",
"Civillians are required to throw potatos at trees",
"Cavity searches",
"Death",
"*in russian accent* 4 years in gulag",
"Yes",
"Yes",
"All quesadillas will be acceptable",
"Get a life Susan",
"Buisness is boomin",
"Tobasco will need to be imported",
"I don't know, it's opposite day",
"*chuckling evily*",
"Yes, by wearing shoes on thier hands",
"No, it's opposite day",
"FOOD FIGHT",
"Students will choose class agenda",
"*sarcastically* You I guess",
"It has already been decided",
"Yes, punishable by 2 truths and a lie",
"Uhhh . . . next question please",
"Of course not, anyone who doesn't get it in real life won't get it over text",
"Yes, when you get tired of typing it",
"By the chipmunks",
"Magic",
"You don't have one?",
"This is only the beggining keith, wait till you see what I do to pillow forts",
"Only to call thier dry-cleaners",
"No, that would be silly",
"The loud clicky ones",
"Doesn't matter, I won't yeild regardless",
"TONY HAWK!",
"They must blink the national anthem of Yugoslavia",
"It won't",
"People will think twice before skateboarding in my neighborhood",
"Death",
"10 years hard labor",
"No, I will always win, *cat noises*",
"Yes, we start now!",
"They must make the noise themselves",
"Steven hawking could do it, so can you",
"People will stop eating it",
"Die, please Die Taco Bell",
"No, but you will be put on a registery",
"AHHHHHHHH IT BURNS",
"Food at home",
"Joseph Stalins tacitos and sushi",
"Absolutly not",
"Only on the elefants bat mitzvah",
"No, only walking elefants",
"Have you ever walked before keith?",
"With treats and love",
"The US military *fortunate son starts playing*",
"Moooo",
"The riders have to be below me right now",
"We're over the mooooon about it",
"They'll still be able to mooove where they need to go",
"Feild sobriety tests",
"A milk sample, tasted on sight",
"The FBI will grant the permits",
"For life keith, for life",
"No, survival of the fitest keith",
"They love the honking when they bite them",
"No, everyone knows how to run",
"Yes, darwin will be thier teacher",
"Every grape is now $10",
"everyone will buy steak",
"No, each apple is $10",
"is apples singular keith",
"Each molecule of water keith, each molecule",
"Medication will be billed directly to the insurance companies"
]
Questions = [
"Who determines the official measurement for height compliance, and are shoes included ?",
"How would this affect competitive sports like basketball or wrestling ?",
"Would citizens be given height - increasing tools(platform shoes, stilts) to comply with the law ?",
"Who will enforce the tax collection, and do we need squirrel accountants ?",
"What penalties will squirrels face for tax evasion, and how will they be caught ?",
"Will nut storage limits vary depending on tree size or species ?",
"How will the ban be enforced, and what penalties will penguins face ?",
"Will penguins be allowed to compete in official ice - skating competitions instead ?",
"Are there designated penguin - only ice rinks for recreational purposes ?",
"Where can bears obtain picnic permits, and are they available year - round ?",
"How will this law affect bear - human relations in popular picnic areas ?",
"Are there discounts for bears who picnic in bear - only zones ?",
"Are there exceptions for medical reasons or cultural attire ?",
"Who decides what qualifies as 'socks with sandals'? Are fuzzy socks included ?",
"How will fashion police enforce this law on beaches and boardwalks ?",
"How will 'too loudly' be measured—by decibel meters ?",
"Are there zones where loud laughter is permitted outside these hours ?",
"Will exemptions exist for comedians or laughter therapy sessions ?",
"Do the pajamas need to be identical in pattern, color, or material ?",
"Will this lead to an increase in pajama - themed fashion trends ?",
"Are there limits on how often someone can claim pajama - related immunity ?",
"Will grocery stores provide helmets and race tracks for safety?",
"How will winners be determined, and are there prizes for the fastest racers ?",
"Will customers need a special racing license to participate ?",
"Are there rules about the size, type, or condition of the potato ?",
"How will authorities check compliance with potato - carrying laws ?",
"What happens if someone loses or eats their potato during the day ?",
"Will households face penalties if they miss Taco Tuesday ?",
"Are vegan or alternative taco options legally acceptable ?",
"How will this law impact taco restaurant businesses and suppliers ?",
"How will contracts, legal documents, and laws function on Opposite Day ?",
"Are individuals required to announce they are observing Opposite Day ?",
"How will schools and workplaces operate with reversed roles or rules ?",
"Who decides the visual appearance of the sarcasm font ?",
"Will using sarcasm without the font be considered misleading or illegal ?",
"Are there protections against overuse of sarcasm in digital communication ?",
"How will Wi - Fi routers be installed and maintained in treehouses ?",
"Will this lead to an increase in demand for high - tech treehouses ?",
"Are squirrel and bird tenants allowed to use the Wi - Fi for free ?",
"What kind of turn signals are required—manual or electronic ?",
"Are skateboarders required to take tests for signal proficiency ?",
"How will this law improve safety in crowded urban areas ?",
"Are there penalties for riders who forget to make noises ?",
"Will there be competitions for the best or most creative bike noises ?",
"Can riders use sound devices, or must they make noises with their mouths ?",
"How will this law impact the production and sale of Taco Bell food ?",
"Will people need licenses to consume or possess Taco Bell products ?",
"What alternative 'safe' taco options will the government recommend ?",
"Are there designated times outside of this window for elephant walks ?",
"What qualifies as 'walking' ? Does stationary elephant activity count ?",
"How will enforcement officers manage large, slow - moving elephants ?",
"Are there cow breathalyzers, and what are the limits for riders ?",
"Will this law discourage cow - based transportation in rural areas ?",
"How will enforcement ensure cows aren't also 'under the influence'?",
"Who grants the permits, and how long do they remain valid?",
"Are there concerns about dogs reacting poorly to clown noses?",
"Will special training be required for clown-nose wearers to ensure safety?",
"How will this affect shopping habits and inflation across the economy?",
"Will bundles (e.g., 10 apples) still count as one $10 item?",
"Are there exceptions for essential items like water or medication?"
]
LawsTillEnd = 3
SpawnWelcomSprite()
StartScreen()
