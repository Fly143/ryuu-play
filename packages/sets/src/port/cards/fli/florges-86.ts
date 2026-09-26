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

export class Florges_86 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Floette";
  public hp: number = 120;
    public height?: number = 1.8;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Wondrous Gift", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), you may flip a coin. If heads, put an Item card from your discard pile on top of your deck.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Mist Guard", cost: [], damage: "70", text: "Prevent all damage done to this Pokémon by attacks from Dragon Pokémon during your opponent's next turn." }
  ];
  public set: string = "FLI";
  public name: string = "Florges";
  public fullName: string = "Florges FLI 86";
  public text: string = "Florges";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    return state;
  }
}
