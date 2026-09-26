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

export class RaichuV_45 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 200;
    public height?: number = 0.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Fast Charge", cost: [], damage: "", text: "If you go first, you can use this attack during your first turn. Search your deck for a Lightning Energy card and attach it to this Pokémon. Then, shuffle your deck." },
      { name: "Dynamic Spark", cost: [], damage: "60×", text: "You may discard any amount of Lightning Energy from your Pokémon. This attack does 60 damage for each card you discarded in this way." }
  ];
  public set: string = "FST";
  public name: string = "Raichu V";
  public fullName: string = "Raichu V FST 45";
  public text: string = "Raichu V";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.searchEnergyToSelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
