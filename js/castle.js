let playAgain;

do {
const playerName = prompt("Enter your character's name:");

if (playerName.length > 10) {
    alert("Too long, max 10 letters.");

} else if (!isNaN(playerName)) {
    alert("Not a valid name, choose letters only.");

} else {
    alert(`Welcome ${playerName} to the Castle!`);

const storyIntroduction = `
You find yourself standing in the grand entrance hall of an ancient castle. 
The air is thick with a musty scent, and the only sounds are distant echoes of unknown origin. 
Dim torches flicker along the stone walls, revealing two imposing doorways on either side of the hall.
`;    
alert(storyIntroduction);

    let directionChoice1;

    while (true) {
        directionChoice1 = prompt("Do you want to go 'left' or 'right'?").toLowerCase();
        
        if (directionChoice1 === "left" || directionChoice1 === "right") {
            break;

        } else {
            alert("Invalid choice. Please choose 'left' or 'right'.");
        }
    }

    if (directionChoice1 === "right") {
        alert("You choose to go right. As you enter a dimly lit room, a mysterious noise echoes.");

        const monster1 = ["Goblin", "Bat", "Undead"];

        const randomMonster = Math.floor(Math.random() * monster1.length);
        const selectedMonster = monster1[randomMonster];

        alert(`Suddenly, a menacing ${selectedMonster} appears before you!`);

        let fightOrRun;

        while (true) {
            fightOrRun = prompt("Do you want to `fight` the monster or `run`?").toLowerCase();

            if (fightOrRun === "fight" || fightOrRun === "run") {
                break;

            } else {
                alert("Invalid choice. Please choose 'fight' or 'run'.");
            }
         }

         if (fightOrRun === "fight") {
            alert(`You bravely engage in combat with the ${selectedMonster}. After a fierce battle, you emerge victorious!`);
            alert("As you catch your breath, you decide to move forward.");
            
            alert("You enter a long, dimly lit hallway. The stone floor is cold beneath your feet, and the tapestries depicting ancient battles line the walls.");

            const mysteriousDoors = ["Enchanted Door","Shadowy Door","Ancient Door"];

            for (let i = mysteriousDoors.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [mysteriousDoors[i], mysteriousDoors[j]] = [mysteriousDoors[j], mysteriousDoors[i]];
            }

            for (const doorLabel of mysteriousDoors) {
                let doorChoice;

                while (true) {
                 doorChoice = prompt(`While walking further along the hallway you see a strange ${doorLabel} on your right side. Do you want to 'open' it or 'continue' walking forward?`).toLowerCase();
                 
                 if (doorChoice === "open" || doorChoice === "continue") {
                    break;

                 } else {
                    alert("Invalid choice. Please choose 'open' or 'continue'.");
                 }
            }

                if (doorChoice === "open" && doorLabel === "Enchanted Door") {
                    alert(`
                    As you cautiously open the ${doorLabel}, a sudden and breathtaking sight unfolds before your eyes. A luminous unicorn, surrounded by an ethereal glow, charges forth with majestic fury.
                    In an instant, its horn pierces through your being, leaving you impaled in the wake of an otherworldly encounter.
                    `);
                    playAgain = confirm ("Do you want to play again?");
                    if (playAgain) {
                        break;
                    }

                } else if (doorChoice === "open" && doorLabel === "Shadowy Door") {
                    alert(`
                    As you cautiously open the ${doorLabel}, an eerie sight unfolds before you. A thick veil of black smoke billows from within the room, shrouding everything in impenetrable darkness.
                    As your eyes strain to adjust, you catch a glimpse of ominous yellow eyes looking at you. Before you can react, a swift and silent movement slices through you, and everything goes cold.
                    `);
                    playAgain = confirm ("Do you want to play again?");
                    if (playAgain) {
                        break;
                    }

                } else if (doorChoice === "open" && doorLabel === "Ancient Door") {
                    alert(`
                    With cautious anticipation, you turn the handle and slowly push open the ${doorLabel}. To your shock, a massive dragon lies coiled upon a mound of glittering gold and jewels.
                    However, the faint noise of opening the door woke the dragon up from its slumber. With a thunderous roar, the beast awakens and unleashes a torrent of searing flames in your direction, burning you to a crisp.
                    `);
                    playAgain = confirm ("Do you want to play again?");
                    if (playAgain) {
                        break;
                    }

                } else if (doorChoice === "continue") {
                    alert("You decide to continue down the hallway.");
                    
                    let directionChoice2;

                    while (true) {
                        directionChoice2 = prompt("You continue walking along the hallway. At a certain point, you come to the end of the hallway and can only choose to go 'left' or 'right'. What do you choose? ").toLowerCase();

                        if (directionChoice2 === "left" || directionChoice2 === "right") {
                            break;

                        } else {
                            alert("Invalid choice. Please choose 'left' or 'right'.")
                        }
                    }                  
                    if (directionChoice2 === "left") {
                        alert(`
                            As you choose to go left, you step into what seems like an empty room. The air is still, and the only sound is the echo of your footsteps against the cold stone floor. 
                            The room appears to be devoid of any significant features, with barren walls that offer no clues to its purpose. After a few moments of exploring the emptiness, an unexpected tremor jolts through the ground, causing the room to shudder.
                            The vibrations intensify, and the walls seem to groan under an unseen force. Before you can react, the ground beneath your feet begins to fracture and splinter, revealing an unfathomable abyss below. 
                            With a sudden lurch, the ground gives way, and you find yourself plummeting into the black void. The echoes of the room fade as you descend into an unknown abyss, surrounded by an enveloping darkness, never to be heard of again.
                            `);
                        playAgain = confirm ("Do you want to play again?");
                            break;
                            
                    } else if (directionChoice2 === "right") {
                        alert("As you choose to go right, the corridor leads you to an opulent chamber bathed in an eerie, seductive glow. At the center of the room, a magnificent throne rests, and upon it sits a captivating figure - the Demon Queen, adorned in resplendent dark regalia. Her presence is both enchanting and ominous, and her gaze meets yours with an otherworldly intensity. The air crackles with a mixture of power and allure as she acknowledges your presence.");

                        let bossChoice;

                        while (true) {
                            bossChoice = prompt(`Now faced with a crucial decision: Do you want to 'attack', 'charm' or 'run'`).toLowerCase();

                            if (bossChoice === "attack" || bossChoice === "charm" || bossChoice === "run") {
                                break;
                                
                            } else {
                                alert("Invalid choice. Please choose 'attack', 'charm' or 'run'.")
                            }
                        }                       
                        if (bossChoice === "attack") {
                            alert(`
                                You decide to confront the Demon Queen head-on. Drawing your weapon with determination, you launch a swift and calculated assault. 
                                The clash of steel fills the room as you engage in a fierce battle of skill and will. Surprisingly, every strike finds its mark, and the Demon Queen, despite her formidable presence, proves to be mortal. 
                                However, as you deliver the final blow, an unexpected surge of dark energy courses through you. The room trembles, and you feel a profound transformation taking place.
                                In an unsettling twist of fate, you find yourself transformed into the new Demon Queen, inheriting the dark regalia and the haunting allure of your defeated adversary. 
                                The cycle continues, and the throne room, now under your command, awaits the next unsuspecting visitor to the castle.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }

                        } else if (bossChoice === "charm") {
                            alert(`
                                You decide to engage the Demon Queen with charm. Surprisingly, your words create an unexpected connection, softening her ominous presence. 
                                The Demon Queen's hostility transforms into touching affection, and she openly confesses her love for you. 
                                In a dramatic turn of events, the Demon Queen, consumed by newfound emotions, decides to keep you as her exclusive lover. 
                                With a solemn yet possessive gesture, she escorts you into a lavish chamber within the castle. 
                                The lavish setting becomes both an observer and enclosure for your extraordinary love narrative. 
                                However, the chamber becomes a gilded cage. The luxuries that once seemed enchanting now serve as a backdrop to the Demon Queen's desire to keep you entwined in her grasp. 
                                Time stretches endlessly within the chamber, as your love story becomes a complex tapestry of passion and isolation, destined to continue until the inevitable end of your days.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }

                        } else if (bossChoice === "run") {
                            alert(`
                                As you decide to run away, you turn on your heels, determined to flee from the ominous presence of the Demon Queen. 
                                However, before you can make your way to safety, her malevolent gaze fixes upon you, and with a swift, chilling motion, she conjures a dark force that engulfs you. 
                                In the blink of an eye, the shadows wrap around you, rendering escape impossible. 
                                The Demon Queen, incensed by your attempt to run, unleashes a devastating power that extinguishes any hope of evading her wrath. 
                                The castle's halls bear witness to the swift and tragic end, as your journey comes to an abrupt and unfortunate close.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }
                        }
                    }
                }
            }

        } else if (fightOrRun === "run") {
            alert(`You decided to run away from the ${selectedMonster}. Unfortunately, the monster catches up and kills you!`);
            playAgain = confirm("Do you want to play again?");
        }

        } else if (directionChoice1 === "left") {
            alert("As you choose the left path, you find yourself entering a room that reveals itself as a mysterious library within the castle. The air is thick with the scent of ancient parchment and the hushed whispers of forgotten knowledge. In the center of the room lies a solitary, enchanted book, its pages shimmering with an otherworldly glow.");

            let libraryChoice

            while (true) {
                libraryChoice = prompt("Do you wanna 'open' the book or 'continue' to the hallway?").toLowerCase();

                if (libraryChoice === "open" || libraryChoice === "continue") {
                    break;

                } else {
                    alert("Invalid choice. Please choose 'open' or 'continue");
                }
            }
            
            if (libraryChoice === "open") {
                alert("As you cautiously open the mystical book, an otherworldly force is unleashed. From the depths of its pages emerges a grotesque eldritch monster, its form twisting and contorting in ways that defy comprehension. Before you can react, the creature engulfs you in its nightmarish grasp, sealing your fate within the ancient pages. The library echoes with your final moments, a cautionary tale of the perils that lie hidden within the enchanted tomes of the castle.")
                playAgain = confirm("Do you want to play again?");

            } else if (libraryChoice === "continue") {
                alert("You enter a long, dimly lit hallway. The stone floor is cold beneath your feet, and the tapestries depicting ancient battles line the walls.");

                const mysteriousDoors = ["Enchanted Door","Shadowy Door","Ancient Door"];
    
                for (let i = mysteriousDoors.length - 1; i > 0; i--) {
                    const j = Math.floor(Math.random() * (i + 1));
                    [mysteriousDoors[i], mysteriousDoors[j]] = [mysteriousDoors[j], mysteriousDoors[i]];
                }
    
                for (const doorLabel of mysteriousDoors) {
                    let doorChoice;
    
                    while (true) {
                     doorChoice = prompt(`While walking further along the hallway you see a strange ${doorLabel} on your right side. Do you want to 'open' it or 'continue' walking forward?`).toLowerCase();
                     
                     if (doorChoice === "open" || doorChoice === "continue") {
                        break;

                     } else {
                        alert("Invalid choice. Please choose 'open' or 'continue'.");
                     }
                }
    
                    if (doorChoice === "open" && doorLabel === "Enchanted Door") {
                        alert(`
                        As you cautiously open the ${doorLabel}, a sudden and breathtaking sight unfolds before your eyes. A luminous unicorn, surrounded by an ethereal glow, charges forth with majestic fury.
                        In an instant, its horn pierces through your being, leaving you impaled in the wake of an otherworldly encounter.
                        `);
                        playAgain = confirm ("Do you want to play again?");
                        if (playAgain) {
                            break;
                        }

                    } else if (doorChoice === "open" && doorLabel === "Shadowy Door") {
                        alert(`
                        As you cautiously open the ${doorLabel}, an eerie sight unfolds before you. A thick veil of black smoke billows from within the room, shrouding everything in impenetrable darkness.
                        As your eyes strain to adjust, you catch a glimpse of ominous yellow eyes looking at you. Before you can react, a swift and silent movement slices through you, and everything goes cold.
                        `);
                        playAgain = confirm ("Do you want to play again?");
                        if (playAgain) {
                            break;
                        }

                    } else if (doorChoice === "open" && doorLabel === "Ancient Door") {
                        alert(`
                        With cautious anticipation, you turn the handle and slowly push open the ${doorLabel}. To your shock, a massive dragon lies coiled upon a mound of glittering gold and jewels.
                        However, the faint noise of opening the door woke the dragon up from its slumber. With a thunderous roar, the beast awakens and unleashes a torrent of searing flames in your direction, burning you to a crisp.
                        `);
                        playAgain = confirm ("Do you want to play again?");
                        if (playAgain) {
                            break;
                        }

                    } else if (doorChoice === "continue") {
                        alert("You decide to continue down the hallway.");
                        
                        let directionChoice2;
    
                        while (true) {
                            directionChoice2 = prompt("You continue walking along the hallway. At a certain point, you come to the end of the hallway and can only choose to go 'left' or 'right'. What do you choose? ").toLowerCase();
    
                            if (directionChoice2 === "left" || directionChoice2 === "right") {
                                break;

                            } else {
                                alert("Invalid choice. Please choose 'left' or 'right'.")
                            }
                        }                  
                        if (directionChoice2 === "left") {
                            alert(`
                            As you choose to go left, you step into what seems like an empty room. The air is still, and the only sound is the echo of your footsteps against the cold stone floor. 
                            The room appears to be devoid of any significant features, with barren walls that offer no clues to its purpose. After a few moments of exploring the emptiness, an unexpected tremor jolts through the ground, causing the room to shudder.
                            The vibrations intensify, and the walls seem to groan under an unseen force. Before you can react, the ground beneath your feet begins to fracture and splinter, revealing an unfathomable abyss below. 
                            With a sudden lurch, the ground gives way, and you find yourself plummeting into the black void. The echoes of the room fade as you descend into an unknown abyss, surrounded by an enveloping darkness, never to be heard of again.
                            `);
                        playAgain = confirm ("Do you want to play again?");
                            break;

                        } else if (directionChoice2 === "right") {
                            alert("As you choose to go right, the corridor leads you to an opulent chamber bathed in an eerie, seductive glow. At the center of the room, a magnificent throne rests, and upon it sits a captivating figure - the Demon Queen, adorned in resplendent dark regalia. Her presence is both enchanting and ominous, and her gaze meets yours with an otherworldly intensity. The air crackles with a mixture of power and allure as she acknowledges your presence.");
    
                            let bossChoice;
    
                            while (true) {
                                bossChoice = prompt(`Now faced with a crucial decision: Do you want to 'attack', 'charm' or 'run'`).toLowerCase();
    
                                if (bossChoice === "attack" || bossChoice === "charm" || bossChoice === "run") {
                                    break;

                                } else {
                                    alert("Invalid choice. Please choose 'attack', 'charm' or 'run'.")
                                }
                            }                       
                            if (bossChoice === "attack") {
                                alert(`
                                You decide to confront the Demon Queen head-on. Drawing your weapon with determination, you launch a swift and calculated assault. 
                                The clash of steel fills the room as you engage in a fierce battle of skill and will. Surprisingly, every strike finds its mark, and the Demon Queen, despite her formidable presence, proves to be mortal. 
                                However, as you deliver the final blow, an unexpected surge of dark energy courses through you. The room trembles, and you feel a profound transformation taking place.
                                In an unsettling twist of fate, you find yourself transformed into the new Demon Queen, inheriting the dark regalia and the haunting allure of your defeated adversary. 
                                The cycle continues, and the throne room, now under your command, awaits the next unsuspecting visitor to the castle.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }

                            } else if (bossChoice === "charm") {
                                alert(`
                                You decide to engage the Demon Queen with charm. Surprisingly, your words create an unexpected connection, softening her ominous presence. 
                                The Demon Queen's hostility transforms into touching affection, and she openly confesses her love for you. 
                                In a dramatic turn of events, the Demon Queen, consumed by newfound emotions, decides to keep you as her exclusive lover. 
                                With a solemn yet possessive gesture, she escorts you into a lavish chamber within the castle. 
                                The lavish setting becomes both an observer and enclosure for your extraordinary love narrative. 
                                However, the chamber becomes a gilded cage. The luxuries that once seemed enchanting now serve as a backdrop to the Demon Queen's desire to keep you entwined in her grasp. 
                                Time stretches endlessly within the chamber, as your love story becomes a complex tapestry of passion and isolation, destined to continue until the inevitable end of your days.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }

                            } else if (bossChoice === "run") {
                                alert(`
                                As you decide to run away, you turn on your heels, determined to flee from the ominous presence of the Demon Queen. 
                                However, before you can make your way to safety, her malevolent gaze fixes upon you, and with a swift, chilling motion, she conjures a dark force that engulfs you. 
                                In the blink of an eye, the shadows wrap around you, rendering escape impossible. 
                                The Demon Queen, incensed by your attempt to run, unleashes a devastating power that extinguishes any hope of evading her wrath. 
                                The castle's halls bear witness to the swift and tragic end, as your journey comes to an abrupt and unfortunate close.
                                `);
                                playAgain = confirm(`
                                As your eyes slowly open, you find yourself standing before the grand castle. 
                                Strangely, the details of your journey and the events leading to this moment elude your memory. 
                                A mysterious haze clouds your recollection, leaving you with a sense of disorientation. 
                                The towering castle stands as an enigma before you, its secrets waiting to be unraveled. 
                                The air is charged with uncertainty, and you stand on the threshold with no knowledge of how you arrived. 
                                Do you want to enter or not?
                              `);
                              if (!playAgain) {
                                break;
                              }
                            }
                        }
                    }
                }
            }
        }    
    }
} while (playAgain);
