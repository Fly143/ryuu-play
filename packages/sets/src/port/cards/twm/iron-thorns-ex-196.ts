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

export class IronThornsEx_196 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 230;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Initialization", powerType: PowerType.ABILITY, text: "As long as this Pokémon is in the Active Spot, Pokémon with a Rule Box in play (both yours and your opponent's) have no Abilities, except for Future Pokémon. (Pokémon ex, Pokémon V, etc. have Rule Boxes.)", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Volt Cyclone", cost: [], damage: "140", text: "Move an Energy from this Pokémon to 1 of your Benched Pokémon." }
  ];
  public set: string = "TWM";
  public name: string = "Iron Thorns ex";
  public fullName: string = "Iron Thorns ex TWM 196";
  public text: string = "Iron Thorns ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.energyTrans(this, store, state, effect).use(effect);
    }
    return state;
  }
}
