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

export class Goodra_94 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Sliggoo";
  public hp: number = 160;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Hydration", powerType: PowerType.ABILITY, text: "Whenever you attach a Water Energy card from your hand to this Pokémon, heal 20 damage from it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Soaking Horn", cost: [], damage: "80+", text: "If this Pokémon was healed during this turn, this attack does 80 more damage." }
  ];
  public set: string = "FLI";
  public name: string = "Goodra";
  public fullName: string = "Goodra FLI 94";
  public text: string = "Goodra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 80, 1);
    }
    return state;
  }
}
