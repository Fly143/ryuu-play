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

export class Dusknoir_1 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Dusclops";
  public hp: number = 120;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Shadow Command", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may draw 2 cards. If you have 7 or more cards in your hand, discard a number of cards until you have 6 cards in your hand. Then, put 2 damage counters on Dusknoir. This power can't be used if Dusknoir is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Damage Even", cost: [], damage: "", text: "Count the number of damage counters on Dusknoir. Put that many damage counters on 1 of your opponent's Pokémon." },
      { name: "Night Spin", cost: [], damage: "50", text: "Prevent all effects of an attack, including damage, done to Dusknoir by your opponent's Pokémon that has 2 or less Energy attached to it during your opponent's next turn." }
  ];
  public set: string = "PL";
  public name: string = "Dusknoir";
  public fullName: string = "Dusknoir PL 1";
  public text: string = "Dusknoir";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "preventEffectsMarker");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
