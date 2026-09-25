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

export class RotomEx_126 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 190;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Multi Adapter", powerType: PowerType.ABILITY, text: "Each of your Pokémon that has \"Rotom\" in its name may have up to 2 Pokémon Tool cards attached. If this Ability goes away, discard Pokémon Tools from those Pokémon until only 1 remains on each.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Thunderbolt", cost: [], damage: "130", text: "Discard all Energy from this Pokémon." }
  ];
  public set: string = "PFL";
  public name: string = "Rotom ex";
  public fullName: string = "Rotom ex PFL 126";
  public text: string = "Rotom ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
