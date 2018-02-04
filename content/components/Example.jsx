import React, {Component} from 'react';

const Example = () => {
    return (
        <div className="tooltip-body">
            <div className="details-byline">
                Large aberration, lawful evil
            </div>
            <div className="line monster height3 marginTop20 marginBottom20"></div>
            <div className="tooltip-body-statblock tooltip-body-statblock-ability-scores">
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-strength">
                    <div className="tooltip-body-statblock-item-label">STR</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">10</div>
                        <div className="ability-modifier">(+0)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-dexterity">
                    <div className="tooltip-body-statblock-item-label">DEX</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">14</div>
                        <div className="ability-modifier">(+2)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-constitution">
                    <div className="tooltip-body-statblock-item-label">CON</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">18</div>
                        <div className="ability-modifier">(+4)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-intelligence">
                    <div className="tooltip-body-statblock-item-label">INT</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">17</div>
                        <div className="ability-modifier">(+3)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-wisdom">
                    <div className="tooltip-body-statblock-item-label">WIS</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">15</div>
                        <div className="ability-modifier">(+2)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-item-charisma">
                    <div className="tooltip-body-statblock-item-label">CHA</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="ability-score">17</div>
                        <div className="ability-modifier">(+3)</div>
                    </div>
                </div>
            </div>
            <div className="line monster height3 marginTop20 marginBottom20"></div>
            <div className="tooltip-body-statblock tooltip-body-statblock-monster-stats">
                <div className="tooltip-body-statblock-item tooltip-body-statblock-challenge-rating">
                    <div className="tooltip-body-statblock-item-label">Challenge Rating</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="primary">13</div>
                        <div className="secondary">(10,000 XP)</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-armor-class">
                    <div className="tooltip-body-statblock-item-label">Armor Class</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="primary">18</div>

                            <div className="secondary">Natural Armor</div>

                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-hit-points">
                    <div className="tooltip-body-statblock-item-label">Hit Points</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="primary">180</div>
                        <div className="secondary">((19d10 + 76))</div>
                    </div>
                </div>
                <div className="tooltip-body-statblock-item tooltip-body-statblock-speed">
                    <div className="tooltip-body-statblock-item-label">Speed</div>
                    <div className="tooltip-body-statblock-item-value">
                        <div className="primary">0 ft.</div>

                            <div className="secondary">(fly 20 ft. (hover))</div>

                    </div>
                </div>
            </div>
            <div className="line monster marginTop20 marginBottom20"></div>
            <div className="tooltip-body-statblock tooltip-body-statblock-monster-details">

                    <div className="tooltip-body-statblock-item tooltip-body-statblock-saving-throws">
                        <div className="tooltip-body-statblock-item-label">Saving Throws</div>
                        <div className="tooltip-body-statblock-item-value">INT +8, WIS +7, CHA +8</div>
                    </div>

                    <div className="tooltip-body-statblock-item tooltip-body-statblock-skills">
                        <div className="tooltip-body-statblock-item-label">Skills</div>
                        <div className="tooltip-body-statblock-item-value"><a className="tooltip-hover skill-tooltip" href="/compendium/rules/basic-rules/using-ability-scores#Perception" data-tooltip-href="/skills/14-tooltip">Perception</a> +12</div>
                    </div>

                    <div className="tooltip-body-statblock-item tooltip-body-statblock-condition-immunities">
                        <div className="tooltip-body-statblock-item-label">Condition Immunities</div>
                        <div className="tooltip-body-statblock-item-value"><a className="tooltip-hover condition-tooltip" href="/compendium/rules/basic-rules/appendix-a-conditions#Prone" data-tooltip-href="/conditions/12-tooltip">Prone</a></div>
                    </div>

                    <div className="tooltip-body-statblock-item tooltip-body-statblock-senses">
                        <div className="tooltip-body-statblock-item-label">Senses</div>
                        <div className="tooltip-body-statblock-item-value"><a className="tooltip-hover sense-tooltip" href="/compendium/rules/basic-rules/monsters#Darkvision" data-tooltip-href="/senses/2-tooltip">Darkvision</a> 120 ft.,  Passive Perception 22</div>
                    </div>

                    <div className="tooltip-body-statblock-item tooltip-body-statblock-languages">
                        <div className="tooltip-body-statblock-item-label">Languages</div>
                        <div className="tooltip-body-statblock-item-value">Deep Speech, Undercommon</div>
                    </div>

            </div>
        </div>
    )
}

export default Example
