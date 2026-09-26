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

export class Aegislash_108 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Doublade";
  public hp: number = 150;
    public height?: number = 1.6;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Stance Change", powerType: PowerType.ABILITY, text: "Once during your turn, you may switch this Pokémon with an Aegislash in your hand. Any attached cards, damage counters, Special Conditions, turns in play, and any other effects remain on the new Pokémon.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Gigaton Bash", cost: [], damage: "70", text: "During your opponent's next turn, prevent all damage done to this Pokémon by attacks from Pokémon VMAX." }
  ];
  public set: string = "SHF";
  public name: string = "Aegislash";
  public fullName: string = "Aegislash SHF 108";
  public text: string = "Aegislash";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[0]) {
      return commonEffects.preventDamageNextTurn(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.switchSelfPower(this, store, state, effect).reduce(effect.power);
    }
    return state;
  }
}
