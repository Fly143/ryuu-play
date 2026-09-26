import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
  Attack,
  CardType,
  PokemonCard,
  Power,
  PowerType,
  Stage,
  Weakness,
  Resistance,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class Blastoise_37 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Wartortle";
  public hp: number = 100;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Jet Stream", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Blastoise is your Active Pokémon, you may flip a coin. If heads, discard an Energy card attached to Blastoise, if any. Then, if there are any Energy cards attached to the Defending Pokémon, choose 1 of them and discard it. This power can't be used if Blastoise is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Energy Cannon", cost: [], damage: "40+", text: "Does 40 damage plus 10 more damage for each Energy attached to Blastoise but not used to pay for this attack's Energy Cost. You can't add more than 20 damage in this way." }
  ];
  public set: string = "EX";
  public name: string = "Blastoise";
  public fullName: string = "Blastoise EX 37";
  public text: string = "Blastoise";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusPerEnergySelf(this, store, state, effect).use(effect, 10);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "flipHeadsDraw:1");
    }
    return state;
  }
}
