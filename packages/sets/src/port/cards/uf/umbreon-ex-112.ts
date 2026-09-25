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

export class UmbreonEx_112 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 110;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Darker Ring", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), when you play Umbreon ex from your hand to evolve 1 of your Pokémon, switch 1 of your opponent's Benched Pokémon with 1 of the Defending Pokémon. Your opponent chooses the Defending Pokémon to switch.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Black Cry", cost: [], damage: "20", text: "The Defending Pokémon can't retreat or use any Poké-Powers during your opponent's next turn." },
      { name: "Darkness Fang", cost: [], damage: "60", text: "" }
  ];
  public set: string = "UF";
  public name: string = "Umbreon ex";
  public fullName: string = "Umbreon ex UF 112";
  public text: string = "Umbreon ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.cantRetreatNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
