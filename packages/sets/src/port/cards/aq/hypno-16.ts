import {
  Effect,
  State,
  StoreLike,
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

export class Hypno_16 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Drowzee";
  public hp: number = 80;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Sleep Pendulum", powerType: PowerType.ABILITY, text: "Once during your turn (before your attack), if Hypno is your Active Pokémon, you may make the Defending Pokémon Asleep. This power can't be used if Hypno is affected by a Special Condition.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Spiral Aura", cost: [], damage: "30", text: "If the Defending Pokémon isn't Knocked Out by the damage from this attack, you may choose 1 of your opponent's Benched Pokémon and switch the Defending Pokémon with it." }
  ];
  public set: string = "AQ";
  public name: string = "Hypno";
  public fullName: string = "Hypno AQ 16";
  public text: string = "Hypno";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.runPowerOp(this, store, state, effect).reduce(effect.power, "specialDefending:ASLEEP");
    }
    return state;
  }
}
