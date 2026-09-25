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

export class Hydreigon_97 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Zweilous";
  public hp: number = 150;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Dark Trance", powerType: PowerType.ABILITY, text: "As often as you like during your turn (before your attack), you may move a Darkness Energy attached to 1 of your Pokémon to another of your Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Dragonblast", cost: [], damage: "140", text: "Discard 2 Darkness Energy attached to this Pokémon." }
  ];
  public set: string = "BCR";
  public name: string = "Hydreigon";
  public fullName: string = "Hydreigon BCR 97";
  public text: string = "Hydreigon";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.discardEnergySelf(this, store, state, effect).use(effect, 2);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "oncePerTurnAttachFromHand");
    }
    return state;
  }
}
