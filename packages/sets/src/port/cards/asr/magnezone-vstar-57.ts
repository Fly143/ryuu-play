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

export class MagnezoneVSTAR_57 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Magnezone V";
  public hp: number = 270;
    public height?: number = 1.2;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [];
  public attacks: Attack[] = [
      { name: "Magnetic Grip", cost: [], damage: "180", text: "Search your deck for up to 2 Item cards, reveal them, and put them into your hand. Then, shuffle your deck." },
      { name: "Electro Star", cost: [], damage: "", text: "This attack does 90 damage to 2 of your opponent's Benched Pokémon. (Don't apply Weakness and Resistance for Benched Pokémon.) (You can't use more than 1 VSTAR Power in a game.)" }
  ];
  public set: string = "ASR";
  public name: string = "Magnezone VSTAR";
  public fullName: string = "Magnezone VSTAR ASR 57";
  public text: string = "Magnezone VSTAR";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchAnyToHand:2");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.damageTwoOpponentBench(this, store, state, effect).use(effect, 90);
    }
    return state;
  }
}
