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

export class MeowscaradaEx_33 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floragato";
  public hp: number = 310;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Bouquet Magic", powerType: PowerType.ABILITY, text: "You must discard a Basic Grass Energy card from your hand in order to use this Ability. Once during your turn, you may put 3 damage counters on 1 of your opponent's Benched Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Scratching Nails", cost: [], damage: "100+", text: "If your opponent's Active Pokémon already has any damage counters on it, this attack does 120 more damage." }
  ];
  public set: string = "PR-SV";
  public name: string = "Meowscarada ex";
  public fullName: string = "Meowscarada ex PR-SV 33";
  public text: string = "Meowscarada ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 120, 1);
    }
    return state;
  }
}
