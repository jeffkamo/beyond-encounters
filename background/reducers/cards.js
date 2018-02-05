const initialState = {
    beholder: {
        title: 'Beholder',
        href: '#',
        body: "\r\n\r\n<div class=\"tooltip tooltip-monster\">\r\n    <div class=\"tooltip-header\">\r\n        <div class=\"tooltip-header-icon\">\r\n            \r\n                <div class=\"monster-icon monster-icon-aberration\" style=\"background-image: url('https://media-waterdeep.cursecdn.com/avatars/thumbnails/7/716/35/35/636288206263353113.jpeg')\"></div>\r\n            \r\n        </div>\r\n        <div class=\"tooltip-header-text\">\r\n            Beholder\r\n        </div>\r\n        <div class=\"tooltip-header-identifier tooltip-header-identifier-monster\">\r\n            Monster\r\n        </div>\r\n    </div>\r\n    <div class=\"tooltip-body\">\r\n        <div class=\"details-byline\">\r\n            Large aberration, lawful evil\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-ability-scores\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-strength\">\r\n                <div class=\"tooltip-body-statblock-item-label\">STR</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-dexterity\">\r\n                <div class=\"tooltip-body-statblock-item-label\">DEX</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">14</div>\r\n                    <div class=\"ability-modifier\">(+2)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-constitution\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CON</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">18</div>\r\n                    <div class=\"ability-modifier\">(+4)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-intelligence\">\r\n                <div class=\"tooltip-body-statblock-item-label\">INT</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">17</div>\r\n                    <div class=\"ability-modifier\">(+3)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-wisdom\">\r\n                <div class=\"tooltip-body-statblock-item-label\">WIS</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">15</div>\r\n                    <div class=\"ability-modifier\">(+2)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-charisma\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CHA</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">17</div>\r\n                    <div class=\"ability-modifier\">(+3)</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-stats\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-challenge-rating\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Challenge Rating</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">13</div>\r\n                    <div class=\"secondary\">(10,000 XP)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-armor-class\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Armor Class</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">18</div>\r\n                    \r\n                        <div class=\"secondary\">Natural Armor</div>\r\n                       \r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-hit-points\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Hit Points</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">180</div>\r\n                    <div class=\"secondary\">((19d10 + 76))</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-speed\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Speed</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">0 ft.</div>\r\n                    \r\n                        <div class=\"secondary\">(fly 20 ft. (hover))</div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-details\">\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-saving-throws\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Saving Throws</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\">INT +8, WIS +7, CHA +8</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-skills\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Skills</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover skill-tooltip\" href=\"/compendium/rules/basic-rules/using-ability-scores#Perception\" data-tooltip-href=\"/skills/14-tooltip\">Perception</a> +12</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-condition-immunities\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Condition Immunities</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover condition-tooltip\" href=\"/compendium/rules/basic-rules/appendix-a-conditions#Prone\" data-tooltip-href=\"/conditions/12-tooltip\">Prone</a></div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-senses\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Senses</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"><a class=\"tooltip-hover sense-tooltip\" href=\"/compendium/rules/basic-rules/monsters#Darkvision\" data-tooltip-href=\"/senses/2-tooltip\">Darkvision</a> 120 ft.,  Passive Perception 22</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-languages\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Languages</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\">Deep Speech, Undercommon</div>\r\n                </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n",
    },
    commoner: {
        title: 'Commoner',
        href: '#',
        body: "\r\n\r\n<div class=\"tooltip tooltip-monster\">\r\n    <div class=\"tooltip-header\">\r\n        <div class=\"tooltip-header-icon\">\r\n            \r\n                <div class=\"monster-icon monster-icon-humanoid\"></div>\r\n            \r\n        </div>\r\n        <div class=\"tooltip-header-text\">\r\n            Commoner\r\n        </div>\r\n        <div class=\"tooltip-header-identifier tooltip-header-identifier-monster\">\r\n            Monster\r\n        </div>\r\n    </div>\r\n    <div class=\"tooltip-body\">\r\n        <div class=\"details-byline\">\r\n            Medium humanoid, any\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-ability-scores\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-strength\">\r\n                <div class=\"tooltip-body-statblock-item-label\">STR</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-dexterity\">\r\n                <div class=\"tooltip-body-statblock-item-label\">DEX</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-constitution\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CON</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-intelligence\">\r\n                <div class=\"tooltip-body-statblock-item-label\">INT</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-wisdom\">\r\n                <div class=\"tooltip-body-statblock-item-label\">WIS</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-item-charisma\">\r\n                <div class=\"tooltip-body-statblock-item-label\">CHA</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"ability-score\">10</div>\r\n                    <div class=\"ability-modifier\">(+0)</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster height3 marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-stats\">\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-challenge-rating\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Challenge Rating</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">0</div>\r\n                    <div class=\"secondary\">(10 XP)</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-armor-class\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Armor Class</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">10</div>\r\n                       \r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-hit-points\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Hit Points</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">4</div>\r\n                    <div class=\"secondary\">((1d8))</div>\r\n                </div>\r\n            </div>\r\n            <div class=\"tooltip-body-statblock-item tooltip-body-statblock-speed\">\r\n                <div class=\"tooltip-body-statblock-item-label\">Speed</div>\r\n                <div class=\"tooltip-body-statblock-item-value\">\r\n                    <div class=\"primary\">30 ft.</div>\r\n                    \r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div class=\"line monster marginTop20 marginBottom20\"></div>\r\n        <div class=\"tooltip-body-statblock tooltip-body-statblock-monster-details\">\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-senses\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Senses</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"> Passive Perception 10</div>\r\n                </div>\r\n            \r\n                <div class=\"tooltip-body-statblock-item tooltip-body-statblock-languages\">\r\n                    <div class=\"tooltip-body-statblock-item-label\">Languages</div>\r\n                    <div class=\"tooltip-body-statblock-item-value\"> Any one language (usually Common)  </div>\r\n                </div>\r\n            \r\n        </div>\r\n    </div>\r\n</div>\r\n",
    }
};

export default (state = initialState, action) => {
    switch (action.type) {
    default:
        return state;
    }
};
