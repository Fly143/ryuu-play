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

export class AmoongussSM202 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Foongus";
  public hp: number = 100;
    public height?: number = 0.7;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bursting Spores", powerType: PowerType.ABILITY, text: "Whenever you play a Pokémon that has the Spore attack from your hand during your turn, you may leave your opponent's Active Pokémon Asleep and Poisoned.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Venoshock", cost: [], damage: "20+", text: "If your opponent's Active Pokémon is Poisoned, this attack does 70 more damage." }
  ];
  public set: string = "PR-SM";
  public name: string = "Amoonguss";
  public fullName: string = "Amoonguss PR-SM SM202";
  public text: string = "Amoonguss";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 70, 1);
    }
    return state;
  }
}
