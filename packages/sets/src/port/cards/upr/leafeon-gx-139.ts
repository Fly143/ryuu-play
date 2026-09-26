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

export class LeafeonGX_139 extends PokemonCard {
  public stage: Stage = Stage.BASIC;
  public cardTypes: CardType[] = [];
  public evolvesFrom = "Eevee";
  public hp: number = 200;
    public height?: number = 1.0;
  public weakness: Weakness[] = [];
  public resistance: Resistance[] = [];
  public retreat: CardType[] = [];
  public powers: Power[] = [
      { name: "Breath of the Leaves", powerType: PowerType.ABILITY, text: "If this Pokémon is your Active Pokémon, once during your turn (before your attack), you may heal 50 damage from 1 of your Pokémon that has any Energy attached to it.", useWhenInPlay: true }
  ];
  public attacks: Attack[] = [
      { name: "Solar Beam", cost: [], damage: "110", text: "" },
      { name: "Grand Bloom-GX", cost: [], damage: "", text: "For each of your Benched Basic Pokémon, search your deck for a card that evolves from that Pokémon and put it onto that Pokémon to evolve it. Then, shuffle your deck. (You can't use more than 1 GX attack in a game.)" }
  ];
  public set: string = "UPR";
  public name: string = "Leafeon-GX";
  public fullName: string = "Leafeon-GX UPR 139";
  public text: string = "Leafeon-GX";

  public reduceEffect(store: StoreLike, state: State, effect: Effect): State {
    if (effect instanceof AttackEffect && effect.attack === this.attacks[1]) {
      return commonEffects.gxOncePerGame(this, store, state, effect).use(effect);
    }
    if (effect instanceof PowerEffect && effect.power === this.powers[0]) {
      return commonEffects.healSelfPower(this, store, state, effect).reduce(effect.power, 50);
    }
    return state;
  }
}
