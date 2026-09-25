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

export class Kingdra_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Seadra";
  public hp: number = 130;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "α Growth", powerType: PowerType.ABILITY, text: "When you attach an Energy card from your hand to this Pokémon (except with an attack, Ability, or Trainer card), you may attach 2 Energy cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gather Strength", cost: [], damage: "", text: "Search your deck for up to 4 basic Energy cards, reveal them, and put them into your hand. Shuffle your deck afterward." },
      { name: "Dragon Blast", cost: [], damage: "150", text: "Discard a Water Energy and a Lightning Energy attached to this Pokémon." }
  ];
  public set: string = "ROS";
  public name: string = "Kingdra";
  public fullName: string = "Kingdra ROS 108";
  public text: string = "Kingdra";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.runAttackOp(this, store, state, effect).use(effect, "searchEnergyToHand:4");
    }
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 1);
    }
    return state;
  }
}
