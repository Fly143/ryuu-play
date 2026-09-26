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
  SpecialCondition,
} from '@ptcg/common';
import { commonEffects } from '../../../common';

export class MoltresEx_115 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "";
  public hp: number = 110;
    public height?: number = 2.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Legendary Ascent", powerType: PowerType.ABILITY, text: "Once during your turn, when you put Moltres ex from your hand onto your Bench, you may switch 1 of your Active Pokémon with Moltres ex. If you do, you may also move any number of basic Fire Energy cards attached to your Pokémon to Moltres ex.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Crushing Flames", cost: [], damage: "60", text: "You may discard an Energy card attached to Moltres ex. If you do, the Defending Pokémon is now Confused." }
  ];
  public set: string = "RG";
  public name: string = "Moltres ex";
  public fullName: string = "Moltres ex RG 115";
  public text: string = "Moltres ex";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.specialDefending(this, store, state, effect).use(effect, SpecialCondition.CONFUSED);
    }
    return state;
  }
}
