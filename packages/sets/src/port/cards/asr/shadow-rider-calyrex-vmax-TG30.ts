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

export class ShadowRiderCalyrexVMAXTG30 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Shadow Rider Calyrex V";
  public hp: number = 320;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Underworld Door", powerType: PowerType.ABILITY, text: "Once during your turn, you may attach a Psychic Energy card from your hand to 1 of your Benched Psychic Pokémon. If you attached Energy to a Pokémon in this way, draw 2 cards.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Max Geist", cost: [], damage: "10+", text: "This attack does 30 more damage for each Psychic Energy attached to all of your Pokémon." }
  ];
  public set: string = "ASR";
  public name: string = "Shadow Rider Calyrex VMAX";
  public fullName: string = "Shadow Rider Calyrex VMAX ASR TG30";
  public text: string = "Shadow Rider Calyrex VMAX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.bonusDamagePer(this, store, state, effect).use(effect, 30, 0);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.drawCardsPower(this, store, state, effect).reduce(effect.power, 2);
    }
    return state;
  }
}
