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

export class SerperiorVSTAR_196 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Serperior V";
  public hp: number = 270;
    public height?: number = 3.3;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Regal Blender", cost: [], damage: "190", text: "You may move any amount of Energy from your Pokémon to your other Pokémon in any way you like." },
      { name: "Star Winder", cost: [], damage: "60×", text: "This attack does 60 damage for each Energy attached to this Pokémon. Switch this Pokémon with 1 of your Benched Pokémon. (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "PGO";
  public name: string = "Serperior VSTAR";
  public fullName: string = "Serperior VSTAR PGO 196";
  public text: string = "Serperior VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.switchSelf(this, store, state, effect).use(effect);
    }
    return state;
  }
}
