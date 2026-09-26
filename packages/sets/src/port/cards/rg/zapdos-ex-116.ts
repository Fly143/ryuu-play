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

export class ZapdosEx_116 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Ascent", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Zapdos ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Zapdos ex. If you do, you may also move any number of basic Lightning Energy cards attached to your Pokémon to Zapdos ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Electron Crush", cost: [], damage: "50+", text: "You may discard an Energy card attached to Zapdos ex. If you do, this attack does 50 damage plus 20 more damage." }
  ];
  public set: string = "RG";
  public name: string = "Zapdos ex";
  public fullName: string = "Zapdos ex RG 116";
  public text: string = "Zapdos ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
