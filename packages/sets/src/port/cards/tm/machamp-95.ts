import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
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

export class Machamp_95 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Machoke";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Fighting Tag", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Machamp is on your Bench, you may move all Fighting Energy attached to your Active Pokémon to Machamp. If you do, switch Machamp with your Active Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Punch", cost: [], damage: "60", text: "Discard a Special Energy card attached to the Defending Pokémon." },
      { name: "Champ Buster", cost: [], damage: "100+", text: "Does 100 damage plus 10 more damage for each of your Benched Pokémon that has any damage counters on it." }
  ];
  public set: string = "TM";
  public name: string = "Machamp";
  public fullName: string = "Machamp TM 95";
  public text: string = "Machamp";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 10, 0);
    }
    return state;
  }
}
