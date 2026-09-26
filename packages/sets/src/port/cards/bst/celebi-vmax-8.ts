import {
  Effect,
  State,
  StoreLike,
  AttackEffect,
  PowerEffect,
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

export class CelebiVMAX_8 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Celebi V";
  public hp: number = 310;
    public height?: number = 0.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Curative Forest", powerType: PowerType.ABILITY, text: "Once during your turn, you may heal 20 damage from each of your Grass Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Plant", cost: [], damage: "130", text: "Search your deck for up to 2 Pokémon, reveal them, and put them into your hand. Then, shuffle your deck." }
  ];
  public set: string = "BST";
  public name: string = "Celebi VMAX";
  public fullName: string = "Celebi VMAX BST 8";
  public text: string = "Celebi VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchPokemonToHand:1");
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 20);
    }
    return state;
  }
}
